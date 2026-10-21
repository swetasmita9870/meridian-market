# Meridian Market (Dummy Shop)

Demo e-commerce storefront built with **Next.js** and the [DummyJSON Products API](https://dummyjson.com/docs/products).

## Features

- Home page with top-rated products and category shortcuts
- Product catalog with pagination and sorting (`limit`, `skip`, `sortBy`, `order`)
- Product detail pages with gallery, specs, and reviews
- Category browsing via `/products/categories` and `/products/category/:slug`
- Search via `/products/search?q=`
- Cart persisted in `localStorage`
- Checkout form that simulates an order with `POST /carts/add`

## Run locally

```bash
cd dummy-shop
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js App Router, React 19, TypeScript, Tailwind CSS v4
