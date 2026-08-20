import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "track-my-startup",
    title: "TrackMyStartup",
    category: "Platform",
    categoryTone: "olive",
    description:
      "A platform for founders, investors, and professionals to manage fundraising, compliance, and the startup ecosystem in one place.",
    stack: [],
    modules: [
      "Fundraising",
      "Compliance",
      "Portfolio tracking",
      "Due diligence",
      "Startup profiles",
    ],
    featured: true,
    imagePosition: "right",
    logo: "/logos/TrackMyStartup-logo.png",
    image: "/images/track-my-startup.png",
    website: "https://www.trackmystartup.com/",
    linkedin: "https://www.linkedin.com/company/track-my-startup/posts/?feedView=all",
  },
  {
    slug: "judge-my-lawyer",
    title: "Judge My Lawyer",
    category: "Legal Analytics",
    categoryTone: "teal",
    description:
      "A legal analytics platform to find and compare lawyers using verified performance data.",
    stack: [],
    modules: [
      "Lawyer search",
      "Lawyer comparison",
      "Judges & courts",
      "Research articles",
    ],
    featured: true,
    imagePosition: "left",
    logo: "/logos/Judge-my-lawyer-logo.png",
    image: "/images/judge-my-lawyer.png",
    website: "https://www.judgemylawyer.com/",
  },
  {
    slug: "startup-nation-india",
    title: "Startup Nation India",
    category: "Program Platform",
    categoryTone: "olive",
    description:
      "A program platform for Startup Nation India covering registration, pitches, and evaluation.",
    stack: [],
    modules: ["Registration", "Pitch submissions", "Shortlisting", "Mentors"],
    featured: true,
    imagePosition: "right",
    logo: "/logos/Startup-nation-logo.png",
    image: "/images/startup-nation.png",
    linkedin: "https://www.linkedin.com/company/startup-nation-india/",
  },
  {
    slug: "matsya-sathi",
    title: "Matsya Sathi App",
    category: "Mobile App",
    categoryTone: "olive",
    description:
      "Currently in development — a field app for fisheries: catch logging, market rates, and support for fishing communities.",
    stack: [],
    status: "development",
  },
  {
    slug: "builder-wix-site",
    title: "Builder Website",
    category: "Wix Site",
    categoryTone: "teal",
    description:
      "Currently in development — a Wix marketing site for a builder: projects, services, and enquiry.",
    stack: [],
    status: "development",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const moreProjects = projects.filter((project) => !project.featured);
