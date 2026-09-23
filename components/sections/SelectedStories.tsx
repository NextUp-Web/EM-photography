"use client";

import { useState } from "react";
import Link from "next/link";
import Figure from "@/components/ui/Figure";
import { SELECTED_STORIES } from "@/lib/data";
import styles from "./SelectedStories.module.css";

const COUNT = SELECTED_STORIES.length;

const pad = (value: number) => String(value).padStart(2, "0");

/**
 * One photograph at a time — never a row of three. The arrows step through
 * the twelve frames one by one, on the desktop exactly as on the phone.
 */
export default function SelectedStories({
  framesClassName,
  controlsClassName,
}: {
  framesClassName?: string;
  controlsClassName?: string;
}) {
  const [index, setIndex] = useState(0);
  const photo = SELECTED_STORIES[index];

  const step = (delta: number) =>
    setIndex((current) => (current + delta + COUNT) % COUNT);

  return (
    <>
      <div className={[styles.stage, framesClassName].filter(Boolean).join(" ")}>
        <div className={styles.frame}>
          {/* keyed on the source so each photograph fades in on its own */}
          <Figure
            key={photo.src + index}
            photo={photo}
            ratio={0.75}
            mobileRatio={0.8}
            sizes="(max-width: 860px) 100vw, 40vw"
            className={styles.figure}
          />
        </div>
      </div>

      <div className={[styles.controls, controlsClassName].filter(Boolean).join(" ")}>
        <div className={styles.pager}>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => step(-1)}
            aria-label="Previous photograph"
          >
            &#8592;
          </button>
          <p className={styles.counter} aria-live="polite">
            {pad(index + 1)} / {pad(COUNT)}
          </p>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => step(1)}
            aria-label="Next photograph"
          >
            &#8594;
          </button>
        </div>

        <Link href="/portfolio" className={`btn btn-dark ${styles.view}`}>
          View portfolio
        </Link>
      </div>
    </>
  );
}
