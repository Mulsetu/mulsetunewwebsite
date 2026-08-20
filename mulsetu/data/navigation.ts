import type { EditorialPage, FooterColumn, FooterSocial, NavLink } from "@/lib/types";
import { products } from "@/data/products";
import { services } from "@/data/services";

export const brand = {
  name: "Mulsetu",
  tagline:
    "Engineering intelligent digital ecosystems for the industrial enterprise. We transform complex operations into streamlined, scalable success.",
  logo: "/logos/Mulsetu-Logo.png",
  navLogo: "/logos/Mulsetu-nav-logo.png",
};

export const bookingHref = "/book";

export const bookingCta = {
  eyebrow: "Let's build together",
  title: "Want Us On Your Team?",
  copy: "We embed as your dedicated technology team — design, development, AI, DevOps, and all of it. One team. Full ownership. No handoffs.",
  primaryLabel: "Book Free Strategy Session",
  secondaryLabel: "Explore Our Services",
  secondaryHref: "/services",
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services", children: true },
  { label: "Our Work", href: "/our-work" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const navCta = {
  label: "Book Free Call",
  href: bookingHref,
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Products",
    links: products.map((product) => ({
      label: product.title,
      href: `/products#${product.slug}`,
    })),
  },
  {
    title: "Services",
    links: services.map((service) => ({
      label: service.menuLabel ?? service.navLabel,
      href: `/services/${service.slug}`,
    })),
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "/our-work" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: bookingHref },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export const footerSocials: FooterSocial[] = [
  {
    href: "https://www.linkedin.com/company/mulsetu-agrotech-private-limited",
    icon: "/icons/social-linkedin.svg",
    label: "Mulsetu on LinkedIn",
  },
  {
    href: "https://www.instagram.com/mulsetu.in/",
    icon: "/icons/social-instagram.svg",
    label: "Mulsetu on Instagram",
  },
];

export const copyright = "© 2026 Mulsetu. All rights reserved.";

export const editorialPages: EditorialPage[] = [
  {
    slug: "our-work",
    kicker: "Our Work",
    title: "Things We've ",
    titleAccent: "Built.",
    lede: "We embed as your in-house technology team — so what we ship is as much ours as it is yours.",
    visual: "work",
  },
  {
    slug: "products",
    kicker: "Products",
    title: "Tools we ",
    titleAccent: "build and run.",
    lede: "AI tools, campus systems, and industry platforms — designed in-house, shipped with the same ownership model as our services.",
    visual: "products",
  },
  {
    slug: "blog",
    kicker: "Insights",
    title: "Notes from the ",
    titleAccent: "build floor.",
    lede: "Practical writing on software, AI, and the technology decisions that actually ship.",
    visual: "blog",
  },
  {
    slug: "services",
    kicker: "Services",
    title: "What we can ",
    titleAccent: "build with you.",
    lede: "From AI automation to mobile apps, each engagement uses the same ownership model: one team, full delivery, no handoffs.",
  },
];

export function getEditorialPage(slug: string): EditorialPage | undefined {
  return editorialPages.find((page) => page.slug === slug);
}
