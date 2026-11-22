/**
 * Shipped work: apps on the stores and live web platforms.
 * Apps get a case study at /work/<slug>. Order = strongest first.
 */

import type { IconName } from '@/lib/icons';

export type Stat = { value: string; label: string };
export type Feature = { icon: IconName; title: string; text: string };

export type AppWork = {
  slug: string;
  name: string;
  icon: string;
  client: string;
  builtAt: string;
  tagline: string;
  summary: string;
  media: string;
  tint: string;
  stats: Stat[];
  play?: string;
  appStore?: string;
  website?: string;
  platforms: string;
  role: string;
  period: string;
  features: Feature[];
  did: string[];
  tools: string[];
  gallery: { src: string; alt: string; kind: 'mockup' | 'screen' | 'page' }[];
  seo: { title: string; description: string };
};

const play = (id: string) => `https://play.google.com/store/apps/details?id=${id}`;

export const apps: AppWork[] = [
  {
    slug: 'snapcut',
    name: 'SnapCut',
    icon: '/img/apps/snapcut-icon.webp',
    client: 'My own app',
    builtAt: 'BlueX Software Solutions',
    tagline: 'A video editor that does everything on the phone.',
    summary:
      'Multi-track video and audio editing with captions made on the device, split screen, picture in picture and beat sync. No ads, no sign-in, and it works offline.',
    media: '/img/work/snapcut.webp',
    tint: '#29aae2',
    stats: [
      { value: '5K+', label: 'Downloads' },
      { value: '4.4★', label: 'Google Play rating' },
    ],
    play: play('com.bluex.soundy'),
    website: 'https://bluexsoftware.vercel.app/snapcut/',
    platforms: 'Android',
    role: 'Founder, designer and only developer',
    period: '2025 – Present',
    features: [
      { icon: 'film-strip', title: 'Multi-track timeline', text: 'Cut, split, join and reorder clips, with undo that never loses a project.' },
      { icon: 'subtitles', title: 'Captions on the device', text: 'A speech model on the phone writes word-timed captions. The video never leaves it.' },
      { icon: 'music-notes', title: 'Cut to the beat', text: 'Finds the beats in a song and lands every cut on one.' },
      { icon: 'split-horizontal', title: 'Split screen and picture in picture', text: 'Play clips side by side, stacked, or one inside the other.' },
      { icon: 'wifi-slash', title: 'Works offline', text: 'No account and no upload. Editing and export run on the phone.' },
      { icon: 'download-simple', title: 'Export for every app', text: 'Sized for Reels, TikTok, Shorts and WhatsApp in one tap.' },
    ],
    did: [
      'Designed the app, its icon, its store listing and its website.',
      'Built the editor, the playback engine and the export pipeline on FFmpeg.',
      'Run releases, read every review and ship the features people ask for through the in-app Ideas board.',
    ],
    tools: ['Flutter', 'Dart', 'FFmpeg', 'On-device speech model', 'Firebase', 'Google Play'],
    gallery: [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({ src: `/img/work/snapcut-g${i}.webp`, alt: `SnapCut Google Play image ${i}`, kind: 'mockup' as const })),
    seo: {
      title: 'SnapCut: Android Video Editor With On-Device Captions',
      description: 'SnapCut is an Android video editor by Usman Ghani with on-device captions, beat sync and split screen. 5K+ downloads and a 4.4 rating on Google Play.',
    },
  },
  {
    slug: 'makki-autocare',
    name: 'Makki AutoCare',
    icon: '/img/apps/makki-autocare-icon.webp',
    client: 'For Makki Oil Store',
    builtAt: 'BizCare Software Solutions',
    tagline: 'Every customer’s next oil change, in their pocket.',
    summary:
      'Makki Oil Store’s customers see when each car is due for an oil change by date and kilometres, keep the full service history, and get a reminder before it is due.',
    media: '/img/work/makki-autocare.webp',
    tint: '#161616',
    stats: [
      { value: '1K+', label: 'Downloads' },
      { value: '2', label: 'Stores, Android and iOS' },
    ],
    play: play('com.bizcare.makki_autocare'),
    appStore: 'https://apps.apple.com/pk/app/makki-autocare/id6752372809',
    platforms: 'Android and iOS',
    role: 'Lead developer, at BizCare',
    period: '2025 – Present',
    features: [
      { icon: 'car', title: 'Every car at a glance', text: 'All the cars on a phone number, with the one that needs attention first.' },
      { icon: 'gauge', title: 'Due by date and kilometres', text: 'Works out the next oil change from daily driving, not just the calendar.' },
      { icon: 'bell', title: 'Reminders that arrive', text: 'Push alerts before a change is due and a receipt after every visit.' },
      { icon: 'receipt', title: 'Full service history', text: 'Oil, filters and readings from every visit, branch by branch.' },
      { icon: 'map-pin', title: 'Help on the road', text: 'Call a branch, find the nearest one, or reach rescue and police in one tap.' },
      { icon: 'shield-check', title: 'Sign in with a code', text: 'A one-time code by email, backed by a new, secured API for the app.' },
    ],
    did: [
      'Rebuilt the app from scratch in 2026 with a new design, light and dark.',
      'Built a new, secured API for the app inside the company’s .NET gateway, leaving the old one running for existing users.',
      'Shipped it to Google Play and the App Store, including the screenshots and privacy policy.',
    ],
    tools: ['Flutter', 'Dart', 'Riverpod', '.NET gateway', 'SQL Server', 'Firebase Cloud Messaging'],
    gallery: [1, 2, 3, 4, 5, 6].map((i) => ({ src: `/img/work/makki-autocare-g${i}.webp`, alt: `Makki AutoCare store image ${i}`, kind: 'mockup' as const })),
    seo: {
      title: 'Makki AutoCare: Oil Change Reminders App',
      description: 'Makki AutoCare, built by Usman Ghani at BizCare for Makki Oil Store: oil change reminders, service history and roadside help. 1K+ downloads on Android and iOS.',
    },
  },
  {
    slug: 'madadgar-kisan',
    name: 'Madadgar Kisan',
    icon: '/img/apps/madadgar-kisan-icon.webp',
    client: 'For a farm supplies company in Hasilpur',
    builtAt: 'BizCare Software Solutions',
    tagline: 'Fertiliser and lab tests, ordered from the farm.',
    summary:
      'Farmers order fertiliser and seed and book soil and water tests from nearby branches, in English or Urdu, with delivery priced by road distance.',
    media: '/img/work/madadgar-kisan.webp',
    tint: '#5f921b',
    stats: [
      { value: 'EN + اردو', label: 'English and Urdu' },
      { value: '2', label: 'Stores, Android and iOS' },
    ],
    play: play('com.bizcare.madadgar_kisan'),
    appStore: 'https://apps.apple.com/pk/app/madadgar-kisan/id6825722989',
    platforms: 'Android and iOS',
    role: 'Sole developer, app, API and admin website',
    period: '2026',
    features: [
      { icon: 'storefront', title: 'Shop by branch stock', text: 'Fertiliser, seed and organics with live stock at each branch.' },
      { icon: 'flask', title: 'Soil and water tests', text: 'Book a lab test, send a sample and get the report in the app.' },
      { icon: 'truck', title: 'Delivery by road distance', text: 'Delivery is priced from the real road distance and the weight of the order.' },
      { icon: 'translate', title: 'English and Urdu', text: 'Full right-to-left Urdu screens, not just translated labels.' },
      { icon: 'bell', title: 'Order tracking', text: 'Push updates from confirmed to packed, dispatched and delivered.' },
      { icon: 'browser', title: 'Admin website', text: 'Staff manage products, stock, tests, orders and payments from the web.' },
    ],
    did: [
      'Built the whole product: the Flutter app, the .NET API and the admin website.',
      'Set it up on the company’s Windows server with its own database and push notifications.',
      'Took it through Google Play and App Store review.',
    ],
    tools: ['Flutter', 'Dart', '.NET', 'SQL Server', 'React', 'Google Maps', 'Firebase Cloud Messaging'],
    gallery: [1, 2, 3, 4, 5, 6].map((i) => ({ src: `/img/work/madadgar-kisan-g${i}.webp`, alt: `Madadgar Kisan screen ${i}`, kind: 'screen' as const })),
    seo: {
      title: 'Madadgar Kisan: Farm Supplies App in English and Urdu',
      description: 'Madadgar Kisan, built by Usman Ghani at BizCare: farmers order fertiliser and book soil tests in English or Urdu. Live on Android and iOS.',
    },
  },
  {
    slug: 'bizcare',
    name: 'BizCare and Biz Parta',
    icon: '/img/apps/bizcare-icon.webp',
    client: 'For BizCare’s ERP clients',
    builtAt: 'BizCare Software Solutions',
    tagline: 'A company’s ERP, in the owner’s pocket.',
    summary:
      'Business owners check sales, ledgers, stock and financial reports from their BizCare ERP and post transactions on the go. Biz Parta gives flour mills their daily production cost reports.',
    media: '/img/work/bizcare.webp',
    tint: '#017e84',
    stats: [
      { value: '2', label: 'Apps, live on both stores' },
      { value: '32%', label: 'More efficient client workflows' },
    ],
    play: play('com.bizcare.bizcare'),
    appStore: 'https://apps.apple.com/pk/app/bizcare/id6752336703',
    platforms: 'Android and iOS',
    role: 'Sole lead developer',
    period: '2025 – Present',
    features: [
      { icon: 'chart-bar', title: 'Live financial overview', text: 'Cash, bank, receivables, payables and stock from the ERP, as of the last posting.' },
      { icon: 'file-text', title: 'Ledgers and reports', text: 'Account ledgers, sales, purchase and financial reports by date range.' },
      { icon: 'receipt', title: 'Post transactions', text: 'Record sales and cash transactions without opening a computer.' },
      { icon: 'chart-line', title: 'Production analysis', text: 'Biz Parta works out a mill’s output, rates and costs per product.' },
      { icon: 'download-simple', title: 'Share as PDF', text: 'Any report goes out as a PDF in a tap.' },
      { icon: 'lightning', title: 'Connection check', text: 'Shows the live connection to the ERP, so owners know the figures are current.' },
    ],
    did: [
      'Built both apps and connected them to the company ERP through its gateway API.',
      'Owned architecture, testing and releases on Google Play and the App Store.',
    ],
    tools: ['Flutter', 'Dart', '.NET gateway', 'SQL Server', 'PDF export'],
    gallery: [1, 2, 3, 4, 5, 6].map((i) => ({ src: `/img/work/bizcare-g${i}.webp`, alt: i < 4 ? `BizCare screen ${i}` : `Biz Parta screen ${i - 3}`, kind: 'screen' as const })),
    seo: {
      title: 'BizCare and Biz Parta: ERP Apps for Android and iOS',
      description: 'BizCare and Biz Parta, built by Usman Ghani: ERP reports, ledgers and production costs on the phone, live on Google Play and the App Store.',
    },
  },
];

export type WebWork = {
  slug?: string;
  name: string;
  org: string;
  orgLogo: string;
  text: string;
  role: string;
  tools: string[];
  href: string;
  host: string;
  image: string;
};

export const bizcarePk = {
  name: 'bizcare.pk',
  org: 'BizCare Software Solutions',
  title: 'The new website of an ERP company.',
  text: 'I designed and built the new bizcare.pk from scratch: the company’s ERP modules, industries, client apps and support, with fast static pages, light on the phone and set up for search.',
  points: ['Designed and built end to end', 'ERP modules, industries and client apps', 'Fast static pages, set up for search'],
  tools: ['Astro', 'TypeScript', 'Plesk hosting'],
  href: 'https://bizcare.pk/',
  image: '/img/web/bizcare-pk.webp',
  phone: '/img/web/bizcare-pk-phone.webp',
  pages: [
    { src: '/img/web/bizcare-pk-erp.webp', alt: 'bizcare.pk ERP page' },
    { src: '/img/web/bizcare-pk-apps-makki-autocare.webp', alt: 'bizcare.pk Makki AutoCare app page' },
    { src: '/img/web/bizcare-pk-clients.webp', alt: 'bizcare.pk clients page' },
  ],
};

export const web: WebWork[] = [
  {
    name: 'Talent Pool',
    org: 'Veloq',
    orgLogo: '/img/logos/veloq-icon.png',
    text: 'A marketplace where companies hire vetted engineers: 3D candidate search, contracts, e-signatures, milestones and invoicing.',
    role: 'Front end and backend integration',
    tools: ['React', 'Redux', 'Three.js', 'Node.js'],
    href: 'https://harbor.veloq.tech/',
    host: 'harbor.veloq.tech',
    image: '/img/web/talent-pool.webp',
  },
  {
    name: 'COI Tracker',
    org: 'Veloq',
    orgLogo: '/img/logos/veloq-icon.png',
    text: 'Vendor compliance for property managers: reads insurance certificates, tracks expiry and chases renewals.',
    role: 'Front end',
    tools: ['Next.js', 'Supabase'],
    href: 'https://coi-tracker-three.vercel.app/',
    host: 'coi-tracker-three.vercel.app',
    image: '/img/web/coi-tracker.webp',
  },
  {
    name: 'Leafyio',
    org: 'Veloq',
    orgLogo: '/img/logos/veloq-icon.png',
    text: 'An AI platform that writes, illustrates and assembles ebooks, picture books and comics, ready to sell.',
    role: 'Product engineering',
    tools: ['Next.js', 'Supabase', 'Claude', 'Stripe'],
    href: 'https://www.leafyio.io/',
    host: 'leafyio.io',
    image: '/img/web/leafyio.webp',
  },
];

export const moreApps = [
  { name: 'Biz Parta', text: 'Production cost reports for flour mills', href: play('com.bizcare.bizparta') },
  { name: 'Clippy', text: 'Clipboard history for Android', href: play('com.bluex.clippy') },
  { name: 'Scanix', text: 'Document scanner for Android', href: play('com.bluex.scanix') },
];

export const labs = [
  { name: 'Sanctum', text: 'Final year project: a defensive platform that detects and stops malicious AI agents.', tools: 'AI security', status: 'In progress' },
  { name: 'VulnRadar', text: 'A web vulnerability scanner that re-implements the core checks of Nuclei and Nikto.', tools: 'React, FastAPI' },
  { name: 'TraceIt', text: 'A lost and found app for campuses, with matching, claims and admin checks.', tools: 'Kotlin, Jetpack Compose' },
];

export const findApp = (slug: string) => apps.find((a) => a.slug === slug);
