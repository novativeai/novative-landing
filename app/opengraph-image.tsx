import { ImageResponse } from 'next/og';

export const alt = 'Novative — AI Product Studio. We build SaaS, web apps, chatbots, and automation.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
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
        {/* Top: Logo area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#ffffff',
            }}
          />
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#ffffff',
            }}
          />
          <span
            style={{
              color: '#ffffff',
              fontSize: '24px',
              fontWeight: 600,
              marginLeft: '8px',
              letterSpacing: '-0.02em',
            }}
          >
            Novative
          </span>
        </div>

        {/* Center: Main text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              color: '#ffffff',
              fontSize: '72px',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            AI Product Studio
          </div>
          <div
            style={{
              color: '#888888',
              fontSize: '28px',
              fontWeight: 400,
              maxWidth: '700px',
              lineHeight: 1.4,
            }}
          >
            We build AI-powered SaaS, web apps, chatbots, and automation that generate revenue. 22+ products shipped.
          </div>
        </div>

        {/* Bottom: Tags */}
        <div style={{ display: 'flex', gap: '24px' }}>
          {['SaaS Development', 'AI Agents', 'Web & Mobile Apps', 'Business Automation'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  color: '#666666',
                  fontSize: '16px',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
