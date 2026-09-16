import Image from "next/image";

type FigureProps = {
  src: string;
  alt: string;
  /** width / height — reserved up front so nothing shifts while loading */
  ratio: number;
  sizes: string;
  priority?: boolean;
  /** object-position — chosen so faces, hands and details are never clipped */
  position?: string;
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
  className,
  style,
}: FigureProps) {
  return (
    <div
      className={["figure", className].filter(Boolean).join(" ")}
      style={{ "--fig-ratio": String(ratio), ...style } as React.CSSProperties}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        style={{ objectFit: "cover", objectPosition: position }}
      />
    </div>
  );
}
