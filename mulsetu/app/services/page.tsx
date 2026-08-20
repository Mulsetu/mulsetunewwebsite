import ServicesPage from "@/components/pages/ServicesPage";
import JsonLd from "@/components/ui/JsonLd";
import { services } from "@/data/services";
import { absoluteUrl, breadcrumbJsonLd, buildMetadata, pageSeo } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.services);

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Mulsetu software development services",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.title,
              url: absoluteUrl(`/services/${service.slug}`),
            })),
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <ServicesPage />
    </>
  );
}
