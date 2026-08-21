import Badge from "@/components/ui/Badge";
import CTA from "@/components/ui/CTA";
import { services } from "@/data/services";
import { cn } from "@/lib/cn";
import Link from "next/link";

const servicesHero = {
  eyebrow: "Services",
  title: "One partner across the stack — not six vendors.",
  lede: "AI, web, product, operations, and launch sit in the same team. You get one conversation from the first build through what comes next.",
};

export default function ServicesPage() {
  return (
    <>
      <header className="services-hero">
        <div className="container">
          <div className="services-hero__inner">
            <Badge variant="pill-olive">{servicesHero.eyebrow}</Badge>
            <h1 className="services-hero__title">{servicesHero.title}</h1>
            <p className="services-hero__lede">{servicesHero.lede}</p>
          </div>

          <ul className="services-eco" aria-label="Mulsetu technology ecosystem">
            {services.map((service, index) => (
              <li key={service.slug}>
                <a href={`#${service.slug}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {service.menuLabel ?? service.navLabel}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <section className="services-path" aria-label="How we present each service">
        <div className="container">
          <p className="services-path__label">How each engagement reads</p>
          <ol className="services-path__steps">
            <li>
              <span>Service</span>
              What we take on
            </li>
            <li>
              <span>Capability</span>
              What we actually build
            </li>
            <li>
              <span>Outcome</span>
              What the business gets
            </li>
          </ol>
        </div>
      </section>

      <div className="services-bands">
        {services.map((service, index) => (
          <Link
            key={service.slug}
            id={service.slug}
            href={`/services/${service.slug}`}
            className={cn(
              "service-band",
              index % 2 === 1 && "service-band--flip",
            )}
          >
            <div className="container service-band__grid">
              <div className="service-band__copy">
                <p className="service-band__num">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="service-band__name">{service.navLabel}</p>
                <h2 className="service-band__title">
                  {service.headline}{" "}
                  <span>{service.headlineAccent}</span>
                </h2>
                <p className="service-band__lede">{service.description}</p>
                <dl className="service-band__path">
                  <div>
                    <dt>Capability</dt>
                    <dd>{service.capability}</dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>{service.outcome}</dd>
                  </div>
                </dl>
                <span className="service-band__go">
                  Explore {service.navLabel}
                  <img src="/icons/arrow-small.svg" alt="" width={12} height={12} />
                </span>
              </div>
              <div className="service-band__media">
                {service.heroImage ? (
                  <img
                    src={service.heroImage}
                    alt={`${service.navLabel} — ${service.headline} ${service.headlineAccent}`}
                    width={960}
                    height={720}
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="section section--compact-top">
        <CTA />
      </div>
    </>
  );
}
