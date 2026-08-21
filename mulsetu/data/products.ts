import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    slug: "gbp-booster-ai-agent",
    title: "GBP booster AI Agent",
    eyebrow: "Local growth",
    description:
      "An AI booster for Google Business Profile — it writes, optimizes, and keeps listings sharp so local search actually converts.",
    href: "/products#gbp-booster-ai-agent",
    icon: "/icons/product-growmatics.svg",
    image: "/images/gbp-booster-ai-agent.png",
    status: "live",
    tags: ["Google Business Profile", "Listing optimizer", "AI booster"],
  },
  {
    slug: "ai-interviewer",
    title: "AI Interviewer",
    eyebrow: "Hiring intelligence",
    description:
      "Upload a resume and job description — the AI runs the interview. Available as a SaaS product, API, or SDK so you can ship it in your own stack.",
    href: "/products#ai-interviewer",
    icon: "/icons/product-interviewer.svg",
    image: "/images/ai-interviewer.png",
    status: "live",
    tags: ["SaaS", "API", "SDK"],
  },
  {
    slug: "educational-erp",
    title: "Educational ERP",
    eyebrow: "Campus systems",
    description:
      "A full-fledged ERP for every institute mode: online, offline, hybrid, and Udemy-style marketplaces — admissions through academics, billing, and delivery.",
    href: "/products#educational-erp",
    icon: "/icons/product-edu.svg",
    image: "/images/educational-erp.png",
    status: "live",
    tags: ["Online", "Offline", "Hybrid", "Marketplace"],
  },
  {
    slug: "dairy-os",
    title: "Dairy OS",
    eyebrow: "Operations platform",
    description:
      "Digitizes the full dairy operation — collection, processing, distribution, and reporting — in one system. Currently in development.",
    href: "/products#dairy-os",
    icon: "/icons/product-dairy.svg",
    image: "/images/dairy-os.png",
    status: "development",
    tags: ["Collection", "Processing", "Distribution"],
  },
];
