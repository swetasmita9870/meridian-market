import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatMoney, salePrice, categoryLabel } from "@/lib/pricing";
import { StarRating } from "./star-rating";

export function ProductCard({ product }: { product: Product }) {
  const price = salePrice(product);
  const hasDiscount = product.discountPercentage > 0;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[#e5e7eb] bg-white transition hover:shadow-md">
      <Link
        href={`/products/${product.id}`}
        className="relative aspect-square overflow-hidden bg-[#fafafa]"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-6 transition duration-300 group-hover:scale-[1.02]"
        />
        {hasDiscount && (
          <span className="absolute left-3 top-3 rounded-full bg-[#f4a261] px-2.5 py-1 text-xs font-bold text-white">
            −{product.discountPercentage.toFixed(0)}%
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-[#6b7280]">
          {categoryLabel(product.category)}
        </p>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-medium leading-snug text-[#1a1a2e] line-clamp-2 group-hover:text-[#0077b6]">
            {product.title}
          </h3>
        </Link>
        <StarRating rating={product.rating} />
        <div className="mt-auto flex items-baseline gap-2 pt-2">
          <span className="text-base font-semibold text-[#1a1a2e]">{formatMoney(price)}</span>
          {hasDiscount && (
            <span className="text-sm text-[#9ca3af] line-through">
              {formatMoney(product.price)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
