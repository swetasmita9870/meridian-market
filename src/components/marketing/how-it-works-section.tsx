import { SectionHeading, SectionShell } from "@/components/marketing/section-shell";

const STEPS = [
  {
    step: "01",
    title: "Browse the catalog",
    body: "Explore categories from beauty to tech, or search by name and brand.",
  },
  {
    step: "02",
    title: "Add what you need",
    body: "Save items to your cart — quantities stay in your browser until checkout.",
  },
  {
    step: "03",
    title: "Checkout with confidence",
    body: "Review shipping details and place a demo order in one simple flow.",
  },
];

type HowItWorksSectionProps = {
  showLink?: boolean;
};

export function HowItWorksSection({ showLink = true }: HowItWorksSectionProps) {
  return (
    <SectionShell tone="base">
      <SectionHeading
        eyebrow="How it works"
        title="Three steps. No guesswork."
        href={showLink ? "/how-it-works" : undefined}
        linkLabel={showLink ? "Learn more →" : undefined}
      />
      <ol className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
        {STEPS.map((item) => (
          <li
            key={item.step}
            className="rounded-2xl border border-[#e5e7eb] bg-white p-6 sm:p-7"
          >
            <p className="text-sm font-bold text-[#f4a261]">{item.step}</p>
            <h3 className="mt-3 text-xl font-semibold text-[#1a1a2e]">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">{item.body}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
