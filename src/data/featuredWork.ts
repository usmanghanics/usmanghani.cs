export type FeaturedProject = {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  role: string;
  bullets: [string, string, string];
  stack: string[];
  links: {
    live?: string;
    github?: string;
    playStore?: string;
    appStore?: string;
  };
  imagePosition: "left" | "right";
  visual: "saas" | "dashboard" | "mobile";
  image?: string;
  images?: [string, string, string];
  placeholder?: {
    title: string;
    items: [string, string, string, string];
  };
};

export const featuredWork: FeaturedProject[] = [
  {
    id: "fg-ai-studio",
    name: "FG AI Studio",
    category: "AI Platform — Agentic Workflows — Enterprise",
    headline: "Complete frontend overhaul of an enterprise AI agent platform.",
    description:
      "FG AI Studio (AgentSphere) is a large-scale platform for AI agents, agentic workflows, and automation — built during a 6-week internship at Fatima Group. Led the full frontend revamp across agent chat with real-time SSE streaming, a visual workflow builder, server-driven UI forms, and a responsive multi-screen console.",
    role: "Frontend developer (Intern)",
    bullets: [
      "Revamped the entire platform frontend — 178 commits, ~34.5K lines of code across the internship.",
      "Built real-time agent chat with SSE streaming, stage indicators, and conversation management.",
      "Implemented a visual workflow builder with node-graph editing, execution state animations, and inline insertion.",
    ],
    stack: ["React", "Vite", "XYFlow", "SSE", "Server-Driven UI"],
    links: {},
    imagePosition: "right",
    visual: "dashboard",
    placeholder: {
      title: "Enterprise AI platform",
      items: ["Agent chat", "Workflow builder", "SDUI forms", "Admin console"],
    },
  },
  {
    id: "bizcare-ecosystem",
    name: "BizCare Ecosystem",
    category: "ERP - Mobile Apps - Business Operations",
    headline: "A business software ecosystem spanning ERP and published mobile apps.",
    description:
      "BizCare connects business operations with mobile-first reporting, ERP access, transaction posting, finance visibility, and client-specific workflows.",
    role: "Application and software developer",
    bullets: [
      "Shipped commercial Android and iOS apps connected to real business workflows.",
      "Worked on ERP-facing mobile experiences for reporting, sales, finance, and stock.",
      "Helped turn operational requirements into practical mobile product flows.",
    ],
    stack: ["Flutter", "ERP", "Firebase", "REST APIs", "iOS"],
    links: {},
    imagePosition: "right",
    visual: "mobile",
    placeholder: {
      title: "ERP mobile operations",
      items: ["Ledger access", "Sales reports", "Stock visibility", "Export flows"],
    },
  },
];
