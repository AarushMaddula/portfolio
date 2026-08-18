import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/project']
    },
    sitemap: 'https://aarushmaddula.vercel.com/sitemap.xml',
  }
}