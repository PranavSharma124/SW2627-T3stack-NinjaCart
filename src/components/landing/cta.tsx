import Link from "next/link";
import { Button } from "../ui/button";
import {  } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-10 py-20">
      <div className="mx-auto max-w-5xl rounded-2xl border p-12 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Get Started?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Join Ninjacart and connect farmers with retailers through one simple
          marketplace.
        </p>

        <div className="mt-8">
          <Link href="/signup">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}