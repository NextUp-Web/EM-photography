"use client";

import { useState } from "react";
import Figure from "@/components/ui/Figure";
import { PORTFOLIO_FILTERS, STORIES, type Story } from "@/lib/data";
import styles from "./PortfolioGallery.module.css";

/**
 * Each story is two independent columns, exactly as the mockup composes it:
 * the tall lead with its caption beneath on the left, a stack of frames on
 * the right, and — for the first story — a row of three running the full
 * width under both. The caption therefore sits level with the right-hand
 * stack rather than waiting for it.
 */
function StoryBlock({ story }: { story: Story }) {
  const caption = (
    <div className={`${styles.caption} ${styles[`caption${story.layout}`]}`}>
      <p className={`caps-serif ${styles.name}`}>{story.name}</p>
      <p className={`caps-serif ${styles.place}`}>{story.place}</p>
    </div>
  );

  if (story.layout === "A") {
    return (
      <article className={`shell ${styles.story}`}>
        <div className={styles.lead}>
          <Figure
            photo={story.lead}
            ratio={1.47}
            mobileRatio={1.45}
            sizes="(max-width: 860px) 100vw, 70vw"
          />
          {caption}
        </div>

        <div className={styles.aside}>
          <Figure photo={story.aside[0]} ratio={1.08} sizes="28vw" />
          <Figure photo={story.aside[1]} ratio={0.99} sizes="28vw" />
        </div>

        <div className={styles.row}>
          {story.row?.map((photo, index) => (
            <Figure
              key={`${photo.src}-${index}`}
              photo={photo}
              ratio={[1.32, 1.55, 1.88][index]}
              sizes="33vw"
            />
          ))}
        </div>

        <div className={styles.mobileRow}>
          {story.mobileRow.map((photo, index) => (
            <Figure
              key={`${photo.src}-m-${index}`}
              photo={photo}
              ratio={0.62}
              sizes="32vw"
            />
          ))}
        </div>
      </article>
    );
  }

  return (
    <article className={`shell ${styles.story} ${styles.storyB}`}>
      <div className={styles.lead}>
        <Figure
          photo={story.lead}
          ratio={1.95}
          mobileRatio={1.42}
          sizes="(max-width: 860px) 100vw, 65vw"
        />
        {caption}
      </div>

      <div className={styles.aside}>
        <Figure photo={story.aside[0]} ratio={1.93} sizes="34vw" />
        <div className={styles.asidePair}>
          <Figure photo={story.aside[1]} ratio={0.83} sizes="15vw" />
          <Figure photo={story.aside[2]} ratio={1.02} sizes="19vw" />
        </div>
      </div>

      <div className={styles.mobileRow}>
        {story.mobileRow.map((photo, index) => (
          <Figure
            key={`${photo.src}-m-${index}`}
            photo={photo}
            ratio={0.62}
            sizes="32vw"
          />
        ))}
      </div>
    </article>
  );
}

export default function PortfolioGallery() {
  const [filter, setFilter] = useState("all");
  const stories =
    filter === "all"
      ? STORIES
      : STORIES.filter((story) => story.categories.includes(filter));

  return (
    <>
      <div className={`shell ${styles.filters}`}>
        <ul className={styles.filterList}>
          {PORTFOLIO_FILTERS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`caps-serif ${styles.filter} ${
                  filter === item.id ? styles.filterActive : ""
                }`}
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {stories.map((story, index) => (
        <div key={story.id}>
          {index > 0 ? (
            <div className={`shell ${styles.divider}`}>
              <span className={styles.rule} aria-hidden="true" />
              <p className={styles.dividerText}>The moments in between.</p>
              <span className={styles.rule} aria-hidden="true" />
            </div>
          ) : null}
          <StoryBlock story={story} />
        </div>
      ))}
    </>
  );
}
