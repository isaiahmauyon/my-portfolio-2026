export const siteConfig = {
  brand: "Pauloo.design",
  name: "Paul Isaiah",
  roles: ["Lead Product Designer", "Frontend Engineer"],
  headline: {
    lead: "Designing complex products.",
    trail: " Building better experiences.",
  },
  intro:
    "I'm Paul Isaiah, a Lead Product Designer with 5 years of experience designing digital products across fintech, Lending, SaaS, and healthtech — with hands-on frontend experience that helps me take ideas beyond Figma.",
  resumeUrl: "/resume.pdf",
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#socials" },
  ],
};

export type Showcase = {
  title: string;
  image?: string;
};

/** Top device-mockup band. Drop images in public/figma/img and set `image`. */
export const showcase: Showcase[] = [
  { title: "Onboarding", image: "/figma/img/onboarding.png" },
  { title: "Transaction Details", image: "/figma/img/transaction-details.png" },
  { title: "Pop up", image: "/figma/img/popup.png" },
];

export const workCategories = ["Product Design", "Development", "Playground"] as const;
export type WorkCategory = (typeof workCategories)[number];

export type Project = {
  title: string;
  category: string;
  href?: string;
  /** Which dropdown filter this belongs to. */
  type: WorkCategory;
  /** Optional thumbnail for the grid view (drop into public/figma/img). */
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Harp",
    category: "AI - Powered Customer Experience",
    href: "#",
    type: "Product Design",
  },
  {
    title: "Seesail",
    category: "Digital Banking / Business Management",
    href: "#",
    type: "Product Design",
  },
  {
    title: "Vittas Payment Gateway and Admin portal",
    category: "AI - Powered Customer Experience",
    href: "#",
    type: "Product Design",
  },
  {
    title: "Brane",
    category: "Digital Banking / Business Management",
    href: "#",
    type: "Product Design",
  },
];

export type Experience = {
  period: string;
  company: string;
  description: string;
};

export const experience: Experience[] = [
  {
    period: "Nov 2024 — Present",
    company: "Seesail",
    description:
      "Leading product design for a digital banking and business-management platform — wallets, funding, settlements, disputes, inventory, and reporting.",
  },
  {
    period: "Jun 2023 — Present",
    company: "Vittas Inc",
    description:
      "Designing financial and healthcare experiences: healthcare financing, loan flows, telehealth, and the Vittas Core business suite.",
  },
  {
    period: "Mar 2025 — Aug 2025",
    company: "Selego",
    description: "UI and UX design across product surfaces.",
  },
  {
    period: "Apr 2024 — Present",
    company: "YTL Technologies Ltd",
    description: "Product design work across digital products.",
  },
  {
    period: "Sep 2022 — Jan 2023",
    company: "Harp",
    description:
      "Designed an AI-powered customer-experience platform for managing conversations and automating responses.",
  },
  {
    period: "Jun 2021 — Aug 2022",
    company: "Hashbangs Technologies",
    description: "Product design across client and internal products.",
  },
];

export type Social = {
  platform: "linkedin" | "instagram" | "github" | "x";
  handle: string;
  href: string;
};

export const socials: Social[] = [
  { platform: "linkedin", handle: "@isaiahpaul", href: "https://www.linkedin.com/" },
  { platform: "instagram", handle: "@pauloo.design", href: "https://www.instagram.com/" },
  { platform: "github", handle: "@pauloo.design", href: "https://github.com/" },
  { platform: "x", handle: "@pauloo.design", href: "https://x.com/" },
];
