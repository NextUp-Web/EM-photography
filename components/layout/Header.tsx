"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import { NAV_LEFT, NAV_RIGHT } from "@/lib/data";
import styles from "./Header.module.css";

/** Pages that open on a full-bleed photograph the header floats over. */
const HERO_ROUTES = ["/", "/about", "/contact"];

export default function Header() {
  const pathname = usePathname();
  const overHero = HERO_ROUTES.includes(pathname);

  return (
    <header
      className={`${styles.header} ${overHero ? `${styles.overHero} is-over-hero` : ""}`}
    >
      {/* 1fr auto 1fr : le logo reste centré sur le viewport, quelles que
          soient les largeurs des deux moitiés de navigation. */}
      <div className={styles.inner}>
        <div className={styles.side}>
          <DesktopNav items={NAV_LEFT} align="start" label="Primary" />
        </div>

        <Link href="/" className={styles.brand} aria-label="EM Photography — home">
          <Logo variant={overHero ? "white" : "black"} priority />
        </Link>

        <div className={`${styles.side} ${styles.sideEnd}`}>
          <DesktopNav items={NAV_RIGHT} align="end" label="Primary, continued" />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
