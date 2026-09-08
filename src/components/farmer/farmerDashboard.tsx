import Link from "next/link";

import { Button } from "@/components/ui/button";
import ListingCard from "./ListingCard";

import { GetProducts } from "@/actions/product/get-my-products";

export default async function FarmerDashboard() {
  const products = await GetProducts();

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Farmer Dashboard</h1>

        <Link href="/farmer/products/new">
          <Button>+ Add Listing</Button>
        </Link>
      </div>

      <section className="mt-10">
        <h2 className="mb-6 text-2xl font-semibold">Your Listings</h2>

        {products.length === 0 ? (
          <p className="text-muted-foreground">
            You haven&apos;t created any listings yet.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ListingCard
                key={product.id}
                title={product.name}
                description={product.description}
                price={product.price}
                soldQuantity={product.soldQuantity}
                remainingQuantity={product.quantity}
                image={product.imageURL}
                href={`/farmer/products/${product.id}`}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
