import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim() || "Non renseigné";
    const company = body.company?.trim() || "Non renseignée";
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Nom, e-mail et message sont obligatoires.",
        },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error("Configuration SMTP manquante.");

      return NextResponse.json(
        {
          success: false,
          message: "Le service d’envoi d’e-mail n’est pas configuré.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: {
        name: "AlMahdi AgriGroup — Site Web",
        address: process.env.EMAIL_USER,
      },

      // TOUS LES FORMULAIRES ARRIVENT ICI
      to: "export.almahdicompany@gmail.com",

      // En cliquant Répondre dans Gmail,
      // tu répondras directement au client.
      replyTo: email,

      subject: `Nouvelle demande — ${name}${
        company !== "Non renseignée" ? ` — ${company}` : ""
      }`,

      text: `
NOUVELLE DEMANDE — ALMAHDI AGRIGROUP

Nom : ${name}
E-mail : ${email}
Téléphone : ${phone}
Entreprise : ${company}

Message :
${message}
      `,

      html: `
        <div
          style="
            margin:0;
            padding:40px 20px;
            background:#f4f0e6;
            font-family:Arial,Helvetica,sans-serif;
            color:#061b11;
          "
        >
          <div
            style="
              max-width:650px;
              margin:0 auto;
              background:#ffffff;
              border-radius:20px;
              overflow:hidden;
              border:1px solid #e7e0d1;
            "
          >
            <div
              style="
                padding:30px;
                background:#061b11;
                color:#ffffff;
              "
            >
              <div
                style="
                  color:#d7ad6a;
                  font-size:11px;
                  letter-spacing:3px;
                  text-transform:uppercase;
                  margin-bottom:10px;
                "
              >
                AlMahdi AgriGroup
              </div>

              <h1
                style="
                  margin:0;
                  font-size:25px;
                  font-weight:600;
                "
              >
                Nouvelle demande de contact
              </h1>
            </div>

            <div style="padding:32px;">
              <p style="margin:0 0 8px;">
                <strong>Nom :</strong>
                ${escapeHtml(name)}
              </p>

              <p style="margin:0 0 8px;">
                <strong>E-mail :</strong>
                ${escapeHtml(email)}
              </p>

              <p style="margin:0 0 8px;">
                <strong>Téléphone :</strong>
                ${escapeHtml(phone)}
              </p>

              <p style="margin:0 0 28px;">
                <strong>Entreprise :</strong>
                ${escapeHtml(company)}
              </p>

              <div
                style="
                  background:#f7f4ec;
                  border-left:4px solid #d7ad6a;
                  padding:20px;
                  border-radius:8px;
                "
              >
                <div
                  style="
                    font-size:11px;
                    font-weight:bold;
                    text-transform:uppercase;
                    letter-spacing:2px;
                    color:#075b35;
                    margin-bottom:12px;
                  "
                >
                  Message
                </div>

                <div
                  style="
                    white-space:pre-wrap;
                    line-height:1.7;
                    color:#34473d;
                  "
                >${escapeHtml(message)}</div>
              </div>

              <div style="margin-top:28px;">
                <a
                  href="mailto:${encodeURIComponent(email)}"
                  style="
                    display:inline-block;
                    background:#075b35;
                    color:#ffffff;
                    padding:13px 22px;
                    border-radius:8px;
                    text-decoration:none;
                    font-weight:bold;
                  "
                >
                  Répondre au client
                </a>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Votre message a été envoyé avec succès.",
    });
  } catch (error) {
    console.error("Erreur formulaire contact :", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Une erreur est survenue pendant l’envoi. Veuillez réessayer.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}