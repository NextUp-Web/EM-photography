import type { ReactNode } from "react";
import styles from "./DarkBand.module.css";

type DarkBandProps = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  /** voile sombre recadré dans la maquette correspondante */
  texture?: string;
  /** densité du voile, selon la maquette */
  textureOpacity?: number;
  className?: string;
};

/** Bandeau éditorial noir, voilé d'une texture de tulle comme sur les maquettes. */
export default function DarkBand({
  children,
  size = "md",
  texture = "/images/shared/dark-silk.jpg",
  textureOpacity,
  className,
}: DarkBandProps) {
  return (
    <section
      className={["section--dark", styles.band, styles[size], className].filter(Boolean).join(" ")}
      style={
        {
          "--dark-texture": `url(${texture})`,
          ...(textureOpacity ? { "--dark-texture-opacity": textureOpacity } : null),
        } as React.CSSProperties
      }
    >
      <div className={`shell ${styles.inner}`}>{children}</div>
    </section>
  );
}
