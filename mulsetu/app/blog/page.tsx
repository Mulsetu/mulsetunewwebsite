import BlogPage from "@/components/pages/BlogPage";
import JsonLd from "@/components/ui/JsonLd";
import { blogJsonLd, breadcrumbJsonLd, buildMetadata, pageSeo } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.blog);

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          blogJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <BlogPage />
    </>
  );
}
