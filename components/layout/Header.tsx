import Link from "next/link";
import Wordmark from "@/components/ui/Wordmark";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="EM Photography — home">
          <Wordmark />
        </Link>

        <DesktopNav />
        <MobileMenu />
      </div>
    </header>
  );
}
