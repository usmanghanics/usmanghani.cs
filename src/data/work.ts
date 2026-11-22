/**
 * Selected work. Each entry with `page: true` also gets its own case study
 * at /work/<slug>. Client names stay private: say who the work was with
 * (Veloq, BizCare, Fatima Group or BlueX) and describe the product, not the client.
 */

export type Shot = { src: string; alt: string; ratio: number };
export type Link = { label: string; href: string; kind?: 'play' | 'appstore' | 'web' | 'github' };

export type StoreApp = {
  name: string;
  icon: string;
  text: string;
  play?: string;
  appStore?: string;
  web?: string;
  rating?: string;
};

export type MoreItem = { name: string; text: string; stack: string[]; href?: string };

export type Visual =
  | { type: 'phones'; tint: string; shots: Shot[] }
  | { type: 'diagram'; tint: string }
  | { type: 'browser'; tint: string; src: string; alt: string; url: string };

export type Work = {
  slug: string;
  name: string;
  org: string;
  period: string;
  role: string;
  title: string;
  summary: string;
  facts: { value: string; label: string }[];
  built: string[];
  stack: string[];
  links: Link[];
  visual: Visual;
  apps?: StoreApp[];
  more?: MoreItem[];
  seo: { title: string; description: string };
};

const play = (id: string) => `https://play.google.com/store/apps/details?id=${id}`;

export const bluexApps: StoreApp[] = [
  {
    name: 'SnapCut',
    icon: '/img/apps/snapcut-icon.webp',
    text: 'Video and audio editor with captions made on the phone.',
    play: play('com.bluex.soundy'),
    web: 'https://bluexsoftware.vercel.app/snapcut/',
    rating: '4.4',
  },
  {
    name: 'Clippy',
    icon: '/img/apps/clippy-icon.webp',
    text: 'Clipboard history with a floating button and AI translation.',
    play: play('com.bluex.clippy'),
    web: 'https://bluexsoftware.vercel.app/clippy/',
  },
  {
    name: 'Scanix',
    icon: '/img/apps/scanix-icon.webp',
    text: 'Document scanner with text recognition and PDF tools.',
    play: play('com.bluex.scanix'),
    web: 'https://bluexsoftware.vercel.app/scanix/',
  },
];

export const work: Work[] = [
  {
    slug: 'snapcut',
    name: 'SnapCut',
    org: 'BlueX Software Solutions',
    period: 'Live on Google Play',
    role: 'Founder, designer and developer',
    title: 'A full video editor for Android, built and run on my own.',
    summary:
      'SnapCut edits video and audio on the phone: a timeline, captions made on the device, split screen, picture in picture, beat sync and exports sized for Reels, TikTok and Shorts. I design it, build it, publish it and answer every review.',
    facts: [
      { value: '5K+', label: 'Downloads' },
      { value: '4.4', label: 'Rating from 127 reviews' },
      { value: '805', label: 'Automated tests' },
      { value: '0', label: 'Ads or trackers' },
    ],
    built: [
      'A multi-track timeline that cuts, splits, joins and reorders clips, with undo that never empties a project.',
      'Captions from an on-device speech model, timed word by word, so the video never leaves the phone.',
      'Smooth playback across cuts, 17 transition styles and an export pipeline built on FFmpeg.',
      'Face-follow blur, green screen, picture in picture, split screen, beat sync, voiceover and text to speech.',
      'An Ideas board where people suggest and vote on features, backed by Firebase.',
      'The store listing, screenshots, privacy policy and the product website.',
    ],
    stack: ['Flutter', 'Dart', 'FFmpeg', 'On-device speech', 'Firebase', 'Google Play'],
    links: [
      { label: 'Google Play', href: play('com.bluex.soundy'), kind: 'play' },
      { label: 'Website', href: 'https://bluexsoftware.vercel.app/snapcut/', kind: 'web' },
    ],
    visual: {
      type: 'phones',
      tint: 'var(--tint-blue)',
      shots: [
        { src: '/img/apps/snapcut-captions.webp', alt: 'SnapCut adding captions to a clip', ratio: 0.5 },
        { src: '/img/apps/snapcut-editor.webp', alt: 'SnapCut timeline editor', ratio: 0.5 },
        { src: '/img/apps/snapcut-split_screen.webp', alt: 'SnapCut split screen layouts', ratio: 0.5 },
      ],
    },
    apps: bluexApps,
    seo: {
      title: 'SnapCut: Android Video Editor',
      description:
        'How Usman Ghani designs, builds and runs SnapCut, an Android video editor with on-device captions, 5K+ downloads and a 4.4 rating on Google Play.',
    },
  },
  {
    slug: 'fg-ai-studio',
    name: 'FG AI Studio',
    org: 'Fatima Group',
    period: '2026',
    role: 'Frontend lead, internship at FG Tech',
    title: 'The new frontend of an enterprise AI agent platform, in six weeks.',
    summary:
      'FG AI Studio is Fatima Group’s platform for building AI agents and agent workflows. During my internship at FG Tech I led the overhaul of its whole frontend: agent chat, the workflow builder and the admin console.',
    facts: [
      { value: '178', label: 'Commits' },
      { value: '34.5K', label: 'Lines of code' },
      { value: '6', label: 'Weeks' },
    ],
    built: [
      'Agent chat with replies that stream in live over server-sent events, step indicators and saved conversations.',
      'A visual workflow builder: add nodes, connect them, insert steps inline and watch each step run.',
      'Forms described by the server and drawn by the frontend, so new agent settings ship without a frontend release.',
      'One design system and responsive layouts across every screen of the console.',
      'Runs fully on the company network, with no CDNs or outside fonts.',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'React Flow', 'Server-sent events', 'Server-driven UI'],
    links: [],
    visual: { type: 'diagram', tint: 'var(--tint-green)' },
    seo: {
      title: 'FG AI Studio: Enterprise AI Agent Platform',
      description:
        'Usman Ghani led the frontend overhaul of FG AI Studio at Fatima Group: streaming agent chat, a visual workflow builder and server-driven forms.',
    },
  },
  {
    slug: 'bizcare-apps',
    name: 'Business apps at BizCare',
    org: 'BizCare Software Solutions',
    period: '2025 – Present',
    role: 'Mobile developer',
    title: 'Apps that businesses run on every day.',
    summary:
      'BizCare makes ERP software for businesses in Pakistan. I build and publish its mobile apps for Android and iOS: an ERP companion for owners, a car care chain’s customer app, production reports for flour mills and a farm supplies shop in English and Urdu.',
    facts: [
      { value: '4', label: 'Apps on both stores' },
      { value: '2', label: 'Platforms, one codebase' },
      { value: '2', label: 'Languages, English and Urdu' },
    ],
    built: [
      'Flutter apps for Android and iOS, from the first screen to the store listing.',
      'Connected to the company’s .NET gateway and ERP, with sign-in by phone number and one-time codes.',
      'Right-to-left Urdu screens next to English in the farm supplies app.',
      'Reports that owners can export and share as PDF.',
      'Store screenshots, privacy policies and releases on Google Play and the App Store.',
    ],
    stack: ['Flutter', 'Dart', '.NET gateway', 'REST APIs', 'Firebase', 'Google Play', 'App Store'],
    links: [],
    visual: {
      type: 'phones',
      tint: 'var(--tint-warm)',
      shots: [
        { src: '/img/apps/bizcare-dashboard.webp', alt: 'BizCare ERP dashboard', ratio: 0.46 },
        { src: '/img/apps/makki-autocare-home.webp', alt: 'Makki AutoCare home with an oil change reminder', ratio: 0.4614 },
        { src: '/img/apps/madadgar-kisan-home.webp', alt: 'Madadgar Kisan farm supplies shop', ratio: 0.4614 },
      ],
    },
    apps: [
      {
        name: 'BizCare',
        icon: '/img/apps/bizcare-icon.webp',
        text: 'The company ERP in your pocket: sales, ledgers, stock and reports.',
        play: play('com.bizcare.bizcare'),
        appStore: 'https://apps.apple.com/pk/app/bizcare/id6752336703',
      },
      {
        name: 'Makki AutoCare',
        icon: '/img/apps/makki-autocare-icon.webp',
        text: 'Oil change reminders by date and kilometres, service history and help on the road.',
        play: play('com.bizcare.makki_autocare'),
        appStore: 'https://apps.apple.com/pk/app/makki-autocare/id6752372809',
      },
      {
        name: 'Madadgar Kisan',
        icon: '/img/apps/madadgar-kisan-icon.webp',
        text: 'Order fertiliser, seed and lab tests from nearby branches, in English or Urdu.',
        play: play('com.bizcare.madadgar_kisan'),
        appStore: 'https://apps.apple.com/pk/app/madadgar-kisan/id6825722989',
      },
      {
        name: 'Biz Parta',
        icon: '/img/apps/bizparta-icon.webp',
        text: 'Production cost reports for flour mills, shared as PDF.',
        play: play('com.bizcare.bizparta'),
        appStore: 'https://apps.apple.com/us/app/biz-parta/id6752411960',
      },
    ],
    seo: {
      title: 'Business Apps for Android and iOS at BizCare',
      description:
        'Flutter apps Usman Ghani builds and publishes at BizCare Software Solutions: BizCare ERP, Makki AutoCare, Madadgar Kisan and Biz Parta.',
    },
  },
  {
    slug: 'veloq',
    name: 'AI products at Veloq',
    org: 'Veloq',
    period: '2025 – Present',
    role: 'Software & Application Developer',
    title: 'AI agents and SaaS platforms, built end to end.',
    summary:
      'At Veloq I build AI products for clients abroad, from the database to the interface: a book-writing platform, a sales engine, document checkers and research assistants. Client names stay private, so the work is described by what it does.',
    facts: [
      { value: '5+', label: 'Client products' },
      { value: 'End to end', label: 'Database, API, AI and interface' },
    ],
    built: [
      'Leafyio, an AI platform that writes and illustrates ebooks, picture books and comics, then lets people sell them.',
      'Multi-tenant SaaS with row-level security, so each workspace only ever sees its own data.',
      'Agents that read documents with OCR and check them against rules, keeping a person in the loop.',
      'Retrieval-augmented answers that cite the source documents they came from.',
    ],
    stack: ['Next.js', 'FastAPI', 'Supabase', 'PostgreSQL', 'Celery', 'Claude', 'Gemini', 'Stripe'],
    links: [],
    visual: {
      type: 'browser',
      tint: 'var(--tint-rose)',
      src: '/img/work/leafyio-1.webp',
      alt: 'Leafyio home page: generate AI ebooks that sell',
      url: 'leafyio.io',
    },
    more: [
      {
        name: 'Leafyio',
        href: 'https://www.leafyio.io/',
        text: 'Writes, illustrates and assembles ebooks, picture books and comics as print-ready PDFs, with credits and checkout.',
        stack: ['Next.js', 'Supabase', 'Claude', 'Gemini images', 'Stripe'],
      },
      {
        name: 'AI outbound sales engine',
        text: 'Finds leads, enriches them and runs email campaigns per workspace. Multi-tenant from the first commit.',
        stack: ['Next.js', 'FastAPI', 'Celery', 'Supabase'],
      },
      {
        name: 'Recruitment document agent',
        text: 'Reads applicants’ documents with OCR and checks them against each role’s requirements for enterprise hiring teams.',
        stack: ['Python', 'OCR', 'Next.js', 'Supabase'],
      },
      {
        name: 'Legal research assistant',
        text: 'Answers questions from a firm’s own legal documents, with the passages it used.',
        stack: ['Python', 'RAG', 'Vector search'],
      },
      {
        name: 'Talent network',
        text: 'A platform where developers join a vetted pool and companies hire from it.',
        stack: ['React', 'Node.js'],
      },
    ],
    seo: {
      title: 'AI Agents and SaaS Platforms at Veloq',
      description:
        'AI products Usman Ghani builds at Veloq: Leafyio, an AI sales engine, OCR document agents and retrieval-augmented research assistants.',
    },
  },
];

export const sites: { name: string; text: string; href: string; image: string; stack: string }[] = [
  {
    name: 'bizcare.pk',
    text: 'The new website of BizCare Software Solutions, an ERP company in Lahore.',
    href: 'https://bizcare.pk/',
    image: '/img/sites/bizcare.webp',
    stack: 'Astro',
  },
  {
    name: 'BlueX Software Solutions',
    text: 'Home of my apps, with product pages, privacy policies and support.',
    href: 'https://bluexsoftware.vercel.app/',
    image: '/img/sites/bluex.webp',
    stack: 'Astro',
  },
];

export const labs: { name: string; text: string; stack: string; status?: string; href?: string }[] = [
  {
    name: 'Sanctum',
    text: 'Final year project: a platform that detects and stops malicious AI agents.',
    stack: 'AI security',
    status: 'In progress',
  },
  {
    name: 'VulnRadar',
    text: 'A web vulnerability scanner that re-implements the core checks of Nuclei and Nikto.',
    stack: 'React, FastAPI',
  },
  {
    name: 'TraceIt',
    text: 'A lost and found app for campuses, with matching, claims and admin checks.',
    stack: 'Kotlin, Jetpack Compose, Firebase, Supabase',
  },
  {
    name: 'Treasure Hunt',
    text: 'A grid game that uses BFS and DFS to find paths, for a data structures course.',
    stack: 'C++',
    href: 'https://github.com/Code-with-UsmanG/DSA-Project-Treasure-Hunting-Game',
  },
  {
    name: 'Chess',
    text: 'A full chess game for the terminal, 7,000 lines, in my first semester.',
    stack: 'C++',
    href: 'https://github.com/Code-with-UsmanG/Chess-Game',
  },
];

export const findWork = (slug: string) => work.find((w) => w.slug === slug);
