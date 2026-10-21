import { searchProducts } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { ProductGrid } from "@/components/product-grid";
import { Pagination } from "@/components/pagination";
import { ProductToolbar } from "@/components/product-toolbar";

const PAGE_SIZE = 12;

type SearchParams = Promise<{
  q?: string;
  skip?: string;
  limit?: string;
  sortBy?: string;
  order?: string;
}>;

export const metadata = {
  title: "Search",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const q = (params.q || "").trim();
  const skip = Math.max(0, Number(params.skip) || 0);
  const limit = Number(params.limit) || PAGE_SIZE;
  const sortBy = params.sortBy || "title";
  const order = (params.order === "desc" ? "desc" : "asc") as "asc" | "desc";

  if (!q) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Search"
          title="What are you looking for?"
          description="Use the search bar in the header to find products across the catalog."
        />
      </div>
    );
  }

  const data = await searchProducts(q, { limit, skip, sortBy, order });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Search results"
        title={`“${q}”`}
        description={
          <>
            {data.total} match{data.total === 1 ? "" : "es"} via{" "}
            <code className="rounded-lg bg-violet-50 px-2 py-0.5 text-sm text-violet-800">
              /products/search
            </code>
          </>
        }
      />

      <div className="mb-8">
        <ProductToolbar
          basePath="/search"
          limit={limit}
          skip={skip}
          sortBy={sortBy}
          order={order}
          extraQuery={{ q }}
        />
      </div>

      <ProductGrid products={data.products} />

      <div className="mt-10">
        <Pagination
          total={data.total}
          limit={limit}
          skip={skip}
          basePath="/search"
          extraQuery={{ q, sortBy, order }}
        />
      </div>
    </div>
  );
}
