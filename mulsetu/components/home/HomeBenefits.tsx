import { homeBenefits } from "@/data/home";

export default function HomeBenefits() {
  return (
    <section className="section home-benefits">
      <div className="container">
        <header className="home-benefits__intro">
          <p className="home-contrast__kicker">{homeBenefits.kicker}</p>
          <h2 className="home-benefits__title">{homeBenefits.title}</h2>
        </header>
        <ul className="benefit-grid">
          {homeBenefits.items.map((item) => (
            <li key={item.title} className="benefit-card">
              <span className="benefit-card__icon">
                <img src={item.icon} alt="" width={22} height={22} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
