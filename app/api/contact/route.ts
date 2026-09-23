import { NextResponse } from "next/server";

/**
 * The enquiry form on /contact posts here. Delivery is still not wired to a
 * provider — the route validates and answers 503 rather than pretending the
 * message was sent.
 */
const REQUIRED = [
  "fullName",
  "email",
  "phone",
  "date",
  "location",
  "interest",
  "message",
  "referral",
] as const;

/** The form's own minimum, enforced here too. */
const MESSAGE_MIN_WORDS = 6;

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  const missing = REQUIRED.filter((field) => {
    const value = payload[field];
    return typeof value !== "string" || value.trim() === "";
  });

  if (missing.length > 0) {
    return NextResponse.json({ error: "missing_fields", fields: missing }, { status: 400 });
  }

  if (typeof payload.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const words = String(payload.message).trim().split(/\s+/).filter(Boolean).length;

  if (words < MESSAGE_MIN_WORDS) {
    return NextResponse.json(
      { error: "message_too_short", minWords: MESSAGE_MIN_WORDS },
      { status: 400 },
    );
  }

  const enquiry = Object.fromEntries(
    REQUIRED.map((field) => [
      field,
      typeof payload[field] === "string" ? payload[field] : "",
    ]),
  );

  // Delivery provider is not connected yet. Add the Resend (or equivalent) call
  // here — `enquiry` above is the only input it needs.
  void enquiry;

  return NextResponse.json({ error: "delivery_not_configured" }, { status: 503 });
}
