import Link from "next/link";

type PaginationProps = {
  total: number;
  limit: number;
  skip: number;
  basePath: string;
  extraQuery?: Record<string, string>;
};

export function Pagination({
  total,
  limit,
  skip,
  basePath,
  extraQuery = {},
}: PaginationProps) {
  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const prevSkip = Math.max(0, skip - limit);
  const nextSkip = skip + limit;

  function hrefFor(skipValue: number) {
    const params = new URLSearchParams({
      ...extraQuery,
      limit: String(limit),
      skip: String(skipValue),
    });
    return `${basePath}?${params.toString()}`;
  }

  if (totalPages <= 1) return null;

  return (
    <nav
      className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#e5e7eb] bg-white px-5 py-4"
      aria-label="Pagination"
    >
      <p className="text-sm text-[#6b7280]">
        Page <span className="font-semibold text-[#1a1a2e]">{currentPage}</span> of{" "}
        <span className="font-semibold text-[#1a1a2e]">{totalPages}</span>
      </p>
      <div className="flex gap-2">
        {skip > 0 ? (
          <Link href={hrefFor(prevSkip)} className="btn-ghost px-4 py-2 text-sm">
            Previous
          </Link>
        ) : (
          <span className="px-4 py-2 text-sm text-[#d1d5db]">Previous</span>
        )}
        {nextSkip < total ? (
          <Link href={hrefFor(nextSkip)} className="btn-primary px-4 py-2 text-sm">
            Next
          </Link>
        ) : (
          <span className="px-4 py-2 text-sm text-[#d1d5db]">Next</span>
        )}
      </div>
    </nav>
  );
}
