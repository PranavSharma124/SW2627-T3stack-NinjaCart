import ProductCard from "./products/ProductCard";
import { GetProduct } from "@/actions/product/get-products";

export default async function RetailerDashboard() {
  const products = await GetProduct();

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10">
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Retailer Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Welcome back! Browse fresh products and manage your orders.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Quick Overview</h2>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md">
            <p className="text-sm text-muted-foreground">Available Products</p>

            <h3 className="mt-3 text-3xl font-bold">{products.length}</h3>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md">
            <p className="text-sm text-muted-foreground">Cart Items</p>

            <h3 className="mt-3 text-3xl font-bold">0</h3>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div>
          <h2 className="text-xl font-semibold">Available Products</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Browse fresh products from farmers.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="mt-5 rounded-xl border p-8 text-center">
            <p className="text-sm text-muted-foreground">
              No products are available yet.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
                imageURL={product.imageUrl}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
