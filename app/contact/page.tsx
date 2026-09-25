import ContactForm from "@/components/sections/ContactForm";
import Figure from "@/components/ui/Figure";
import { PHOTOS } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact | EM Photography",
  description:
    "Tell me what this day will feel like — enquiries for weddings, couples and intimate celebrations in Switzerland and across Europe.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="page page-opening">
      {/* ---------- Opening — the title and its invitation, then the photograph ---------- */}
      <section className={styles.opening}>
        <div className={styles.intro}>
          <h1 className={`display ${styles.title}`}>
            Tell me what this day
            <br />
            will feel like.
          </h1>
          {/* Centred, on the four lines the client's reference breaks it
              into (document, Contact: "réaligne de la sorte"). */}
          <p className={`copy ${styles.lede}`}>
            <span className={styles.line}>
              I&rsquo;d love to hear what you&rsquo;re planning. Whether you&rsquo;re
              celebrating
            </span>{" "}
            <span className={styles.line}>
              a wedding, an intimate gathering, or simply a season of life you want
            </span>{" "}
            <span className={styles.line}>
              to remember, tell me a little about it. Your vision. Where it will unfold.
            </span>{" "}
            <span className={styles.line}>Who will be there. What matters most to you.</span>
          </p>
        </div>

        <Figure
          photo={PHOTOS.contactHero}
          ratio={1.95}
          mobileRatio={1.4}
          sizes="(max-width: 860px) 100vw, 1080px"
          priority
        />
      </section>

      <section className={styles.main} aria-labelledby="enquiry">
        <div className={styles.aside}>
          <p className="label" id="enquiry">
            Share your vision.
          </p>
          <h2 className={`display ${styles.asideTitle}`}>
            Thoughtful <br className={styles.wide} />
            photography for <br className={styles.wide} />
            the meaningful <br className={styles.wide} />
            moments.
          </h2>
          <p className={`copy ${styles.asideCopy}`}>
            Every celebration has its own rhythm, atmosphere and way of unfolding.
            Tell me a little about what you&rsquo;re planning and what matters most to
            you, and we can shape the coverage around the way your day is meant to
            feel.
          </p>
        </div>

        <div className={styles.formWrap}>
          <ContactForm />
        </div>

        <Figure
          photo={PHOTOS.contactBouquet}
          ratio={0.98}
          mobileRatio={2.39}
          sizes="(max-width: 860px) 100vw, 420px"
          className={styles.bouquet}
        />
      </section>

      {/* The page closes on one monochrome photograph. */}
      <section aria-label="The lake">
        <Figure
          photo={PHOTOS.contactClosing}
          ratio={2.86}
          mobileRatio={1.6}
          sizes="(max-width: 860px) 100vw, 1080px"
        />
      </section>
    </div>
  );
}
