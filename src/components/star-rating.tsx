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
      className={`inline-flex items-center gap-0.5 ${text}`}
      aria-label={`Rating ${rating} out of 5`}
    >
      {stars.map((n) => (
        <span
          key={n}
          className={n <= Math.round(rating) ? "text-amber-500" : "text-stone-300"}
          aria-hidden
        >
          ★
        </span>
      ))}
      <span className="ml-1 text-stone-500 tabular-nums">{rating.toFixed(1)}</span>
    </div>
  );
}
