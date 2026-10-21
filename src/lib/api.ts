import type { CategoryInfo, Product, ProductQuery, ProductsResponse } from "./types";

const BASE = "https://dummyjson.com";

function buildQuery(params: Record<string, string | number | undefined>) {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") {
      search.set(key, String(value));
    }
  }
  const q = search.toString();
  return q ? `?${q}` : "";
}

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${path}`);
  }
  return res.json() as Promise<T>;
}

export async function fetchProducts(
  query: ProductQuery = {},
): Promise<ProductsResponse> {
  return getJson(`/products${buildQuery(query as Record<string, string | number | undefined>)}`);
}

export async function fetchProduct(id: number): Promise<Product> {
  return getJson(`/products/${id}`);
}

export async function searchProducts(
  q: string,
  query: ProductQuery = {},
): Promise<ProductsResponse> {
  return getJson(
    `/products/search${buildQuery({ q, ...query } as Record<string, string | number | undefined>)}`,
  );
}

export async function fetchCategories(): Promise<CategoryInfo[]> {
  return getJson("/products/categories");
}

export async function fetchProductsByCategory(
  slug: string,
  query: ProductQuery = {},
): Promise<ProductsResponse> {
  return getJson(
    `/products/category/${slug}${buildQuery(query as Record<string, string | number | undefined>)}`,
  );
}

export async function simulateCheckout(total: number, itemCount: number) {
  const res = await fetch(`${BASE}/carts/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: 1,
      products: [{ id: 1, quantity: itemCount }],
      total,
    }),
  });
  if (!res.ok) {
    throw new Error("Checkout simulation failed");
  }
  return res.json();
}
