import HomeCapabilities from "@/components/home/HomeCapabilities";
import HomeHero from "@/components/home/HomeHero";
import HomeIntro from "@/components/home/HomeIntro";
import HomePartner from "@/components/home/HomePartner";
import HomePlatforms from "@/components/home/HomePlatforms";
import JsonLd from "@/components/ui/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  organizationJsonLd,
  pageSeo,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  ...pageSeo.home,
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          breadcrumbJsonLd([{ name: "Home", path: "/" }]),
        ]}
      />
      <HomeHero />
      <HomeIntro />
      <HomeCapabilities />
      <HomePlatforms />
      <HomePartner />
    </>
  );
}
