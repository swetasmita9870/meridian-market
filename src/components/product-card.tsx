import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatMoney, salePrice, categoryLabel } from "@/lib/pricing";
import { StarRating } from "./star-rating";

export function ProductCard({ product }: { product: Product }) {
  const price = salePrice(product);
  const hasDiscount = product.discountPercentage > 0;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/products/${product.id}`} className="relative aspect-square overflow-hidden bg-stone-100">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        {hasDiscount && (
          <span className="absolute left-3 top-3 rounded-full bg-amber-400 px-2.5 py-1 text-xs font-bold text-teal-950">
            −{product.discountPercentage.toFixed(0)}%
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-teal-700/80">
          {categoryLabel(product.category)}
        </p>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-medium leading-snug text-stone-900 line-clamp-2 group-hover:text-teal-900">
            {product.title}
          </h3>
        </Link>
        <StarRating rating={product.rating} />
        <div className="mt-auto flex items-baseline gap-2 pt-2">
          <span className="text-lg font-semibold text-teal-950">
            {formatMoney(price)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-stone-400 line-through">
              {formatMoney(product.price)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
