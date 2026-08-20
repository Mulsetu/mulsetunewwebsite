import Link from "next/link";
import MediaReveal from "@/components/ui/MediaReveal";
import { homeIntro } from "@/data/home";

export default function HomeIntro() {
  return (
    <section className="section home-intro">
      <div className="container home-intro__grid">
        <div>
          <h2 className="home-intro__title">{homeIntro.title}</h2>
          <p className="home-intro__copy">{homeIntro.copy}</p>
          <p className="home-intro__copy home-intro__copy--links">
            Explore our{" "}
            <Link href="/services">software development services</Link>,{" "}
            <Link href="/our-work">client work</Link>,{" "}
            <Link href="/products">in-house products</Link>,{" "}
            <Link href="/about">how we work</Link>, and the{" "}
            <Link href="/blog">Mulsetu blog</Link>.
          </p>
          <ul className="home-intro__list">
            {homeIntro.points.map((point) => (
              <li key={point}>
                <span className="home-intro__check">
                  <img src="/icons/check.svg" alt="" width={20} height={20} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="home-intro__frame">
          <span className="home-intro__accent" aria-hidden="true" />
          <MediaReveal className="home-intro__photo">
            <img
              src={homeIntro.image}
              alt="Mulsetu team collaborating on software and digital product delivery"
              width={960}
              height={720}
              loading="lazy"
              decoding="async"
            />
          </MediaReveal>
        </div>
      </div>
    </section>
  );
}
