import OtherPage from "@/components/pages/OtherPage";
import ProductsShowcase from "@/components/pages/ProductsShowcase";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbJsonLd, buildMetadata, pageSeo } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.products);

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
      <OtherPage slug="products">
        <ProductsShowcase />
      </OtherPage>
    </>
  );
}
