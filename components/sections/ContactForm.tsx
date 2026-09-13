"use client";

import { useState } from "react";
import { SESSION_TYPES } from "@/lib/data";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

const MESSAGES: Record<Exclude<Status, "idle" | "sending">, string> = {
  sent: "Merci — votre demande est bien arrivée. Je vous réponds sous 48 heures.",
  error:
    "L’envoi n’a pas abouti. Écrivez-moi directement à contact@em-photography.ch et je vous réponds rapidement.",
};

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
    <form className={styles.form} onSubmit={handleSubmit} noValidate={false}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Nom <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Votre nom"
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="votre@email.com"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="sessionType" className={styles.label}>
            Type de séance <span aria-hidden="true">*</span>
          </label>
          <select id="sessionType" name="sessionType" required defaultValue="" className={styles.input}>
            <option value="" disabled>
              Sélectionner
            </option>
            {SESSION_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="date" className={styles.label}>
            Date souhaitée
          </label>
          <input id="date" name="date" type="date" className={styles.input} />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="location" className={styles.label}>
          Lieu
        </label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Ville, région ou lieu précis"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Parlez-moi de votre projet, vos envies, vos idées..."
          className={`${styles.input} ${styles.textarea}`}
        />
      </div>

      <button type="submit" className={styles.submit} disabled={status === "sending"}>
        {status === "sending" ? "Envoi en cours" : "Envoyer une demande"}
        <span className={styles.submitArrow} aria-hidden="true">
          &#10230;
        </span>
      </button>

      <p className={styles.note} role="status">
        {status === "sent" || status === "error"
          ? MESSAGES[status]
          : "Vos informations restent confidentielles et ne seront jamais partagées."}
      </p>
    </form>
  );
}
