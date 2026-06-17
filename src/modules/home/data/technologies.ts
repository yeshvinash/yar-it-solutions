export interface Technology {
  name: string;
  category: TechnologyCategory;
}

export type TechnologyCategory =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Cloud & DevOps"
  | "Database";

export interface TechnologyGroup {
  category: TechnologyCategory;
  description: string;
  items: string[];
}

export const TECHNOLOGY_GROUPS: TechnologyGroup[] = [
  {
    category: "Frontend",
    description: "Modern, responsive interfaces built for performance and accessibility.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    description: "Robust APIs and server-side systems that scale with your business.",
    items: ["Node.js", "Python", "Java", ".NET", "GraphQL"],
  },
  {
    category: "Mobile",
    description: "Native and cross-platform apps for iOS and Android.",
    items: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
  },
  {
    category: "Cloud & DevOps",
    description: "Reliable infrastructure, CI/CD, and automated deployments.",
    items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    category: "Database",
    description: "Secure data storage and management for any workload.",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  },
];

export const TECHNOLOGY_MARQUEE = TECHNOLOGY_GROUPS.flatMap((group) => group.items);
