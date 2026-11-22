/**
 * Who Usman is, how to reach him, and the numbers shown across the site.
 * Change facts here, not in the pages.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://usmanghani.vercel.app').replace(/\/$/, '');

export const me = {
  name: 'Usman Ghani',
  handle: 'usmanghanics',
  role: 'Software Engineer',
  headline: 'Software engineer building mobile apps, AI agents and web platforms',
  location: 'Pakistan',
  email: 'usmanghanics.dev@gmail.com',
  photo: '/img/me/usman-ghani.webp',
  avatar: '/img/me/avatar.webp',
  university: 'Namal University',
  links: {
    linkedin: 'https://www.linkedin.com/in/usmanghanics',
    github: 'https://github.com/usmanghanics',
    githubOld: 'https://github.com/Code-with-UsmanG',
    x: 'https://x.com/usmanghanics',
    bluex: 'https://bluexsoftware.vercel.app/',
    play: 'https://play.google.com/store/apps/developer?id=BlueX+Software+Solutions',
  },
};

export const ogImage = { url: '/og.png', width: 1200, height: 630, alt: 'Usman Ghani, software engineer building mobile apps and AI products' };

export const description =
  'Usman Ghani is a software engineer in Pakistan who builds mobile apps, AI agents and web platforms. Founder of BlueX Software Solutions (SnapCut), developer at Veloq and BizCare Software Solutions.';

export const stats = [
  { value: '7', label: 'Apps live on Google Play, 4 of them on the App Store too' },
  { value: '5K+', label: 'Downloads of SnapCut, the video editor I publish' },
  { value: '4.4', label: 'SnapCut rating from 127 reviews on Google Play' },
  { value: '1st', label: 'Place in the CodeX 3.0 programming contest' },
];

export const places = [
  { name: 'Veloq', note: 'AI and web' },
  { name: 'BizCare', note: 'Mobile apps' },
  { name: 'Fatima Group', note: 'Internship' },
  { name: 'BlueX', note: 'My own apps' },
  { name: 'Namal University', note: 'BS Computer Science' },
];

export type Job = {
  org: string;
  role: string;
  period: string;
  text: string;
  href?: string;
};

export const jobs: Job[] = [
  {
    org: 'Veloq',
    role: 'Software & Application Developer',
    period: '2025 – Present',
    text: 'AI agents, SaaS platforms and automations for clients abroad, built end to end from the database to the interface.',
    href: 'https://veloq.tech/',
  },
  {
    org: 'BizCare Software Solutions',
    role: 'Software & Application Developer',
    period: '2025 – Present',
    text: 'Mobile apps for Android and iOS connected to the company ERP, and the bizcare.pk website.',
    href: 'https://bizcare.pk/',
  },
  {
    org: 'FG Tech, Fatima Group',
    role: 'Intern',
    period: '2026',
    text: 'Led the frontend overhaul of FG AI Studio, the group’s platform for AI agents and agent workflows.',
  },
  {
    org: 'BlueX Software Solutions',
    role: 'Founder',
    period: '2024 – Present',
    text: 'My own Google Play developer name. I design, build, publish and support SnapCut, Clippy and Scanix.',
    href: 'https://bluexsoftware.vercel.app/',
  },
  {
    org: 'IEEE, Namal University',
    role: 'Web Master',
    period: '2024 – 2025',
    text: 'Ran the student branch website and made visuals for hackathons and talks.',
  },
];

export const education = [
  { school: 'Namal University, Mianwali', what: 'BS Computer Science', period: '2023 – 2027' },
  { school: 'Punjab Daanish School, Hasilpur', what: 'F.Sc Pre-Engineering', period: '2021 – 2023' },
];

export const awards = [
  { place: '1st', title: 'Competitive Programming, CodeX 3.0', where: 'Namal University, Mianwali', year: '2025' },
  { place: '3rd', title: 'On Spot Programming, Visio Spark', where: 'COMSATS University, Vehari', year: '' },
  { place: '2nd', title: 'Matriculation, BISE Lahore', where: 'Punjab Daanish School, Hasilpur', year: '' },
];

export const skills = [
  { group: 'Mobile', items: ['Flutter', 'Dart', 'Kotlin', 'Jetpack Compose', 'Firebase', 'Google Play', 'App Store'] },
  { group: 'Web', items: ['Next.js', 'React', 'TypeScript', 'Astro', 'Tailwind CSS', 'Vercel', 'SEO'] },
  { group: 'AI', items: ['LLM agents', 'RAG', 'OCR pipelines', 'On-device ML', 'OpenRouter', 'Claude and Gemini APIs', 'n8n'] },
  { group: 'Backend', items: ['Python', 'FastAPI', 'Celery', 'Supabase', 'PostgreSQL', '.NET APIs', 'REST'] },
];
