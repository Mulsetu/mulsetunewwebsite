import type { Testimonial } from "@/lib/types";

export const homeIntro = {
  title: "Technology built around your business",
  copy: "At Mulsetu, we don't just write code; we architect digital ecosystems. Our dedicated teams integrate deeply with your operational workflows to deploy AI-driven automation, robust scalable platforms, and predictive intelligence that solve real-world industrial bottlenecks.",
  points: [
    "Dedicated engineering squads aligned with your goals.",
    "Proprietary AI integration for industrial automation.",
    "End-to-end digital transformation consulting.",
  ],
  image: "/images/below-hero-img.png",
};

export const homeHero = {
  line1: "Planning to Go Digital but",
  line2Before: "Don't Know ",
  phrases: ["What to Build?", "Who to Trust?", "Where to Start?"],
  lede: "We work as your own dedicated technology team — not a vendor you hire for a project. Your CTO, your developers, your designers. Long-term. All in one place.",
  primaryCta: { label: "Book Free Consultation", href: "/book" },
  secondaryCta: { label: "Explore Services", href: "/services" },
  image: "/images/home-hero.jpg",
  video: "/videos/hero-bg-mulsetu.mp4",
};

export const capabilityTabs = [
  {
    id: "ai",
    label: "AI & Automation",
    href: "/services/ai-automation",
    badge: "Featured service",
    title: "Industrial Automation Suite",
    description:
      "Deploy self-optimizing robotic systems and predictive maintenance protocols across your factory floor. Our custom suites integrate seamlessly with existing hardware to reduce downtime by up to 40%.",
    linkLabel: "Explore Automation",
    image: "/images/ai-automation.png",
  },
  {
    id: "web",
    label: "Web Dev",
    href: "/services/website-development",
    badge: "Featured service",
    title: "High-performance web platforms",
    description:
      "Marketing sites and customer portals engineered for speed, SEO, and the way your team actually publishes — without a redesign every quarter.",
    linkLabel: "Explore Web Dev",
    image: "/images/web-development.png",
  },
  {
    id: "saas",
    label: "SaaS Development",
    href: "/services/saas-development",
    badge: "Featured service",
    title: "SaaS platforms that survive real usage",
    description:
      "Reliable environments, release pipelines, and SaaS infrastructure that can survive real usage — not a demo that falls over at ten customers.",
    linkLabel: "Explore SaaS Development",
    image: "/images/saas-dev.png",
  },
  {
    id: "mvp",
    label: "MVP",
    href: "/services/mvp-development",
    badge: "Featured service",
    title: "Investor-ready MVPs, shipped fast",
    description:
      "Lean web, mobile, SaaS, and backend MVPs in 4–8 weeks — fixed scope, clean code, and full ownership so you can validate with real users and scale without starting over.",
    linkLabel: "Explore MVP Development",
    image: "/images/mvp-dev.png",
  },
];

export const homeCapabilities = {
  title: "Our Core Capabilities",
};

export const homePartner = {
  kicker: "Ready to transform?",
  title: "Why partner with Mulsetu?",
  lede: "We bring decades of combined experience, taking total ownership of your digital transformation journey.",
  ctaLabel: "Book Free Call",
};

export const partnerReasons = [
  {
    title: "Deep Expertise",
    copy: "Decades of combined experience in industrial engineering and modern software development.",
    icon: "/icons/partner-expertise.svg",
    tone: "forest",
  },
  {
    title: "Total Ownership",
    copy: "We take full responsibility from initial architecture to final deployment and maintenance.",
    icon: "/icons/partner-ownership.svg",
    tone: "teal",
  },
  {
    title: "Agile Flexibility",
    copy: "Our frameworks adapt to your legacy systems, scaling gracefully as your needs evolve.",
    icon: "/icons/partner-agile.svg",
    tone: "cyan",
  },
  {
    title: "Long-term Partnership",
    copy: "We build relationships, functioning as an extension of your internal IT and operations teams.",
    icon: "/icons/partner-partnership.svg",
    tone: "lime",
  },
] as const;

export const homeTestimonials = {
  title: "What Our Customers Say",
  lede: "Teams we embed with — on the products we ship together.",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mulsetu didn't just build an app; they architected a solution that scaled seamlessly when we hit 10k users in our first month.",
    name: "Dr. Saeel Momin",
    role: "Founder, TrackMyStartup",
  },
  {
    quote:
      "They worked like an in-house team. Scope stayed locked, weekly demos were honest, and we launched without a rewrite hanging over us.",
    name: "Arjun Mehta",
    role: "COO, EduCore",
  },
  {
    quote:
      "The MVP was investor-ready in eight weeks — real auth, real billing, real users. That changed the conversation in the room.",
    name: "Priya Nair",
    role: "CEO, Flowline",
  },
  {
    quote:
      "Clean code, clear ownership, no handoffs. We kept shipping with the same squad after launch because they already knew the product.",
    name: "Daniel Okonkwo",
    role: "Head of Product, MediConnect",
  },
  {
    quote:
      "We replaced a tangle of spreadsheets with software that matches how our plants actually run. Downtime dropped in the first quarter.",
    name: "Helena Vargas",
    role: "Operations Director, Northline",
  },
  {
    quote:
      "Fixed scope, fixed timeline, and the codebase is ours. That combination is rarer than agencies admit.",
    name: "Samir Patel",
    role: "Founder, Artisan Market",
  },
];

export const homeContrast = {
  kicker: "Not Your Typical IT Company",
  title: "We Work Like Your Own Team. Not Like a Vendor.",
  copy: "Traditional IT companies finish the project and move on. We stay — as your CTO, your developers, your strategists. Long after the first deployment.",
  traditional: {
    label: "Traditional IT Company",
    points: [
      "Delivers the project, disappears after handover",
      "Bills you for every change request",
      "Charges for discovery and architecture planning",
      "No strategic input — just execution",
      "You manage the vendor, they manage the code",
      "You're just another ticket in their queue",
    ],
  },
  mulsetu: {
    label: "With Mulsetu",
    points: [
      "Long-term partner — we stay, maintain, and grow with you",
      "Changes on your terms, no surprise invoices",
      "Free system design and architecture before any code",
      "Your own CTO — strategy, roadmap, architecture",
      "We work alongside your team, not above them",
      "Full accountability, one contact, zero silos",
    ],
  },
};

export const homeBenefits = {
  kicker: "What you get",
  title: "How we actually work with you",
  items: [
    {
      title: "Your Own CTO",
      copy: "Strategic technology leadership — architecture decisions, roadmap planning, and stack choices — included, not billed.",
      icon: "/icons/partner-expertise.svg",
    },
    {
      title: "Long-Term Support",
      copy: "We don't disappear after launch. Maintenance, updates, scaling, new features — we're always on, always accountable.",
      icon: "/icons/partner-partnership.svg",
    },
    {
      title: "Free Architecture & Design",
      copy: "Full system design before any development begins. No billable discovery phase. We plan first, always.",
      icon: "/icons/partner-agile.svg",
    },
    {
      title: "Changes on Your Terms",
      copy: "Requirements shift. We flex with you. Iterations and changes are built into how we work — not extra invoices.",
      icon: "/icons/partner-ownership.svg",
    },
    {
      title: "Works With Your Team",
      copy: "We collaborate with your existing staff and processes — filling skill gaps without replacing what's already working.",
      icon: "/icons/offering-1.svg",
    },
  ],
};

export const homeBottomLine = {
  kicker: "The Bottom Line",
  title: "Not a vendor. Your team.",
  copy: "If you want a technology partner fully invested in your growth — not just your invoice — Mulsetu is built for you.",
  ctaLabel: "Book Free Consultation",
};
