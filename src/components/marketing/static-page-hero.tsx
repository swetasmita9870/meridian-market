import { SectionShell } from "@/components/marketing/section-shell";

type StaticPageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function StaticPageHero({ eyebrow, title, description }: StaticPageHeroProps) {
  return (
    <SectionShell tone="sky" className="border-b border-[#dbeafe]">
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0077b6]">
            {eyebrow}
          </p>
        )}
        <h1 className={`font-semibold tracking-tight text-[#1a1a2e] ${eyebrow ? "mt-3" : ""} text-4xl sm:text-5xl`}>
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#6b7280]">{description}</p>
        )}
      </div>
    </SectionShell>
  );
}
