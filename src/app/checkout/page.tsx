import { CheckoutForm } from "@/components/checkout-form";
import { PageHeader } from "@/components/page-header";

export const metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader eyebrow="Almost there" title="Checkout" />
      <CheckoutForm />
    </div>
  );
}
