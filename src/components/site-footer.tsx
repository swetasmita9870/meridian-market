import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-stone-100/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-teal-950">
            Meridian Market
          </p>
          <p className="mt-2 max-w-sm text-sm text-stone-600">
            Demo storefront powered by{" "}
            <a
              href="https://dummyjson.com/docs/products"
              className="font-medium text-teal-800 underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              DummyJSON Products API
            </a>
            . Cart and checkout are simulated in your browser.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 text-sm">
          <div>
            <p className="font-medium text-stone-800">Shop</p>
            <ul className="mt-2 space-y-1 text-stone-600">
              <li>
                <Link href="/products" className="hover:text-teal-900">
                  All products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-teal-900">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-stone-800">Account</p>
            <ul className="mt-2 space-y-1 text-stone-600">
              <li>
                <Link href="/cart" className="hover:text-teal-900">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-teal-900">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="border-t border-stone-200 py-4 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Meridian Market — built for learning & demos
      </p>
    </footer>
  );
}
