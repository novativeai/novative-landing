import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { blogPosts, getAllBlogSlugs, getBlogPost } from '@/lib/blog';
import { getCaseStudy } from '@/lib/case-studies';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const title = `${post.title} | Novative Blog`;
  const description = post.description;

  return {
    title,
    description,
    keywords: [
      ...post.tags,
      post.category,
      'Novative',
      'AI development',
      'custom software',
    ],
    alternates: {
      canonical: `https://novative.dev/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://novative.dev/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      ...(post.updatedAt ? { modifiedTime: post.updatedAt } : {}),
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const relatedStudies = (post.relatedCaseStudies ?? [])
    .map((studySlug) => getCaseStudy(studySlug))
    .filter((study): study is NonNullable<typeof study> => study !== undefined);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    ...(post.updatedAt ? { dateModified: post.updatedAt } : {}),
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://novative.dev/#organization',
      name: 'Novative',
      url: 'https://novative.dev',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://novative.dev/blog/${slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    isPartOf: { '@id': 'https://novative.dev/#website' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\u003c'),
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--border)]">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="dot" />
                <span className="dot" />
              </div>
              <span className="text-lg font-medium tracking-tight">Novative</span>
            </Link>
            <Link href="/blog" className="flex items-center gap-2 text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Articles
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Article Header */}
        <section className="pt-28 md:pt-36 pb-12 md:pb-16">
          <div className="container-custom max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="dot" />
              <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                {post.category}
              </span>
              <span className="text-mono-sm text-[var(--foreground-muted)]">&middot;</span>
              <span className="text-mono-sm text-[var(--foreground-muted)]">
                {post.readingTime}
              </span>
            </div>

            <h1 className="text-display text-3xl md:text-4xl lg:text-5xl mb-6">
              {post.title}
            </h1>

            <p className="text-body-lg text-[var(--foreground-secondary)] mb-8">
              {post.description}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-mono-sm text-[var(--foreground-muted)]">
                by {post.author}
              </span>
              <span className="text-mono-sm text-[var(--foreground-muted)]">&middot;</span>
              <time
                dateTime={post.publishedAt}
                className="text-mono-sm text-[var(--foreground-muted)]"
              >
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.updatedAt && (
                <>
                  <span className="text-mono-sm text-[var(--foreground-muted)]">&middot;</span>
                  <span className="text-mono-sm text-[var(--foreground-muted)]">
                    Updated{' '}
                    <time dateTime={post.updatedAt}>
                      {new Date(post.updatedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </span>
                </>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>

            <div className="line-h" />
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16 md:pb-24">
          <div className="container-custom max-w-3xl">
            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-semibold prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-[var(--foreground-secondary)] prose-p:leading-relaxed
                prose-a:text-[var(--foreground)] prose-a:underline prose-a:underline-offset-4 prose-a:decoration-[var(--foreground-muted)] hover:prose-a:decoration-[var(--foreground)]
                prose-strong:text-[var(--foreground)]
                prose-code:text-[var(--foreground)] prose-code:bg-[var(--background-secondary)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-pre:bg-[var(--background-secondary)] prose-pre:border prose-pre:border-[var(--border)]
                prose-blockquote:border-l-[var(--foreground-muted)] prose-blockquote:text-[var(--foreground-secondary)]
                prose-li:text-[var(--foreground-secondary)]
                prose-img:rounded prose-img:border prose-img:border-[var(--border)]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
          <section className="bg-[var(--background-secondary)] py-16 md:py-24">
            <div className="container-custom max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="dot" />
                <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                  Related Case Studies
                </span>
              </div>

              <div className="space-y-6">
                {relatedStudies.map((study) => (
                  <Link
                    key={study.id}
                    href={`/work/${study.id}`}
                    className="group block p-6 border border-[var(--border)] hover:border-[var(--foreground-muted)] transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)] mb-2">
                          {study.category}
                        </div>
                        <h3 className="text-xl font-semibold tracking-tight mb-2 group-hover:text-[var(--foreground-secondary)] transition-colors">
                          {study.name}
                        </h3>
                        <p className="text-body text-[var(--foreground-secondary)]">
                          {study.tagline}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Post Navigation */}
        {(prevPost || nextPost) && (
          <section className="border-t border-[var(--border)]">
            <div className="container-custom max-w-3xl py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group flex items-start gap-3"
                  >
                    <ArrowLeft className="w-4 h-4 text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] group-hover:-translate-x-1 transition-all mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-mono-sm text-[var(--foreground-muted)] mb-1 block">
                        Previous
                      </span>
                      <span className="text-body font-medium group-hover:text-[var(--foreground-secondary)] transition-colors">
                        {prevPost.title}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group flex items-start gap-3 md:text-right md:justify-end"
                  >
                    <div>
                      <span className="text-mono-sm text-[var(--foreground-muted)] mb-1 block">
                        Next
                      </span>
                      <span className="text-body font-medium group-hover:text-[var(--foreground-secondary)] transition-colors">
                        {nextPost.title}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] group-hover:translate-x-1 transition-all mt-1 flex-shrink-0" />
                  </Link>
                )}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-[var(--foreground)] text-[var(--background)]">
          <div className="container-custom py-16 md:py-24">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-[6px] h-[6px] bg-[var(--background)]" />
                <span className="text-mono-sm uppercase tracking-wider text-[var(--background)]/60">
                  Let&apos;s Build Together
                </span>
              </div>

              <h2 className="text-display text-3xl md:text-4xl lg:text-5xl mb-8">
                Ready To Turn
                <br />
                <span className="text-[var(--background)]/40">Insight Into</span>
                <br />
                <span className="italic">Action?</span>
              </h2>

              <p className="text-body-lg text-[var(--background)]/80 mb-8">
                Every great product starts with a conversation.
                Let&apos;s discuss how these ideas apply to your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#estimate">
                  <Button
                    size="lg"
                    className="group bg-[var(--background)] text-[var(--foreground)] hover:opacity-90"
                  >
                    Get a Free Estimate
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[var(--background)]/30 text-[var(--background)] hover:bg-[var(--background)]/10"
                  >
                    Book a Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Mini */}
        <footer className="bg-[var(--foreground)] text-[var(--background)] border-t border-[var(--background)]/10">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-mono-sm text-[var(--background)]/50">
                &copy; {new Date().getFullYear()} Novative. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-mono-sm text-[var(--background)]/30">
                <span>automation</span>
                <span>&middot;</span>
                <span>integration</span>
                <span>&middot;</span>
                <span>optimization</span>
                <span>&middot;</span>
                <span>scale</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
