"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/data";
import styles from "./MobileMenu.module.css";

type NavPanelProps = {
  id: string;
  open: boolean;
  onClose: () => void;
};

/**
 * The full-screen navigation the burger opens, on every platform:
 * four links centred on warm white, the place-line beneath them.
 */
export default function NavPanel({ id, open, onClose }: NavPanelProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div id={id} ref={panelRef} className={styles.panel} hidden={!open}>
      <nav aria-label="Primary">
        <ul className={styles.list}>
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.link} ${active ? styles.linkActive : ""}`}
                  aria-current={active ? "page" : undefined}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <p className={`label ${styles.note}`}>
        Based in Switzerland &mdash; available across Europe
      </p>
    </div>
  );
}
