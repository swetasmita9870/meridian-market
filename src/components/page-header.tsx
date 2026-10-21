import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  description?: ReactNode;
  eyebrow?: string;
};

export function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <header className="mb-10 border-b border-[#e5e7eb] pb-8 md:mb-12">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-[#0077b6]">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      {description && (
        <p className="mt-3 max-w-2xl text-[#6b7280]">{description}</p>
      )}
    </header>
  );
}
