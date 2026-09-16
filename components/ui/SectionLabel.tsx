import type { ElementType, ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  as?: ElementType;
  tone?: "meta" | "ink";
  className?: string;
  id?: string;
};

/** Small uppercase Helvetica label — the quiet counterpoint to the serif. */
export default function SectionLabel({
  children,
  as,
  tone = "meta",
  className,
  id,
}: SectionLabelProps) {
  const Tag = (as ?? "p") as ElementType;
  const classes = ["label", tone === "ink" ? "label--ink" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} id={id}>
      {children}
    </Tag>
  );
}
