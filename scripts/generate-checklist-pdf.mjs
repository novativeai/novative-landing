/**
 * Generates the lead-magnet PDF:
 *   public/downloads/app-development-cost-checklist.pdf
 *
 * Run with:  node scripts/generate-checklist-pdf.mjs
 * (Re-run whenever the checklist copy changes.)
 */
import fs from 'node:fs';
import path from 'node:path';
import PDFDocument from 'pdfkit';

const OUT_DIR = path.join(process.cwd(), 'public', 'downloads');
const OUT_FILE = path.join(OUT_DIR, 'app-development-cost-checklist.pdf');

const INK = '#0a0a0a';
const MUTED = '#737373';
const LINE = '#d4d4d4';
const MARGIN = 56;

const sections = [
  {
    title: '1 — Define the Product',
    items: [
      'Can you describe the core problem your app solves in one sentence?',
      'Have you listed the must-have features vs. the nice-to-haves?',
      'Do you know who your first 10 users are and what they need?',
      'Is there one feature that, if it works, proves the whole idea?',
      'Have you decided what you are NOT building in v1?',
    ],
  },
  {
    title: '2 — Understand the Cost Drivers',
    items: [
      'How many distinct user roles and screens does it need?',
      'How many third-party integrations (payments, CRM, email, APIs)?',
      'Does it need AI features (chat, generation, automation)?',
      'Real-time, offline, or heavy data requirements?',
      'How fast do you actually need it — and is that timeline real?',
    ],
  },
  {
    title: '3 — Compare Your Options',
    items: [
      'Freelancer ($10k–$60k): cheaper, but one person and no backup.',
      'Traditional agency ($75k–$350k+): big teams, slow, hourly creep.',
      'AI-assisted studio ($997–$30k+): fixed price, fast, you own the code.',
      'No-code ($2k–$20k): quick to start, hits a ceiling fast.',
      'Have you matched the option to your stage and budget — not hype?',
    ],
  },
  {
    title: '4 — Budget for Total Cost of Ownership',
    items: [
      'Hosting & infrastructure ($100–$800/mo)',
      'Maintenance & security patches ($500–$2,000/mo)',
      'Feature iteration after launch ($2,000–$8,000/mo)',
      'Third-party services: email, payments, AI APIs ($150–$1,000/mo)',
      'Did your quote disclose these, or just the build price?',
    ],
  },
  {
    title: '5 — Vet Your Developer',
    items: [
      'Can they show you shipped, live products (not just mockups)?',
      'Is the price a fixed quote or an open-ended hourly meter?',
      'Will you get full source code and own the accounts?',
      'Do they explain things in plain English without jargon walls?',
      'Is there a clear post-launch support window?',
    ],
  },
  {
    title: 'Red Flags to Walk Away From',
    items: [
      'A quote with no fixed ceiling or milestone breakdown.',
      'No portfolio of real, live products.',
      '"We will own the code / hosting" — you should own everything.',
      'Vague timelines that keep sliding without explanation.',
      'No mention of ongoing costs until after you have signed.',
    ],
  },
];

fs.mkdirSync(OUT_DIR, { recursive: true });

const doc = new PDFDocument({ size: 'A4', margin: MARGIN, info: {
  Title: 'App Development Cost Checklist',
  Author: 'Novative',
  Subject: 'A pre-quote checklist for founders building an app in 2026',
} });
doc.pipe(fs.createWriteStream(OUT_FILE));

const pageWidth = doc.page.width - MARGIN * 2;

function checkbox(x, y) {
  doc.lineWidth(1).strokeColor(INK).rect(x, y, 9, 9).stroke();
}

// ---- Cover header ----
doc.fillColor(INK).rect(MARGIN, MARGIN, 8, 8).fill();
doc.fillColor(INK).rect(MARGIN + 12, MARGIN, 8, 8).fill();
doc
  .font('Helvetica-Bold')
  .fontSize(11)
  .fillColor(INK)
  .text('NOVATIVE', MARGIN + 28, MARGIN - 1, { characterSpacing: 2 });

doc.moveDown(2.2);
doc
  .font('Helvetica-Bold')
  .fontSize(26)
  .fillColor(INK)
  .text('App Development Cost Checklist', MARGIN, doc.y, { width: pageWidth });

doc.moveDown(0.5);
doc
  .font('Helvetica')
  .fontSize(11)
  .fillColor(MUTED)
  .text(
    "20+ questions to answer before you ask anyone for a quote — from a studio that has shipped 22+ products to production. Tick each box; the gaps are where projects blow their budget.",
    { width: pageWidth, lineGap: 3 }
  );

doc.moveDown(0.8);
doc.lineWidth(1).strokeColor(LINE)
  .moveTo(MARGIN, doc.y).lineTo(MARGIN + pageWidth, doc.y).stroke();
doc.moveDown(0.8);

// ---- Sections ----
for (const section of sections) {
  // Keep a section header from being orphaned at the very bottom.
  if (doc.y > doc.page.height - MARGIN - 90) doc.addPage();

  doc
    .font('Helvetica-Bold')
    .fontSize(13)
    .fillColor(INK)
    .text(section.title, MARGIN, doc.y, { width: pageWidth });
  doc.moveDown(0.5);

  for (const item of section.items) {
    if (doc.y > doc.page.height - MARGIN - 28) doc.addPage();
    const y = doc.y;
    checkbox(MARGIN, y + 2);
    doc
      .font('Helvetica')
      .fontSize(10.5)
      .fillColor(INK)
      .text(item, MARGIN + 18, y, { width: pageWidth - 18, lineGap: 2 });
    doc.moveDown(0.45);
  }
  doc.moveDown(0.6);
}

// ---- Footer CTA ----
if (doc.y > doc.page.height - MARGIN - 110) doc.addPage();
doc.moveDown(0.4);
doc.lineWidth(1).strokeColor(LINE)
  .moveTo(MARGIN, doc.y).lineTo(MARGIN + pageWidth, doc.y).stroke();
doc.moveDown(0.8);
doc
  .font('Helvetica-Bold')
  .fontSize(14)
  .fillColor(INK)
  .text('Ready for a real number?', MARGIN, doc.y, { width: pageWidth });
doc.moveDown(0.4);
doc
  .font('Helvetica')
  .fontSize(11)
  .fillColor(MUTED)
  .text(
    'Skip the guesswork. Tell us what you are building and we will send a fixed-price estimate within 24 hours — no hourly surprises.',
    { width: pageWidth, lineGap: 3 }
  );
doc.moveDown(0.6);
doc.font('Helvetica-Bold').fontSize(11).fillColor(INK);
doc.text('Get a free estimate:  ', { continued: true })
  .fillColor('#1a1a1a').text('novative.dev/#estimate');
doc.fillColor(INK).text('Book a call:  ', { continued: true })
  .fillColor('#1a1a1a').text('novative.dev/book');
doc.fillColor(INK).text('Email:  ', { continued: true })
  .fillColor('#1a1a1a').text('contact@novative.dev');

doc.end();
console.log('Wrote', OUT_FILE);
