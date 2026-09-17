import styles from "./Wordmark.module.css";

type WordmarkProps = {
  /** `stacked` is the header lockup; `inline` is the footer's single line. */
  layout?: "stacked" | "inline";
  className?: string;
};

/**
 * The lockup the boards print on every page: a high-contrast serif EM with
 * PHOTOGRAPHY set small and widely tracked beneath it. The interlocked monogram
 * supplied as artwork is the identity mark and stays on the favicon; the pages
 * themselves use this typeset version, exactly as the references show it.
 */
export default function Wordmark({ layout = "stacked", className }: WordmarkProps) {
  return (
    <span
      className={[styles.mark, styles[layout], className].filter(Boolean).join(" ")}
    >
      <span className={styles.em}>EM</span>
      <span className={styles.word}>Photography</span>
    </span>
  );
}
