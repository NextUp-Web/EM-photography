import EditorialLink from "@/components/ui/EditorialLink";
import Reveal from "@/components/ui/Reveal";
import styles from "./CTASection.module.css";

type CTASectionProps = {
  eyebrow?: string;
  heading?: string;
  href: string;
  label: string;
  variant?: "micro" | "serif" | "outline";
  className?: string;
};

export default function CTASection({
  eyebrow,
  heading,
  href,
  label,
  variant = "micro",
  className,
}: CTASectionProps) {
  return (
    <section className={["section", styles.cta, className].filter(Boolean).join(" ")}>
      <Reveal className={`shell ${styles.inner}`}>
        {eyebrow ? <p className="eyebrow centered">{eyebrow}</p> : null}
        {heading ? <h2 className={`h2 centered ${styles.heading}`}>{heading}</h2> : null}
        <EditorialLink href={href} label={label} variant={variant} className={styles.link} />
      </Reveal>
    </section>
  );
}
