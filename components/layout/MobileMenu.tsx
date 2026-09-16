"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { INSTAGRAM_URL, NAV } from "@/lib/data";
import styles from "./MobileMenu.module.css";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={styles.root}>
      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
      >
        Menu
      </button>

      <div
        id={panelId}
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        inert={!open}
      >
        <div className={`shell ${styles.panelHead}`}>
          <span className={styles.mark}>EM</span>
          <button
            ref={closeRef}
            type="button"
            className={styles.toggle}
            onClick={() => {
              setOpen(false);
              toggleRef.current?.focus();
            }}
          >
            Close
          </button>
        </div>

        <nav className={`shell ${styles.panelBody}`} aria-label="Main">
          <ul className={styles.list}>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`shell ${styles.panelFoot}`}>
          <a
            href={INSTAGRAM_URL}
            className={`label ${styles.instagram}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram
          </a>
          <p className={`label ${styles.based}`}>Switzerland based</p>
        </div>
      </div>
    </div>
  );
}
