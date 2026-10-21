import type { Product } from "@/lib/types";
import { ProductCard } from "./product-card";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-[#e5e7eb] bg-white px-6 py-16 text-center">
        <p className="font-medium text-[#1a1a2e]">No products found</p>
        <p className="mt-2 text-sm text-[#6b7280]">Try another search or category.</p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
