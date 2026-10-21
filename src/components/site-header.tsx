"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useCart } from "@/context/cart-context";

export function SiteHeader() {
  const { itemCount } = useCart();
  const router = useRouter();
  const [query, setQuery] = useState("");

  function onSearch(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#faf8f5]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="group flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-tight text-teal-950">
              Meridian
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-teal-700/70">
              Market
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-stone-600 md:flex">
            <Link href="/products" className="hover:text-teal-900 transition-colors">
              Shop all
            </Link>
            <Link href="/categories" className="hover:text-teal-900 transition-colors">
              Categories
            </Link>
          </nav>
        </div>

        <form
          onSubmit={onSearch}
          className="flex flex-1 items-center gap-2 sm:max-w-md lg:max-w-lg"
        >
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            className="w-full rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm text-stone-800 shadow-sm outline-none ring-teal-600/20 placeholder:text-stone-400 focus:border-teal-600 focus:ring-2"
            aria-label="Search products"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-teal-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-teal-800"
          >
            Search
          </button>
        </form>

        <Link
          href="/cart"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-medium text-stone-800 shadow-sm transition hover:border-teal-300 hover:text-teal-900"
        >
          <span aria-hidden>🛒</span>
          Cart
          {itemCount > 0 && (
            <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-amber-400 px-1.5 text-xs font-bold text-teal-950">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
