import Link from "next/link";
import Badge from "@/components/ui/Badge";
import BlogCard from "@/components/ui/BlogCard";
import type { BlogPost } from "@/lib/types";
import { blogCategoryLinks } from "@/lib/seo";

type BlogArticleProps = {
  post: BlogPost;
  related: BlogPost[];
};

export default function BlogArticle({ post, related }: BlogArticleProps) {
  const relatedService = blogCategoryLinks[post.category];

  return (
    <article className="article-page">
      <header className="article-hero">
        <div className="container">
          <div className="article-hero__top">
            <Link href="/blog" className="article-back">
              <img src="/icons/arrow-small.svg" alt="" width={12} height={12} />
              Back to the Mulsetu blog
            </Link>
            <Badge variant="pill-olive">{post.category}</Badge>
          </div>
          <h1 className="article-hero__title">{post.title}</h1>
          <p className="article-hero__meta">
            <time dateTime={post.isoDate}>{post.date}</time>
            <span aria-hidden="true">·</span>
            <span>Mulsetu</span>
            <span aria-hidden="true">·</span>
            {post.readTime} read
          </p>
        </div>
      </header>

      <div className="container">
        <div className="article-media">
          <img
            src={post.image}
            alt={`${post.title} — featured image`}
            width={1200}
            height={675}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      <div className="article-body">
        {post.content.map((block, index) =>
          block.type === "h2" ? (
            <h2 key={`${block.type}-${index}`}>{block.text}</h2>
          ) : (
            <p key={`${block.type}-${index}`}>{block.text}</p>
          ),
        )}
        {relatedService ? (
          <p>
            Related reading: explore Mulsetu’s{" "}
            <Link href={relatedService.href}>{relatedService.label}</Link>.
          </p>
        ) : null}
      </div>

      {related.length > 0 ? (
        <section className="article-related" aria-label="Related articles">
          <div className="container">
            <h2 className="article-related__title">Keep reading</h2>
            <div className="blog-grid">
              {related.map((item) => (
                <BlogCard key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
