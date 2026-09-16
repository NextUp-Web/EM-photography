import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./ImageBand.module.css";

type ImageBandProps = {
  src: string;
  alt: string;
  /** width / height at desktop */
  ratio: number;
  /** width / height below 768px — mobile art direction is its own thing */
  mobileRatio?: number;
  position?: string;
  priority?: boolean;
  sizes?: string;
  /** hero bands stretch towards the viewport on phones */
  variant?: "band" | "hero";
  /** a very local gradient, only where text sits */
  scrim?: "none" | "bottom" | "full";
  align?: "start" | "center";
  children?: ReactNode;
  className?: string;
};

export default function ImageBand({
  src,
  alt,
  ratio,
  mobileRatio,
  position = "center",
  priority = false,
  sizes = "100vw",
  variant = "band",
  scrim = "none",
  align = "start",
  children,
  className,
}: ImageBandProps) {
  const classes = [
    styles.band,
    variant === "hero" ? styles.hero : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      style={
        {
          "--ratio": String(ratio),
          "--ratio-mobile": String(mobileRatio ?? ratio),
        } as React.CSSProperties
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={styles.image}
        style={{ objectPosition: position }}
      />

      {scrim !== "none" ? (
        <span
          className={scrim === "full" ? styles.scrimFull : styles.scrimBottom}
          aria-hidden="true"
        />
      ) : null}

      {children ? (
        <div
          className={`${styles.overlay} ${
            align === "center" ? styles.overlayCenter : styles.overlayStart
          } on-image`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
