import emailjs from "@emailjs/browser";
import type { ContactFormValues } from "../types/contact";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function sendContactEmail(values: ContactFormValues) {
  return emailjs.send(
    serviceId,
    templateId,
    {
      from_name: values.name,
      company: values.company,
      from_email: values.email,
      phone: values.phone,
      message: values.message,
    },
    publicKey,
  );
}
