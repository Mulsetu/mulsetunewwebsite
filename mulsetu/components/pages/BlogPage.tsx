import BlogCard from "@/components/ui/BlogCard";
import CTA from "@/components/ui/CTA";
import PageHero, { BlogHeroVisual } from "@/components/pages/PageHero";
import { blogCta, featuredPost, gridPosts } from "@/data/blog";
import { getEditorialPage } from "@/data/navigation";

export default function BlogPage() {
  const page = getEditorialPage("blog");

  if (!page) {
    return null;
  }

  return (
    <>
      <PageHero
        kicker={page.kicker}
        title={
          <>
            {page.title}
            {page.titleAccent ? (
              <span className="page-hero__accent">{page.titleAccent}</span>
            ) : null}
          </>
        }
        lede={page.lede}
        visual={<BlogHeroVisual />}
      />

      <section className="blog-featured" aria-label="Featured article">
        <div className="container">
          <BlogCard post={featuredPost} variant="featured" />
        </div>
      </section>

      <section className="blog-grid-section" aria-label="All articles">
        <div className="container">
          <div className="blog-grid">
            {gridPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <div className="section section--compact-top">
        <CTA
          eyebrow={blogCta.eyebrow}
          title={blogCta.title}
          copy={blogCta.copy}
          primaryLabel={blogCta.primaryLabel}
          secondaryLabel=""
        />
      </div>
    </>
  );
}
