import Link from "next/link";
import { StaticPageHero } from "@/components/marketing/static-page-hero";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <StaticPageHero
        eyebrow="About"
        title="We make online shopping feel human again"
        description="Meridian Market is a demo storefront built to show how calm, editorial design can power a full ecommerce experience."
      />
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <div className="prose-page">
          <h2>Our story</h2>
          <p>
            We started with a simple idea: shopping should feel as clear as walking into a
            well-organized store. No loud banners, no clutter — just products, stories, and
            tools that respect your time.
          </p>
          <p>
            Meridian Market connects to a live product API so you can browse real catalogs,
            search, filter, and checkout — while enjoying a experience inspired by brands
            like Blueland and Branch Basics.
          </p>
          <h2>What we believe</h2>
          <ul>
            <li>Transparency builds trust — show prices, ratings, and availability upfront.</li>
            <li>Education comes before conversion — mission and how-it-works pages matter.</li>
            <li>Design should be quiet — typography and whitespace do the heavy lifting.</li>
          </ul>
          <p>
            Ready to explore?{" "}
            <Link href="/products" className="font-semibold text-[#0077b6] hover:underline">
              Browse the shop
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
