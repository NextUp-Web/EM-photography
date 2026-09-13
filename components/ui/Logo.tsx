import Image from "next/image";
import styles from "./Logo.module.css";

/**
 * Boîte d'encre du lockup livré, telle que `scripts/extract-assets.js`
 * l'imprime en recadrant `em-logo-source.png`. Le composant dimensionne le
 * monogramme par sa hauteur : ces deux nombres sont ce qui lui donne sa
 * largeur, et un chiffre périmé l'étire.
 */
const LOCKUP = { width: 691, height: 647 };

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
        width={LOCKUP.width}
        height={LOCKUP.height}
        priority={priority}
        className={styles.image}
        sizes="240px"
      />
    </span>
  );
}
