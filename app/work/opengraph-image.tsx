import { ImageResponse } from 'next/og';

export const alt = 'Novative Portfolio — 22+ AI Products Shipped to Production';
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
        {/* Top */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#ffffff' }} />
          <div style={{ width: '10px', height: '10px', backgroundColor: '#ffffff' }} />
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
          <span style={{ color: '#666666', fontSize: '20px', marginLeft: '16px' }}>
            / Portfolio
          </span>
        </div>

        {/* Center */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              color: '#ffffff',
              fontSize: '64px',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            22+ Products Shipped
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
            AI SaaS platforms, video tools, lead generation engines, and more. Live in production.
          </div>
        </div>

        {/* Bottom: Project names */}
        <div style={{ display: 'flex', gap: '32px' }}>
          {['NovaMachine', 'NovaStudio', 'Reelzila', 'Magnet', 'Sonar', 'Heritage Vault'].map(
            (name) => (
              <div
                key={name}
                style={{
                  color: '#666666',
                  fontSize: '15px',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {name}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
