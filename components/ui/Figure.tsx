import Image from "next/image";

type FigureProps = {
  src: string;
  alt: string;
  /** width / height — reserved up front so nothing shifts while loading */
  ratio: number;
  /** width / height below 768px, where the phone boards recrop */
  mobileRatio?: number;
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
  mobileRatio,
  sizes,
  priority = false,
  position = "center",
  className,
  style,
}: FigureProps) {
  return (
    <div
      className={["figure", className].filter(Boolean).join(" ")}
      style={
        {
          "--fig-ratio": String(ratio),
          "--fig-ratio-mobile": String(mobileRatio ?? ratio),
          ...style,
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
        style={{ objectFit: "cover", objectPosition: position }}
      />
    </div>
  );
}
