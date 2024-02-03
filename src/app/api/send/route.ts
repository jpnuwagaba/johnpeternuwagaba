import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'jpnuwagaba1@gmail.com',
      to: ['jpnuwagaba1@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
      text: 'Hello world', // Add the required 'text' property
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

export function GET() {
  try {
    return NextResponse.json({ message: 'Hello world' });
  } catch (error) {
    return NextResponse.json({ error });
  }
}


