"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { simulateCheckout } from "@/lib/api";
import { formatMoney } from "@/lib/pricing";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-zinc-900 transition focus:border-violet-400 focus:outline-none focus:ring-4 focus:ring-violet-500/15";

export function CheckoutForm() {
  const { lines, subtotal, itemCount, clearCart } = useCart();
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [orderId, setOrderId] = useState<number | null>(null);

  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (lines.length === 0) return;
    setStatus("loading");
    try {
      const result = await simulateCheckout(total, itemCount);
      setOrderId(result.id as number);
      clearCart();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (lines.length === 0 && status === "done") {
    return (
      <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50 to-teal-50 px-8 py-20 text-center">
        <p className="font-display text-3xl text-emerald-950">Order placed!</p>
        <p className="mt-3 text-emerald-800/90">
          DummyJSON returned cart id <strong>{orderId ?? "—"}</strong>. No payment
          was processed.
        </p>
        <Link href="/products" className="btn-primary mt-8">
          Continue shopping
        </Link>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="glass-card rounded-3xl px-8 py-16 text-center">
        <p className="text-lg font-semibold text-zinc-900">Nothing to checkout</p>
        <Link href="/cart" className="mt-4 inline-block font-semibold text-violet-600">
          Back to cart →
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-10 lg:grid-cols-[1fr_380px]">
      <div className="glass-card space-y-6 rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl text-zinc-900">Shipping details</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-zinc-600">
            First name
            <input required name="firstName" className={inputClass} />
          </label>
          <label className="block text-sm font-medium text-zinc-600">
            Last name
            <input required name="lastName" className={inputClass} />
          </label>
          <label className="block text-sm font-medium text-zinc-600 sm:col-span-2">
            Email
            <input required type="email" name="email" className={inputClass} />
          </label>
          <label className="block text-sm font-medium text-zinc-600 sm:col-span-2">
            Address
            <input required name="address" className={inputClass} />
          </label>
          <label className="block text-sm font-medium text-zinc-600">
            City
            <input required name="city" className={inputClass} />
          </label>
          <label className="block text-sm font-medium text-zinc-600">
            ZIP
            <input required name="zip" className={inputClass} />
          </label>
        </div>
        <p className="text-xs text-zinc-500">
          Demo only — submits to{" "}
          <code className="rounded bg-violet-50 px-1.5 text-violet-800">
            POST /carts/add
          </code>
        </p>
      </div>

      <aside className="glass-card h-fit rounded-2xl p-6 lg:sticky lg:top-36">
        <h2 className="font-display text-2xl text-zinc-900">Total</h2>
        <p className="mt-4 text-4xl font-bold text-violet-700">{formatMoney(total)}</p>
        <p className="mt-1 text-sm text-zinc-500">{itemCount} items</p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary mt-6 w-full disabled:opacity-60"
        >
          {status === "loading" ? "Placing order…" : "Place order"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-sm text-rose-600">Checkout failed. Try again.</p>
        )}
      </aside>
    </form>
  );
}
