import { Carrot, FileSearchCorner, ShelvingUnit } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="working" className="px-10 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 font-semibold text-green-600">
          HOW IT WORKS
        </p>

        <h2 className="text-4xl font-bold">
          From Farm to Retail in 3 Simple Steps
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <Carrot size={48} strokeWidth={1.5} />

            <h3 className="mt-5 text-xl font-semibold">
              1. Farmers List Produce
            </h3>

            <p className="mt-3 text-muted-foreground">
              Farmers add their fresh produce and available quantity.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FileSearchCorner size={48} strokeWidth={1.5} />

            <h3 className="mt-5 text-xl font-semibold">
              2. Retailers Browse
            </h3>

            <p className="mt-3 text-muted-foreground">
              Retailers explore fresh products and find what they need.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <ShelvingUnit size={48} strokeWidth={1.5} />

            <h3 className="mt-5 text-xl font-semibold">
              3. Place an Order
            </h3>

            <p className="mt-3 text-muted-foreground">
              Orders are placed easily and inventory updates instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}