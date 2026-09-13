import { assetExists } from "@/lib/assets";
import styles from "./Logo.module.css";

const EXTENSIONS = ["svg", "png", "webp"] as const;

function resolve(variant: "black" | "white"): string | null {
  for (const ext of EXTENSIONS) {
    const src = `/brand/em-logo-${variant}.${ext}`;
    if (assetExists(src)) return src;
  }
  return null;
}

type LogoProps = {
  variant?: "black" | "white";
  /** CSS length, defaults to the header lockup height token */
  height?: string;
  className?: string;
};

/**
 * Renders the supplied EM Photography lockup as-is. The monogram is never
 * reconstructed from a typeface: with no file present the exact lockup box is
 * reserved and labelled instead.
 */
export default function Logo({ variant = "black", height, className }: LogoProps) {
  const src = resolve(variant);
  const style = height ? ({ "--logo-size": height } as React.CSSProperties) : undefined;
  const classes = [styles.logo, className].filter(Boolean).join(" ");

  if (!src) {
    return (
      <span className={`${classes} ${styles.pending}`} style={style} aria-label="EM Photography">
        <span className={styles.pendingLabel}>em-logo-{variant}.svg</span>
      </span>
    );
  }

  return (
    <span className={classes} style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="EM Photography" className={styles.image} />
    </span>
  );
}
