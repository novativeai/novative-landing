import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';

export default function BlogPage() {
  const categories = [...new Set(blogPosts.map((post) => post.category))];

  return (
    <>
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
            <Link href="/" className="flex items-center gap-2 text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex flex-col justify-center pt-20 md:pt-24">
          <div className="absolute top-24 md:top-28 right-6 md:right-8 z-10">
            <span className="page-number">B</span>
          </div>

          <div className="container-custom py-16 md:py-24">
            <div className="mb-8">
              <span className="text-caption">insights &amp; guides</span>
            </div>

            <h1 className="text-display mb-6">
              <span className="block">Blog</span>
            </h1>

            <p className="text-headline text-[var(--foreground-secondary)] mb-12 max-w-2xl">
              AI &amp; Custom Software Insights for Business Leaders
            </p>

            <div className="flex items-center gap-2 mb-8">
              <span className="dot" />
              <span className="dot opacity-60" />
              <span className="dot opacity-30" />
              <span className="dot opacity-10" />
            </div>

            <p className="text-body-lg text-[var(--foreground-secondary)] max-w-xl">
              Practical strategies for CEOs and founders building with AI.
              No fluff — just what works in production.
            </p>

            <div className="mt-12">
              <div className="line-h" />
            </div>
          </div>
        </section>

        {/* Category Filter (if posts exist) */}
        {categories.length > 0 && (
          <section className="container-custom pb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span key={category} className="badge">
                  {category}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Blog Posts */}
        <section className="pb-24">
          {blogPosts.length === 0 ? (
            <div className="container-custom py-16 text-center">
              <p className="text-body-lg text-[var(--foreground-secondary)]">
                New articles coming soon. Stay tuned.
              </p>
            </div>
          ) : (
            <div className="container-custom">
              <div className="space-y-0">
                {blogPosts.map((post) => (
                  <article key={post.slug} className="border-b border-[var(--border)] py-10 md:py-12">
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-start">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="dot" />
                            <span className="text-mono-sm uppercase tracking-wider text-[var(--foreground-muted)]">
                              {post.category}
                            </span>
                            <span className="text-mono-sm text-[var(--foreground-muted)]">&middot;</span>
                            <span className="text-mono-sm text-[var(--foreground-muted)]">
                              {post.readingTime}
                            </span>
                          </div>

                          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 group-hover:text-[var(--foreground-secondary)] transition-colors">
                            {post.title}
                          </h2>

                          <p className="text-body text-[var(--foreground-secondary)] max-w-2xl mb-4">
                            {post.description}
                          </p>

                          <div className="flex items-center gap-4">
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
                            <span className="text-mono-sm text-[var(--foreground-muted)]">
                              by {post.author}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-mono-sm text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors lg:mt-8">
                          <span>Read</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="bg-[var(--foreground)] text-[var(--background)]">
          <div className="container-custom py-16 md:py-24">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-[6px] h-[6px] bg-[var(--background)]" />
                <span className="text-mono-sm uppercase tracking-wider text-[var(--background)]/60">
                  Let&apos;s Talk
                </span>
              </div>

              <h2 className="text-display text-3xl md:text-4xl lg:text-5xl mb-8">
                Have a Project
                <br />
                <span className="text-[var(--background)]/40">In Mind?</span>
              </h2>

              <p className="text-body-lg text-[var(--background)]/80 mb-8">
                Whether you&apos;re exploring AI integration or need a custom software solution,
                we&apos;d love to hear about your project.
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
