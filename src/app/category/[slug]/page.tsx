import { fetchProductsByCategory } from "@/lib/api";
import { categoryLabel } from "@/lib/pricing";
import { PageHeader } from "@/components/page-header";
import { ProductGrid } from "@/components/product-grid";
import { Pagination } from "@/components/pagination";
import { ProductToolbar } from "@/components/product-toolbar";

const PAGE_SIZE = 12;

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    skip?: string;
    limit?: string;
    sortBy?: string;
    order?: string;
  }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return { title: categoryLabel(slug) };
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const skip = Math.max(0, Number(query.skip) || 0);
  const limit = Number(query.limit) || PAGE_SIZE;
  const sortBy = query.sortBy || "title";
  const order = (query.order === "desc" ? "desc" : "asc") as "asc" | "desc";

  const data = await fetchProductsByCategory(slug, { limit, skip, sortBy, order });
  const title = categoryLabel(slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Category"
        title={title}
        description={
          <>
            Endpoint{" "}
            <code className="rounded-lg bg-violet-50 px-2 py-0.5 text-sm text-violet-800">
              /products/category/{slug}
            </code>
          </>
        }
      />

      <div className="mb-8">
        <ProductToolbar
          basePath={`/category/${slug}`}
          limit={limit}
          skip={skip}
          sortBy={sortBy}
          order={order}
        />
      </div>

      <ProductGrid products={data.products} />

      <div className="mt-10">
        <Pagination
          total={data.total}
          limit={limit}
          skip={skip}
          basePath={`/category/${slug}`}
          extraQuery={{ sortBy, order }}
        />
      </div>
    </div>
  );
}
