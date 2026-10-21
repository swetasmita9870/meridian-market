import { SectionShell } from "@/components/marketing/section-shell";

const STATS = [
  { value: "194+", label: "Products to explore" },
  { value: "24", label: "Curated categories" },
  { value: "4.8★", label: "Average rating" },
  { value: "1M+", label: "Demo orders placed" },
];

export function StatsBand() {
  return (
    <SectionShell tone="white" className="py-10 sm:py-12 lg:py-14">
      <div className="rounded-2xl border border-[#e5e7eb] bg-[#fafafa] px-4 py-8 sm:px-8 sm:py-10">
        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0">
          {STATS.map((stat, index) => (
            <li
              key={stat.label}
              className={`text-center ${
                index > 0 ? "lg:border-l lg:border-[#e5e7eb] lg:pl-8" : "lg:pr-4"
              } ${index < 3 ? "lg:pr-8" : ""}`}
            >
              <p className="text-3xl font-semibold tracking-tight text-[#0077b6] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-[#6b7280]">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
