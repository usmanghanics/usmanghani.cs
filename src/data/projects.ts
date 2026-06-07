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
    id: "ember",
    name: "Ember",
    description:
      "AI-powered Android computer vision app using on-device ML Kit detection workflows.",
    role: "Sole developer",
    stack: ["Kotlin", "ML Kit", "Compose"],
    type: "mobile",
    image: "/assets/projects/ember.webp",
    images: [
      "/assets/projects/ember.webp",
      "/assets/projects/ember-2.webp",
      "/assets/projects/ember-3.webp",
    ],
    featured: true,
  },
  {
    id: "snappy",
    name: "Snappy",
    description:
      "Social Android app with media sharing, realtime chat, Firebase, Supabase, and Compose UI.",
    role: "Lead Android developer",
    stack: ["Kotlin", "Firebase", "Supabase"],
    type: "mobile",
    link: "https://github.com/Code-with-UsmanG/Snappy",
    image: "/assets/projects/snappy.webp",
    images: [
      "/assets/projects/snappy.webp",
      "/assets/projects/snappy-2.webp",
      "/assets/projects/snappy-3.webp",
    ],
    featured: true,
  },
  {
    id: "sonic",
    name: "Sonic",
    description:
      "Native Android music player with playlist management, album art, and playback controls.",
    role: "Android developer",
    stack: ["Kotlin", "Compose", "Android SDK"],
    type: "mobile",
    link: "https://github.com/Code-with-UsmanG/Sonic",
    image: "/assets/projects/sonic.webp",
    images: [
      "/assets/projects/sonic.webp",
      "/assets/projects/sonic-2.webp",
      "/assets/projects/sonic-3.webp",
    ],
  },
  {
    id: "ulearn",
    name: "ULearn",
    description:
      "Learning management app with Firebase-backed course access and student progress workflows.",
    role: "Backend and API developer",
    stack: ["Kotlin", "Firebase", "LMS"],
    type: "mobile",
    image: "/assets/projects/ulearn.webp",
    images: [
      "/assets/projects/ulearn.webp",
      "/assets/projects/ulearn-2.webp",
      "/assets/projects/ulearn-3.webp",
    ],
  },
  {
    id: "lumina",
    name: "Lumina",
    description:
      "Gemini-powered AI chatbot Android app for dynamic conversational experiences.",
    role: "Lead Android developer",
    stack: ["Kotlin", "Gemini API", "AI"],
    type: "mobile",
    image: "/assets/projects/lumina.webp",
    images: [
      "/assets/projects/lumina.webp",
      "/assets/projects/lumina-2.webp",
      "/assets/projects/lumina-3.webp",
    ],
  },
  {
    id: "calculator",
    name: "Calculator",
    description:
      "Modern calculator and unit conversion app with calculation history and clean Material UI.",
    role: "UI/UX and Android developer",
    stack: ["Kotlin", "Material", "Utility"],
    type: "mobile",
    image: "/assets/projects/calculator.webp",
    images: [
      "/assets/projects/calculator.webp",
      "/assets/projects/calculator-2.webp",
      "/assets/projects/calculator-3.webp",
    ],
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
  },
  {
    id: "udo",
    name: "UDO",
    description:
      "Minimal to-do app with task creation, completion, deletion, and light/dark theme support.",
    role: "Lead developer",
    stack: ["Kotlin", "Compose", "Productivity"],
    type: "mobile",
    image: "/assets/projects/udo.webp",
    images: [
      "/assets/projects/udo.webp",
      "/assets/projects/udo-2.webp",
      "/assets/projects/udo-3.webp",
    ],
  },
  {
    id: "lost-found",
    name: "Lost & Found Management System",
    description:
      "University-focused mobile system where students report lost/found items and claim matched belongings.",
    role: "Sole developer",
    stack: ["Kotlin", "Firebase", "Matching"],
    type: "mobile",
    image: "/assets/projects/traceit.webp",
    images: [
      "/assets/projects/traceit.webp",
      "/assets/projects/traceit-2.webp",
      "/assets/projects/traceit-3.webp",
    ],
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
    id: "tic-tac-toe",
    name: "Tic Tac Toe",
    description:
      "Classic web game built with HTML, CSS, and JavaScript, then packaged for Android.",
    role: "Web and Android developer",
    stack: ["HTML", "CSS", "JavaScript"],
    type: "academic",
    image: "/assets/projects/tictactoe.webp",
    images: [
      "/assets/projects/tictactoe.webp",
      "/assets/projects/tictactoe-2.webp",
      "/assets/projects/tictactoe-3.webp",
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
