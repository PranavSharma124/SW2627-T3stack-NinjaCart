import { Tractor, Package2 } from "lucide-react";

export default function ForBoth() {
  return (
    <section className="px-10 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-3 font-semibold text-green-600">
            BUILT FOR BOTH SIDES
          </p>

          <h2 className="text-4xl font-bold">
            One Platform, Two Powerful Experiences
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border p-8 text-center">
            <Tractor
              size={48}
              strokeWidth={1.5}
              className="mx-auto"
            />

            <h3 className="mt-5 text-2xl font-bold">
              For Farmers
            </h3>

            <p className="mt-4 text-muted-foreground">
              List your fresh produce, manage inventory, and reach more
              retailers easily.
            </p>
          </div>

          <div className="rounded-xl border p-8 text-center">
            <Package2
              size={48}
              strokeWidth={1.5}
              className="mx-auto"
            />

            <h3 className="mt-5 text-2xl font-bold">
              For Retailers
            </h3>

            <p className="mt-4 text-muted-foreground">
              Browse fresh produce, place orders, and get real-time inventory
              updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}