export function StarRating({
  rating,
  size = "sm",
}: {
  rating: number;
  size?: "sm" | "md";
}) {
  const stars = [1, 2, 3, 4, 5];
  const text = size === "md" ? "text-base" : "text-sm";

  return (
    <div
      className={`inline-flex items-center gap-1 ${text}`}
      aria-label={`Rating ${rating} out of 5`}
    >
      <span className="flex gap-0.5" aria-hidden>
        {stars.map((n) => (
          <span
            key={n}
            className={
              n <= Math.round(rating) ? "text-amber-400" : "text-zinc-200"
            }
          >
            ★
          </span>
        ))}
      </span>
      <span className="text-xs font-medium text-zinc-500 tabular-nums">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}
