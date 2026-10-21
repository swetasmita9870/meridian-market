import { fetchProducts } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { ProductGrid } from "@/components/product-grid";
import { Pagination } from "@/components/pagination";
import { ProductToolbar } from "@/components/product-toolbar";

const PAGE_SIZE = 12;

type SearchParams = Promise<{
  skip?: string;
  limit?: string;
  sortBy?: string;
  order?: string;
}>;

export const metadata = {
  title: "All products",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const skip = Math.max(0, Number(params.skip) || 0);
  const limit = Number(params.limit) || PAGE_SIZE;
  const sortBy = params.sortBy || "title";
  const order = (params.order === "desc" ? "desc" : "asc") as "asc" | "desc";

  const data = await fetchProducts({ limit, skip, sortBy, order });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <PageHeader
        eyebrow="Collection"
        title="All products"
        description={
          <>
            Paginated catalog from{" "}
            <code className="rounded-lg bg-[#e8f4fa] px-2 py-0.5 text-sm text-[#0077b6]">
              /products
            </code>
          </>
        }
      />

      <div className="mb-8">
        <ProductToolbar
          basePath="/products"
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
          basePath="/products"
          extraQuery={{ sortBy, order }}
        />
      </div>
    </div>
  );
}
