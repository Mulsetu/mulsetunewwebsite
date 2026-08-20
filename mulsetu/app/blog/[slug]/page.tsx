import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/pages/BlogArticle";
import JsonLd from "@/components/ui/JsonLd";
import { getPost, getRelatedPosts, posts } from "@/data/blog";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Article", robots: { index: false, follow: true } };
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    imageAlt: `${post.title} — Mulsetu article`,
    type: "article",
    publishedTime: post.isoDate,
    modifiedTime: post.isoDate,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const path = `/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: post.title,
            description: post.excerpt,
            path,
            image: post.image,
            datePublished: post.isoDate,
            dateModified: post.isoDate,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        ]}
      />
      <BlogArticle post={post} related={getRelatedPosts(post.slug)} />
    </>
  );
}
