import Link from "next/link";

export default function OrdersPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold">Your Orders</h1>

      <p className="mt-4 text-muted-foreground">
        Your orders will appear here.
      </p>

      <Link
        href="/retailer"
        className="mt-6 inline-block rounded-lg border px-4 py-2"
      >
        Continue Shopping
      </Link>
    </main>
  );
}