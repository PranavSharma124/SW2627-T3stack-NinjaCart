import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t px-6 py-8">
      <div className="text-center">
        <h2 className="font-bold">Ninjacart</h2>

        <p className="mt-2">Connecting farmers with retailers.</p>
      </div>

      <div className="mt-6 text-center">
        <h3 className="font-bold">Quick Links</h3>

        <div className="mt-3 flex flex-wrap justify-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h3 className="font-bold">Have feedback?</h3>

        <p className="mt-2 mb-4 text-sm text-muted-foreground">
          Help us improve NinjaCart by sharing your feedback.
        </p>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLScNNc6dL69ScaSHT2lfImoiDw6QxUPv7wXxm2lI-KUjEc3S-g/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-muted"
        >
          Give Feedback
        </Link>
      </div>
    </footer>
  );
}
