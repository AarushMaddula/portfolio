import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {

  const baseURL = "https://aarushmaddula.vercel.app"

  return [
    {
      url: baseURL,
      lastModified: new Date('2026-08-17'),
      changeFrequency: 'monthly',
      priority: 1,
    }
  ]
}