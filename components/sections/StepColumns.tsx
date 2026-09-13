import Reveal from "@/components/ui/Reveal";
import styles from "./StepColumns.module.css";

export type Step = {
  number: string;
  title: string;
  caption: string[];
};

type StepColumnsProps = {
  steps: Step[];
  /** "serif" = Portfolio experience block, "tracked" = Mariages approach block */
  titleStyle?: "serif" | "tracked";
  className?: string;
};

export default function StepColumns({
  steps,
  titleStyle = "serif",
  className,
}: StepColumnsProps) {
  return (
    <ol className={["columns", "columns--3", styles.steps, className].filter(Boolean).join(" ")}>
      {steps.map((step, index) => (
        <Reveal as="li" key={step.number} delay={index * 110} className={styles.step}>
          <span className={styles.number}>{step.number}</span>
          <h3 className={titleStyle === "tracked" ? styles.titleTracked : styles.titleSerif}>
            {step.title}
          </h3>
          <hr className={`rule rule--center rule--short ${styles.rule}`} />
          <p className={`caption ${styles.caption}`}>
            {step.caption.map((line, lineIndex) => (
              <span key={line}>
                {line}
                {lineIndex < step.caption.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}
