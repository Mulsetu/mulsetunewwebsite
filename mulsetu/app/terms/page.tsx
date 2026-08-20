import LegalPage from "@/components/pages/LegalPage";
import JsonLd from "@/components/ui/JsonLd";
import { termsDocument } from "@/data/legal";
import { breadcrumbJsonLd, buildMetadata, pageSeo } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.terms);

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms" },
        ])}
      />
      <LegalPage document={termsDocument} />
    </>
  );
}
