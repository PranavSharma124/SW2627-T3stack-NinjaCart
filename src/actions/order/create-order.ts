"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma/client";
import { getCurrentSession } from "@/lib/auth-utils";

type OrderItemInput = {
  productId: string;
  quantity: number;
};

export async function createOrder(items: OrderItemInput[]) {
  const session = await getCurrentSession();

  if (!session) {
    throw new Error("You must be logged in.");
  }

  if (session.user.role !== "RETAILER") {
    throw new Error("Only retailers can place orders.");
  }

  if (items.length === 0) {
    throw new Error("Your cart is empty.");
  }

  return await prisma.$transaction(async (tx) => {
    let totalPrice = new Prisma.Decimal(0);

    const orderItems = [];

    for (const item of items) {
      if (item.quantity <= 0) {
        throw new Error("Invalid quantity.");
      }

      const product = await tx.product.findUnique({
        where: {
          id: item.productId,
        },
      });

      if (!product) {
        throw new Error("One of the products no longer exists.");
      }

      const updatedProduct = await tx.product.updateMany({
        where: {
          id: item.productId,
          quantity: {
            gte: item.quantity,
          },
        },
        data: {
          quantity: {
            decrement: item.quantity,
          },
        },
      });

      if (updatedProduct.count !== 1) {
        throw new Error(
          `${product.name} does not have enough stock available.`,
        );
      }

      const subtotal = product.price.mul(item.quantity);

      totalPrice = totalPrice.add(subtotal);

      orderItems.push({
        productId: product.id,
        productName: product.name,
        priceAtPurchase: product.price,
        quantity: item.quantity,
        subtotal,
      });
    }

    const order = await tx.order.create({
      data: {
        retailerId: session.user.id,
        totalPrice,
        items: {
          create: orderItems,
        },
      },
    });

    return {
      id: order.id,
    };
  });
}
