"use client";

import { useState } from "react";
import Figure from "@/components/ui/Figure";
import { SELECTED_STORIES } from "@/lib/data";
import styles from "./SelectedStories.module.css";

const COUNT = SELECTED_STORIES.length;
/** frames in view on the desktop; the phone shows the first of them only */
const IN_VIEW = 3;

const pad = (value: number) => String(value).padStart(2, "0");

/**
 * Three frames side by side, stepped one at a time by the two squared
 * arrows. The counter and the hairline beneath follow the first frame.
 */
export default function SelectedStories({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);

  const step = (delta: number) =>
    setIndex((current) => (current + delta + COUNT) % COUNT);

  const frames = Array.from(
    { length: IN_VIEW },
    (_, offset) => SELECTED_STORIES[(index + offset) % COUNT],
  );

  return (
    <div className={[styles.stories, className].filter(Boolean).join(" ")}>
      <div className={styles.frames}>
        {frames.map((photo, offset) => (
          <Figure
            /* keyed on the source so each photograph fades in on its own */
            key={`${photo.src}-${offset}`}
            photo={photo}
            ratio={1.167}
            mobileRatio={1.167}
            sizes="(max-width: 860px) 100vw, 33vw"
            className={styles.figure}
          />
        ))}
      </div>

      <div className={styles.controls}>
        <p className={styles.counter} aria-live="polite">
          {pad(index + 1)} / {pad(COUNT)}
        </p>

        <span className={styles.track} aria-hidden="true">
          <span
            className={styles.progress}
            style={{
              left: `${(index / COUNT) * 100}%`,
              width: `${100 / COUNT}%`,
            }}
          />
        </span>

        <div className={styles.arrows}>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => step(-1)}
            aria-label="Previous photograph"
          >
            &#8592;
          </button>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => step(1)}
            aria-label="Next photograph"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
