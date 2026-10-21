import type { ReactNode } from "react";
import Link from "next/link";

export type SectionTone = "base" | "white" | "sky" | "sage" | "primary";

const TONE_CLASS: Record<SectionTone, string> = {
  base: "bg-[#f4f6f8]",
  white: "bg-white",
  sky: "bg-gradient-to-b from-[#e8f4fa] to-[#f0f7fc]",
  sage: "bg-[#e8f0ec]",
  primary: "bg-[#0077b6] text-white",
};

type SectionShellProps = {
  tone?: SectionTone;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionShell({
  tone = "white",
  children,
  className = "",
  id,
}: SectionShellProps) {
  return (
    <section id={id} className={`py-14 sm:py-16 lg:py-20 ${TONE_CLASS[tone]} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  href?: string;
  linkLabel?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  href,
  linkLabel,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={
        centered
          ? "mx-auto mb-10 max-w-2xl text-center lg:mb-12"
          : "mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"
      }
    >
      <div className={centered ? "" : "min-w-0 flex-1"}>
        {eyebrow && (
          <p
            className={`text-xs font-semibold uppercase tracking-[0.14em] ${
              centered ? "text-[#0077b6]" : "text-[#0077b6]"
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={`font-semibold tracking-tight text-[#1a1a2e] ${
            eyebrow ? "mt-2" : ""
          } text-3xl sm:text-4xl ${centered ? "" : ""}`}
        >
          {title}
        </h2>
        {description && (
          <p className={`mt-3 text-base leading-relaxed text-[#6b7280] ${centered ? "" : "max-w-2xl"}`}>
            {description}
          </p>
        )}
      </div>
      {href && linkLabel && !centered && (
        <Link
          href={href}
          className="shrink-0 text-sm font-semibold text-[#0077b6] hover:underline"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
