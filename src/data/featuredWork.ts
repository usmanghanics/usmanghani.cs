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
    id: "leafiyo",
    name: "Leafiyo",
    category: "AI SaaS - Ebooks - Francophone Market",
    headline: "AI-powered ebook generation for multilingual digital products.",
    description:
      "Leafiyo is an AI-powered SaaS platform for creating ebooks, illustrated books, comic books, and mini-novels for French-speaking users and global creators.",
    role: "Full-stack developer",
    bullets: [
      "Built around long-running AI generation flows with clean product-state handling.",
      "Supports multilingual ebook workflows for users primarily in France.",
      "Designed as a creator-facing SaaS with generation, download, and selling paths.",
    ],
    stack: ["Next.js", "Supabase", "AI", "Stripe", "Vercel"],
    links: {
      github: "https://github.com/ayeshag7/Leafiyo.git",
    },
    imagePosition: "right",
    visual: "saas",
    image: "/assets/featured/leafiyo-1.webp",
    images: [
      "/assets/featured/leafiyo-1.webp",
      "/assets/featured/leafiyo-2.webp",
      "/assets/featured/leafiyo-3.webp",
    ],
  },
  {
    id: "dos2-ai",
    name: "DOS2-AI",
    category: "AI Platform - Condo Management - RAG",
    headline: "Condo management platform with AI concierge and automated workflows.",
    description:
      "DOS2-AI is a multi-tenant property management platform for Ontario condo corporations, combining resident portals, automated triage, RAG Q&A, and operational tools.",
    role: "Frontend and integration developer",
    bullets: [
      "Contributed frontend implementation and integration with backend services.",
      "Worked across AI-assisted property management workflows and resident-facing interfaces.",
      "Supported product areas such as document Q&A, email triage, and resident communication.",
    ],
    stack: ["React", "AI", "RAG", "Backend APIs", "WhatsApp"],
    links: {
      github: "https://github.com/usmansafdarktk/DOS2-AI",
    },
    imagePosition: "left",
    visual: "dashboard",
    image: "/assets/featured/dos2-ai-1.webp",
    images: [
      "/assets/featured/dos2-ai-1.webp",
      "/assets/featured/dos2-ai-2.webp",
      "/assets/featured/dos2-ai-3.webp",
    ],
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
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.bizcare.bizcare&pcampaignid=web_share",
      appStore: "https://apps.apple.com/us/app/bizcare/id6752336703",
    },
    imagePosition: "right",
    visual: "mobile",
    placeholder: {
      title: "ERP mobile operations",
      items: ["Ledger access", "Sales reports", "Stock visibility", "Export flows"],
    },
  },
];
