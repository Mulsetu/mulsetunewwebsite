export type NavLink = {
  label: string;
  href: string;
  children?: boolean;
};

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export type FooterSocial = {
  href: string;
  icon: string;
  label: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type ServiceOffering = {
  title: string;
  description: string;
  icon?: string;
  points?: string[];
};

export type ServiceHighlight = {
  title: string;
  copy: string;
};

export type ServiceProcessStep = {
  phase: string;
  title: string;
  copy: string;
};

export type Service = {
  slug: string;
  navLabel: string;
  menuLabel?: string;
  navIcon?: string;
  title: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  heroImage?: string;
  offeringsTitle?: string;
  offerings: ServiceOffering[];
  highlights?: ServiceHighlight[];
  processEyebrow?: string;
  processTitle?: string;
  processTitleAccent?: string;
  process?: ServiceProcessStep[];
  whyEyebrow?: string;
  whyTitle?: string;
  whyTitleAccent?: string;
  whyCopy?: string;
  whyPoints?: string[];
  stack: string[];
  capability: string;
  outcome: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectQuote = {
  text: string;
  name: string;
  role: string;
  initials: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  categoryTone: "olive" | "teal";
  description: string;
  stack: string[];
  modules?: string[];
  logo?: string;
  image?: string;
  featured?: boolean;
  imagePosition?: "left" | "right";
  quote?: ProjectQuote;
  metrics?: ProjectMetric[];
  href?: string;
  website?: string;
  linkedin?: string;
  status?: "development";
};

export type Product = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  icon?: string;
  image?: string;
  status?: "live" | "development";
  tags: string[];
};

export type BlogBlock = {
  type: "p" | "h2";
  text: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  isoDate: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: BlogBlock[];
};

export type EditorialPage = {
  slug: string;
  kicker: string;
  title: string;
  titleAccent?: string;
  lede: string;
  visual?: "work" | "products" | "blog";
};

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type LegalDocument = {
  slug: string;
  title: string;
  lastUpdated: string;
  intro: string;
  notice?: string;
  sections: LegalSection[];
};
