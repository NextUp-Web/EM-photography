"use client";

import { useState } from "react";
import { CONTACT_EMAIL, INTERESTS } from "@/lib/data";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [dateFocused, setDateFocused] = useState(false);

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
        <label className={`label ${styles.label}`} htmlFor="brideName">
          Bride full name
        </label>
        <input
          className={styles.input}
          id="brideName"
          name="brideName"
          type="text"
          autoComplete="name"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={`label ${styles.label}`} htmlFor="groomName">
          Groom full name
        </label>
        <input
          className={styles.input}
          id="groomName"
          name="groomName"
          type="text"
        />
      </div>

      <div className={styles.field}>
        <label className={`label ${styles.label}`} htmlFor="email">
          Email
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
        <label className={`label ${styles.label}`} htmlFor="phone">
          Phone
        </label>
        <input
          className={styles.input}
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
        />
      </div>

      <div className={styles.field}>
        <label className={`label ${styles.label}`} htmlFor="date">
          Wedding / session date
        </label>
        {/* The mockup shows an empty rule, not mm/dd/yyyy — the native picker
            is only summoned once the field is actually being filled in. */}
        <input
          className={styles.input}
          id="date"
          name="date"
          type={dateFocused ? "date" : "text"}
          onFocus={() => setDateFocused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.value) setDateFocused(false);
          }}
        />
      </div>

      <div className={styles.field}>
        <label className={`label ${styles.label}`} htmlFor="location">
          Location / venue
        </label>
        <input className={styles.input} id="location" name="location" type="text" />
      </div>

      <div className={`${styles.field} ${styles.fieldWide}`}>
        <label className={`label ${styles.label}`} htmlFor="interest">
          Interest *
        </label>
        <div className={styles.selectWrap}>
          <select
            className={`${styles.input} ${styles.select}`}
            id="interest"
            name="interest"
            defaultValue={INTERESTS[0]}
            required
          >
            {INTERESTS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className={styles.chevron} aria-hidden="true">
            <svg viewBox="0 0 14 9" width="13" height="8" fill="none">
              <path
                d="M1 1.2 7 7.4l6-6.2"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label className={`label ${styles.label}`} htmlFor="message">
          Tell me a little about your story
        </label>
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          id="message"
          name="message"
          rows={5}
          required
        />
      </div>

      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label className={`label ${styles.label}`} htmlFor="referral">
          How did you hear about me?
        </label>
        <input className={styles.input} id="referral" name="referral" type="text" />
      </div>

      <div className={styles.actions}>
        <button
          type="submit"
          className={`cta-underline ${styles.submit}`}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending" : "Send inquiry"}
          <span className="arrow" aria-hidden="true">
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
      </div>
    </form>
  );
}
