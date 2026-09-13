import { NextResponse } from "next/server";

const REQUIRED = ["name", "email", "sessionType", "message"] as const;

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

  // Delivery provider is not connected yet. Add the Resend (or equivalent) call
  // here — the validated enquiry above is the only input it needs.
  return NextResponse.json({ error: "delivery_not_configured" }, { status: 503 });
}
