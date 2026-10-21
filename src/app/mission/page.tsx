import { StaticPageHero } from "@/components/marketing/static-page-hero";
import { PillarsSection } from "@/components/marketing/pillars-section";

export const metadata = { title: "Our mission" };

export default function MissionPage() {
  return (
    <>
      <StaticPageHero
        eyebrow="Our mission"
        title="Fewer choices. Better outcomes."
        description="Like the brands that inspired this site, we lead with purpose — then let products speak for themselves."
      />
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <div className="prose-page max-w-3xl">
          <p>
            Blueland proved that sustainability can be joyful. Branch Basics showed that
            non-toxic living can be simple. Meridian Market brings that same clarity to a
            general catalog — organized categories, honest product data, and a checkout flow
            you can trust.
          </p>
          <h2>Planet</h2>
          <p>
            We highlight durable, reusable-minded categories and encourage thoughtful
            purchases over impulse buys. Our demo impact page tracks the difference mindful
            shopping can make at scale.
          </p>
          <h2>People</h2>
          <p>
            Clear ingredient-style product details, reviews, and policies help families make
            informed decisions — whether you are buying skincare or home essentials.
          </p>
        </div>
      </div>
      <PillarsSection />
    </>
  );
}
