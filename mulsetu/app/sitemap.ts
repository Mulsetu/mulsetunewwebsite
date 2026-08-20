import type { MetadataRoute } from "next";
import { posts } from "@/data/blog";
import { services } from "@/data/services";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-20");

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/our-work",
    "/products",
    "/blog",
    "/book",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/blog" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : path === "/services" || path === "/book" ? 0.9 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const articleRoutes = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.isoDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
