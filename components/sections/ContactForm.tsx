"use client";

import { useId, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/data";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

type Field = {
  name: string;
  label: string;
  type: string;
  autoComplete: string;
  required?: boolean;
  /** spans both columns */
  full?: boolean;
};

const FIELDS: Field[] = [
  { name: "name", label: "Your name", type: "text", autoComplete: "name", required: true },
  { name: "email", label: "Your email", type: "email", autoComplete: "email", required: true },
  { name: "partnerName", label: "Your partner's name", type: "text", autoComplete: "off" },
  { name: "date", label: "Wedding / session date", type: "date", autoComplete: "off" },
  { name: "location", label: "Location", type: "text", autoComplete: "off", full: true },
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const statusId = useId();

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
    <form className={styles.form} onSubmit={handleSubmit} aria-describedby={statusId}>
      <div className={styles.grid}>
        {FIELDS.map((field) => (
          <div
            key={field.name}
            className={[styles.field, field.full ? styles.full : ""].filter(Boolean).join(" ")}
          >
            <label htmlFor={field.name} className={`label ${styles.label}`}>
              {field.label}
              {field.required ? <span aria-hidden="true"> *</span> : null}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              required={field.required}
              className={styles.input}
            />
          </div>
        ))}

        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="message" className={`label ${styles.label}`}>
            Tell me a little about your story
            <span aria-hidden="true"> *</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className={`${styles.input} ${styles.textarea}`}
          />
        </div>

        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="referral" className={`label ${styles.label}`}>
            How did you hear about me?
          </label>
          <input id="referral" name="referral" type="text" autoComplete="off" className={styles.input} />
        </div>
      </div>

      <div className={styles.foot}>
        <button type="submit" className={styles.submit} disabled={status === "sending"}>
          {status === "sending" ? "Sending" : "Send your inquiry"}
          <span className="cta__arrow" aria-hidden="true">
            &#8594;
          </span>
        </button>

        <p id={statusId} className={styles.status} role="status">
          {status === "sent" ? (
            "Thank you — your message is on its way. I'll write back within a few days."
          ) : status === "error" ? (
            <>
              Something went wrong on the way. Please write to me directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className={styles.mail}>
                {CONTACT_EMAIL}
              </a>
              .
            </>
          ) : (
            <span className={styles.hint}>Fields marked * are needed to reply to you.</span>
          )}
        </p>
      </div>
    </form>
  );
}
