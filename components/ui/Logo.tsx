import Image from "next/image";
import styles from "./Logo.module.css";

/** Intrinsic ratio of the supplied lockup (width / height). */
const WIDTH = 678;
const HEIGHT = 528;

type LogoProps = {
  variant?: "black" | "white";
  /** CSS height; defaults to the header token */
  height?: string;
  priority?: boolean;
  className?: string;
};

/**
 * The EM monogram is the supplied brand asset — never re-typed with a font.
 */
export default function Logo({
  variant = "black",
  height,
  priority = false,
  className,
}: LogoProps) {
  const style = height ? ({ "--logo-h": height } as React.CSSProperties) : undefined;

  return (
    <span className={[styles.logo, className].filter(Boolean).join(" ")} style={style}>
      <Image
        src={`/brand/em-logo-${variant}.png`}
        alt="EM Photography"
        width={WIDTH}
        height={HEIGHT}
        priority={priority}
        sizes="120px"
        className={styles.image}
      />
    </span>
  );
}
