import Image from "next/image";
import styles from "./Logo.module.css";

/** Intrinsic sizes of the supplied lockup and of the monogram cut from it. */
const SIZES = {
  lockup: { width: 691, height: 647 },
  mark: { width: 455, height: 538 },
};

type LogoProps = {
  variant?: "black" | "white";
  /** `lockup` is EM over PHOTOGRAPHY; `mark` is the monogram alone. */
  shape?: "lockup" | "mark";
  /** CSS height; defaults to the header token */
  height?: string;
  /**
   * The width the lockup is actually drawn at, for the browser to pick a
   * source from. The footer prints it several times larger than the bar
   * does, and the default would leave it soft there.
   */
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * The EM monogram is the supplied brand asset — never re-typed with a font.
 */
export default function Logo({
  variant = "black",
  shape = "lockup",
  height,
  sizes = "120px",
  priority = false,
  className,
}: LogoProps) {
  const { width, height: intrinsicHeight } = SIZES[shape];
  const file = shape === "mark" ? "em-mark" : "em-logo";
  const style = height ? ({ "--logo-h": height } as React.CSSProperties) : undefined;

  return (
    <span className={[styles.logo, className].filter(Boolean).join(" ")} style={style}>
      <Image
        src={`/brand/${file}-${variant}.png`}
        alt="EM Photography"
        width={width}
        height={intrinsicHeight}
        priority={priority}
        sizes={sizes}
        className={styles.image}
      />
    </span>
  );
}
