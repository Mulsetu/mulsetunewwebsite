import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { products } from "@/data/products";

export default function HomePlatforms() {
  return (
    <section className="section home-platforms">
      <div className="container">
        <SectionHeading
          title="Our products"
          lede="AI tools and operational platforms we design, ship, and keep evolving."
          align="center"
        />
        <div className="product-grid product-grid--two">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
