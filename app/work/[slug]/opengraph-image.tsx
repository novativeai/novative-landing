import { ImageResponse } from 'next/og';
import { getCaseStudy, getAllSlugs } from '@/lib/case-studies';

export const alt = 'Novative Case Study';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return new ImageResponse(
      <div style={{ background: '#0a0a0a', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 48, fontFamily: 'monospace' }}>
        Novative
      </div>,
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'monospace',
        }}
      >
        {/* Top */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#ffffff' }} />
          <div style={{ width: '10px', height: '10px', backgroundColor: '#ffffff' }} />
          <span style={{ color: '#ffffff', fontSize: '24px', fontWeight: 600, marginLeft: '8px' }}>
            Novative
          </span>
          <span style={{ color: '#666666', fontSize: '20px', marginLeft: '16px' }}>
            / Case Study
          </span>
        </div>

        {/* Center */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ color: '#666666', fontSize: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {study.category}
          </div>
          <div style={{ color: '#ffffff', fontSize: '72px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            {study.name}
          </div>
          <div style={{ color: '#888888', fontSize: '24px', maxWidth: '800px', lineHeight: 1.4 }}>
            {study.tagline}
          </div>
        </div>

        {/* Bottom: Metrics */}
        <div style={{ display: 'flex', gap: '48px' }}>
          {study.results.slice(0, 4).map((r) => (
            <div key={r.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ color: '#ffffff', fontSize: '28px', fontWeight: 700 }}>{r.value}</div>
              <div style={{ color: '#666666', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {r.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
