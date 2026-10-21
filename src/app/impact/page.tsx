import { StaticPageHero } from "@/components/marketing/static-page-hero";
import { StatsBand } from "@/components/marketing/stats-band";

export const metadata = { title: "Impact" };

const IMPACT = [
  {
    stat: "194+",
    title: "Products cataloged",
    body: "A growing library across beauty, tech, home, and grocery — updated from our live API.",
  },
  {
    stat: "24",
    title: "Categories organized",
    body: "Structured navigation so you spend less time searching and more time living.",
  },
  {
    stat: "$100",
    title: "Free shipping threshold",
    body: "Encouraging fuller, more efficient orders — fewer boxes, better value.",
  },
  {
    stat: "0",
    title: "Single-use demo accounts",
    body: "No login required for this demo — privacy-first browsing by default.",
  },
];

export default function ImpactPage() {
  return (
    <>
      <StaticPageHero
        eyebrow="Impact"
        title="Small choices, measurable momentum"
        description="Blueland shares billions of bottles saved. We share the metrics that matter for a transparent demo store."
      />
      <StatsBand />
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <ul className="grid gap-6 sm:grid-cols-2">
          {IMPACT.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl bg-[#e8f4fa] p-8"
            >
              <p className="text-3xl font-semibold text-[#0077b6]">{item.stat}</p>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[#6b7280]">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
