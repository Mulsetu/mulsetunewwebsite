import type { ReactNode } from "react";

type PageHeroProps = {
  kicker: string;
  title: ReactNode;
  lede: string;
  visual?: ReactNode;
};

export default function PageHero({ kicker, title, lede, visual }: PageHeroProps) {
  return (
    <header className={visual ? "page-hero page-hero--split" : "page-hero"}>
      <div className="container page-hero__grid">
        <div className="page-hero__copy">
          <p className="page-hero__kicker">{kicker}</p>
          <h1 className="page-hero__title">{title}</h1>
          <p className="page-hero__lede">{lede}</p>
        </div>
        {visual ? <div className="page-hero__visual">{visual}</div> : null}
      </div>
    </header>
  );
}

export function WorkHeroVisual() {
  return (
    <div className="hero-collage" aria-hidden="true">
      <span className="hero-collage__frame hero-collage__frame--a">
        <img src="/images/track-my-startup.png" alt="" />
      </span>
      <span className="hero-collage__frame hero-collage__frame--b">
        <img src="/images/judge-my-lawyer.png" alt="" />
      </span>
      <span className="hero-collage__frame hero-collage__frame--c">
        <img src="/images/startup-nation.png" alt="" />
      </span>
    </div>
  );
}

export function ProductsHeroVisual() {
  return (
    <div className="hero-collage" aria-hidden="true">
      <span className="hero-collage__frame hero-collage__frame--a">
        <img src="/images/gbp-booster-ai-agent.png" alt="" />
      </span>
      <span className="hero-collage__frame hero-collage__frame--b">
        <img src="/images/ai-interviewer.png" alt="" />
      </span>
      <span className="hero-collage__frame hero-collage__frame--c">
        <img src="/images/educational-erp.png" alt="" />
      </span>
    </div>
  );
}

export function BlogHeroVisual() {
  return (
    <div className="hero-collage" aria-hidden="true">
      <span className="hero-collage__frame hero-collage__frame--a">
        <img src="/images/ai-automation.png" alt="" />
      </span>
      <span className="hero-collage__frame hero-collage__frame--b">
        <img src="/images/saas-dev.png" alt="" />
      </span>
      <span className="hero-collage__frame hero-collage__frame--c">
        <img src="/images/web-development.png" alt="" />
      </span>
    </div>
  );
}
