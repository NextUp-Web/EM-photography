"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import NavPanel from "./MobileMenu";
import styles from "./Header.module.css";

/**
 * A single navigation object on every platform: the EM lockup on the left,
 * one burger on the right, and a full-screen panel behind it.
 *
 * On the home page the hero is a full-bleed photograph, so the bar rides
 * over it — transparent, with the white lockup — until the page is scrolled,
 * at which point it settles onto warm white. Every other page keeps it
 * sticky and solid from the first pixel.
 */
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelId = useId();

  /* Close on navigation. */
  useEffect(() => setOpen(false), [pathname]);

  /* Over the hero the bar has no ground of its own; once the photograph has
     scrolled past, it needs one. */
  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const overlay = isHome && !scrolled && !open;

  return (
    <>
      <header
        className={[
          styles.header,
          isHome ? styles.floating : styles.sticky,
          overlay ? styles.overlay : styles.solid,
        ].join(" ")}
      >
        <div className={styles.inner}>
          <Link
            href="/"
            className={styles.brand}
            aria-label="EM Photography — home"
          >
            <Logo variant={overlay ? "white" : "black"} priority />
          </Link>

          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`${styles.icon} ${open ? styles.iconOpen : ""}`}
              aria-hidden="true"
            >
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <NavPanel id={panelId} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
