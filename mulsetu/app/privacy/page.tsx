import LegalPage from "@/components/pages/LegalPage";
import JsonLd from "@/components/ui/JsonLd";
import { privacyDocument } from "@/data/legal";
import { breadcrumbJsonLd, buildMetadata, pageSeo } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.privacy);

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <LegalPage document={privacyDocument} />
    </>
  );
}
