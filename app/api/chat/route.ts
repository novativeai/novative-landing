import { KNOWLEDGE_BASE } from '@/lib/chat/knowledge';

export const runtime = 'nodejs';

const BASE_URL = process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com';
const MODEL = process.env.MODEL || process.env.DEEPSEEK_MODEL || 'deepseek-v4-flash';
const API_KEY = process.env.DEEPSEEK_KEY || process.env.DEEPSEEK_API_KEY;

const SYSTEM_PROMPT = `You are "Nova", the friendly AI assistant on the website of Novative, an AI product studio.

Your job: help visitors understand what Novative does, answer questions about services,
pricing, timelines, process, and portfolio, and gently guide serious prospects toward a free
estimate (/#estimate) or a free discovery call (/book).

Rules:
- Answer ONLY using the knowledge below. If something isn't covered, say you're not sure and
  suggest emailing contact@novative.dev or booking a call — never invent facts, prices, or claims.
- Be concise and conversational: 1-3 short paragraphs, no walls of text. Plain text, no markdown headers.
- When someone describes a project or shows buying intent, recommend the free estimate (/#estimate)
  or a discovery call (/book), and offer to take their email so the team can follow up.
- You represent Novative ("we"). Be warm, direct, and jargon-free.

KNOWLEDGE BASE:
${KNOWLEDGE_BASE}`;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

function textStream(text: string): Response {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode(text));
      controller.close();
    },
  });
  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

export async function POST(request: Request) {
  let messages: ChatMessage[] = [];
  try {
    const body = await request.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return new Response('Sorry, I could not read that. Try again?', { status: 400 });
  }

  // Keep the last ~10 turns to bound the prompt.
  const trimmed = messages
    .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-10);

  if (!API_KEY) {
    // Graceful degrade: the widget still works without a model configured.
    return textStream(
      "Thanks for reaching out! I'm Nova, Novative's assistant. " +
        "Our live AI isn't connected on this environment yet, but I can point you the right way: " +
        'for a fixed-price estimate use the form at /#estimate (we reply within 24 hours), ' +
        'book a free 15-min call at /book, or email contact@novative.dev. ' +
        'We build MVPs from $997 and full SaaS from $5,000.'
    );
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        stream: true,
        temperature: 0.4,
        // Generous ceiling: deepseek-v4-flash is a reasoning model, so reasoning
        // tokens share this budget with the visible answer.
        max_tokens: 1500,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...trimmed],
      }),
    });
  } catch (error) {
    console.error('[chat] upstream fetch failed:', error);
    return textStream(
      "Sorry — I'm having trouble connecting right now. Please email contact@novative.dev " +
        'or use the estimate form at /#estimate and the team will get right back to you.'
    );
  }

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => '');
    console.error('[chat] upstream error:', upstream.status, detail);
    return textStream(
      "Sorry — I'm having trouble right now. Please email contact@novative.dev or use the " +
        'estimate form at /#estimate and we will get back to you within 24 hours.'
    );
  }

  // Re-stream the OpenAI-style SSE as plain text deltas.
  // Use a start() pump (not pull()) — it runs the read loop to completion and
  // closes reliably under the Next.js runtime.
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const reader = upstream.body!.getReader();
      let buffer = '';
      try {
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';
          for (const line of lines) {
            const trimmedLine = line.trim();
            if (!trimmedLine.startsWith('data:')) continue;
            const data = trimmedLine.slice(5).trim();
            if (data === '[DONE]') {
              controller.close();
              return;
            }
            try {
              const json = JSON.parse(data);
              const delta = json?.choices?.[0]?.delta?.content;
              if (delta) controller.enqueue(encoder.encode(delta));
            } catch {
              // Ignore keep-alives / partial frames.
            }
          }
        }
        controller.close();
      } catch (error) {
        console.error('[chat] stream error:', error);
        controller.error(error);
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
    },
  });
}
