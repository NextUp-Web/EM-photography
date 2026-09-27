"use client";

import { useState } from "react";
import { CONTACT_EMAIL, INTERESTS } from "@/lib/data";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Six required fields on the grid — full name, email, phone, date, place and
 * interest — then the message, required as well.
 */
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
      setDateFocused(false);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label className={`label ${styles.label}`} htmlFor="fullName">
          Full name *
        </label>
        <input
          className={styles.input}
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={`label ${styles.label}`} htmlFor="email">
          Email *
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
          Phone *
        </label>
        <input
          className={styles.input}
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          required
        />
      </div>

      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label className={`label ${styles.label}`} htmlFor="date">
          Wedding / session date *
        </label>
        {/* An empty rule rather than mm/dd/yyyy — the native picker is only
            summoned once the field is actually being filled in. */}
        <div className={styles.selectWrap}>
          <input
            className={`${styles.input} ${styles.date}`}
            id="date"
            name="date"
            type={dateFocused ? "date" : "text"}
            required
            onFocus={() => setDateFocused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.value) setDateFocused(false);
            }}
          />
          <span className={styles.chevron} aria-hidden="true">
            <svg viewBox="0 0 16 16" width="15" height="15" fill="none">
              <rect x="1.5" y="2.5" width="13" height="12" stroke="currentColor" />
              <path d="M1.5 6h13M5 1v3M11 1v3" stroke="currentColor" />
            </svg>
          </span>
        </div>
      </div>

      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label className={`label ${styles.label}`} htmlFor="location">
          Location / venue *
        </label>
        <input
          className={styles.input}
          id="location"
          name="location"
          type="text"
          required
        />
      </div>

      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label className={`label ${styles.label}`} htmlFor="interest">
          Interest *
        </label>
        <div className={styles.selectWrap}>
          <select
            className={`${styles.input} ${styles.select}`}
            id="interest"
            name="interest"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Please select
            </option>
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
          Tell me a little about your story *
        </label>
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          id="message"
          name="message"
          rows={5}
          required
          aria-describedby="message-note"
        />
        <p className={`label ${styles.note}`} id="message-note">
          Response within 24 hours
        </p>
      </div>

      <div className={styles.actions}>
        <button
          type="submit"
          className={`btn ${styles.submit}`}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending" : "Send inquiry"}
        </button>

        <p className={styles.status} role="status" aria-live="polite">
          {status === "sent"
            ? "Thank you — your message is on its way. I answer every enquiry personally, within 24 hours."
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
