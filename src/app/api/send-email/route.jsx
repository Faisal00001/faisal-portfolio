import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";
export async function POST(request) {
    try {

        const { firstname, lastname, email, phone, service, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER, // The authenticated user's email
            replyTo: email, // The user's email address
            to: process.env.EMAIL_USER,
            subject: `New message from ${firstname} ${lastname}`,
            text: `Service: ${service}\nPhone: ${phone}\nMessage: ${message}`,
            html: `
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send the email' }, { status: 500 });
    }
}