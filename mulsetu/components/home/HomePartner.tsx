import Button from "@/components/ui/Button";
import { bookingHref } from "@/data/navigation";
import { homePartner, partnerReasons } from "@/data/home";

export default function HomePartner() {
  return (
    <section className="section home-partner">
      <div className="home-partner__orbs" aria-hidden="true">
        <span className="home-partner__orb home-partner__orb--tl" />
        <span className="home-partner__orb home-partner__orb--br" />
      </div>
      <div className="container home-partner__inner">
        <p className="home-partner__kicker">{homePartner.kicker}</p>
        <h2 className="home-partner__title">{homePartner.title}</h2>
        <p className="home-partner__lede">{homePartner.lede}</p>
        <div className="partner-grid">
          {partnerReasons.map((reason) => (
            <article key={reason.title} className="partner-card">
              <span className={`partner-card__icon partner-card__icon--${reason.tone}`}>
                <img src={reason.icon} alt="" width={22} height={20} />
              </span>
              <h3>{reason.title}</h3>
              <p>{reason.copy}</p>
            </article>
          ))}
        </div>
        <Button href={bookingHref} size="lg" icon="/icons/arrow.svg">
          {homePartner.ctaLabel}
        </Button>
      </div>
    </section>
  );
}
