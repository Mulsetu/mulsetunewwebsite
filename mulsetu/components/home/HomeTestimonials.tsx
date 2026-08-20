import SectionHeading from "@/components/ui/SectionHeading";
import { homeTestimonials, testimonials } from "@/data/home";

export default function HomeTestimonials() {
  return (
    <section className="section home-testimonials" aria-label="Customer testimonials">
      <div className="container">
        <SectionHeading
          title={homeTestimonials.title}
          lede={homeTestimonials.lede}
          align="center"
        />
      </div>
      <div className="testimonials-marquee">
        <div className="testimonials-track">
          {[0, 1].map((copy) => (
            <div
              className="testimonials-set"
              key={copy}
              aria-hidden={copy === 1}
            >
              {testimonials.map((item) => (
                <article className="testimonial-card" key={`${copy}-${item.name}`}>
                  <img
                    className="testimonial-card__quote"
                    src="/icons/quote.svg"
                    alt=""
                    width={28}
                    height={22}
                  />
                  <p className="testimonial-card__text">“{item.quote}”</p>
                  <p className="testimonial-card__name">{item.name}</p>
                  <p className="testimonial-card__role">{item.role}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
