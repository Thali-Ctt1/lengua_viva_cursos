import type { Handler, HandlerEvent } from "@netlify/functions";
import nodemailer from "nodemailer";

interface ContactPayload {
  email: string;
  message: string;
}

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? "";

const corsHeaders = (origin: string) => ({
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN || origin,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
});

const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers["origin"] ?? "";

  // Trata requisições OPTIONS (CORS Preflight)
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders(origin),
      body: "",
    };
  }

  // Bloqueia métodos que não sejam POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Método não permitido." }),
    };
  }

  let payload: ContactPayload;

  try {
    payload = JSON.parse(event.body ?? "{}");
  } catch {
    return {
      statusCode: 400,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Body inválido." }),
    };
  }

  const { email, message } = payload;

  // Valida se os campos estão vazios
  if (!email?.trim() || !message?.trim()) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Campos obrigatórios: email, message." }),
    };
  }

  // Valida o formato do e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "E-mail inválido." }),
    };
  }

  // Configura o transportador do SMTP
  const transporter = nodemailer.createTransport({
    host: String(process.env.SMTP_HOST ?? 'smtp.gmail.com'),
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: String(process.env.SMTP_USER ?? ''),
      pass: String(process.env.SMTP_PASS ?? ''),
    },
  });

  try {
    await transporter.sendMail({
      from: `<${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL, 
      cc: email,                     
      subject: "[Lengua Viva Cursos] Recebemos sua mensagem! 📚", 
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
          
          <h2 style="color: #d97706; margin-top: 0;">¡Hola! Obrigado por entrar em contato.</h2>
          <p>Esta é uma confirmação de que recebemos a sua mensagem com sucesso em nossa plataforma <b>Lengua Viva Cursos</b>.</p>
          <p>Nossa equipe já está analisando o seu contato e responderemos o mais breve possível no e-mail fornecido.</p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <!-- Dados da Mensagem enviada -->
          <h3 style="color: #555;">Cópia dos dados enviados:</h3>
          <p><strong>E-mail de contato:</strong> ${email}</p>
          <p><strong>Mensagem:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #d97706; border-radius: 4px; font-style: italic;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <p style="font-size: 12px; color: #999; text-align: center; margin-bottom: 0;">
            Este é um e-mail automático enviado a partir do formulário de contato da Landing Page Lengua Viva Cursos.
          </p>
        </div>
      `,
    });

    return {
      statusCode: 200,
      headers: corsHeaders(origin),
      body: JSON.stringify({ message: "E-mail enviado com sucesso." }),
    };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Falha ao enviar o e-mail. Tente novamente mais tarde." }),
    };
  }
};

export { handler };