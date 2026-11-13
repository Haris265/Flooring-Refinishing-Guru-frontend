import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-pad text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-deep">
        404
      </p>
      <h1 className="mt-3 font-display text-5xl text-brown">Page not found</h1>
      <p className="mt-4 text-muted">
        The page you are looking for does not exist or was moved.
      </p>
      <Link href="/" className="btn-primary mt-8 inline-flex">
        Back to home
      </Link>
    </section>
  );
}
