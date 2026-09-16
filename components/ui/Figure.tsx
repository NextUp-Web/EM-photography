import Image from "next/image";

type FigureProps = {
  src: string;
  alt: string;
  /** width / height of the frame as displayed; omit when CSS sets the height */
  ratio?: number;
  sizes: string;
  priority?: boolean;
  /** object-position — chosen per photograph so nothing is cropped harshly */
  position?: string;
  className?: string;
};

export default function Figure({
  src,
  alt,
  ratio,
  sizes,
  priority = false,
  position = "center",
  className,
}: FigureProps) {
  return (
    <div
      className={["figure", className].filter(Boolean).join(" ")}
      style={ratio ? { aspectRatio: String(ratio) } : undefined}
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
