import { SectionHeading, SectionShell } from "@/components/marketing/section-shell";

const PILLARS = [
  {
    title: "Curated with care",
    body: "Every category is organized so you can find quality essentials without the clutter.",
  },
  {
    title: "Transparent pricing",
    body: "See real discounts, ratings, and stock — pulled live from our product catalog.",
  },
  {
    title: "Simple checkout",
    body: "Add to cart, review your bag, and complete a guided checkout in minutes.",
  },
  {
    title: "Better value",
    body: "Free shipping over $100 and sort-by-price tools help you shop smarter.",
  },
];

export function PillarsSection() {
  return (
    <SectionShell tone="sage">
      <SectionHeading
        align="center"
        title="A calmer way to shop online"
        description="Inspired by thoughtful DTC brands — clear story, honest details, and room to breathe."
      />
      <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {PILLARS.map((item) => (
          <li
            key={item.title}
            className="flex h-full flex-col rounded-2xl border border-[#d8e5de] bg-white p-6"
          >
            <h3 className="text-lg font-semibold text-[#3d5a4c]">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6b7280]">{item.body}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
