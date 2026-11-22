import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/site';
import { work } from '@/data/work';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...work.map((w) => ({
      url: `${SITE_URL}/work/${w.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/certifications`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ];
}
