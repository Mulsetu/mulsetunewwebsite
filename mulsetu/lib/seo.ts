import type { Metadata } from "next";

export const SITE_URL = "https://mulsetu.com";
export const SITE_NAME = "Mulsetu";
export const LEGAL_NAME = "Mulsetu Agrotech Private Limited";
export const SITE_EMAIL = "founder@mulsetu.com";
export const DEFAULT_OG_IMAGE = "/logos/Mulsetu-Logo.png";
export const DEFAULT_OG_ALT = "Mulsetu — technology partner for growing businesses";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }
  const normalized = path === "/" ? "" : path.endsWith("/") ? path.slice(0, -1) : path;
  return `${SITE_URL}${normalized}`;
}

export function absoluteAsset(path: string) {
  if (path.startsWith("http")) {
    return path;
  }
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  absoluteTitle?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = DEFAULT_OG_ALT,
  type = "website",
  publishedTime,
  modifiedTime,
  absoluteTitle = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteAsset(image);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type,
      images: [{ url: ogImage, alt: imageAlt }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export const pageSeo = {
  home: {
    title: "Mulsetu | Software Development & AI Automation Partner in India",
    description:
      "Mulsetu is a technology partner for growing businesses — software development, AI automation, SaaS, ERP, mobile apps, and MVPs, from first build through launch.",
    path: "/",
    image: "/images/below-hero-img.png",
    imageAlt: "Mulsetu team working on digital product delivery",
  },
  about: {
    title: "About | How We Work as a Technology Partner",
    description:
      "See how Mulsetu works with businesses: from the first challenge through strategy, design, engineering, AI, launch, and continuous growth.",
    path: "/about",
  },
  services: {
    title: "Software Development Services in India",
    description:
      "AI automation, website development, SaaS, custom software and ERP, mobile apps, and MVP delivery — one Mulsetu team across the stack.",
    path: "/services",
    image: "/images/web-development.png",
    imageAlt: "Mulsetu software development services",
  },
  work: {
    title: "Our Work | Software and Product Builds",
    description:
      "Shipped work from Mulsetu, including TrackMyStartup, Judge My Lawyer, and Startup Nation India — platforms built as a long-term technology partner.",
    path: "/our-work",
    image: "/images/track-my-startup.png",
    imageAlt: "TrackMyStartup platform built by Mulsetu",
  },
  products: {
    title: "Products | AI Tools and Operational Platforms",
    description:
      "In-house Mulsetu products including Growmatics AI, AI Interviewer, Educational ERP, and Dairy OS — designed, shipped, and evolved with the same ownership model.",
    path: "/products",
    image: "/images/growwmatics-ai.png",
    imageAlt: "Growmatics AI product by Mulsetu",
  },
  blog: {
    title: "Blog | Software, AI, and Product Delivery",
    description:
      "Practical writing from Mulsetu on AI automation, SaaS, websites, ERPs, mobile apps, and MVPs — the technology decisions that actually ship.",
    path: "/blog",
    image: "/images/ai-automation.png",
    imageAlt: "Mulsetu insights on software and AI",
  },
  book: {
    title: "Book a Free Strategy Call",
    description:
      "Book a free 30-minute strategy session with Mulsetu. Tell us about your software, AI, or product challenge — we reply within 4 business hours.",
    path: "/book",
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "How Mulsetu Agrotech Private Limited handles personal information collected through mulsetu.com and related technology-business enquiries.",
    path: "/privacy",
  },
  terms: {
    title: "Terms & Conditions",
    description:
      "Terms & Conditions for the Mulsetu website and technology services operated by Mulsetu Agrotech Private Limited.",
    path: "/terms",
  },
} as const;

export const serviceSeo: Record<
  string,
  { title: string; description: string; image: string; imageAlt: string }
> = {
  "ai-automation": {
    title: "AI & Automation Services in India",
    description:
      "Production AI and workflow automation from Mulsetu — custom systems that sit inside your operations, with judgment still human.",
    image: "/images/ai-automation.png",
    imageAlt: "Illustration of AI and automation systems for business operations",
  },
  "website-development": {
    title: "Website Development for Growing Businesses",
    description:
      "High-performance marketing sites and web platforms from Mulsetu — built for speed, SEO, and a publishing model your team can keep.",
    image: "/images/web-development.png",
    imageAlt: "Illustration of a high-performance business website",
  },
  "saas-development": {
    title: "SaaS Development and Product Engineering",
    description:
      "Mulsetu builds multi-tenant SaaS with auth, billing, and release discipline so the product can survive real usage — not stall as a prototype.",
    image: "/images/saas-dev.png",
    imageAlt: "Illustration of a SaaS product platform",
  },
  "custom-software-erp": {
    title: "Custom Software and ERP Development",
    description:
      "Internal systems and ERPs shaped around how your business actually runs — operations, reporting, and modules that fit instead of forcing a generic SKU.",
    image: "/images/custom-software-erp.png",
    imageAlt: "Illustration of custom software and ERP operations",
  },
  "mobile-apps": {
    title: "Mobile App Development for iOS and Android",
    description:
      "Cross-platform mobile apps from Mulsetu for customers, field teams, and marketplaces — native feel, one codebase where it counts, backend included.",
    image: "/images/App-dev.png",
    imageAlt: "Illustration of iOS and Android mobile app development",
  },
  "mvp-development": {
    title: "MVP Development for Startups",
    description:
      "Investor-ready MVPs in 4–8 weeks from Mulsetu — locked scope, real users, and a codebase you own so you can scale without starting over.",
    image: "/images/mvp-dev.png",
    imageAlt: "Illustration of startup MVP product development",
  },
};

export const blogCategoryLinks: Record<string, { href: string; label: string }> = {
  "AI & Automation": { href: "/services/ai-automation", label: "AI & Automation services" },
  "Web Development": { href: "/services/website-development", label: "website development" },
  SaaS: { href: "/services/saas-development", label: "SaaS development" },
  MVP: { href: "/services/mvp-development", label: "MVP development" },
  "Custom Software": { href: "/services/custom-software-erp", label: "custom software and ERP" },
  Mobile: { href: "/services/mobile-apps", label: "mobile app development" },
  "AI Products": { href: "/products", label: "Mulsetu products" },
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    logo: {
      "@type": "ImageObject",
      url: absoluteAsset(DEFAULT_OG_IMAGE),
    },
    parentOrganization: {
      "@type": "Organization",
      name: LEGAL_NAME,
    },
    areaServed: "India",
    sameAs: [
      "https://www.linkedin.com/company/mulsetu-agrotech-private-limited",
      "https://www.instagram.com/mulsetu.in/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_EMAIL,
      contactType: "sales",
      availableLanguage: ["en", "hi"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      legalName: LEGAL_NAME,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    ...(input.image ? { image: absoluteAsset(input.image) } : {}),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      legalName: LEGAL_NAME,
      url: SITE_URL,
    },
    areaServed: "India",
  };
}

export function blogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Mulsetu Blog",
    description: pageSeo.blog.description,
    url: absoluteUrl("/blog"),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      legalName: LEGAL_NAME,
    },
  };
}

export function serviceMetadata(slug: string): Metadata {
  const seo = serviceSeo[slug];

  if (!seo) {
    return {};
  }

  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: `/services/${slug}`,
    image: seo.image,
    imageAlt: seo.imageAlt,
  });
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  const url = absoluteUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    image: absoluteAsset(input.image),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      legalName: LEGAL_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteAsset(DEFAULT_OG_IMAGE),
      },
    },
    url,
  };
}
