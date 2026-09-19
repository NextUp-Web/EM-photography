"use client";

import { useState } from "react";
import Figure from "@/components/ui/Figure";
import { SELECTED_STORIES } from "@/lib/data";
import styles from "./SelectedStories.module.css";

const PER_VIEW = 3;
const PAGES = Math.ceil(SELECTED_STORIES.length / PER_VIEW);

const pad = (value: number) => String(value).padStart(2, "0");

/**
 * The gallery the mockup opens on: three frames and a 01 / 12 counter.
 * The arrows step three photographs at a time through all twelve.
 */
export default function SelectedStories({
  framesClassName,
  controlsClassName,
}: {
  framesClassName?: string;
  controlsClassName?: string;
}) {
  const [page, setPage] = useState(0);
  const frames = SELECTED_STORIES.slice(page * PER_VIEW, page * PER_VIEW + PER_VIEW);

  const step = (delta: number) => setPage((current) => (current + delta + PAGES) % PAGES);

  return (
    <>
      <div className={[styles.frames, framesClassName].filter(Boolean).join(" ")}>
        {frames.map((photo) => (
          <Figure
            key={photo.src + photo.alt}
            photo={photo}
            ratio={0.69}
            mobileRatio={0.775}
            sizes="(max-width: 860px) 32vw, 21vw"
          />
        ))}
      </div>

      <div className={[styles.controls, controlsClassName].filter(Boolean).join(" ")}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => step(-1)}
          aria-label="Previous photographs"
        >
          &#8592;
        </button>
        <p className={styles.counter} aria-live="polite">
          {pad(page * PER_VIEW + 1)} / {pad(SELECTED_STORIES.length)}
        </p>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => step(1)}
          aria-label="Next photographs"
        >
          &#8594;
        </button>
      </div>
    </>
  );
}
