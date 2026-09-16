import Link from "next/link";
import { Button } from "../ui/button";
import { Wheat, Package, MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-10 py-20">
      <h1 className="py-5 text-5xl font-bold tracking-tight">
        FROM FARM TO RETAIL, MADE SIMPLE.
      </h1>

      <div className="flex items-center gap-6 py-5">
        <Wheat size={40} />
        <MoveRight size={40} />
        <Package size={40} />
      </div>

      <p className="max-w-3xl py-5 text-center">
        Connect farmers and retailers through a simple marketplace.
      </p>


      <div className="flex items-center gap-4">
        <Link href="/signup">
          <Button>Get Started</Button>
        </Link>

        <a href="#why-ninjacart">
          <Button variant="outline">Learn More</Button>
        </a>
      </div>
    </section>
  );
}
