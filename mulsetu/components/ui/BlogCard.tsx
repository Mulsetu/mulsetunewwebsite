import Link from "next/link";
import Badge from "@/components/ui/Badge";
import type { BlogPost } from "@/lib/types";
import { cn } from "@/lib/cn";

type BlogCardProps = {
  post: BlogPost;
  variant?: "featured" | "grid";
};

export default function BlogCard({ post, variant = "grid" }: BlogCardProps) {
  const featured = variant === "featured";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn("blog-card", featured && "blog-card--featured")}
    >
      <div className="blog-card__media">
        <img
          src={post.image}
          alt=""
          width={800}
          height={500}
          loading={featured ? "eager" : "lazy"}
          fetchPriority={featured ? "high" : undefined}
          decoding="async"
        />
      </div>
      <div className="blog-card__body">
        <Badge variant={featured ? "pill-olive" : "pill-teal"}>{post.category}</Badge>
        {featured ? (
          <h2 className="blog-card__title">{post.title}</h2>
        ) : (
          <h3 className="blog-card__title">{post.title}</h3>
        )}
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <p className="blog-card__meta">
          <time dateTime={post.isoDate}>{post.date}</time>
          <span aria-hidden="true">·</span>
          {post.readTime} read
        </p>
      </div>
    </Link>
  );
}
