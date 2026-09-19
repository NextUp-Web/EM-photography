import Image from "next/image";
import type { Photo } from "@/lib/data";

type FigureProps = {
  photo: Photo;
  /** width / height — reserved up front so nothing shifts while loading */
  ratio: number;
  /** width / height below 860px, where the phone mockup recrops */
  mobileRatio?: number;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** One photograph, cropped to the ratio the mockup prints it at. */
export default function Figure({
  photo,
  ratio,
  mobileRatio,
  sizes,
  priority = false,
  className,
}: FigureProps) {
  return (
    <div
      className={["figure", photo.bw ? "figure--bw" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          "--fig-ratio": String(ratio),
          "--fig-ratio-mobile": String(mobileRatio ?? ratio),
        } as React.CSSProperties
      }
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        style={{ objectFit: "cover", objectPosition: photo.position ?? "center" }}
      />
    </div>
  );
}
