import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { LEAD_NOTIFY_EMAIL } from '@/lib/config';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface LeadPayload {
  email?: string;
  /** Where the lead came from, e.g. "lead-magnet:cost-checklist" or "chat". */
  source?: string;
  /** Optional extra context (chat transcript, message, etc.). */
  message?: string;
  name?: string;
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const email = body.email?.trim() ?? '';
  const source = body.source?.trim() || 'website';

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 422 });
  }

  const lines = [
    `New lead from novative.dev`,
    ``,
    `Email:   ${email}`,
    `Source:  ${source}`,
    ...(body.name ? [`Name:    ${body.name}`] : []),
    ...(body.message ? [``, `Message / context:`, body.message] : []),
  ].join('\n');

  const user = process.env.GMAIL;
  const pass = process.env.PW;

  if (user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user, pass },
      });
      await transporter.sendMail({
        from: `Novative Leads <${user}>`,
        to: LEAD_NOTIFY_EMAIL,
        replyTo: email,
        subject: `New lead (${source}) — ${email}`,
        text: lines,
      });
    } catch (error) {
      // Never block the visitor on a mail failure — log so the lead is recoverable.
      console.error('[lead] mail send failed:', error);
      console.error('[lead] captured lead:', lines);
    }
  } else {
    // Credentials not configured yet — still record the lead in server logs.
    console.warn('[lead] GMAIL/PW not set; captured lead:', lines);
  }

  return NextResponse.json({ ok: true });
}
