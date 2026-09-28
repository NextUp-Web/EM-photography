"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InstagramGlyph, WhatsAppGlyph } from "@/components/ui/SocialIcons";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, NAV, WHATSAPP_URL } from "@/lib/data";
import { localizePath, stripLocale, type Dictionary, type Locale } from "@/lib/i18n";
import LanguageSwitch from "./LanguageSwitch";
import styles from "./MobileMenu.module.css";

type NavPanelProps = {
  id: string;
  open: boolean;
  onClose: () => void;
  lang: Locale;
  common: Dictionary["common"];
};

/**
 * The full-screen navigation the burger opens, on every platform:
 * four links centred on warm white, the place-line and the two marks
 * beneath them.
 */
export default function NavPanel({ id, open, onClose, lang, common }: NavPanelProps) {
  const path = stripLocale(usePathname());
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div id={id} ref={panelRef} className={styles.panel} hidden={!open}>
      <nav aria-label={common.primaryNav}>
        <ul className={styles.list}>
          {NAV.map((item) => {
            const active =
              item.href === "/" ? path === "/" : path.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={localizePath(item.href, lang)}
                  className={`${styles.link} ${active ? styles.linkActive : ""}`}
                  aria-current={active ? "page" : undefined}
                  onClick={onClose}
                >
                  {common.nav[item.key]}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={styles.foot}>
        {/* EN / FR, then the place-line on one line, then the two marks. */}
        <LanguageSwitch
          lang={lang}
          label={common.language}
          names={common.languageNames}
          className={styles.lang}
          onNavigate={onClose}
        />
        {/* The place-line, on one line, directly above the two marks. */}
        <p className={styles.note}>
          <span>{common.menuPlace[0]}</span>
          <span aria-hidden="true">
            &bull;
          </span>
          <span>{common.menuPlace[1]}</span>
        </p>

        {/* The two marks sit directly under the place-line, at the same
            weight as everything else on the panel. */}
        <div className={styles.socials}>
          <a
            className={styles.social}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${common.instagram} — @${INSTAGRAM_HANDLE}`}
            onClick={onClose}
          >
            <InstagramGlyph size={18} />
          </a>
          <a
            className={styles.social}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={common.whatsapp}
            onClick={onClose}
          >
            <WhatsAppGlyph size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
