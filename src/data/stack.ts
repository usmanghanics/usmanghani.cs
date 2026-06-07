export type StackGroup = {
  title: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    title: "Mobile Development",
    items: ["Flutter", "Kotlin", "Jetpack Compose", "Android", "iOS", "Material Design"],
  },
  {
    title: "AI & LLM Engineering",
    items: ["Gemini", "Claude", "RAG", "ML Kit", "n8n", "Prompt Engineering"],
  },
  {
    title: "Backend & APIs",
    items: ["Firebase", "Supabase", "REST APIs", "Python", "Node.js", "Webhooks"],
  },
  {
    title: "Databases",
    items: ["MySQL", "Firestore", "Supabase Postgres", "Realtime Data"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Vercel", "GitHub", "Play Console", "App Store Connect", "Automation"],
  },
  {
    title: "Languages",
    items: ["Dart", "Kotlin", "Python", "JavaScript", "TypeScript", "C++"],
  },
];
