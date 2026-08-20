import CTA from "@/components/ui/CTA";
import PageHero, {
  BlogHeroVisual,
  ProductsHeroVisual,
  WorkHeroVisual,
} from "@/components/pages/PageHero";
import { getEditorialPage } from "@/data/navigation";

type OtherPageProps = {
  slug: string;
  children?: React.ReactNode;
  showCta?: boolean;
};

const visuals = {
  work: <WorkHeroVisual />,
  products: <ProductsHeroVisual />,
  blog: <BlogHeroVisual />,
};

export default function OtherPage({
  slug,
  children,
  showCta = true,
}: OtherPageProps) {
  const page = getEditorialPage(slug);

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
        visual={page.visual ? visuals[page.visual] : undefined}
      />
      {children ? <div className="other-page__content">{children}</div> : null}
      {showCta ? (
        <div className="section">
          <CTA />
        </div>
      ) : null}
    </>
  );
}
