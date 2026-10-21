"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import { useCart } from "@/context/cart-context";

export function AddToCartButton({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={product.stock < 1}
      className={`btn-primary disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none ${
        added ? "!bg-emerald-500 !shadow-emerald-500/30" : ""
      } ${className}`}
    >
      {product.stock < 1 ? "Out of stock" : added ? "Added to cart ✓" : "Add to cart"}
    </button>
  );
}
