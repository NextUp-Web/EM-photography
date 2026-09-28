"use client";

import { useEffect, useState } from "react";
import Figure from "@/components/ui/Figure";
import type { Photo } from "@/lib/data";
import styles from "./SelectedStories.module.css";

/** frames in view on the desktop; the phone shows the first of them only */
const IN_VIEW = 3;

const pad = (value: number) => String(value).padStart(2, "0");

type SelectedStoriesProps = {
  /** the gallery, its descriptions already in the page's language */
  photos: Photo[];
  labels: { previous: string; next: string };
  className?: string;
};

/**
 * Three frames side by side, stepped one at a time by the two squared
 * arrows; the strip glides from one frame to the next. The counter and
 * the hairline beneath follow the first frame.
 */
export default function SelectedStories({ photos, labels, className }: SelectedStoriesProps) {
  const COUNT = photos.length;
  /* The strip carries the gallery three times over so it can glide past
     either end; once a glide settles outside the middle copy, it is moved
     back into it without a transition, where it looks exactly the same. */
  const SLIDES = [...photos, ...photos, ...photos];

  /* the first frame in view, as a place on the strip */
  const [position, setPosition] = useState(COUNT);
  const [gliding, setGliding] = useState(true);

  const index = position % COUNT;

  const step = (delta: number) =>
    setPosition((current) => {
      const next = current + delta;
      /* never glide off the strip, however fast the arrows are pressed */
      return next < 0 || next > SLIDES.length - IN_VIEW ? current : next;
    });

  /* after a jump back into the middle copy, glide again from the next frame */
  useEffect(() => {
    if (gliding) return;
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => setGliding(true));
    });
    return () => cancelAnimationFrame(frame);
  }, [gliding]);

  const settle = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") {
      return;
    }
    if (position < COUNT || position >= 2 * COUNT) {
      setGliding(false);
      setPosition(COUNT + index);
    }
  };

  return (
    <div className={[styles.stories, className].filter(Boolean).join(" ")}>
      <div className={styles.frames}>
        <div
          className={[styles.strip, gliding ? styles.gliding : ""]
            .filter(Boolean)
            .join(" ")}
          style={{ "--position": position } as React.CSSProperties}
          onTransitionEnd={settle}
        >
          {SLIDES.map((photo, slide) => (
            <div
              key={slide}
              className={styles.slide}
              /* only the middle copy is read out */
              aria-hidden={slide < COUNT || slide >= 2 * COUNT || undefined}
            >
              <Figure
                photo={photo}
                ratio={1.167}
                mobileRatio={1.167}
                sizes="(max-width: 860px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
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
            aria-label={labels.previous}
          >
            &#8592;
          </button>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => step(1)}
            aria-label={labels.next}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
