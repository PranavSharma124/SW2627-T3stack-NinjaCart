"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import SignOutButton from "@/components/SignOutButton";
import { useCart } from "@/context/cartContext";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const { items } = useCart();

  return (
    <nav className="flex items-center justify-between border px-8 py-4">
      <Link href="/" className="text-2xl font-bold">
        NinjaCart
      </Link>

      {session ? (
        <div className="flex items-center gap-4">
          {session.user.role === "RETAILER" && (
            <Link href="/retailer/cart">
              <Button variant="outline">
                Cart ({items.reduce((total, item) => total + item.quantity, 0)})
              </Button>
            </Link>
          )}

          <SignOutButton />
        </div>
      ) : (
        <div className="flex items-center gap-10">
          <ul className="flex items-center gap-6">
            <li>
              <a href="#working">How it works</a>
            </li>

            <li>
              <a href="#why-ninjacart">Why NinjaCart</a>
            </li>
          </ul>

          <ul className="flex items-center gap-4">
            <li>
              <Link href="/login">Login</Link>
            </li>

            <li>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
