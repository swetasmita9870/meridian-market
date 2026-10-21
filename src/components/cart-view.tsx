"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { formatMoney, salePrice, categoryLabel } from "@/lib/pricing";

const FREE_SHIPPING_THRESHOLD = 100;

function QuantityStepper({
  value,
  onChange,
  compact = false,
}: {
  value: number;
  onChange: (next: number) => void;
  compact?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-[#e5e7eb] bg-white ${
        compact ? "" : ""
      }`}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
        className="flex h-9 w-9 items-center justify-center rounded-l-full text-lg text-[#6b7280] transition hover:bg-[#f4f6f8] disabled:opacity-40"
      >
        −
      </button>
      <span className="min-w-8 text-center text-sm font-semibold tabular-nums">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(value + 1)}
        disabled={value >= 99}
        className="flex h-9 w-9 items-center justify-center rounded-r-full text-lg text-[#6b7280] transition hover:bg-[#f4f6f8] disabled:opacity-40"
      >
        +
      </button>
    </div>
  );
}

function ShippingProgress({ subtotal }: { subtotal: number }) {
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  if (remaining <= 0) {
    return (
      <p className="rounded-xl bg-[#e8f4fa] px-4 py-3 text-sm font-medium text-[#0077b6]">
        You&apos;ve unlocked free shipping
      </p>
    );
  }

  return (
    <div className="rounded-xl border border-[#dbeafe] bg-[#f0f7fc] px-4 py-3">
      <p className="text-sm text-[#1a1a2e]">
        Add <span className="font-semibold text-[#0077b6]">{formatMoney(remaining)}</span> more
        for free shipping
      </p>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
        <div
          className="h-full rounded-full bg-[#0077b6] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export function CartView() {
  const { lines, subtotal, itemCount, setQuantity, removeItem, clearCart } = useCart();

  if (lines.length === 0) {
    return (
      <div className="rounded-2xl border border-[#e5e7eb] bg-white px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f4fa] text-2xl">
          🛍️
        </div>
        <p className="mt-6 text-2xl font-semibold text-[#1a1a2e]">Your cart is empty</p>
        <p className="mx-auto mt-2 max-w-sm text-[#6b7280]">
          When you find something you love, it will show up here ready for checkout.
        </p>
        <Link href="/products" className="btn-primary mt-8">
          Continue shopping
        </Link>
      </div>
    );
  }

  const shipping = subtotal > FREE_SHIPPING_THRESHOLD ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-10">
      <div className="min-w-0">
        <div className="mb-4 hidden grid-cols-[1fr_120px_100px] gap-4 border-b border-[#e5e7eb] pb-3 text-xs font-semibold uppercase tracking-wider text-[#9ca3af] md:grid">
          <span>Product</span>
          <span className="text-center">Quantity</span>
          <span className="text-right">Total</span>
        </div>

        <ul className="divide-y divide-[#e5e7eb] overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white">
          {lines.map(({ product, quantity }) => {
            const unitPrice = salePrice(product);
            const linePrice = unitPrice * quantity;

            return (
              <li
                key={product.id}
                className="p-4 sm:p-5 md:grid md:grid-cols-[1fr_120px_100px] md:items-center md:gap-4"
              >
                <div className="flex gap-4">
                  <Link
                    href={`/products/${product.id}`}
                    className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-[#e5e7eb] bg-[#fafafa] sm:h-24 sm:w-24"
                  >
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      fill
                      className="object-contain p-2"
                      sizes="96px"
                    />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-[#9ca3af]">
                      {categoryLabel(product.category)}
                    </p>
                    <Link
                      href={`/products/${product.id}`}
                      className="mt-1 block font-semibold leading-snug text-[#1a1a2e] hover:text-[#0077b6] line-clamp-2"
                    >
                      {product.title}
                    </Link>
                    <p className="mt-1 text-sm text-[#6b7280]">{formatMoney(unitPrice)} each</p>
                    <button
                      type="button"
                      onClick={() => removeItem(product.id)}
                      className="mt-2 hidden text-sm font-medium text-[#9ca3af] hover:text-[#0077b6] md:inline-block"
                    >
                      Remove
                    </button>
                    <div className="mt-4 md:hidden">
                      <div className="flex flex-wrap items-center gap-3">
                        <QuantityStepper
                          value={quantity}
                          onChange={(n) => setQuantity(product.id, n)}
                        />
                        <button
                          type="button"
                          onClick={() => removeItem(product.id)}
                          className="text-sm font-medium text-[#6b7280] hover:text-[#0077b6]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <p className="mt-3 text-base font-bold text-[#1a1a2e] md:hidden">
                      {formatMoney(linePrice)}
                    </p>
                  </div>
                </div>

                <div className="hidden justify-center md:flex">
                  <QuantityStepper
                    value={quantity}
                    onChange={(n) => setQuantity(product.id, n)}
                    compact
                  />
                </div>

                <p className="hidden text-right text-base font-bold text-[#1a1a2e] md:block">
                  {formatMoney(linePrice)}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
          <Link
            href="/products"
            className="text-sm font-semibold text-[#0077b6] hover:underline"
          >
            ← Continue shopping
          </Link>
          <button
            type="button"
            onClick={clearCart}
            className="text-sm font-medium text-[#9ca3af] hover:text-[#6b7280]"
          >
            Clear cart
          </button>
        </div>
      </div>

      <aside className="lg:sticky lg:top-28">
        <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#1a1a2e]">Order summary</h2>
          <p className="mt-1 text-sm text-[#6b7280]">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </p>

          <div className="mt-5">
            <ShippingProgress subtotal={subtotal} />
          </div>

          <dl className="mt-6 space-y-3 border-t border-[#e5e7eb] pt-6 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-[#6b7280]">Subtotal</dt>
              <dd className="font-semibold text-[#1a1a2e]">{formatMoney(subtotal)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-[#6b7280]">Shipping</dt>
              <dd className="font-semibold text-[#1a1a2e]">
                {shipping === 0 ? "Free" : formatMoney(shipping)}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-[#6b7280]">Estimated tax</dt>
              <dd className="font-semibold text-[#1a1a2e]">{formatMoney(tax)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-[#e5e7eb] pt-4 text-base">
              <dt className="font-semibold text-[#1a1a2e]">Total</dt>
              <dd className="text-xl font-bold text-[#0077b6]">{formatMoney(total)}</dd>
            </div>
          </dl>

          <Link href="/checkout" className="btn-primary mt-6 w-full text-center">
            Checkout
          </Link>
          <p className="mt-4 text-center text-xs leading-relaxed text-[#9ca3af]">
            Demo store — no payment collected. Taxes and shipping are estimates.
          </p>
        </div>

        <ul className="mt-4 space-y-2 rounded-2xl border border-[#e5e7eb] bg-white p-4 text-xs text-[#6b7280]">
          <li className="flex gap-2">
            <span className="text-[#0077b6]">✓</span>
            Free shipping on orders over $100
          </li>
          <li className="flex gap-2">
            <span className="text-[#0077b6]">✓</span>
            Cart saved in your browser
          </li>
        </ul>
      </aside>
    </div>
  );
}
