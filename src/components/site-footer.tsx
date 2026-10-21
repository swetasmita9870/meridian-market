import Link from "next/link";

const SHOP = [
  { href: "/products", label: "All products" },
  { href: "/categories", label: "Categories" },
  { href: "/cart", label: "Cart" },
];

const LEARN = [
  { href: "/about", label: "About" },
  { href: "/mission", label: "Our mission" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/impact", label: "Impact" },
  { href: "/faq", label: "FAQ" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[#e5e7eb] bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2">
          <p className="text-lg font-semibold">Meridian Market</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#6b7280]">
            Calm, curated ecommerce inspired by Blueland & Branch Basics. Powered by{" "}
            <a
              href="https://dummyjson.com/docs/products"
              className="text-[#0077b6] hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              DummyJSON
            </a>
            .
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1a1a2e]">Shop</p>
          <ul className="mt-3 space-y-2 text-sm text-[#6b7280]">
            {SHOP.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#0077b6]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1a1a2e]">Learn</p>
          <ul className="mt-3 space-y-2 text-sm text-[#6b7280]">
            {LEARN.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#0077b6]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-[#e5e7eb] py-6 text-center text-xs text-[#9ca3af]">
        © 2026 Meridian Market
      </p>
    </footer>
  );
}
