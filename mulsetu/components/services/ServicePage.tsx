import { notFound } from "next/navigation";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CTA from "@/components/ui/CTA";
import JsonLd from "@/components/ui/JsonLd";
import MediaReveal from "@/components/ui/MediaReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import TechnologyStack from "@/components/ui/TechnologyStack";
import { getService } from "@/data/services";
import { breadcrumbJsonLd, serviceJsonLd, serviceSeo } from "@/lib/seo";

type ServicePageProps = {
  slug: string;
};

export default function ServicePage({ slug }: ServicePageProps) {
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const seo = serviceSeo[service.slug];
  const path = `/services/${service.slug}`;

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: service.title,
            description: seo?.description ?? service.description,
            path,
            image: service.heroImage,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path },
          ]),
        ]}
      />
      <section className={`service-hero service-hero--${service.slug}`}>
        <span className="service-hero__veil" aria-hidden="true" />
        <div className="service-hero__grid">
          <div>
            <Badge variant="pill-olive">{service.eyebrow}</Badge>
            <h1 className="service-hero__title">
              {service.headline}{" "}
              <span className="service-hero__accent">{service.headlineAccent}</span>
            </h1>
            <p className="service-hero__copy">{service.description}</p>
            <div className="service-hero__actions">
              <Button href={service.primaryCta.href}>
                {service.primaryCta.label}
              </Button>
              <Button href={service.secondaryCta.href} variant="secondary">
                {service.secondaryCta.label}
              </Button>
            </div>
          </div>
          <MediaReveal className="service-hero__media">
            {service.heroImage ? (
              <img
                src={service.heroImage}
                alt={seo?.imageAlt ?? `${service.title} illustration`}
                width={960}
                height={720}
                fetchPriority="high"
                decoding="async"
              />
            ) : null}
          </MediaReveal>
        </div>
      </section>

      {service.highlights ? (
        <section className="service-highlights-band">
          <ul className="service-highlights">
            {service.highlights.map((item) => (
              <li key={item.title}>
                <p>{item.title}</p>
                <span>{item.copy}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="section">
        <div className="container">
          <SectionHeading title={service.offeringsTitle ?? "What We Build"} rule />
          <div className={service.offerings.length === 4 ? "offerings-grid offerings-grid--two" : "offerings-grid"}>
            {service.offerings.map((offering) => (
              <ServiceCard key={offering.title} {...offering} />
            ))}
          </div>
        </div>
      </section>

      {service.process ? (
        <section className="section service-process">
          <div className="container">
            <SectionHeading
              eyebrow={service.processEyebrow}
              title={
                <>
                  {service.processTitle}
                  {service.processTitleAccent ? (
                    <span className="service-process__accent">
                      {service.processTitleAccent}
                    </span>
                  ) : null}
                </>
              }
              rule
            />
            <div className="offerings-grid offerings-grid--two">
              {service.process.map((step) => (
                <article className="service-card" key={step.title}>
                  <p className="service-process__phase">{step.phase}</p>
                  <h3 className="service-card__title">{step.title}</h3>
                  <p className="service-card__copy">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.whyPoints ? (
        <section className="section">
          <div className="container service-why">
            <div>
              {service.whyEyebrow ? (
                <Badge variant="pill-olive">{service.whyEyebrow}</Badge>
              ) : null}
              <h2 className="service-why__title">
                {service.whyTitle}
                {service.whyTitleAccent ? (
                  <span>{service.whyTitleAccent}</span>
                ) : null}
              </h2>
              {service.whyCopy ? <p className="service-why__copy">{service.whyCopy}</p> : null}
            </div>
            <ul className="service-why__list">
              {service.whyPoints.map((point) => (
                <li key={point}>
                  <span className="home-intro__check">
                    <img src="/icons/check.svg" alt="" width={20} height={20} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <TechnologyStack items={service.stack} className="section--compact-bottom" />
      <div className="section section--compact-top">
        <CTA />
      </div>
    </>
  );
}
