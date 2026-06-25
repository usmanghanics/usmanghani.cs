export type Project = {
  id: string;
  name: string;
  description: string;
  role: string;
  stack: string[];
  type: "mobile" | "web" | "automation" | "academic";
  link?: string;
  image?: string;
  images?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "traceit",
    name: "TraceIt",
    description:
      "Smart lost-and-found system with item reporting, matching, claims, and admin verification.",
    role: "Sole developer",
    stack: ["Kotlin", "Firebase", "Supabase"],
    type: "mobile",
    image: "/assets/projects/traceit.webp",
    images: [
      "/assets/projects/traceit.webp",
      "/assets/projects/traceit-2.webp",
      "/assets/projects/traceit-3.webp",
    ],
    featured: true,
  },
  {
    id: "spendly",
    name: "Spendly",
    description:
      "Budget tracker with expense management, clean charts, and lightweight personal finance flows.",
    role: "Lead Android developer",
    stack: ["Kotlin", "Firebase", "Charts"],
    type: "mobile",
    image: "/assets/projects/spendly.webp",
    images: [
      "/assets/projects/spendly.webp",
      "/assets/projects/spendly-2.webp",
      "/assets/projects/spendly-3.webp",
    ],
    featured: true,
  },
  {
    id: "lead-generation-n8n",
    name: "Lead Generation Automation",
    description:
      "n8n workflow work for client lead generation and process handoff automation.",
    role: "Automation developer",
    stack: ["n8n", "Webhooks", "Automation"],
    type: "automation",
  },
  {
    id: "france-insurance-flow",
    name: "French Car Insurance Workflow",
    description:
      "Optimized an existing automation flow for a car insurance company operating in France.",
    role: "Workflow optimizer",
    stack: ["n8n", "CRM", "Process"],
    type: "automation",
  },
  {
    id: "tubedown",
    name: "TubeDown",
    description:
      "Web utility for downloading YouTube audio/video through a Python-backed workflow.",
    role: "Web developer",
    stack: ["Python", "JavaScript", "Web"],
    type: "web",
    link: "https://github.com/Code-with-UsmanG/TubeDown",
    image: "/assets/projects/tubedown.webp",
    images: [
      "/assets/projects/tubedown.webp",
      "/assets/projects/tubedown-2.webp",
      "/assets/projects/tubedown-3.webp",
    ],
    featured: true,
  },
  {
    id: "timsort",
    name: "TimSort Algorithm Simulator",
    description:
      "Interactive educational simulator explaining TimSort through animated algorithm steps.",
    role: "Web developer",
    stack: ["HTML", "CSS", "JavaScript"],
    type: "academic",
    image: "/assets/projects/timsort.webp",
    images: [
      "/assets/projects/timsort.webp",
      "/assets/projects/timsort-2.webp",
      "/assets/projects/timsort-3.webp",
    ],
  },
  {
    id: "treasure-hunting",
    name: "Treasure Hunting Game",
    description:
      "DSA-based adventure game using DFS, BFS, and pathfinding concepts.",
    role: "Game developer",
    stack: ["C++", "DSA", "Pathfinding"],
    type: "academic",
    link: "https://github.com/Code-with-UsmanG/DSA-Project-Treasure-Hunting-Game",
    image: "/assets/projects/treasure-hunting.webp",
    images: [
      "/assets/projects/treasure-hunting.webp",
      "/assets/projects/treasure-hunting-2.webp",
    ],
  },
  {
    id: "chess",
    name: "Chess Game",
    description:
      "CLI chess game built in C++ as an early programming fundamentals project.",
    role: "Game developer",
    stack: ["C++", "OOP", "Logic"],
    type: "academic",
    link: "https://github.com/Code-with-UsmanG/Chess-Game",
    image: "/assets/projects/chess.webp",
    images: [
      "/assets/projects/chess.webp",
      "/assets/projects/chess-2.webp",
    ],
  },
];
