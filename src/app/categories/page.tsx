import Link from "next/link";
import { fetchCategories } from "@/lib/api";
import { categoryLabel } from "@/lib/pricing";
import { PageHeader } from "@/components/page-header";

export const metadata = {
  title: "Categories",
};

export default async function CategoriesPage() {
  const categories = await fetchCategories();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Browse"
        title="All categories"
        description={
          <>
            Loaded from{" "}
            <code className="rounded-lg bg-violet-50 px-2 py-0.5 text-sm text-violet-800">
              /products/categories
            </code>
          </>
        }
      />

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <li key={cat.slug}>
            <Link
              href={`/category/${cat.slug}`}
              className="glass-card group flex flex-col rounded-2xl p-6 transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/10"
            >
              <span className="font-display text-2xl text-zinc-900 group-hover:text-violet-700">
                {cat.name || categoryLabel(cat.slug)}
              </span>
              <span className="mt-2 text-sm text-zinc-400">{cat.slug}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
