import Button from "@/components/ui/Button";
import { bookingHref } from "@/data/navigation";
import { homeBottomLine } from "@/data/home";

export default function HomeBottomLine() {
  return (
    <section className="section home-bottomline">
      <div className="container">
        <div className="cta">
          <span className="cta__orb cta__orb--tl" />
          <span className="cta__orb cta__orb--br" />
          <div className="cta__inner">
            <p className="home-bottomline__kicker">{homeBottomLine.kicker}</p>
            <h2 className="cta__title">{homeBottomLine.title}</h2>
            <p className="cta__copy">{homeBottomLine.copy}</p>
            <div className="cta__actions">
              <Button href={bookingHref} icon="/icons/arrow.svg">
                {homeBottomLine.ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
