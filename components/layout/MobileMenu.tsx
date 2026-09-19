"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/data";
import styles from "./MobileMenu.module.css";

/**
 * The phone mockups print the word MENU beside the rule icon on Home and
 * Contact, and the icon alone on About and Portfolio — reproduced here
 * rather than levelled out.
 */
const LABELLED = ["/", "/contact"];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const labelled = LABELLED.includes(pathname);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {labelled ? (
          <span className={styles.word}>{open ? "Close" : "Menu"}</span>
        ) : null}
        <span className={styles.icon} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <div
        id={panelId}
        ref={panelRef}
        className={styles.panel}
        hidden={!open}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
      >
        <nav aria-label="Primary">
          <ul className={styles.list}>
            {NAV.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.link}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <p className={`label ${styles.note}`}>
          Based in Switzerland - available across Europe
        </p>
      </div>
    </div>
  );
}
