import Image from "next/image";

type FigureProps = {
  src: string;
  alt: string;
  /** largeur / hauteur, p. ex. 1.5 pour un cadrage 3:2 */
  ratio?: number;
  sizes: string;
  priority?: boolean;
  /** object-position — décisif pour retrouver le cadrage des maquettes */
  position?: string;
  zoom?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function Figure({
  src,
  alt,
  ratio,
  sizes,
  priority = false,
  position = "center",
  zoom = false,
  className,
  style,
}: FigureProps) {
  const classes = ["figure", zoom ? "figure--zoom" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={{ ...(ratio ? { aspectRatio: String(ratio) } : null), ...style }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover", objectPosition: position }}
      />
    </div>
  );
}
