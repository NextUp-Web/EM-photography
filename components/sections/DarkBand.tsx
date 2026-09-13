import type { ReactNode } from "react";
import { assetExists } from "@/lib/assets";
import styles from "./DarkBand.module.css";

const TEXTURE = "/images/shared/dark-silk.jpg";

type DarkBandProps = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

/**
 * Black editorial band. The silk texture behind it is an optional asset; the
 * band falls back to solid black, which is how it reads in the reference.
 */
export default function DarkBand({ children, size = "md", className }: DarkBandProps) {
  const style = assetExists(TEXTURE)
    ? ({ "--dark-texture": `url(${TEXTURE})` } as React.CSSProperties)
    : undefined;

  return (
    <section
      className={["section--dark", styles.band, styles[size], className].filter(Boolean).join(" ")}
      style={style}
    >
      <div className={`shell ${styles.inner}`}>{children}</div>
    </section>
  );
}
