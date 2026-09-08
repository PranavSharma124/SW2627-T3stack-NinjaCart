import { prisma } from "@/lib/prisma";
import { getCurrentSession } from "@/lib/auth-utils";
import { notFound } from "next/navigation";

type OrderPageProps = {
  params: Promise<{ id: string }>;
};

export default async function OrderPage({ params }: OrderPageProps) {
  const { id } = await params;

  const session = await getCurrentSession();

  if (!session || session.user.role !== "RETAILER") {
    notFound();
  }

  const order = await prisma.order.findFirst({
    where: {
      id,
      retailerId: session.user.id,
    },
    include: {
      items: true,
    },
  });

  if (!order) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Order Confirmed</h1>

        <p className="mt-2 text-muted-foreground">Order ID: {order.id}</p>
      </div>

      <div className="rounded-xl border p-6">
        <h2 className="text-xl font-semibold">Order Items</h2>

        <div className="mt-6 space-y-4">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div>
                <p className="font-medium">{item.productName}</p>

                <p className="text-sm text-muted-foreground">
                  ₹{item.priceAtPurchase.toString()} × {item.quantity} kg
                </p>
              </div>

              <p className="font-medium">₹{item.subtotal.toString()}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between border-t pt-6 text-lg font-bold">
          <span>Total</span>

          <span>₹{order.totalPrice.toString()}</span>
        </div>
      </div>
    </main>
  );
}
