"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
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
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="EM Photography — home">
          <Logo variant={overHero ? "white" : "black"} priority />
        </Link>

        <DesktopNav />
        <MobileMenu />
      </div>
    </header>
  );
}
