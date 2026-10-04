"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TopLinkProps = {
  /** the home page, in the page's language */
  href: string;
  className?: string;
  label: string;
  /** called on click — the header closes its menu here */
  onClick?: () => void;
  children: React.ReactNode;
};

/**
 * The logo's link: from any other page it leads home; on the home page
 * itself it glides back to the top instead.
 */
export default function TopLink({ href, className, label, onClick, children }: TopLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={className}
      aria-label={label}
      onClick={(event) => {
        onClick?.();
        if (pathname !== href) return;
        event.preventDefault();
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
    >
      {children}
    </Link>
  );
}
