"use server";

import { prisma } from "@/lib/prisma";

export async function getCartProducts(productIds: string[]) {
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
    select: {
      id: true,
      quantity: true,
    },
  });

  return products.map((product) => ({
    id: product.id,
    quantity: product.quantity,
  }));
}
