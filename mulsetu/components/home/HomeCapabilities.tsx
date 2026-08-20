"use client";

import { useState } from "react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { capabilityTabs, homeCapabilities } from "@/data/home";
import { cn } from "@/lib/cn";
import MediaReveal from "@/components/ui/MediaReveal";

export default function HomeCapabilities() {
  const [activeId, setActiveId] = useState(capabilityTabs[0].id);
  const active = capabilityTabs.find((tab) => tab.id === activeId) ?? capabilityTabs[0];

  return (
    <section className="section home-capabilities">
      <div className="container">
        <div className="home-capabilities__header">
          <h2 className="home-capabilities__title">{homeCapabilities.title}</h2>
          <div className="home-capabilities__tabs" role="tablist" aria-label="Capabilities">
            {capabilityTabs.map((tab) => (
              <Link
                key={tab.id}
                href={tab.href}
                role="tab"
                aria-selected={tab.id === activeId}
                className={cn(
                  "badge badge--filter",
                  tab.id === activeId && "badge--filter-active",
                )}
                onClick={(event) => {
                  event.preventDefault();
                  setActiveId(tab.id);
                }}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>

        <article className="capability-card">
          <MediaReveal className="capability-card__media">
            <img
              src={active.image}
              alt={`${active.title} — ${active.label}`}
              width={960}
              height={640}
              loading="lazy"
              decoding="async"
            />
          </MediaReveal>
          <div className="capability-card__body">
            <Badge variant="teal">{active.badge}</Badge>
            <h3 className="capability-card__title">{active.title}</h3>
            <p className="capability-card__copy">{active.description}</p>
            <Link href={active.href} className="text-link text-link--lg">
              {active.linkLabel}
              <img src="/icons/arrow.svg" alt="" width={12} height={12} />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
