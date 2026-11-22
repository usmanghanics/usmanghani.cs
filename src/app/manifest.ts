import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Usman Ghani',
    short_name: 'Usman Ghani',
    description: 'Software engineer building mobile apps, AI agents and web platforms.',
    start_url: '/',
    display: 'browser',
    background_color: '#f7f6f3',
    theme_color: '#f7f6f3',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
