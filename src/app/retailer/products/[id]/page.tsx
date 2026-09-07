import Image from "next/image";
import { GetProductById } from "@/actions/product/get-product";
import ProductPurchase from "./ProductPurchase";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = await GetProductById(id);

  if (!product) {
    return (
      <main className="mx-auto w-full max-w-7xl px-6 py-10">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10">
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

          <p className="mt-3 text-sm text-muted-foreground">
            Available: {product.quantity} kg
          </p>

          <ProductPurchase
            productId={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            availableQuantity={product.quantity}
          />
        </div>
      </div>
    </main>
  );
}
