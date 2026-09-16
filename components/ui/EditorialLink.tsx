import Link from "next/link";

type Variant = "inline" | "outline";

type EditorialLinkProps = {
  href: string;
  label: string;
  variant?: Variant;
  className?: string;
};

/** The two restrained CTA treatments used across the boards. */
export default function EditorialLink({
  href,
  label,
  variant = "inline",
  className,
}: EditorialLinkProps) {
  const root = variant === "outline" ? "cta-outline" : "cta-inline";

  return (
    <Link href={href} className={[root, className].filter(Boolean).join(" ")}>
      {label}
      <span className="cta-arrow" aria-hidden="true">
        &#8594;
      </span>
    </Link>
  );
}
