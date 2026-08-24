export const siteConfig = {
  name: "Isaiah Mauyon",
  role: "Software Engineer",
  description:
    "Software engineer building thoughtful, performant web experiences. Portfolio, projects, and ways to get in touch.",
  email: "hello@example.com",
  location: "Remote",
  socials: {
    github: "https://github.com/isaiahmauyon",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
};

export const skills: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "GraphQL",
  "AWS",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of what this project does, the problem it solves, and the impact it had.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
    repo: "https://github.com/isaiahmauyon",
  },
  {
    title: "Project Two",
    description:
      "Another highlight project. Describe the interesting technical challenge and your role in solving it.",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "#",
    repo: "https://github.com/isaiahmauyon",
  },
  {
    title: "Project Three",
    description:
      "A side project or open-source contribution worth showing off. Keep it concise and outcome-focused.",
    tags: ["GraphQL", "AWS"],
    repo: "https://github.com/isaiahmauyon",
  },
];
