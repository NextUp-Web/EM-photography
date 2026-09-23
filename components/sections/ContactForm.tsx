"use client";

import { useState } from "react";
import {
  CONTACT_EMAIL,
  INTERESTS,
  MESSAGE_MIN_WORDS,
  REFERRAL_SOURCES,
} from "@/lib/data";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

/** Words, as a reader would count them — runs of non-whitespace. */
function countWords(value: string) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Six required fields on the grid — full name, email, phone, date, place and
 * interest — then the message and the referral, both required as well. The
 * message must run to at least six words; the check is real, it blocks the
 * submission and it prints a quiet line beneath the field.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [dateFocused, setDateFocused] = useState(false);
  const [message, setMessage] = useState("");
  const [messageTouched, setMessageTouched] = useState(false);

  const messageWords = countWords(message);
  const messageTooShort = messageWords < MESSAGE_MIN_WORDS;
  /* The line only appears once the field has been left, or once a
     submission has been attempted — never while the visitor is typing
     their first word. */
  const showMessageError = messageTouched && messageTooShort;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (messageTooShort) {
      setMessageTouched(true);
      form.querySelector<HTMLTextAreaElement>("#message")?.focus();
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setMessage("");
      setMessageTouched(false);
      setDateFocused(false);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
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

      <div className={styles.field}>
        <label className={`label ${styles.label}`} htmlFor="date">
          Wedding / session date *
        </label>
        {/* An empty rule rather than mm/dd/yyyy — the native picker is only
            summoned once the field is actually being filled in. */}
        <input
          className={styles.input}
          id="date"
          name="date"
          type={dateFocused ? "date" : "text"}
          required
          onFocus={() => setDateFocused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.value) setDateFocused(false);
          }}
        />
      </div>

      <div className={styles.field}>
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

      <div className={styles.field}>
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
              Select
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
          className={`${styles.input} ${styles.textarea} ${
            showMessageError ? styles.inputError : ""
          }`}
          id="message"
          name="message"
          rows={5}
          required
          value={message}
          aria-invalid={showMessageError || undefined}
          aria-describedby="message-hint"
          onChange={(event) => setMessage(event.target.value)}
          onBlur={() => setMessageTouched(true)}
        />
        <p className={styles.hint} id="message-hint">
          {showMessageError ? (
            <span className={styles.hintError}>
              A few words more, please — at least {MESSAGE_MIN_WORDS}.
            </span>
          ) : (
            <span className={styles.hintQuiet}>
              At least {MESSAGE_MIN_WORDS} words.
            </span>
          )}
        </p>
      </div>

      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label className={`label ${styles.label}`} htmlFor="referral">
          How did you hear about me? *
        </label>
        <div className={styles.selectWrap}>
          <select
            className={`${styles.input} ${styles.select}`}
            id="referral"
            name="referral"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select
            </option>
            {REFERRAL_SOURCES.map((option) => (
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

      <div className={styles.actions}>
        <button
          type="submit"
          className={`btn btn-dark ${styles.submit}`}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending" : "Send inquiry"}
        </button>

        <p className={`label ${styles.responseTime}`}>Responses within 24 hours</p>

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
