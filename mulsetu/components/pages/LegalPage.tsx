import type { LegalDocument } from "@/lib/types";

type LegalPageProps = {
  document: LegalDocument;
};

export default function LegalPage({ document }: LegalPageProps) {
  return (
    <div className="legal-page">
      <header className="legal-hero">
        <div className="container">
          <p className="page-hero__kicker">Legal</p>
          <h1 className="legal-hero__title">{document.title}</h1>
          <p className="legal-hero__entity">Mulsetu Agrotech Private Limited</p>
          <p className="legal-hero__updated">Last updated: {document.lastUpdated}</p>
          <p className="legal-hero__lede">{document.intro}</p>
          {document.notice ? <p className="legal-hero__notice">{document.notice}</p> : null}
        </div>
      </header>

      <div className="container legal-layout">
        <nav className="legal-toc" aria-label="On this page">
          <p className="legal-toc__label">On this page</p>
          <ol>
            {document.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="legal-content">
          {document.sections.map((section) => (
            <section key={section.id} id={section.id} className="legal-section">
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.id}-${index}`}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
