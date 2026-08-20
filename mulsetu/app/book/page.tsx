import BookCall from "@/components/pages/BookCall";
import JsonLd from "@/components/ui/JsonLd";
import { SITE_NAME, absoluteUrl, breadcrumbJsonLd, buildMetadata, pageSeo } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.book);

export default function BookPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: pageSeo.book.title,
            description: pageSeo.book.description,
            url: absoluteUrl("/book"),
            isPartOf: {
              "@type": "WebSite",
              name: SITE_NAME,
              url: absoluteUrl("/"),
            },
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Book a Free Call", path: "/book" },
          ]),
        ]}
      />
      <BookCall />
    </>
  );
}
