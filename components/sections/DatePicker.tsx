"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./DatePicker.module.css";

type DatePickerProps = {
  id: string;
  name: string;
  /** the chosen day as YYYY-MM-DD, or "" */
  value: string;
  onChange: (value: string) => void;
  invalid?: boolean;
  describedBy?: string;
};

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const pad = (value: number) => String(value).padStart(2, "0");
const toISO = (date: Date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const fromISO = (value: string) => {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
};
const startOfToday = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};
const addDays = (date: Date, days: number) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);

const longDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
const monthYear = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" });

/**
 * The wedding or session date, in the site's own hand rather than the
 * browser's picker: a field that opens a large calendar beneath it — the
 * month in the display face, the days on a square grid, past days set
 * quiet and closed. Weeks start on Monday. The chosen day travels with
 * the form as YYYY-MM-DD in a hidden input.
 */
export default function DatePicker({
  id,
  name,
  value,
  onChange,
  invalid = false,
  describedBy,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  /* the first day of the month on show */
  const [month, setMonth] = useState(() => {
    const base = value ? fromISO(value) : startOfToday();
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });
  /* the day that holds keyboard focus inside the grid */
  const [focused, setFocused] = useState<Date>(() =>
    value ? fromISO(value) : startOfToday(),
  );

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const today = startOfToday();
  const selected = value ? fromISO(value) : null;

  /* close on a click outside or on Escape, returning focus to the field */
  useEffect(() => {
    if (!open) return;

    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /* keep the focused day's button focused as it moves */
  useEffect(() => {
    if (!open) return;
    gridRef.current
      ?.querySelector<HTMLButtonElement>(`[data-day="${toISO(focused)}"]`)
      ?.focus();
  }, [open, focused]);

  const openCalendar = () => {
    const base = selected ?? today;
    setMonth(new Date(base.getFullYear(), base.getMonth(), 1));
    setFocused(base);
    setOpen(true);
  };

  const choose = (day: Date) => {
    onChange(toISO(day));
    setOpen(false);
    triggerRef.current?.focus();
  };

  const firstMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const canGoBack = month > firstMonth;

  const showMonth = (offset: number) => {
    const next = new Date(month.getFullYear(), month.getMonth() + offset, 1);
    if (next < firstMonth) return;
    setMonth(next);
  };

  const moveFocus = (days: number) => {
    const next = addDays(focused, days);
    if (next < today) return;
    setFocused(next);
    if (next.getMonth() !== month.getMonth() || next.getFullYear() !== month.getFullYear()) {
      setMonth(new Date(next.getFullYear(), next.getMonth(), 1));
    }
  };

  const onGridKey = (event: React.KeyboardEvent) => {
    const moves: Record<string, number> = {
      ArrowLeft: -1,
      ArrowRight: 1,
      ArrowUp: -7,
      ArrowDown: 7,
    };
    if (event.key in moves) {
      event.preventDefault();
      moveFocus(moves[event.key]);
    }
  };

  /* six weeks from the Monday on or before the first of the month */
  const leading = (month.getDay() + 6) % 7;
  const gridStart = addDays(month, -leading);
  const days = Array.from({ length: 42 }, (_, index) => addDays(gridStart, index));
  const focusedISO = toISO(focused);

  return (
    <div className={styles.root} ref={rootRef}>
      <input type="hidden" name={name} value={value} />

      <button
        ref={triggerRef}
        type="button"
        id={id}
        className={`${styles.trigger} ${invalid ? styles.invalid : ""}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-describedby={describedBy}
        onClick={() => (open ? setOpen(false) : openCalendar())}
      >
        <span className={styles.value}>{selected ? longDate.format(selected) : ""}</span>
        <span className={styles.icon} aria-hidden="true">
          <svg viewBox="0 0 16 16" width="15" height="15" fill="none">
            <rect x="1.5" y="2.5" width="13" height="12" stroke="currentColor" />
            <path d="M1.5 6h13M5 1v3M11 1v3" stroke="currentColor" />
          </svg>
        </span>
      </button>

      {open ? (
        <div className={styles.popover} role="dialog" aria-label="Choose a date">
          <div className={styles.head}>
            <button
              type="button"
              className={styles.nav}
              onClick={() => showMonth(-1)}
              disabled={!canGoBack}
              aria-label="Previous month"
            >
              &#8592;
            </button>
            <p className={styles.month} aria-live="polite">
              {monthYear.format(month)}
            </p>
            <button
              type="button"
              className={styles.nav}
              onClick={() => showMonth(1)}
              aria-label="Next month"
            >
              &#8594;
            </button>
          </div>

          <div className={styles.weekdays} aria-hidden="true">
            {WEEKDAYS.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className={styles.days} ref={gridRef} onKeyDown={onGridKey}>
            {days.map((day) => {
              const iso = toISO(day);
              const outside = day.getMonth() !== month.getMonth();
              const past = day < today;
              const isSelected = selected !== null && iso === toISO(selected);
              const isToday = iso === toISO(today);
              return (
                <button
                  key={iso}
                  type="button"
                  data-day={iso}
                  className={[
                    styles.day,
                    outside ? styles.outside : "",
                    isToday ? styles.today : "",
                    isSelected ? styles.selected : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  disabled={past}
                  tabIndex={iso === focusedISO ? 0 : -1}
                  aria-pressed={isSelected}
                  aria-label={longDate.format(day)}
                  onClick={() => choose(day)}
                  onFocus={() => setFocused(day)}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
