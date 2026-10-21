import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchProduct, fetchProductsByCategory } from "@/lib/api";
import { categoryLabel, formatMoney, salePrice } from "@/lib/pricing";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductGrid } from "@/components/product-grid";
import { StarRating } from "@/components/star-rating";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  try {
    const product = await fetchProduct(Number(id));
    return { title: product.title };
  } catch {
    return { title: "Product" };
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const productId = Number(id);
  if (!Number.isFinite(productId)) notFound();

  let product;
  try {
    product = await fetchProduct(productId);
  } catch {
    notFound();
  }

  const related = await fetchProductsByCategory(product.category, { limit: 4 });
  const relatedProducts = related.products.filter((p) => p.id !== product.id).slice(0, 4);
  const price = salePrice(product);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-zinc-500">
        <Link href="/products" className="hover:text-violet-600">Products</Link>
        <span className="mx-2">/</span>
        <Link href={`/category/${product.category}`} className="hover:text-violet-600">
          {categoryLabel(product.category)}
        </Link>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="glass-card relative aspect-square overflow-hidden rounded-3xl p-2">
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-zinc-100">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.images.slice(0, 4).map((src) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50"
              >
                <Image src={src} alt="" fill className="object-cover" sizes="120px" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">
            {product.brand} · {categoryLabel(product.category)}
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-zinc-900 sm:text-5xl">
            {product.title}
          </h1>
          <div className="mt-5">
            <StarRating rating={product.rating} size="md" />
          </div>
          <div className="mt-8 flex flex-wrap items-baseline gap-3">
            <span className="text-4xl font-bold text-zinc-900">{formatMoney(price)}</span>
            {product.discountPercentage > 0 && (
              <>
                <span className="text-lg text-zinc-400 line-through">
                  {formatMoney(product.price)}
                </span>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-800">
                  Save {product.discountPercentage.toFixed(0)}%
                </span>
              </>
            )}
          </div>
          <p className="mt-6 text-lg leading-relaxed text-zinc-500">{product.description}</p>

          <dl className="glass-card mt-8 grid grid-cols-2 gap-4 rounded-2xl p-6 text-sm">
            <div>
              <dt className="text-zinc-500">Availability</dt>
              <dd className="font-semibold text-zinc-900">{product.availabilityStatus}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Stock</dt>
              <dd className="font-semibold text-zinc-900">{product.stock} units</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Shipping</dt>
              <dd className="font-semibold text-zinc-900">{product.shippingInformation}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Returns</dt>
              <dd className="font-semibold text-zinc-900">{product.returnPolicy}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">SKU</dt>
              <dd className="font-mono text-zinc-900">{product.sku}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Warranty</dt>
              <dd className="font-semibold text-zinc-900">{product.warrantyInformation}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <AddToCartButton product={product} />
            <Link
              href="/cart"
              className="text-sm font-semibold text-violet-600 hover:text-violet-800"
            >
              View cart →
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="font-display text-3xl text-zinc-900">Customer reviews</h2>
        <ul className="mt-8 space-y-4">
          {product.reviews.map((review, i) => (
            <li key={`${review.reviewerEmail}-${i}`} className="glass-card rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-semibold text-zinc-900">{review.reviewerName}</p>
                <StarRating rating={review.rating} />
              </div>
              <p className="mt-3 text-zinc-600">{review.comment}</p>
              <p className="mt-2 text-xs text-zinc-400">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-3xl text-zinc-900">
            More in {categoryLabel(product.category)}
          </h2>
          <div className="mt-8">
            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}
    </div>
  );
}
