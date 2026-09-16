import { NextResponse } from "next/server";

/**
 * The enquiry fields that must be present to be able to answer at all.
 * Everything else the form asks for is optional, as designed.
 */
const REQUIRED = ["name", "email", "message"] as const;

/**
 * The form also sends `partnerName`, `date`, `location` and `referral`.
 * They are optional by design, so they are passed straight through.
 */

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

  // No delivery provider is connected yet, so nothing is sent and the form is
  // told so honestly rather than shown a false confirmation. Add the Resend
  // (or equivalent) call here — the validated payload above is its only input.
  return NextResponse.json({ error: "delivery_not_configured" }, { status: 503 });
}
