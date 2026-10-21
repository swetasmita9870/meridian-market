"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import { useCart } from "@/context/cart-context";

export function QuickAddButton({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (product.stock < 1) return;
    addItem(product, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={product.stock < 1}
      className={`rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-wide transition disabled:opacity-40 ${
        added
          ? "bg-emerald-500 text-white"
          : "bg-white/95 text-zinc-900 shadow-lg hover:bg-violet-600 hover:text-white"
      } ${className}`}
    >
      {product.stock < 1 ? "Sold out" : added ? "Added" : "Quick add"}
    </button>
  );
}
