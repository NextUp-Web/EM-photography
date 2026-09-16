import Link from "next/link";

type EditorialLinkProps = {
  href: string;
  label: string;
  className?: string;
};

/**
 * The only call to action on the site: small caps, a hairline, an arrow that
 * edges forward on hover. No buttons.
 */
export default function EditorialLink({ href, label, className }: EditorialLinkProps) {
  return (
    <Link href={href} className={["cta", className].filter(Boolean).join(" ")}>
      {label}
      <span className="cta__arrow" aria-hidden="true">
        &#8594;
      </span>
    </Link>
  );
}
