import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

export async function sendEmail(data: ContactFormData): Promise<boolean> {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        company: data.company,
        project_type: data.projectType,
        budget: data.budget,
        message: data.message,
      },
      PUBLIC_KEY
    );
    return result.status === 200;
  } catch (error) {
    console.error('Email send failed:', error);
    return false;
  }
}
