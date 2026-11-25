import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://linh-nguyen.example.com/', lastModified: new Date('2026-11-25'), changeFrequency: 'monthly', priority: 1 }];
}
