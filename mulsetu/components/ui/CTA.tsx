import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { bookingCta, bookingHref } from "@/data/navigation";

type CTAProps = {
  eyebrow?: string;
  title?: string;
  copy?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTA({
  eyebrow = bookingCta.eyebrow,
  title = bookingCta.title,
  copy = bookingCta.copy,
  primaryLabel = bookingCta.primaryLabel,
  primaryHref = bookingHref,
  secondaryLabel = bookingCta.secondaryLabel,
  secondaryHref = bookingCta.secondaryHref,
}: CTAProps) {
  return (
    <section className="container" id="book">
      <div className="cta">
        <span className="cta__orb cta__orb--tl" />
        <span className="cta__orb cta__orb--br" />
        <div className="cta__inner">
          <Badge variant="pill-olive">{eyebrow}</Badge>
          <h2 className="cta__title">{title}</h2>
          {copy ? <p className="cta__copy">{copy}</p> : null}
          <div className="cta__actions">
            <Button href={primaryHref} icon="/icons/arrow.svg">
              {primaryLabel}
            </Button>
            {secondaryLabel ? (
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
