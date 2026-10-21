import Link from "next/link";
import { fetchCategories, fetchProducts } from "@/lib/api";
import { categoryLabel } from "@/lib/pricing";
import { HomeHero } from "@/components/home-hero";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { MissionCta } from "@/components/marketing/mission-cta";
import { PillarsSection } from "@/components/marketing/pillars-section";
import { SectionHeading, SectionShell } from "@/components/marketing/section-shell";
import { StatsBand } from "@/components/marketing/stats-band";
import { ProductGrid } from "@/components/product-grid";

export default async function HomePage() {
  const [{ products }, categories] = await Promise.all([
    fetchProducts({ limit: 8, sortBy: "rating", order: "desc" }),
    fetchCategories(),
  ]);

  const featuredCategories = categories.slice(0, 6);

  return (
    <div className="overflow-x-hidden">
      <HomeHero />
      <StatsBand />
      <PillarsSection />

      <SectionShell tone="white">
        <SectionHeading
          eyebrow="Featured"
          title="Customer favorites"
          href="/products?sortBy=rating&order=desc"
          linkLabel="Shop all →"
        />
        <ProductGrid products={products} />
      </SectionShell>

      <HowItWorksSection />
      <MissionCta />

      <SectionShell tone="sky" className="border-t border-[#dbeafe]">
        <SectionHeading
          title="Shop by category"
          description="Start with what matters most to your routine."
        />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {featuredCategories.map((cat) => (
            <li key={cat.slug} className="min-w-0">
              <Link
                href={`/category/${cat.slug}`}
                className="flex h-full min-h-[4.5rem] items-center justify-center rounded-xl border border-[#cfe3f0] bg-white px-4 py-5 text-center text-sm font-semibold leading-snug text-[#1a1a2e] transition hover:border-[#0077b6] hover:shadow-sm"
              >
                {cat.name || categoryLabel(cat.slug)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <Link href="/categories" className="btn-secondary bg-white">
            View all categories
          </Link>
        </div>
      </SectionShell>
    </div>
  );
}
