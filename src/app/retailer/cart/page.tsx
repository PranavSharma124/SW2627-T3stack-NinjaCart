"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cartContext";
import { createOrder } from "@/actions/order/create-order";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, refreshStock, clearCart } =
    useCart();

  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    refreshStock();
  }, [refreshStock]);

  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0,
  );

  const handlePlaceOrder = async () => {
    setError("");
    setIsPlacingOrder(true);

    try {
      const order = await createOrder(
        items.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
      );

      clearCart();

      window.location.href = `/retailer/orders/${order.id}`;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong while placing your order.");
      }
    } finally {
      setIsPlacingOrder(false);
    }
  };

  if (items.length === 0) {
    return (
      <main className="mx-auto w-full max-w-7xl px-6 py-10">
        <div className="border-b pb-6">
          <h1 className="text-3xl font-bold tracking-tight">Your Cart</h1>
          <p className="mt-2 text-muted-foreground">
            Review the products you want to purchase.
          </p>
        </div>

        <div className="mt-10 rounded-xl border p-10 text-center">
          <h2 className="text-xl font-semibold">Your cart is empty</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Add some products from farmers to get started.
          </p>

          <Link
            href="/retailer"
            className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground"
          >
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10">
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight">Your Cart</h1>

        <p className="mt-2 text-muted-foreground">
          Review the products you want to purchase.
        </p>
      </div>

      {error && (
        <div className="mt-6 rounded-lg border border-destructive p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <div
              key={item.productId}
              className="flex gap-5 rounded-xl border p-5"
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={160}
                height={120}
                className="h-28 w-36 rounded-lg object-cover"
              />

              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                      ₹{item.price} / kg
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.productId)}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Remove
                  </button>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          Math.max(1, item.quantity - 1),
                        )
                      }
                      disabled={item.quantity === 1}
                      className="rounded-lg border px-3 py-1 disabled:opacity-50"
                    >
                      −
                    </button>

                    <span className="min-w-16 text-center text-sm font-medium">
                      {item.quantity} kg
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          Math.min(item.availableQuantity, item.quantity + 1),
                        )
                      }
                      disabled={item.quantity >= item.availableQuantity}
                      className="rounded-lg border px-3 py-1 disabled:opacity-50"
                    >
                      +
                    </button>
                  </div>

                  <p className="font-semibold">
                    ₹{(Number(item.price) * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-xl border p-6">
          <h2 className="text-xl font-semibold">Order Summary</h2>

          <div className="mt-6 flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>

          <div className="my-5 border-t" />

          <div className="flex justify-between">
            <span className="font-semibold">Total</span>

            <span className="text-xl font-bold">₹{totalPrice.toFixed(2)}</span>
          </div>

          <button
            type="button"
            onClick={handlePlaceOrder}
            disabled={isPlacingOrder}
            className="mt-6 w-full rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPlacingOrder ? "Placing Order..." : "Proceed to Checkout"}
          </button>
        </div>
      </div>
    </main>
  );
}
