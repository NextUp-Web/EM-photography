"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeOf, localizePath, stripLocale } from "@/lib/i18n/config";

type TopLinkProps = {
  className?: string;
  label: string;
  /** called before the page changes or scrolls — the header closes its menu here */
  onClick?: () => void;
  children: React.ReactNode;
};

/**
 * The logo's link: from any other page it returns to the home page, in the
 * language being read; on the home page itself it glides back to the top.
 */
export default function TopLink({ className, label, onClick, children }: TopLinkProps) {
  const pathname = usePathname();
  const home = localizePath("/", localeOf(pathname));
  const onHome = stripLocale(pathname) === "/";

  return (
    <Link
      href={home}
      className={className}
      aria-label={label}
      onClick={(event) => {
        onClick?.();
        if (!onHome) return;
        event.preventDefault();
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
    >
      {children}
    </Link>
  );
}
