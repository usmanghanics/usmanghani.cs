export type TimelineItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
  current?: boolean;
};

export const experience: TimelineItem[] = [
  {
    period: "2026",
    title: "Intern — FG Tech",
    organization: "Fatima Group",
    description:
      "Led the complete frontend overhaul of FG AI Studio (AgentSphere), an enterprise AI platform for agentic workflows, agent orchestration, and automation at scale.",
  },
  {
    period: "2025",
    title: "Software & Application Developer Intern",
    organization: "BizCare Software Solutions",
    description:
      "Worked on commercial business apps including Makki AutoCare, BizCare, and Biz Parta, shipping client-facing workflows across Android and iOS.",
  },
  {
    period: "2025 - Present",
    title: "Software & Application Developer",
    organization: "Veloq",
    description:
      "Building production mobile apps, AI-powered systems, workflow automations, and full-stack product experiences for real clients.",
    current: true,
  },
  {
    period: "2025 - Present",
    title: "Android / Mobile Developer",
    organization: "Upwork and client projects",
    description:
      "Developed AI-powered Android applications, productivity tools, and business-facing mobile products.",
    current: true,
  },
  {
    period: "2024 - Present",
    title: "WebMaster",
    organization: "IEEE, Namal University",
    description:
      "Designed event visuals, technical posters, branding material, and digital assets for student-branch activities.",
  },
  {
    period: "2023 - Present",
    title: "BS Computer Science",
    organization: "Namal University",
    description:
      "Studying computer science with focus across AI, data systems, mobile development, web engineering, and algorithms.",
    current: true,
  },
  {
    period: "2021 - 2023",
    title: "F.Sc Pre-Engineering",
    organization: "Punjab Daanish Schools & Centers of Excellence",
    description:
      "Built a strong mathematics, physics, and problem-solving foundation.",
  },
];
