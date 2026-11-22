/**
 * Who Usman is: profile, experience, achievements, education and skills.
 * Facts come from his LinkedIn profile. Change them here, not in the pages.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://usmanghanics.vercel.app').replace(/\/$/, '');

export const me = {
  name: 'Usman Ghani',
  handle: 'usmanghanics',
  role: 'Software & Application Engineer',
  location: 'Lahore, Pakistan',
  email: 'usmanghanics.dev@gmail.com',
  photo: '/img/me/usman-ghani.webp',
  avatar: '/img/me/avatar.webp',
  links: {
    linkedin: 'https://www.linkedin.com/in/usmanghanics',
    github: 'https://github.com/usmanghanics',
    githubOld: 'https://github.com/Code-with-UsmanG',
    x: 'https://x.com/usmanghanics',
    play: 'https://play.google.com/store/apps/developer?id=BlueX+Software+Solutions',
  },
};

export const ogImage = { url: '/og.png', width: 1200, height: 630, alt: 'Usman Ghani, software engineer who builds and ships apps' };

export const description =
  'Usman Ghani is a software engineer in Lahore who builds and ships mobile apps and AI platforms. SnapCut, Makki AutoCare and Madadgar Kisan are live on Google Play and the App Store.';

export const stats = [
  { value: '15+', label: 'Projects shipped, across mobile apps and web platforms' },
  { value: '6K+', label: 'Downloads across SnapCut and Makki AutoCare' },
  { value: '#1', label: 'On CTF Square, Pakistan’s national CTF platform' },
  { value: '1st', label: 'CodeX 3.0, against 188 programmers' },
];

/** Logos shown under the hero. `invert` flips black logos in the dark theme. */
export const orgs = [
  { name: 'Veloq', logo: '/img/logos/veloq-mark.png', h: 34, invert: true, label: 'Veloq' },
  { name: 'BizCare Software Solutions', logo: 'bizcare', h: 30 },
  { name: 'Fatima Group', logo: '/img/logos/fg-mark.png', h: 30, invert: true, label: 'Fatima Group' },
  { name: 'Namal University', logo: '/img/logos/namal.png', h: 48, label: 'Namal University' },
  { name: 'IEEE', logo: 'ieee', h: 76 },
];

export type Job = {
  org: string;
  logo: string;
  role: string;
  type: string;
  period: string;
  place: string;
  intro?: string;
  points: string[];
  links?: { label: string; href: string }[];
  certificate?: { label: string; image: string };
};

export const jobs: Job[] = [
  {
    org: 'Veloq',
    logo: '/img/logos/veloq-mark.png',
    role: 'Software & Application Engineer',
    type: 'Freelance',
    period: 'Apr 2026 – Present',
    place: 'Melbourne, Australia · Remote',
    intro: 'An engineer-led AI software house building agent systems, retrieval platforms and workflow automation for clients in recruitment, property and logistics.',
    points: [
      'Leafyio: an AI platform that writes, illustrates and sells ebooks, picture books and comics.',
      'AutoScale Agents: built an AI outbound engine end to end, from prospect sourcing and AI-written emails with human approval to sending, reply sorting and booking.',
      'Talent Pool: built the front end and backend integration of a talent marketplace, from 3D candidate search to contract drafting, BoldSign e-signatures, milestones and invoicing.',
    ],
    links: [
      { label: 'Leafyio', href: 'https://www.leafyio.io/' },
      { label: 'AutoScale Agents', href: 'https://auto-scale-agents-web.vercel.app/' },
      { label: 'Talent Pool', href: 'https://harbor.veloq.tech/' },
    ],
  },
  {
    org: 'Fatima Group',
    logo: '/img/logos/fg-mark.png',
    role: 'FG Intern, Tech',
    type: 'Internship',
    period: 'Jul 2026 – Aug 2026',
    place: 'Lahore · On-site',
    intro: 'Selected for the Empower to Lead Summer Internship Program and placed in AI Automation, at the group’s head office.',
    points: [
      'Redesigned FG AI Studio, the group’s internal platform for building and running AI agents, bringing every screen of the console onto one layout system.',
      'Replaced the chat spinner with live run stages, so people see when an agent is thinking, querying a database, searching a knowledge base or waiting on them.',
      'Rebuilt the visual workflow builder: run state shows on each node, and a workflow can no longer run with an unsaved trigger.',
      'Made the console work on phones and tablets, and closed an 18% layout gap between macOS and Windows caused by display scaling.',
    ],
    certificate: { label: 'Internship certificate', image: '/img/certificates/fg-tech-internship.webp' },
  },
  {
    org: 'BizCare Software Solutions',
    logo: '/img/apps/bizcare-icon.webp',
    role: 'Software & Application Developer',
    type: 'Internship',
    period: 'Jul 2025 – Sep 2025',
    place: 'Lahore · Hybrid',
    intro: 'An ERP company in Lahore whose software runs flour mills, traders and service businesses across Pakistan.',
    points: [
      'Sole lead developer on three commercial apps published on Google Play and the App Store: Makki AutoCare, BizCare and Biz Parta.',
      'Makki AutoCare passed 1,000 downloads, giving Makki Oil Store’s customers their service history and maintenance reminders.',
      'Owned the full lifecycle of each app: architecture, implementation, testing, releases and store publishing.',
      'Built ERP-connected features for sales, payments, finance, stock and production reports that made client workflows 32% more efficient, plus Angular features for the company’s web ERP.',
    ],
  },
  {
    org: 'BlueX Software Solutions',
    logo: '/img/logos/bluex-tile.svg',
    role: 'Founder',
    type: 'Google Play developer',
    period: '2025 – Present',
    place: 'Pakistan',
    points: [
      'Design, build, publish and support my own Android apps.',
      'SnapCut, a video editor that runs entirely on the phone, has passed 5,000 downloads with a 4.4 rating.',
    ],
    links: [{ label: 'Apps on Google Play', href: 'https://play.google.com/store/apps/developer?id=BlueX+Software+Solutions' }],
  },
  {
    org: 'IEEE Namal Student Branch',
    logo: '/img/logos/ieee.svg',
    role: 'Web Master',
    type: 'Part-time',
    period: 'Sep 2024 – Mar 2025',
    place: 'Mianwali · Remote',
    points: ['Designed the branch’s research templates, journal formats and conference presentation material.'],
  },
];

export type Achievement = {
  rank: string;
  title: string;
  event: string;
  org: string;
  date: string;
  text: string;
  logo: string;
  photo?: string;
  tint: string;
};

export const achievements: Achievement[] = [
  {
    rank: '1st',
    title: 'Winner, Competitive Programming',
    event: 'CodeX 3.0',
    org: 'Namal University',
    date: 'Dec 2025',
    text: 'National inter-university competition with 188 participants from 11 universities, solved without AI tools.',
    logo: '/img/logos/namal.png',
    photo: '/img/me/codex-trophy.webp',
    tint: 'var(--tint-green)',
  },
  {
    rank: '#1',
    title: 'Top of the leaderboard',
    event: 'CTF Square',
    org: 'National CERT, Pakistan',
    date: 'Nov 2026',
    text: 'First on the individual leaderboard of Pakistan’s national capture-the-flag platform: 16,480 points from 82 challenges solved.',
    logo: '/img/logos/pkcert.png',
    photo: '/img/me/ctf-leaderboard.webp',
    tint: 'var(--tint-sage)',
  },
  {
    rank: '3rd',
    title: '2nd Runner-Up, Speed Programming',
    event: 'AUREX 2026',
    org: 'Bahria University, Islamabad',
    date: '2026',
    text: 'Against teams from 25+ universities, with my teammate Muhammad Gulfam Afzal.',
    logo: '/img/logos/bahria.png',
    photo: '/img/me/aurex-team.webp',
    tint: 'var(--tint-blue)',
  },
  {
    rank: '3rd',
    title: 'On Spot Programming',
    event: 'Visio Spark',
    org: 'COMSATS University, Vehari',
    date: 'Dec 2025',
    text: 'National IT competition hosted by COMSATS, with participants from universities across Pakistan.',
    logo: '/img/logos/comsats.png',
    tint: 'var(--tint-sky)',
  },
];

export const education = [
  {
    school: 'Namal University',
    place: 'Mianwali',
    degree: 'BS Computer Science',
    period: 'Jan 2023 – Jun 2027',
    logo: '/img/logos/namal.png',
    points: [
      'Coursework: data structures and algorithms, operating systems, computer networks, artificial intelligence, information security and penetration testing.',
      'Web Master of the IEEE student branch and Deputy Director Graphics of the Scholar Bridge Society.',
    ],
  },
  {
    school: 'Punjab Daanish School',
    place: 'Hasilpur',
    degree: 'F.Sc Pre-Engineering, Grade A+',
    period: 'May 2021 – Jul 2023',
    logo: '/img/logos/daanish.png',
    points: ['Matriculation: 1,098 out of 1,100, second position (BISE Lahore).'],
  },
];

export const stack = [
  { name: 'Flutter', logo: 'flutter', color: '#02569B' },
  { name: 'Dart', logo: 'dart', color: '#0175C2' },
  { name: 'Kotlin', logo: 'kotlin', color: '#7F52FF' },
  { name: 'Android', logo: 'android', color: '#3DDC84' },
  { name: 'iOS', logo: 'apple', color: 'currentColor' },
  { name: 'Firebase', logo: 'firebase', color: '#DD2C00' },
  { name: 'Next.js', logo: 'nextdotjs', color: 'currentColor' },
  { name: 'React', logo: 'react', color: '#149ECA' },
  { name: 'Angular', logo: 'angular', color: '#DD0031' },
  { name: 'TypeScript', logo: 'typescript', color: '#3178C6' },
  { name: 'Three.js', logo: 'threedotjs', color: 'currentColor' },
  { name: 'Astro', logo: 'astro', color: '#BC52EE' },
  { name: 'Python', logo: 'python', color: '#3776AB' },
  { name: 'FastAPI', logo: 'fastapi', color: '#009688' },
  { name: 'Node.js', logo: 'nodedotjs', color: '#5FA04E' },
  { name: 'Supabase', logo: 'supabase', color: '#3ECF8E' },
  { name: 'PostgreSQL', logo: 'postgresql', color: '#4169E1' },
  { name: 'n8n', logo: 'n8n', color: '#EA4B71' },
];
