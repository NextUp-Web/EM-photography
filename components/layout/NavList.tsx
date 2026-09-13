"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/data";
import styles from "./Header.module.css";

function isActive(pathname: string, item: NavItem) {
  if (item.href.includes("#")) return false;
  if (item.href === "/") return pathname === "/";
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

type NavListProps = {
  items: NavItem[];
  align: "start" | "end";
};

export default function NavList({ items, align }: NavListProps) {
  const pathname = usePathname();

  return (
    <ul className={`${styles.nav} ${align === "end" ? styles.navEnd : ""}`}>
      {items.map((item) => {
        const active = isActive(pathname, item);
        return (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
