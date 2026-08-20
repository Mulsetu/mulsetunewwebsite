import BookCallForm from "@/components/pages/BookCallForm";
import { bookingPage } from "@/data/booking";

export default function BookCall() {
  return (
    <section className="book-page">
      <h1 className="sr-only">Book a free strategy call with Mulsetu</h1>
      <div className="book-page__grid">
        <aside className="book-aside">
          <div className="book-card">
            <h2>{bookingPage.reachTitle}</h2>
            <div className="book-card__item">
              <p className="book-card__label">Email us</p>
              <a href={bookingPage.emailHref}>{bookingPage.email}</a>
            </div>
            <div className="book-card__item">
              <p className="book-card__label">Book a call</p>
              <p>{bookingPage.callNote}</p>
            </div>
          </div>

          <div className="book-card">
            <p className="book-card__eyebrow">{bookingPage.expectTitle}</p>
            <ul className="book-card__list">
              {bookingPage.expect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>

        <BookCallForm />
      </div>
    </section>
  );
}
