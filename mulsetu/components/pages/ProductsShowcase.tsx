import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import MediaReveal from "@/components/ui/MediaReveal";
import { products } from "@/data/products";
import { cn } from "@/lib/cn";

export default function ProductsShowcase() {
  return (
    <div className="products-showcase">
      {products.map((product, index) => (
        <MediaReveal
          key={product.slug}
          className="reveal-block"
          style={{ transitionDelay: `${index * 70}ms` }}
        >
          <article
            id={product.slug}
            className={cn(
              "product-feature",
              index % 2 === 1 && "product-feature--flip",
            )}
          >
            <div
              className={cn(
                "product-feature__visual",
                product.image && "product-feature__visual--photo",
              )}
            >
              <span className="product-feature__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              {product.image ? (
                <img
                  src={product.image}
                  alt={`${product.title} product screenshot`}
                  width={960}
                  height={640}
                  loading="lazy"
                  decoding="async"
                />
              ) : product.icon ? (
                <img src={product.icon} alt="" width={54} height={54} />
              ) : null}
            </div>
            <div className="product-feature__body">
              <div className="product-feature__meta">
                <p className="product-feature__eyebrow">{product.eyebrow}</p>
                {product.status === "development" ? (
                  <Badge variant="pill-olive">In development</Badge>
                ) : null}
              </div>
              <h2 className="product-feature__title">{product.title}</h2>
              <p className="product-feature__copy">{product.description}</p>
              <ul className="product-feature__tags">
                {product.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <Button href="/book" size="sm">
                Talk about this product
              </Button>
            </div>
          </article>
        </MediaReveal>
      ))}
    </div>
  );
}
