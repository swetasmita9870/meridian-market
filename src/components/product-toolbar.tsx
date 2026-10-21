import Link from "next/link";

const SORT_OPTIONS = [
  { sortBy: "title", order: "asc", label: "A–Z" },
  { sortBy: "title", order: "desc", label: "Z–A" },
  { sortBy: "price", order: "asc", label: "Price ↑" },
  { sortBy: "price", order: "desc", label: "Price ↓" },
  { sortBy: "rating", order: "desc", label: "Top rated" },
];

type ToolbarProps = {
  basePath: string;
  limit: number;
  skip: number;
  sortBy: string;
  order: string;
  extraQuery?: Record<string, string>;
};

export function ProductToolbar({
  basePath,
  limit,
  skip,
  sortBy,
  order,
  extraQuery = {},
}: ToolbarProps) {
  function sortHref(nextSort: string, nextOrder: string) {
    const params = new URLSearchParams({
      ...extraQuery,
      limit: String(limit),
      skip: String(skip),
      sortBy: nextSort,
      order: nextOrder,
    });
    return `${basePath}?${params.toString()}`;
  }

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-[#e5e7eb] bg-white p-4">
      <span className="text-xs font-semibold uppercase tracking-wider text-[#6b7280]">
        Sort
      </span>
      <div className="flex flex-wrap gap-2">
        {SORT_OPTIONS.map((opt) => {
          const isActive = opt.sortBy === sortBy && opt.order === order;
          return (
            <Link
              key={`${opt.sortBy}-${opt.order}`}
              href={sortHref(opt.sortBy, opt.order)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                isActive
                  ? "bg-[#0077b6] text-white"
                  : "bg-[#fafafa] text-[#6b7280] hover:bg-[#e8f4fa] hover:text-[#0077b6]"
              }`}
            >
              {opt.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
