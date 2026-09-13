"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ALL } from "@/lib/data";
import styles from "./MobileMenu.module.css";

export default function MobileMenu({ logo }: { logo: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.srOnly}>{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
        <span className={`${styles.bars} ${open ? styles.barsOpen : ""}`} aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <div id="mobile-menu" className={`${styles.panel} ${open ? styles.panelOpen : ""}`}>
        <div className={styles.panelLogo}>{logo}</div>
        <nav>
          <ul className={styles.list}>
            {NAV_ALL.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className={`eyebrow ${styles.footNote}`}>Switzerland &amp; Europe</p>
      </div>
    </>
  );
}
