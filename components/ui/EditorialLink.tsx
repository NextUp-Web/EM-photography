import Link from "next/link";

type Variant = "micro" | "serif" | "outline" | "solid";

const CLASSES: Record<Variant, { root: string; arrow: string }> = {
  micro: { root: "editorial-link", arrow: "editorial-link__arrow" },
  serif: { root: "editorial-cta", arrow: "editorial-cta__arrow" },
  outline: { root: "outline-cta", arrow: "outline-cta__arrow" },
  solid: { root: "solid-cta", arrow: "solid-cta__arrow" },
};

type EditorialLinkProps = {
  href: string;
  label: string;
  variant?: Variant;
  className?: string;
};

export default function EditorialLink({
  href,
  label,
  variant = "micro",
  className,
}: EditorialLinkProps) {
  const { root, arrow } = CLASSES[variant];

  return (
    <Link href={href} className={[root, className].filter(Boolean).join(" ")}>
      {label}
      <span className={arrow} aria-hidden="true">
        &#8594;
      </span>
    </Link>
  );
}
