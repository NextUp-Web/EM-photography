import Reveal from "@/components/ui/Reveal";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  eyebrow?: string;
  heading?: string;
  /** renders the heading uppercase and tracked (Mariages dark band) */
  tracked?: boolean;
  rule?: boolean;
  lead?: string[];
  as?: "h1" | "h2";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  heading,
  tracked = false,
  rule = false,
  lead,
  as = "h2",
  className,
}: SectionHeadingProps) {
  const Heading = as;

  return (
    <Reveal className={[styles.wrap, className].filter(Boolean).join(" ")}>
      {eyebrow ? <p className="eyebrow centered">{eyebrow}</p> : null}

      {heading ? (
        <Heading className={`h2 centered ${styles.heading} ${tracked ? styles.tracked : ""}`}>
          {heading}
        </Heading>
      ) : null}

      {rule ? <hr className={`rule rule--center ${styles.rule}`} /> : null}

      {lead ? (
        <p className={`body centered ${styles.lead}`}>
          {lead.map((line, index) => (
            <span key={line}>
              {line}
              {index < lead.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
      ) : null}
    </Reveal>
  );
}
