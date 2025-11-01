import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://karsaztech.com'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow admin or private paths if you have any in the future
      // disallow: '/admin/',
      // disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

