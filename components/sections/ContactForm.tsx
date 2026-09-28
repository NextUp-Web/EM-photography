"use client";

import { useState } from "react";
import { CONTACT_EMAIL, INTERESTS } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n";
import DatePicker from "./DatePicker";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Six required fields on the grid — full name, email, phone, date, place and
 * interest — then the message, required as well.
 */
type ContactFormProps = {
  labels: Dictionary["form"];
  calendar: Dictionary["datePicker"];
};

export default function ContactForm({ labels, calendar }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [date, setDate] = useState("");
  const [dateMissing, setDateMissing] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    /* the calendar is not a native field, so its requirement is checked here */
    if (!date) {
      setDateMissing(true);
      form.querySelector<HTMLButtonElement>("#date")?.focus();
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
      setDate("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label className={`label ${styles.label}`} htmlFor="fullName">
          {labels.fullName}
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
          {labels.email}
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
          {labels.phone}
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
          {labels.date}
        </label>
        <DatePicker
          id="date"
          name="date"
          value={date}
          onChange={(value) => {
            setDate(value);
            setDateMissing(false);
          }}
          invalid={dateMissing}
          labels={calendar}
          describedBy={dateMissing ? "date-note" : undefined}
        />
        {dateMissing ? (
          <p className={`label ${styles.note}`} id="date-note">
            {labels.dateMissing}
          </p>
        ) : null}
      </div>

      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label className={`label ${styles.label}`} htmlFor="location">
          {labels.location}
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
          {labels.interest}
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
              {labels.pleaseSelect}
            </option>
            {INTERESTS.map((option) => (
              <option key={option} value={option}>
                {labels.interests[option] ?? option}
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
          {labels.message}
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
          {labels.responseTime}
        </p>
      </div>

      <div className={styles.actions}>
        <button
          type="submit"
          className={`btn ${styles.submit}`}
          disabled={status === "sending"}
        >
          {status === "sending" ? labels.sending : labels.send}
        </button>

        <p className={styles.status} role="status" aria-live="polite">
          {status === "sent"
            ? labels.sent
            : null}
          {status === "error" ? (
            <>
              {labels.failed}{" "}
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
