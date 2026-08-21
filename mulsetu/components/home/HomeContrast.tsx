import { homeContrast } from "@/data/home";

export default function HomeContrast() {
  return (
    <section className="section home-contrast">
      <div className="container">
        <header className="home-contrast__intro">
          <p className="home-contrast__kicker">{homeContrast.kicker}</p>
          <h2 className="home-contrast__title">{homeContrast.title}</h2>
          <p className="home-contrast__copy">{homeContrast.copy}</p>
        </header>

        <div className="contrast-board">
          <article className="contrast-card contrast-card--traditional">
            <p className="contrast-card__label">{homeContrast.traditional.label}</p>
            <ul>
              {homeContrast.traditional.points.map((point) => (
                <li key={point}>
                  <span className="contrast-mark contrast-mark--no" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article className="contrast-card contrast-card--mulsetu">
            <p className="contrast-card__label">{homeContrast.mulsetu.label}</p>
            <ul>
              {homeContrast.mulsetu.points.map((point) => (
                <li key={point}>
                  <span className="contrast-mark contrast-mark--yes" aria-hidden="true">
                    <img src="/icons/check.svg" alt="" width={18} height={18} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
