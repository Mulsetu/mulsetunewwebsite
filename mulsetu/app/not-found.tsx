import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="page-hero__kicker">404</p>
        <h1 className="page-hero__title">This page is not available.</h1>
        <p className="page-hero__lede">
          The link may be out of date. Head back to the Mulsetu homepage or browse our services.
        </p>
        <p className="page-hero__lede">
          <Link href="/" className="text-link">
            Back to Home
          </Link>
          {" · "}
          <Link href="/services" className="text-link">
            Software development services
          </Link>
        </p>
      </div>
    </section>
  );
}
