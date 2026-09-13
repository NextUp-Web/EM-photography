import Link from "next/link";
import Logo from "@/components/ui/Logo";
import NavList from "./NavList";
import MobileMenu from "./MobileMenu";
import { NAV_LEFT, NAV_RIGHT } from "@/lib/data";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.side}>
          <NavList items={NAV_LEFT} align="start" />
          <MobileMenu logo={<Logo variant="black" height="72px" />} />
        </div>

        <Link href="/" className={styles.logoLink} aria-label="EM Photography — accueil">
          <Logo variant="white" priority />
        </Link>

        <div className={`${styles.side} ${styles.sideEnd}`}>
          <NavList items={NAV_RIGHT} align="end" />
        </div>
      </div>
    </header>
  );
}
