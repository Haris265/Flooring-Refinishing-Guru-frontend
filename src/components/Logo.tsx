import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const text = variant === "light" ? "text-white" : "text-brown";
  const accent = "text-gold";

  return (
    <Link
      href="/"
      className={`group flex min-w-0 items-center gap-2 sm:gap-3 ${className}`}
    >
      <span
        className="relative flex h-9 w-9 shrink-0 items-center justify-center border border-gold/70 bg-brown text-gold sm:h-11 sm:w-11"
        aria-hidden
      >
        <svg viewBox="0 0 40 40" className="h-6 w-6 sm:h-7 sm:w-7" fill="none">
          <path
            d="M8 28V16.5L20 8l12 8.5V28"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M10 28h20M12 28v-4.5l8-5.5 8 5.5V28"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M14 28l4-3.2M18 28l4-3.2M22 28l4-3.2"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      </span>
      <span className="min-w-0 leading-tight">
        <span
          className={`block truncate font-display text-base font-semibold tracking-wide sm:text-lg md:text-xl ${text}`}
        >
          Flooring <span className={accent}>&</span> Refinishing
        </span>
        <span
          className={`block text-[0.62rem] uppercase tracking-[0.18em] sm:text-[0.68rem] sm:tracking-[0.22em] ${variant === "light" ? "text-gold" : "text-muted"}`}
        >
          Guru
        </span>
      </span>
    </Link>
  );
}
