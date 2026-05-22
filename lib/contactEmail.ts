import emailjs from "@emailjs/browser";

export type ContactFormType = "individual" | "institutional" | "general";

export interface ContactEmailParams {
  form_type: ContactFormType;
  name: string;
  from_name: string;
  email: string;
  reply_to: string;
  organization: string;
  job_title: string;
  country: string;
  program_interest: string;
  cohort_size: string;
  training_objectives: string;
  subject: string;
  message: string;
}

export class ContactEmailError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ContactEmailError";
  }
}

const ALLOWED_FORM_TYPES = new Set<ContactFormType>([
  "individual",
  "institutional",
  "general",
]);

function getConfig() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return null;
  }

  return { serviceId, templateId, publicKey };
}

function normalizeParams(params: ContactEmailParams): Record<string, string> {
  const template_params: Record<string, string> = {
    form_type: params.form_type,
    name: params.name.trim(),
    from_name: (params.from_name || params.name).trim(),
    email: params.email.trim(),
    reply_to: (params.reply_to || params.email).trim(),
    organization: params.organization.trim(),
    job_title: params.job_title.trim(),
    country: params.country.trim(),
    program_interest: params.program_interest.trim(),
    cohort_size: params.cohort_size.trim(),
    training_objectives: params.training_objectives.trim(),
    subject: params.subject.trim(),
    message: params.message.trim(),
  };

  return template_params;
}

function validateParams(params: ContactEmailParams) {
  if (!ALLOWED_FORM_TYPES.has(params.form_type)) {
    throw new ContactEmailError("Invalid form type.");
  }

  if (params.name.trim().length < 2) {
    throw new ContactEmailError("Name is required.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(params.email.trim())) {
    throw new ContactEmailError("Valid email is required.");
  }

  if (params.message.trim().length < 10) {
    throw new ContactEmailError(
      "Please enter a message (at least 10 characters)."
    );
  }
}

export function isContactEmailConfigured(): boolean {
  return getConfig() !== null;
}

/** Sends a contact/inquiry email via EmailJS (browser). Works with static hosting. */
export async function sendContactEmail(
  params: ContactEmailParams
): Promise<void> {
  const config = getConfig();
  if (!config) {
    throw new ContactEmailError(
      "Email is not configured. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to .env.local (see .env.example)."
    );
  }

  validateParams(params);
  const template_params = normalizeParams(params);

  try {
    await emailjs.send(
      config.serviceId,
      config.templateId,
      template_params,
      { publicKey: config.publicKey }
    );
  } catch (err) {
    console.error("EmailJS send failed:", err);
    throw new ContactEmailError(
      "Could not send your message. Please try again later or email us directly."
    );
  }
}
