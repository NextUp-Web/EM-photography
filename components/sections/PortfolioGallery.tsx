"use client";

import { useState } from "react";
import Figure from "@/components/ui/Figure";
import { PORTFOLIO_FILTERS, STORIES, type Story } from "@/lib/data";
import styles from "./PortfolioGallery.module.css";

function StoryBlock({ story }: { story: Story }) {
  const caption = (
    <div className={`${styles.caption} ${styles[`caption${story.layout}`]}`}>
      <p className={`caps-serif ${styles.name}`}>{story.name}</p>
      <p className={`caps-serif ${styles.place}`}>{story.place}</p>
    </div>
  );

  if (story.layout === "A") {
    return (
      <article className={`shell ${styles.storyA}`}>
        <Figure
          photo={story.lead}
          ratio={1.47}
          mobileRatio={1.45}
          sizes="(max-width: 860px) 100vw, 70vw"
          className={styles.leadA}
        />

        <div className={styles.asideA}>
          <Figure
            photo={story.aside[0]}
            ratio={0.98}
            sizes="28vw"
            className={styles.asideFrame}
          />
          <Figure
            photo={story.aside[1]}
            ratio={1.1}
            sizes="28vw"
            className={styles.asideFrame}
          />
        </div>

        {caption}

        <div className={styles.rowA}>
          {story.row?.map((photo, index) => (
            <Figure
              key={`${photo.src}-${index}`}
              photo={photo}
              ratio={[1.33, 1.56, 1.89][index]}
              sizes="33vw"
            />
          ))}
        </div>

        <div className={styles.mobileRow}>
          {story.mobileRow.map((photo, index) => (
            <Figure
              key={`${photo.src}-m-${index}`}
              photo={photo}
              ratio={0.68}
              sizes="32vw"
            />
          ))}
        </div>
      </article>
    );
  }

  return (
    <article className={`shell ${styles.storyB}`}>
      <Figure
        photo={story.lead}
        ratio={1.95}
        mobileRatio={1.42}
        sizes="(max-width: 860px) 100vw, 65vw"
        className={styles.leadB}
      />

      <Figure
        photo={story.aside[0]}
        ratio={1.96}
        sizes="34vw"
        className={styles.asideWide}
      />
      <Figure
        photo={story.aside[1]}
        ratio={0.84}
        sizes="15vw"
        className={styles.asideSmallOne}
      />
      <Figure
        photo={story.aside[2]}
        ratio={1.03}
        sizes="19vw"
        className={styles.asideSmallTwo}
      />

      {caption}

      <div className={styles.mobileRow}>
        {story.mobileRow.map((photo, index) => (
          <Figure
            key={`${photo.src}-m-${index}`}
            photo={photo}
            ratio={0.68}
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
