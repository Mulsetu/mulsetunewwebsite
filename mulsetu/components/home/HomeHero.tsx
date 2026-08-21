import Button from "@/components/ui/Button";
import HomeHeroTypewriter from "@/components/home/HomeHeroTypewriter";
import { homeHero } from "@/data/home";

export default function HomeHero() {
  return (
    <>
      <link rel="preload" as="video" href={homeHero.video} type="video/mp4" />
      <section className="home-hero">
        <div className="home-hero__media" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="auto">
            <source src={homeHero.video} type="video/mp4" />
          </video>
        </div>
        <div className="home-hero__veil" aria-hidden="true" />
        <div className="home-hero__inner">
          <h1 className="home-hero__title">
            <span className="sr-only">
              {homeHero.line1} {homeHero.line2Before}
              {homeHero.phrases.join(", ")}
            </span>
            <span aria-hidden="true">{homeHero.line1}</span>
            <span aria-hidden="true">
              {homeHero.line2Before}
              <span className="home-hero__accent">
                <HomeHeroTypewriter />
              </span>
            </span>
          </h1>
          <p className="home-hero__lede">{homeHero.lede}</p>
          <div className="home-hero__actions">
            <Button href={homeHero.primaryCta.href} icon="/icons/arrow.svg">
              {homeHero.primaryCta.label}
            </Button>
            <Button href={homeHero.secondaryCta.href} variant="outline">
              {homeHero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
