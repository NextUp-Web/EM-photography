"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/data";
import styles from "./Header.module.css";

/** Une moitié de la navigation, posée à gauche ou à droite du logo. */
export default function DesktopNav({
  items,
  align,
  label,
}: {
  items: NavItem[];
  align: "start" | "end";
  label: string;
}) {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label={label}>
      <ul className={`${styles.navList} ${align === "end" ? styles.navListEnd : ""}`}>
        {items.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <li key={item.href}>
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
    </nav>
  );
}
