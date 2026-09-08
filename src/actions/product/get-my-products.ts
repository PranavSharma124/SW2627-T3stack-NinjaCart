"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentSession } from "@/lib/auth-utils";

export async function GetProducts() {
  const session = await getCurrentSession();

  if (!session) {
    throw new Error("You must be logged in.");
  }

  if (session.user.role !== "FARMER") {
    throw new Error("Only farmers can view their products.");
  }

  const products = await prisma.product.findMany({
    where: {
      farmerId: session.user.id,
    },
    include: {
      orderItems: {
        select: {
          quantity: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return products.map((product) => {
    const soldQuantity = product.orderItems.reduce(
      (total, item) => total + item.quantity,
      0,
    );

    return {
      id: product.id,
      name: product.name,
      type: product.type,
      price: Number(product.price),
      description: product.description,
      quantity: product.quantity,
      soldQuantity,
      imageURL: product.imageUrl,
    };
  });
}
