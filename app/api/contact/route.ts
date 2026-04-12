import { NextRequest, NextResponse } from "next/server";

const EMAILJS_SEND_URL = "https://api.emailjs.com/api/v1.0/email/send";

const ALLOWED_FORM_TYPES = new Set(["individual", "institutional", "general"]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: NextRequest) {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    return NextResponse.json(
      {
        error:
          "Email is not configured. Set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, and EMAILJS_PRIVATE_KEY on the server.",
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isRecord(body)) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const formType = body.form_type;
  if (typeof formType !== "string" || !ALLOWED_FORM_TYPES.has(formType)) {
    return NextResponse.json({ error: "Invalid form type." }, { status: 400 });
  }

  const name = body.name;
  const email = body.email;
  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
  }

  const stringFields = [
    "form_type",
    "name",
    "from_name",
    "email",
    "reply_to",
    "organization",
    "job_title",
    "country",
    "program_interest",
    "cohort_size",
    "training_objectives",
    "subject",
    "message",
  ] as const;

  const template_params: Record<string, string> = {};
  for (const key of stringFields) {
    const v = body[key];
    template_params[key] = typeof v === "string" ? v : "";
  }

  template_params.from_name = template_params.from_name || template_params.name;
  template_params.reply_to = template_params.reply_to || template_params.email;

  try {
    const res = await fetch(EMAILJS_SEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("EmailJS send failed:", res.status, errText);
      return NextResponse.json(
        { error: "Could not send your message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("EmailJS request error:", e);
    return NextResponse.json(
      { error: "Could not send your message. Please try again later." },
      { status: 502 }
    );
  }
}
