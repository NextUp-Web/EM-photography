import Image from "next/image";
import { assetExists } from "@/lib/assets";

type FigureProps = {
  src: string;
  alt: string;
  /** width / height, e.g. 1.5 for a 3:2 landscape crop */
  ratio?: number;
  sizes: string;
  priority?: boolean;
  /** object-position, critical to reproduce the reference cropping */
  position?: string;
  zoom?: boolean;
  className?: string;
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
}: FigureProps) {
  const classes = ["figure", zoom ? "figure--zoom" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={ratio ? { aspectRatio: String(ratio) } : undefined}>
      {assetExists(src) ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: "cover", objectPosition: position }}
        />
      ) : (
        <div className="figure__pending" role="img" aria-label={alt}>
          <span>{src}</span>
        </div>
      )}
    </div>
  );
}
