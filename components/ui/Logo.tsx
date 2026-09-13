import Image from "next/image";
import styles from "./Logo.module.css";

/** Ratio du lockup original (largeur / hauteur), mesuré sur le fichier livré. */
const RATIO = 226 / 176;

type LogoProps = {
  variant?: "black" | "white";
  /** hauteur CSS ; par défaut le jeton de hauteur du header */
  height?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Affiche le monogramme EM Photography tel quel. Le tracé n'est jamais
 * reconstruit avec une police : le fichier d'origine est simplement détouré.
 */
export default function Logo({ variant = "black", height, priority = false, className }: LogoProps) {
  const style = height ? ({ "--logo-size": height } as React.CSSProperties) : undefined;

  return (
    <span className={[styles.logo, className].filter(Boolean).join(" ")} style={style}>
      <Image
        src={`/brand/em-logo-${variant}.png`}
        alt="EM Photography"
        width={226}
        height={176}
        priority={priority}
        className={styles.image}
        sizes="220px"
        style={{ aspectRatio: String(RATIO) }}
      />
    </span>
  );
}
