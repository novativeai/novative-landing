'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageSquare, X, Send, ArrowRight, Check } from 'lucide-react';

interface Msg {
  role: 'user' | 'assistant';
  content: string;
}

const GREETING =
  "Hi! I'm Nova, Novative's assistant. Ask me about what we build, pricing, timelines, or our work — or tell me about your project and I'll point you the right way.";

const SUGGESTIONS = [
  'How much does an MVP cost?',
  'What can you build?',
  'How long does it take?',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: 'assistant', content: GREETING }]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);

  const [showLead, setShowLead] = useState(false);
  const [leadEmail, setLeadEmail] = useState('');
  const [leadDone, setLeadDone] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || streaming) return;

    const next: Msg[] = [...messages, { role: 'user', content }];
    setMessages([...next, { role: 'assistant', content: '' }]);
    setInput('');
    setStreaming(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.body) throw new Error('no body');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = '';
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: 'assistant', content: acc };
          return copy;
        });
      }
    } catch {
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = {
          role: 'assistant',
          content:
            "Sorry, I hit a snag. Email contact@novative.dev or use the estimate form and we'll reply within 24 hours.",
        };
        return copy;
      });
    } finally {
      setStreaming(false);
    }
  }

  async function submitLead(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(leadEmail)) return;
    const transcript = messages
      .map((m) => `${m.role === 'user' ? 'Visitor' : 'Nova'}: ${m.content}`)
      .join('\n');
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: leadEmail, source: 'chat', message: transcript }),
      });
    } catch {
      /* best effort */
    }
    setLeadDone(true);
  }

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-5 right-5 z-[60] flex items-center justify-center w-14 h-14 bg-[var(--foreground)] text-[var(--background)] shadow-lg hover:opacity-90 transition-opacity"
      >
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed z-[60] bottom-24 right-5 left-5 sm:left-auto sm:w-[380px] h-[70vh] max-h-[560px] flex flex-col bg-[var(--background)] border border-[var(--foreground)] shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[var(--foreground)] text-[var(--background)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--background)]" />
              <span className="w-2 h-2 bg-[var(--background)]/50" />
              <span className="text-sm font-medium ml-1">Nova · Novative assistant</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 text-body-sm whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-[var(--foreground)] text-[var(--background)]'
                      : 'bg-[var(--background-secondary)] text-[var(--foreground)] border border-[var(--border)]'
                  }`}
                >
                  {m.content || (streaming ? '…' : '')}
                </div>
              </div>
            ))}

            {/* Suggestion chips (only before the first user message) */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="badge hover:border-[var(--foreground)] transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick CTAs + lead capture */}
          <div className="px-4 py-2 border-t border-[var(--border)] flex items-center gap-3 text-mono-sm">
            <a href="/#estimate" className="text-[var(--foreground)] underline underline-offset-2">
              Free estimate
            </a>
            <span className="text-[var(--foreground-muted)]">·</span>
            <a href="/book" className="text-[var(--foreground)] underline underline-offset-2">
              Book a call
            </a>
            <button
              type="button"
              onClick={() => setShowLead((v) => !v)}
              className="ml-auto text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {leadDone ? 'Saved ✓' : 'Email me ↩'}
            </button>
          </div>

          {showLead && !leadDone && (
            <form onSubmit={submitLead} className="px-4 pb-2 flex gap-2">
              <input
                type="email"
                value={leadEmail}
                onChange={(e) => setLeadEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 h-9 px-3 bg-[var(--background-secondary)] border border-[var(--border)] text-body-sm focus:outline-none focus:border-[var(--foreground)]"
              />
              <button
                type="submit"
                className="h-9 px-3 bg-[var(--foreground)] text-[var(--background)] text-mono-sm inline-flex items-center gap-1"
              >
                Send <ArrowRight className="w-3 h-3" />
              </button>
            </form>
          )}
          {leadDone && (
            <div className="px-4 pb-2 flex items-center gap-2 text-mono-sm text-[var(--foreground-secondary)]">
              <Check className="w-3 h-3" /> We&apos;ll be in touch shortly.
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 p-3 border-t border-[var(--border)]"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about pricing, timelines, your idea…"
              className="flex-1 h-10 px-3 bg-[var(--background-secondary)] border border-[var(--border)] text-body-sm focus:outline-none focus:border-[var(--foreground)]"
            />
            <button
              type="submit"
              disabled={streaming || !input.trim()}
              aria-label="Send message"
              className="flex items-center justify-center w-10 h-10 bg-[var(--foreground)] text-[var(--background)] disabled:opacity-40"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
