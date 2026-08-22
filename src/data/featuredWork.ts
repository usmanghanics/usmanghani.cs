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
