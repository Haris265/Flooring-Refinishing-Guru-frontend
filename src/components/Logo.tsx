import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";
  const line1 = isLight ? "text-cream" : "text-brown";
  const guru = isLight ? "text-[#c45c5c]" : "text-[#7a1f2b]";
  const tag = isLight ? "text-cream/75" : "text-brown/75";

  return (
    <Link
      href="/"
      className={`group flex min-w-0 items-center gap-2 ${className}`}
      aria-label="Flooring & Refinishing Guru home"
    >
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={48}
        height={44}
        className="h-9 w-auto shrink-0 sm:h-10"
        priority
      />
      <span className="min-w-0 leading-[1.05]">
        <span
          className={`block font-display text-[0.85rem] font-semibold tracking-wide sm:text-[1.05rem] ${line1}`}
        >
          Flooring <span className="text-gold">&amp;</span>
        </span>
        <span className="block font-display text-[0.85rem] font-semibold tracking-wide text-gold sm:text-[1.05rem]">
          Refinishing
        </span>
        <span className="mt-px flex items-center gap-1">
          <span className="h-px w-2.5 bg-gold/80" />
          <span
            className={`font-display text-[0.7rem] font-bold tracking-[0.12em] sm:text-[0.8rem] ${guru}`}
          >
            GURU
          </span>
          <span className="h-px w-2.5 bg-gold/80" />
        </span>
        <span
          className={`mt-px block truncate font-sans text-[0.42rem] font-semibold uppercase tracking-[0.1em] sm:text-[0.48rem] sm:tracking-[0.12em] ${tag}`}
        >
          Complete Home Renovation Experts
        </span>
      </span>
    </Link>
  );
}
