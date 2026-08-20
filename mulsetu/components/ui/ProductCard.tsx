import Link from "next/link";
import Badge from "@/components/ui/Badge";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/cn";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card" id={product.slug}>
      <div className={cn("product-card__media", product.image && "product-card__media--photo")}>
        {product.status === "development" ? (
          <Badge variant="pill-olive">In development</Badge>
        ) : null}
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.title} product screenshot`}
            width={800}
            height={500}
            loading="lazy"
            decoding="async"
          />
        ) : product.icon ? (
          <img src={product.icon} alt="" width={54} height={54} />
        ) : null}
      </div>
      <div className="product-card__body">
        <p className="product-card__eyebrow">{product.eyebrow}</p>
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__copy">{product.description}</p>
        <ul className="product-card__tags">
          {product.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <Link href={product.href} className="text-link">
          View {product.title}
          <img src="/icons/arrow-small.svg" alt="" width={12} height={12} />
        </Link>
      </div>
    </article>
  );
}
