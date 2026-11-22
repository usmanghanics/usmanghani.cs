import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { SITE_URL, description, me, ogImage } from '@/data/site';

const sans = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Usman Ghani: Software Engineer for Mobile Apps and AI',
    template: '%s | Usman Ghani',
  },
  description,
  applicationName: 'Usman Ghani',
  authors: [{ name: me.name, url: SITE_URL }],
  creator: me.name,
  publisher: me.name,
  keywords: [
    'Usman Ghani',
    'usmanghanics',
    'software engineer Pakistan',
    'Flutter developer',
    'Android developer',
    'AI agents developer',
    'Next.js developer',
    'SnapCut',
    'BlueX Software Solutions',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Usman Ghani',
    locale: 'en_US',
    url: '/',
    title: 'Usman Ghani: Software Engineer for Mobile Apps and AI',
    description,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@usmanghanics',
    title: 'Usman Ghani: Software Engineer for Mobile Apps and AI',
    description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' }],
    apple: '/apple-touch-icon.png',
  },
  formatDetection: { telephone: false, email: false, address: false },
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#f7f6f3',
};

// Runs before the first paint: light unless the visitor picked dark before.
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('theme')==='dark'){d.dataset.theme='dark';var m=document.querySelector('meta[name="theme-color"]');if(m)m.content='#0e0e0f'}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
