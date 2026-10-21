import Link from "next/link";
import { StaticPageHero } from "@/components/marketing/static-page-hero";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";

export const metadata = { title: "How it works" };

const DETAILS = [
  {
    title: "Discover",
    body: "Use the shop page, categories, or search to explore hundreds of products sorted by rating, price, or name.",
  },
  {
    title: "Build your bag",
    body: "Add items from any product page. Your cart saves locally so you can keep browsing without losing your picks.",
  },
  {
    title: "Review & ship",
    body: "Enter shipping details on checkout. Orders are simulated for demo purposes — no payment is collected.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <StaticPageHero
        eyebrow="How it works"
        title="One container, refill it forever — but for your cart"
        description="We borrowed the step-by-step clarity of leading DTC sites and applied it to a full digital marketplace."
      />
      <HowItWorksSection showLink={false} />
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <ul className="grid gap-8 md:grid-cols-3">
          {DETAILS.map((item) => (
            <li key={item.title} className="rounded-2xl border border-[#e5e7eb] bg-white p-6">
              <h3 className="text-lg font-semibold text-[#0077b6]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">{item.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-center">
          <Link href="/products" className="btn-primary">Start shopping</Link>
        </p>
      </div>
    </>
  );
}
