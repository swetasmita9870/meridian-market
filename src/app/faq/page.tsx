import Link from "next/link";
import { StaticPageHero } from "@/components/marketing/static-page-hero";

export const metadata = { title: "FAQ" };

const FAQ = [
  {
    q: "Is this a real store?",
    a: "Meridian Market is a demo built on DummyJSON. Product data is real; orders and payments are simulated.",
  },
  {
    q: "Where is my cart saved?",
    a: "Items stay in your browser local storage until you clear them or complete checkout.",
  },
  {
    q: "Do you offer subscriptions?",
    a: "Not in this demo — but the design supports autoship-style messaging like Blueland for future builds.",
  },
  {
    q: "How do I get free shipping?",
    a: "Orders over $100 qualify for free shipping in the cart summary.",
  },
  {
    q: "Can I return items?",
    a: "Return policies shown on each product come from the API sample data and are for display only.",
  },
];

export default function FaqPage() {
  return (
    <>
      <StaticPageHero
        eyebrow="FAQ"
        title="Questions, answered plainly"
        description="Clear help content — the way Branch Basics explains every bottle."
      />
      <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
        <dl className="divide-y divide-[#e5e7eb] border-y border-[#e5e7eb]">
          {FAQ.map((item) => (
            <div key={item.q} className="py-6">
              <dt className="text-base font-semibold text-[#1a1a2e]">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#6b7280]">{item.a}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-center text-sm text-[#6b7280]">
          Still curious?{" "}
          <Link href="/about" className="font-semibold text-[#0077b6] hover:underline">
            Read about us
          </Link>
        </p>
      </div>
    </>
  );
}
