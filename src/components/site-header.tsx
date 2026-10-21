"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useCart } from "@/context/cart-context";
import { IconBag, IconSearch } from "@/components/icons";

type NavItem = {
  href: string;
  label: string;
  match: (pathname: string) => boolean;
};

const NAV: NavItem[] = [
  {
    href: "/products",
    label: "Shop",
    match: (path) =>
      path === "/products" ||
      path.startsWith("/products/") ||
      path.startsWith("/category/") ||
      path === "/categories" ||
      path.startsWith("/search"),
  },
  {
    href: "/how-it-works",
    label: "How it works",
    match: (path) => path === "/how-it-works",
  },
  {
    href: "/mission",
    label: "Our mission",
    match: (path) => path === "/mission" || path === "/impact",
  },
  {
    href: "/about",
    label: "About",
    match: (path) => path === "/about" || path === "/faq",
  },
];

function navLinkClass(active: boolean) {
  return [
    "relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
    active
      ? "bg-[#e8f4fa] text-[#0077b6]"
      : "text-[#6b7280] hover:bg-[#f4f6f8] hover:text-[#1a1a2e]",
  ].join(" ");
}

export function SiteHeader() {
  const { itemCount } = useCart();
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  const cartActive = pathname === "/cart" || pathname === "/checkout";

  function onSearch(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e7eb] bg-white">
      <p className="border-b border-[#e5e7eb] bg-[#e8f4fa] py-2 text-center text-xs font-medium text-[#0077b6] sm:text-sm">
        Free shipping on orders over $100
      </p>
      <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-6">
            <Link href="/" className="text-xl font-semibold tracking-tight text-[#1a1a2e]">
              Meridian<span className="text-[#0077b6]">.</span>
            </Link>
            <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
              {NAV.map((item) => {
                const active = item.match(pathname);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={navLinkClass(active)}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <form onSubmit={onSearch} className="relative flex-1 lg:max-w-sm">
            <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af]" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products"
              className="w-full rounded-full border border-[#e5e7eb] bg-[#fafafa] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/15"
              aria-label="Search products"
            />
          </form>

          <Link
            href="/cart"
            className={navLinkClass(cartActive)}
            aria-current={cartActive ? "page" : undefined}
          >
            <span className="inline-flex items-center gap-2">
              <IconBag className="h-5 w-5" />
              Cart
              {itemCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#0077b6] px-1 text-xs font-bold text-white">
                  {itemCount}
                </span>
              )}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
