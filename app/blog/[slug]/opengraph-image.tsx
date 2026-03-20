import { ImageResponse } from 'next/og';
import { getAllBlogSlugs, getBlogPost } from '@/lib/blog';

export const alt = 'Novative Blog';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return new ImageResponse(
      <div style={{ background: '#0a0a0a', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 48, fontFamily: 'monospace' }}>
        Novative Blog
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
          <span style={{ color: '#ffffff', fontSize: '24px', fontWeight: 600, marginLeft: '8px', letterSpacing: '-0.02em' }}>
            Novative
          </span>
          <span style={{ color: '#666666', fontSize: '20px', marginLeft: '16px' }}>
            / Blog
          </span>
        </div>

        {/* Center */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ color: '#666666', fontSize: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {post.category}
          </div>
          <div style={{ color: '#ffffff', fontSize: '56px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '900px' }}>
            {post.title}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', gap: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ color: '#ffffff', fontSize: '20px', fontWeight: 600 }}>
              {post.readingTime}
            </div>
            <div style={{ color: '#666666', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Reading Time
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ color: '#ffffff', fontSize: '20px', fontWeight: 600 }}>
              {post.author}
            </div>
            <div style={{ color: '#666666', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Author
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ color: '#ffffff', fontSize: '20px', fontWeight: 600 }}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
            <div style={{ color: '#666666', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Published
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
