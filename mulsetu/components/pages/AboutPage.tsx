import MediaReveal from "@/components/ui/MediaReveal";
import { aboutJourney, aboutSupport } from "@/data/about";

export default function AboutPage() {
  return (
    <>
      <section className="about-roadmap" aria-labelledby="about-roadmap-title">
        <div className="container">
          <header className="about-roadmap__intro">
            <p className="page-hero__kicker">{aboutJourney.kicker}</p>
            <h1 id="about-roadmap-title" className="about-roadmap__title">
              {aboutJourney.title}
            </h1>
            <p className="about-roadmap__lede">{aboutJourney.lede}</p>
          </header>

          <div className="about-roadmap__scroller">
            <ol className="about-roadmap__track">
              {aboutJourney.steps.map((step, index) => (
                <li key={step}>
                  <span className="about-roadmap__node">
                    <span className="about-roadmap__num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="about-roadmap__card">
                    <span className="about-roadmap__label">{step}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="about-support" aria-labelledby="about-support-title">
        <div className="container about-support__grid">
          <div>
            <p className="page-hero__kicker">{aboutSupport.kicker}</p>
            <h2 id="about-support-title" className="about-support__title">
              {aboutSupport.title}
            </h2>
            <p className="about-support__copy">{aboutSupport.copy}</p>
          </div>
          <div className="about-support__frame">
            <span className="about-support__accent" aria-hidden="true" />
            <MediaReveal className="about-support__photo">
              <img
                src={aboutSupport.image}
                alt={aboutSupport.imageAlt}
                width={960}
                height={720}
                loading="lazy"
                decoding="async"
              />
            </MediaReveal>
          </div>
        </div>
      </section>
    </>
  );
}
