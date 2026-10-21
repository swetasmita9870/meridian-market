import { CartView } from "@/components/cart-view";
import { SectionShell } from "@/components/marketing/section-shell";

export const metadata = {
  title: "Cart",
};

export default function CartPage() {
  return (
    <SectionShell tone="base" className="min-h-[55vh] py-10 sm:py-12 lg:py-14">
      <header className="mb-8 sm:mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0077b6]">
          Your bag
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#1a1a2e] sm:text-4xl">
          Shopping cart
        </h1>
      </header>
      <CartView />
    </SectionShell>
  );
}
