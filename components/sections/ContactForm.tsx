"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/data";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

const REFERRALS = [
  "Instagram",
  "A friend or family",
  "A search engine",
  "A venue or wedding planner",
  "Somewhere else",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={`label ${styles.label}`} htmlFor="name">
          Your name
        </label>
        <input
          className={styles.input}
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={`label ${styles.label}`} htmlFor="email">
          Your email
        </label>
        <input
          className={styles.input}
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={`label ${styles.label}`} htmlFor="partnerName">
          Your partner&rsquo;s name
        </label>
        <input
          className={styles.input}
          id="partnerName"
          name="partnerName"
          type="text"
        />
      </div>

      <div className={styles.field}>
        <label className={`label ${styles.label}`} htmlFor="date">
          Wedding / session date
        </label>
        <input className={styles.input} id="date" name="date" type="date" />
      </div>

      <div className={styles.field}>
        <label className={`label ${styles.label}`} htmlFor="location">
          Location
        </label>
        <input className={styles.input} id="location" name="location" type="text" />
      </div>

      <div className={styles.field}>
        <label className={`label ${styles.label}`} htmlFor="message">
          Tell me a little about your story
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          rows={5}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={`label ${styles.label}`} htmlFor="referral">
          How did you hear about me?
        </label>
        <div className={styles.selectWrap}>
          <select
            className={`${styles.input} ${styles.select}`}
            id="referral"
            name="referral"
            defaultValue=""
          >
            <option value="" />
            {REFERRALS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className={styles.chevron} aria-hidden="true">
            <svg viewBox="0 0 12 8" width="11" height="7" fill="none">
              <path d="M1 1.5 6 6.5l5-5" stroke="currentColor" strokeWidth="1" />
            </svg>
          </span>
        </div>
      </div>

      <button type="submit" className={styles.submit} disabled={status === "sending"}>
        {status === "sending" ? "Sending" : "Send your inquiry"}
        <span className="cta-arrow" aria-hidden="true">
          &#8594;
        </span>
      </button>

      <p className={styles.status} role="status" aria-live="polite">
        {status === "sent"
          ? "Thank you — your message is on its way. I answer every enquiry personally, usually within 48 hours."
          : null}
        {status === "error" ? (
          <>
            The message could not be sent. Please write to me directly at{" "}
            <a className={styles.mail} href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </>
        ) : null}
      </p>
    </form>
  );
}
