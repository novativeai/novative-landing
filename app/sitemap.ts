import type { MetadataRoute } from 'next';
import { blogPosts, getAllBlogSlugs } from '@/lib/blog';
import { caseStudies, getAllSlugs } from '@/lib/case-studies';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://novative.dev';
  const now = new Date();

  const caseStudyUrls: MetadataRoute.Sitemap = getAllSlugs().map((slug) => {
    const study = caseStudies.find((s) => s.id === slug);
    return {
      url: `${baseUrl}/work/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: study?.image
        ? [`${baseUrl}${study.image}`]
        : undefined,
    };
  });

  const blogUrls: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => {
    const post = blogPosts.find((p) => p.slug === slug);
    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: post?.updatedAt ? new Date(post.updatedAt) : new Date(post?.publishedAt ?? now),
      changeFrequency: 'monthly',
      priority: 0.7,
    };
  });

  return [
    // Homepage — highest priority, most frequently updated
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
      images: caseStudies
        .filter((s) => s.image)
        .map((s) => `${baseUrl}${s.image}`),
    },
    // Work listing page
    {
      url: `${baseUrl}/work`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Individual case studies
    ...caseStudyUrls,
    // Blog listing page
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Individual blog posts
    ...blogUrls,
    // Legal pages — low priority, rarely change
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];
}
