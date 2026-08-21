import type { BlogPost } from "@/lib/types";

export const blogHero = {
  eyebrow: "Insights & Resources",
  title: "The Mulsetu Blog",
  lede: "Practical writing on AI, automation, SaaS, web development, and the technology decisions that actually ship.",
};

export const blogCta = {
  eyebrow: "Talk to the team",
  title: "Get expert technology guidance",
  copy: "Bring the problem as it sits today — we'll help you see the first honest build, not a slide deck.",
  primaryLabel: "Book Free Consultation",
};

export const posts: BlogPost[] = [
  {
    slug: "automation-first-pass",
    title: "What actually belongs in an automation first pass",
    excerpt:
      "Start with the work your team already repeats. Models come after the workflow is clear enough to trust.",
    category: "AI & Automation",
    date: "12 Aug 2026",
    isoDate: "2026-08-12",
    readTime: "6 min",
    image: "/images/ai-automation.png",
    featured: true,
    content: [
      {
        type: "p",
        text: "Most automation programmes stall because they start with a model. A demo looks clever in a workshop, then nobody trusts it on a Tuesday when the exception shows up. A first pass should start with the work your team already repeats — the same handoff, the same spreadsheet, the same approval that waits in a inbox.",
      },
      {
        type: "h2",
        text: "Map the loop before you pick a tool",
      },
      {
        type: "p",
        text: "Write down the trigger, the decision, the system of record, and what happens when the answer is “it depends.” If you cannot name those four things, you do not have an automation candidate yet. You have a research task. That is cheaper than wiring an API into a process nobody agrees on.",
      },
      {
        type: "p",
        text: "The first shippable slice is usually boring on purpose: a reliable handoff, an auditable log, a human still in the loop for judgment. Models belong after that path is stable enough that a wrong output is recoverable — not existential.",
      },
      {
        type: "h2",
        text: "What we keep out of v1",
      },
      {
        type: "p",
        text: "We leave out the chatbot that answers everything, the dashboard that charts every metric, and the integration that touches six systems on day one. A first pass earns trust in one workflow. Then you widen the surface. That is how production AI actually sits inside operations — not as a side demo.",
      },
    ],
  },
  {
    slug: "sites-your-team-can-edit",
    title: "Shipping a site your team can still edit next quarter",
    excerpt:
      "Performance and a publishing model beat a one-off redesign. Here's how we keep marketing sites from freezing in place.",
    category: "Web Development",
    date: "4 Aug 2026",
    isoDate: "2026-08-04",
    readTime: "5 min",
    image: "/images/web-development.png",
    content: [
      {
        type: "p",
        text: "A redesign that nobody can update is a freeze in slow motion. The site looks sharp at launch, then campaigns wait on a developer, landing pages rot, and the next agency gets hired to “refresh” what should have been editable all along.",
      },
      {
        type: "h2",
        text: "Publishing is part of the product",
      },
      {
        type: "p",
        text: "Before we pick a CMS, we ask who publishes, how often, and what must never be a ticket. Hero copy, case studies, and campaign pages usually belong in the hands of marketing. Navigation, design tokens, and core templates stay in the system. That split is the real architecture — not the framework name on a slide.",
      },
      {
        type: "p",
        text: "Performance is not a later fix. Image strategy, Core Web Vitals, and a component set the team can extend without inventing a new page type every month. If adding a page requires a redesign, the model is already wrong.",
      },
      {
        type: "h2",
        text: "What “done” should mean",
      },
      {
        type: "p",
        text: "Done is a site your team can ship from, not a screenshot of week twelve. We leave you a design system, a publishing path, and a codebase you own. Next quarter’s campaign should not need a kickoff call to change a headline.",
      },
    ],
  },
  {
    slug: "saas-before-the-polish",
    title: "Tenancy and billing before the dashboard polish",
    excerpt:
      "A SaaS that looks finished and can't invoice is still a prototype. Lock the operational backbone first.",
    category: "SaaS",
    date: "28 Jul 2026",
    isoDate: "2026-07-28",
    readTime: "7 min",
    image: "/images/saas-dev.png",
    content: [
      {
        type: "p",
        text: "A SaaS that looks finished and cannot invoice is still a prototype. Ten customers will find the crack immediately: mixed data, a billing edge case, a role that can see the wrong workspace. Polish on top of that is expensive to unwind.",
      },
      {
        type: "h2",
        text: "The backbone is not optional",
      },
      {
        type: "p",
        text: "Tenancy, roles, and a source of truth for who pays for what — those decisions are the product. Dashboards can wait. If two companies share a row because “we’ll split it later,” you do not have multi-tenant software. You have a hosted app with a time bomb.",
      },
      {
        type: "p",
        text: "Billing belongs in the same conversation as onboarding. Trials, seats, plans, and failed payments are not finance’s problem after launch. They are product flows. We treat Stripe (or the equivalent) as part of the architecture, not a plugin on the settings page.",
      },
      {
        type: "h2",
        text: "Release like you mean it",
      },
      {
        type: "p",
        text: "Environments, monitoring, and a release path that can survive real usage. A demo that falls over at ten customers was never a platform. Ship the operational backbone first. Then paint the rooms people live in.",
      },
    ],
  },
  {
    slug: "investor-ready-mvp",
    title: "What investor-ready should mean in eight weeks",
    excerpt:
      "Real users, real auth, a codebase you own. An MVP is not a clickable deck with a login screen taped on.",
    category: "MVP",
    date: "18 Jul 2026",
    isoDate: "2026-07-18",
    readTime: "5 min",
    image: "/images/mvp-dev.png",
    content: [
      {
        type: "p",
        text: "Investor-ready is not a Figma file with a login. It is a product a stranger can use, with auth that holds, a core journey that completes, and a codebase you can keep. Eight weeks is enough for that if the scope is locked — and fatal if it isn’t.",
      },
      {
        type: "h2",
        text: "Lock the journey, not the wishlist",
      },
      {
        type: "p",
        text: "We align on one user, one job, and the smallest feature set that proves it. Everything else is a later conversation. Weekly demos keep that honest. If a feature cannot be shown in the journey, it does not belong in v1.",
      },
      {
        type: "p",
        text: "The code has to be yours. Clean enough to extend, not a pile of shortcuts that force a rewrite the moment you raise. That is the difference between a prototype you throw away and an MVP you take to customers.",
      },
      {
        type: "h2",
        text: "What we hand over",
      },
      {
        type: "p",
        text: "A live product, environments you can run, and ownership with no licence trap. Continue with us after launch or take the repo. Either path only works if v1 was built to be kept.",
      },
    ],
  },
  {
    slug: "erp-that-fits",
    title: "When a generic ERP will fight your operation",
    excerpt:
      "If the software needs a week of training to match how the floor actually runs, it isn't fitted — it's forced.",
    category: "Custom Software",
    date: "9 Jul 2026",
    isoDate: "2026-07-09",
    readTime: "6 min",
    image: "/images/custom-software-erp.png",
    content: [
      {
        type: "p",
        text: "Generic ERPs fail in a specific way: the floor invents workarounds, leadership stops trusting the numbers, and the “implementation” never ends. If the software needs a week of training to match how people already work, it is not fitted. It is forced.",
      },
      {
        type: "h2",
        text: "Start from the operation",
      },
      {
        type: "p",
        text: "We sit with the process first — inventory, admissions, collection routes, whatever the business actually runs on. Then we decide what to build. Modules named after a vendor catalogue are not a strategy. The question is which decisions need a system of record, and which can stay human.",
      },
      {
        type: "p",
        text: "Reporting has to come from the same place teams already type. A second dashboard that leadership loves and operations ignore is just another spreadsheet with better colours.",
      },
      {
        type: "h2",
        text: "Fit beats feature count",
      },
      {
        type: "p",
        text: "A smaller system that matches the floor will beat a suite with forty modules nobody opens. Custom does not mean endless. It means the software wraps around the business — not the other way around.",
      },
    ],
  },
  {
    slug: "one-codebase-both-stores",
    title: "One codebase vs native when both stores matter",
    excerpt:
      "Flutter and React Native earn their keep when speed-to-both-stores matters more than two separate teams.",
    category: "Mobile",
    date: "27 Jun 2026",
    isoDate: "2026-06-27",
    readTime: "4 min",
    image: "/images/App-dev.png",
    content: [
      {
        type: "p",
        text: "Two native teams is the right call when the product is the OS — camera pipelines, heavy offline maps, a interaction model that only one platform gets right. For most business apps, both stores matter more than that purity. Flutter and React Native earn their keep there.",
      },
      {
        type: "h2",
        text: "What you are actually buying",
      },
      {
        type: "p",
        text: "Speed to both stores, one design system, and a backend that is not an afterthought. Chat, notifications, and live status still need a real service layer. Cross-platform does not mean “skip the API.” It means you do not hire two UI teams to ship the same journey twice.",
      },
      {
        type: "p",
        text: "Launch is part of the build: signing, review, analytics, and a release cadence you can keep after v1. An app that ships once and cannot update is a brochure.",
      },
      {
        type: "h2",
        text: "When we still go native",
      },
      {
        type: "p",
        text: "When a platform capability is the product. Until then, one codebase where it counts — and a native feel the user does not have to think about.",
      },
    ],
  },
  {
    slug: "listings-as-product",
    title: "Google Business Profile is still a product surface",
    excerpt:
      "Reviews, posts, and hours are not a side chore. Treat the listing like a channel you can actually operate.",
    category: "AI Products",
    date: "14 Jun 2026",
    isoDate: "2026-06-14",
    readTime: "5 min",
    image: "/images/gbp-booster-ai-agent.png",
    content: [
      {
        type: "p",
        text: "Local search is not a set-and-forget listing. Hours, photos, posts, and reviews are a channel — as operational as a storefront window. Teams treat them as a chore, then wonder why the profile looks abandoned while the ads keep running.",
      },
      {
        type: "h2",
        text: "Operate it like a product",
      },
      {
        type: "p",
        text: "That means a cadence: replies that actually land, posts that match what the business is doing this week, and an audit that does not take a Friday afternoon. AI is useful here when it writes into a system someone still owns — not when it posts into the void.",
      },
      {
        type: "p",
        text: "GBP booster AI Agent exists because listing work is repetitive enough to automate and important enough to get wrong. The booster is the writing and the scheduling. The product is a profile that stays sharp.",
      },
      {
        type: "h2",
        text: "The test",
      },
      {
        type: "p",
        text: "If a customer searched you tomorrow, would the listing match the business they walk into? If not, you do not have a marketing gap. You have an unoperated product surface.",
      },
    ],
  },
];

export const featuredPost = posts.find((post) => post.featured) ?? posts[0];
export const gridPosts = posts.filter((post) => post.slug !== featuredPost.slug);

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const current = getPost(slug);
  if (!current) {
    return posts.slice(0, count);
  }

  const sameCategory = posts.filter(
    (post) => post.slug !== slug && post.category === current.category,
  );
  const others = posts.filter(
    (post) => post.slug !== slug && post.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, count);
}
