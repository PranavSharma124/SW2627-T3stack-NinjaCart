import Image from "next/image";
import { notFound } from "next/navigation";

import { GetFarmerProductById } from "@/actions/product/get-farmer-product";

type FarmerProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function FarmerProductPage({
  params,
}: FarmerProductPageProps) {
  const { id } = await params;

  const product = await GetFarmerProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl border">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm text-muted-foreground">{product.type}</p>

          <h1 className="mt-2 text-4xl font-bold">{product.name}</h1>

          <p className="mt-6 text-lg text-muted-foreground">
            {product.description}
          </p>

          <p className="mt-6 text-2xl font-bold">₹{product.price} / kg</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">Sold</p>
              <p className="mt-1 text-xl font-semibold">
                {product.soldQuantity} kg
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">Remaining</p>
              <p className="mt-1 text-xl font-semibold">
                {product.quantity} kg
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
