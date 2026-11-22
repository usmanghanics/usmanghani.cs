/** @type {import('next').NextConfig} */

// The site moved from Netlify to Vercel. When Netlify builds this repo
// (it sets NETLIFY=true), every old address forwards to the same page on
// the new site, so links and search rankings carry over.
const NEW_SITE = 'https://usmanghanics.vercel.app';
const onNetlify = process.env.NETLIFY === 'true';

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,
  async redirects() {
    if (onNetlify) {
      return [
        { source: '/', destination: `${NEW_SITE}/`, permanent: true },
        { source: '/:path*', destination: `${NEW_SITE}/:path*`, permanent: true },
      ];
    }
    return [
      { source: '/projects', destination: '/work', permanent: true },
      { source: '/projects/:path*', destination: '/work', permanent: true },
      { source: '/certificates', destination: '/certifications', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
      {
        source: '/img/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }],
      },
    ];
  },
};

export default nextConfig;
