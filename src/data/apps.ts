export type StoreLinks = {
  play?: string;
  appStore?: string;
};

export type App = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  links: StoreLinks;
  type: "commercial" | "personal";
  featured: boolean;
  icon: string;
  screenshots: [string, string, string];
  visual: {
    initials: string;
    tone: "blue" | "green" | "red" | "coral";
    screens: string[];
  };
};

export const apps: App[] = [
  {
    id: "makki-autocare",
    name: "Makki AutoCare",
    tagline: "Vehicle maintenance tracking for service customers.",
    description:
      "A commercial automotive service app for maintenance history, vehicle records, reminders, and customer service transparency across Android and iOS.",
    stack: ["Flutter", "Firebase", "iOS", "Android"],
    links: {
      play: "https://play.google.com/store/apps/details?id=com.bizcare.makki_autocare&pcampaignid=web_share",
      appStore: "https://apps.apple.com/us/app/makki-autocare/id6752372809",
    },
    type: "commercial",
    featured: true,
    icon: "/assets/apps/makki-autocare-icon.webp",
    screenshots: [
      "/assets/apps/makki-autocare-1.webp",
      "/assets/apps/makki-autocare-2.webp",
      "/assets/apps/makki-autocare-3.webp",
    ],
    visual: {
      initials: "MA",
      tone: "blue",
      screens: ["Service history", "Oil reminders", "Vehicle records"],
    },
  },
  {
    id: "bizcare",
    name: "BizCare",
    tagline: "ERP-connected mobile operations app.",
    description:
      "A business management companion for sales, payments, finance, stock, production reports, and ERP access from mobile devices.",
    stack: ["Flutter", "ERP", "Reports", "APIs"],
    links: {
      play: "https://play.google.com/store/apps/details?id=com.bizcare.bizcare&pcampaignid=web_share",
      appStore: "https://apps.apple.com/us/app/bizcare/id6752336703",
    },
    type: "commercial",
    featured: true,
    icon: "/assets/apps/bizcare-icon.webp",
    screenshots: [
      "/assets/apps/bizcare-1.webp",
      "/assets/apps/bizcare-2.webp",
      "/assets/apps/bizcare-3.webp",
    ],
    visual: {
      initials: "BC",
      tone: "green",
      screens: ["Sales reports", "Ledger access", "Production"],
    },
  },
  {
    id: "bizparta",
    name: "Biz Parta",
    tagline: "Parta reporting for flour mill operators.",
    description:
      "A focused business app that helps flour mill owners create, manage, export, and share Parta reports with cleaner daily operations.",
    stack: ["Flutter", "Business", "Reports", "Export"],
    links: {
      play: "https://play.google.com/store/apps/details?id=com.bizcare.bizparta&pcampaignid=web_share",
      appStore: "https://apps.apple.com/us/app/biz-parta/id6752411960",
    },
    type: "commercial",
    featured: false,
    icon: "/assets/apps/bizparta-icon.webp",
    screenshots: [
      "/assets/apps/bizparta-1.webp",
      "/assets/apps/bizparta-2.webp",
      "/assets/apps/bizparta-3.webp",
    ],
    visual: {
      initials: "BP",
      tone: "red",
      screens: ["Parta reports", "Summaries", "Share exports"],
    },
  },
  {
    id: "snapcut",
    name: "SnapCut",
    tagline: "Audio and video editing utility on Play Store.",
    description:
      "A personal media utility for quick audio/video editing workflows, published on Google Play as part of my own product experiments.",
    stack: ["Android", "Media", "Editing", "Play Store"],
    links: {
      play: "https://play.google.com/store/apps/details?id=com.bluex.soundy&pcampaignid=web_share",
    },
    type: "personal",
    featured: true,
    icon: "/assets/apps/snapcut-icon.webp",
    screenshots: [
      "/assets/apps/snapcut-1.webp",
      "/assets/apps/snapcut-2.webp",
      "/assets/apps/snapcut-3.webp",
    ],
    visual: {
      initials: "SC",
      tone: "coral",
      screens: ["Trim clips", "Audio tools", "Export media"],
    },
  },
  {
    id: "clippy",
    name: "Clippy",
    tagline: "Smart clipboard assistant for Android.",
    description:
      "A lightweight productivity app for clipboard workflows and quick access patterns, published as a personal Android product.",
    stack: ["Android", "Productivity", "Kotlin", "Play Store"],
    links: {
      play: "https://play.google.com/store/apps/details?id=com.bluex.clippy&pcampaignid=web_share",
    },
    type: "personal",
    featured: false,
    icon: "/assets/apps/clippy-icon.webp",
    screenshots: [
      "/assets/apps/clippy-1.webp",
      "/assets/apps/clippy-2.webp",
      "/assets/apps/clippy-3.webp",
    ],
    visual: {
      initials: "CL",
      tone: "blue",
      screens: ["Saved clips", "Quick actions", "Search"],
    },
  },
  {
    id: "scanix",
    name: "Scanix",
    tagline: "Document scanning utility for Android.",
    description:
      "A practical scanning app for capturing documents and streamlining everyday PDF/document workflows on Android.",
    stack: ["Android", "Scanner", "PDF", "Play Store"],
    links: {
      play: "https://play.google.com/store/apps/details?id=com.bluex.scanix&pcampaignid=web_share",
    },
    type: "personal",
    featured: false,
    icon: "/assets/apps/scanix-icon.webp",
    screenshots: [
      "/assets/apps/scanix-1.webp",
      "/assets/apps/scanix-2.webp",
      "/assets/apps/scanix-3.webp",
    ],
    visual: {
      initials: "SX",
      tone: "green",
      screens: ["Scan docs", "Enhance", "Export PDF"],
    },
  },
];
