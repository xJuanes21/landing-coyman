import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getEmailTemplate } from '@/lib/email-template';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // Configuración del transporte dinámica desde .env
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_PORT === '465', // El puerto 465 habitualmente usa SSL/Secure
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Contraseña de aplicación
      },
    });

    const logoPath = path.join(process.cwd(), 'public', 'logo-blanco.png');

    const mailOptions = {
      from: `"Web COYMAN" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Nuevo Lead: ${name}`,
      html: getEmailTemplate({ name, email, phone, message }),
      attachments: [
        {
          filename: 'logo-coyman.png',
          path: logoPath,
          cid: 'logo_coyman', // Debe coincidir con el src="cid:logo_coyman" en el template
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json(
      { error: 'Error al enviar la notificación' },
      { status: 500 }
    );
  }
}
