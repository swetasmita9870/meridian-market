import Link from "next/link";
import { SectionShell } from "@/components/marketing/section-shell";

export function MissionCta() {
  return (
    <SectionShell tone="primary">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center sm:gap-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Shopping that feels good — for you and the planet
        </h2>
        <p className="text-base leading-relaxed text-blue-100/95 sm:text-lg">
          We believe fewer, better choices beat endless aisles. Read how Meridian Market
          approaches curation, transparency, and impact.
        </p>
        <Link
          href="/impact"
          className="mt-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0077b6] transition hover:bg-blue-50"
        >
          See our impact
        </Link>
      </div>
    </SectionShell>
  );
}
