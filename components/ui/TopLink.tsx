"use client";

import { usePathname } from "next/navigation";

type TopLinkProps = {
  className?: string;
  label: string;
  /** called before the page scrolls — the header closes its menu here */
  onClick?: () => void;
  children: React.ReactNode;
};

/**
 * The logo's link: it stays on the page it is on and glides back to the
 * top of it, rather than leaving for the home page.
 */
export default function TopLink({ className, label, onClick, children }: TopLinkProps) {
  const pathname = usePathname();

  return (
    <a
      href={pathname}
      className={className}
      aria-label={label}
      onClick={(event) => {
        event.preventDefault();
        onClick?.();
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
    >
      {children}
    </a>
  );
}
