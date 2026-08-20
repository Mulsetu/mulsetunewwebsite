import type { Service } from "@/lib/types";

const defaultCtas = {
  primaryCta: { label: "Book Free Consultation", href: "/book" },
  secondaryCta: { label: "Explore Services", href: "/services" },
};

const serviceRecords: Service[] = [
  {
    slug: "ai-automation",
    navLabel: "AI & Automation",
    menuLabel: "AI & Automation",
    navIcon: "/icons/nav-ai.svg",
    title: "AI & Automation",
    eyebrow: "AI & Automation",
    headline: "Automate the work.",
    headlineAccent: "Keep the judgment.",
    description:
      "Custom AI systems, workflow automation, and intelligent tools that sit inside your operations — not as a demo, as production software.",
    capability: "Production AI inside the workflow — not a demo on the side.",
    outcome: "Hours returned to the team, with judgment still human.",
    ...defaultCtas,
    offerings: [
      {
        title: "Workflow automation",
        description:
          "Map repetitive processes and replace them with reliable, auditable automation your team can actually run.",
      },
      {
        title: "Custom AI products",
        description:
          "Document analysis, assistants, and decision support built around your data and your constraints.",
      },
      {
        title: "Integration layer",
        description:
          "Connect CRM, ERP, and internal tools so models and automations have a real source of truth.",
      },
    ],
    stack: ["Python", "OpenAI", "LangChain", "n8n", "PostgreSQL", "FastAPI"],
  },
  {
    slug: "website-development",
    navLabel: "Website Development",
    menuLabel: "Website Development",
    navIcon: "/icons/nav-web.svg",
    title: "Website Development",
    eyebrow: "Website Development",
    headline: "Sites that look sharp.",
    headlineAccent: "And convert.",
    description:
      "Marketing sites and web platforms engineered for speed, SEO, and the way your team actually publishes.",
    capability: "Fast sites with a publishing model your team can keep.",
    outcome: "Pages that convert — and still get updated next quarter.",
    ...defaultCtas,
    offerings: [
      {
        title: "Marketing websites",
        description:
          "High-performance Next.js sites with a design system your team can extend without starting over.",
      },
      {
        title: "CMS architecture",
        description:
          "Headless or hybrid publishing so content, landing pages, and campaigns ship without a developer bottleneck.",
      },
      {
        title: "Performance & accessibility",
        description:
          "Core Web Vitals, image strategy, and accessible UI as a default — not a later fix.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Sanity", "Vercel"],
  },
  {
    slug: "saas-development",
    navLabel: "SaaS Development",
    menuLabel: "SaaS Development",
    navIcon: "/icons/nav-saas.svg",
    title: "SaaS Development",
    eyebrow: "SaaS Development",
    headline: "Ship a product.",
    headlineAccent: "Not a prototype.",
    description:
      "Multi-tenant platforms with auth, billing, and the operational backbone required to grow past the first ten customers.",
    capability: "Tenancy, billing, and release discipline before the polish.",
    outcome: "A product that can survive real usage, not a demo that stalls.",
    ...defaultCtas,
    offerings: [
      {
        title: "Product architecture",
        description:
          "Tenancy, roles, and data models designed before you paint yourself into a rewrite.",
      },
      {
        title: "App development",
        description:
          "Web apps with the dashboards, workflows, and APIs your users will live in every day.",
      },
      {
        title: "Launch operations",
        description:
          "Environments, monitoring, and a release process that can survive real usage.",
      },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
  },
  {
    slug: "custom-software-erp",
    navLabel: "Custom Software & ERP",
    menuLabel: "Custom Software & ERP",
    navIcon: "/icons/nav-erp.svg",
    title: "Custom Software & ERP",
    eyebrow: "Custom Software & ERP",
    headline: "Software around the business.",
    headlineAccent: "Not the other way around.",
    description:
      "Internal systems, ERPs, and operational platforms that match how your company actually works.",
    capability: "Software shaped around the operation, not a generic SKU.",
    outcome: "The process lives in the system — not in a tangle of sheets.",
    ...defaultCtas,
    offerings: [
      {
        title: "Operations platforms",
        description:
          "Replace spreadsheet sprawl with systems for inventory, finance, people, and delivery.",
      },
      {
        title: "ERP modules",
        description:
          "Admissions, billing, manufacturing, or logistics — built to fit, not forced to fit a generic SKU.",
      },
      {
        title: "Data & reporting",
        description:
          "The numbers leadership needs, from the systems teams already use.",
      },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Python", "Power BI"],
  },
  {
    slug: "mobile-apps",
    navLabel: "Mobile App Development",
    menuLabel: "Mobile Apps",
    navIcon: "/icons/nav-mobile.svg",
    title: "Mobile App Development",
    eyebrow: "Mobile App Development",
    headline: "Native feel.",
    headlineAccent: "One codebase where it counts.",
    description:
      "iOS and Android apps for customers, field teams, and marketplaces — with the backend included.",
    capability: "Native feel, one codebase where it counts, backend included.",
    outcome: "A product people open every day — in the field or in the store.",
    ...defaultCtas,
    offerings: [
      {
        title: "Cross-platform apps",
        description:
          "Flutter or React Native when speed-to-both-stores matters more than two separate teams.",
      },
      {
        title: "Realtime features",
        description:
          "Chat, notifications, and live status without bolting on a fragile afterthought.",
      },
      {
        title: "App store launch",
        description:
          "Signing, review, analytics, and a release cadence you can keep after we ship v1.",
      },
    ],
    stack: ["Flutter", "React Native", "Firebase", "Node.js"],
  },
  {
    slug: "mvp-development",
    navLabel: "MVP Development",
    menuLabel: "MVP Development",
    navIcon: "/icons/nav-mvp.svg",
    title: "MVP Development",
    eyebrow: "MVP Development",
    headline: "Ship the first version.",
    headlineAccent: "Own what comes next.",
    description:
      "Lean, investor-ready MVPs for startups — live with real users in weeks, with a codebase you can take further.",
    capability: "A locked-scope v1 in weeks, with code you fully own.",
    outcome: "Real users and a path to scale — without starting over.",
    ...defaultCtas,
    offeringsTitle: "MVPs We Specialise In",
    highlights: [
      { title: "4–8 Weeks", copy: "Ideas to live product." },
      { title: "Fast", copy: "Startup-focused delivery." },
      { title: "Fixed Scope", copy: "No surprise costs." },
      { title: "100% Yours", copy: "Full code ownership." },
    ],
    offerings: [
      {
        title: "Web App MVPs",
        description:
          "Full-stack web applications built for speed — user authentication, core workflows, dashboards, and admin panels. Live and accessible from any browser in 4–8 weeks.",
        points: ["User auth & roles", "Admin dashboard", "Core feature set", "Cloud deployment"],
      },
      {
        title: "Mobile App MVPs",
        description:
          "Android and iOS apps (or cross-platform Flutter) with your core user journey built and shipped to the App Store and Play Store — ready for real user testing in 4–8 weeks.",
        points: ["Android & iOS", "App Store submission", "Flutter cross-platform", "Push notifications"],
      },
      {
        title: "SaaS MVPs",
        description:
          "Multi-side SaaS platforms with subscription billing, onboarding flows and basic analytics — everything an investor or early customer needs to understand the product's value.",
        points: ["Multi-role access", "Onboarding flow", "Subscription billing", "Usage analytics"],
      },
      {
        title: "AI & Backend MVPs",
        description:
          "Scalable REST or GraphQL APIs, third-party integrations, and backend systems for products that need a solid data layer before building the frontend.",
        points: ["REST / GraphQL API", "Database design", "Third-party integrations", "API documentation"],
      },
    ],
    processEyebrow: "How we do it",
    processTitle: "From Kickoff to Live in ",
    processTitleAccent: "8 Weeks",
    process: [
      {
        phase: "Week 1",
        title: "Discovery & Scope Lock",
        copy: "We align on your target user, core user journey, and the exact feature set for v1. Nothing gets built without a locked scope.",
      },
      {
        phase: "Week 1–2",
        title: "Design",
        copy: "UX wireframes and UI designs in your brand style. You approve before a single line of code is written.",
      },
      {
        phase: "Week 3–6",
        title: "Development",
        copy: "Frontend, backend, database and integrations built in parallel. Weekly demos so you see progress — no black box development.",
      },
      {
        phase: "Week 6–8",
        title: "Testing & Launch",
        copy: "QA, bug fixes, cloud deployment and go-live. We submit to App Stores if mobile and hand you a production-ready product.",
      },
    ],
    whyEyebrow: "Why Mulsetu for MVPs",
    whyTitle: "Built to Validate. ",
    whyTitleAccent: "Ready to Scale.",
    whyCopy:
      "Most agencies build MVPs that are either too slow, too bloated, or too fragile to show investors. We build lean, real products with clean code — so you can validate fast and scale without starting over.",
    whyPoints: [
      "Validate your idea with real users before raising a round.",
      "Go to market in weeks, not months.",
      "Investor-ready product with real functionality.",
      "Clean, scalable codebase you own completely.",
      "No scope creep — fixed deliverables, fixed timeline.",
      "Continue building with us post-launch or take the code.",
    ],
    stack: [
      "Next.js",
      "React",
      "Flutter",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Supabase",
      "Firebase",
      "Stripe",
      "AWS",
      "Vercel",
      "Render",
    ],
  },
];

const offeringIcons = [
  "/icons/offering-1.svg",
  "/icons/offering-2.svg",
  "/icons/offering-3.svg",
  "/icons/offering-4.svg",
  "/icons/offering-5.svg",
];

const heroBySlug: Record<string, string> = {
  "ai-automation": "/images/ai-automation.png",
  "website-development": "/images/web-development.png",
  "saas-development": "/images/saas-dev.png",
  "custom-software-erp": "/images/custom-software-erp.png",
  "mobile-apps": "/images/App-dev.png",
  "mvp-development": "/images/mvp-dev.png",
};

export const services: Service[] = serviceRecords.map((service) => ({
  ...service,
  heroImage: service.heroImage ?? heroBySlug[service.slug],
  offerings: service.offerings.map((offering, index) => ({
    ...offering,
    icon: offering.icon ?? offeringIcons[index % offeringIcons.length],
  })),
}));

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
