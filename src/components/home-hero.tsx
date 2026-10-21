import Link from "next/link";
import { SectionShell } from "@/components/marketing/section-shell";

export function HomeHero() {
  return (
    <SectionShell tone="sky" className="pb-12 sm:pb-14 lg:pb-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-[#3d5a4c]">Human-safe shopping, thoughtfully designed</p>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.12] tracking-tight text-[#1a1a2e] sm:text-5xl lg:text-[3.25rem]">
          Everything for a cleaner, calmer home
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#6b7280] sm:text-lg">
          Shop curated essentials across 24 categories — clear categories, honest product
          details, and checkout that stays out of your way.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link href="/products" className="btn-primary">
            Shop the catalog
          </Link>
          <Link href="/mission" className="btn-secondary bg-white/80">
            Our mission
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
