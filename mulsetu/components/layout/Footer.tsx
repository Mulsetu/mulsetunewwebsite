import Link from "next/link";
import {
  brand,
  copyright,
  footerColumns,
  footerSocials,
} from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <Link href="/" className="footer__brand">
            <span className="footer__mark">
              <img src={brand.logo} alt="" width={88} height={88} />
            </span>
            <span className="footer__brand-name">{brand.name}</span>
          </Link>
          <div className="footer__socials">
            {footerSocials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="footer__social"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.icon} alt="" width={16} height={16} loading="lazy" decoding="async" />
              </Link>
            ))}
          </div>
          <p className="footer__tagline">{brand.tagline}</p>
        </div>
        <div className="footer__columns">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="footer__col-title">{column.title}</p>
              <ul className="footer__col-list">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="footer__legal">{copyright}</p>
    </footer>
  );
}
