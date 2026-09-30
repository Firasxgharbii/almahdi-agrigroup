import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// =====================================================
// TYPES
// =====================================================

type ContactRequest = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
};

// =====================================================
// HTML SECURITY
// =====================================================

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// =====================================================
// EMAIL VALIDATION
// =====================================================

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
}

// =====================================================
// POST /api/contact
// =====================================================

export async function POST(
  request: Request
) {
  try {
    // =================================================
    // BODY
    // =================================================

    const body =
      (await request.json()) as ContactRequest;

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const phone =
      body.phone?.trim() || "Non renseigné";
    const company =
      body.company?.trim() || "Non renseignée";
    const message =
      body.message?.trim() || "";

    // =================================================
    // VALIDATION
    // =================================================

    if (!name) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Veuillez entrer votre nom.",
        },
        {
          status: 400,
        }
      );
    }

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Veuillez entrer votre adresse e-mail.",
        },
        {
          status: 400,
        }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Veuillez entrer une adresse e-mail valide.",
        },
        {
          status: 400,
        }
      );
    }

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Veuillez écrire votre message.",
        },
        {
          status: 400,
        }
      );
    }

    // Limites simples contre les abus
    if (name.length > 150) {
      return NextResponse.json(
        {
          success: false,
          message: "Nom trop long.",
        },
        {
          status: 400,
        }
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Adresse e-mail trop longue.",
        },
        {
          status: 400,
        }
      );
    }

    if (message.length > 10000) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Votre message est trop long.",
        },
        {
          status: 400,
        }
      );
    }

    // =================================================
    // ENVIRONMENT VARIABLES
    // =================================================

    const emailUser =
      process.env.EMAIL_USER;

    const emailPassword =
      process.env.EMAIL_APP_PASSWORD;

    if (!emailUser) {
      console.error(
        "[CONTACT] EMAIL_USER manquant."
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Le service e-mail n'est pas configuré correctement.",
        },
        {
          status: 500,
        }
      );
    }

    if (!emailPassword) {
      console.error(
        "[CONTACT] EMAIL_APP_PASSWORD manquant."
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Le service e-mail n'est pas configuré correctement.",
        },
        {
          status: 500,
        }
      );
    }

    // =================================================
    // NODEMAILER
    // =================================================

    const transporter =
      nodemailer.createTransport({
        service: "gmail",

        auth: {
          user: emailUser,
          pass: emailPassword,
        },
      });

    // =================================================
    // SEND EMAIL
    // =================================================

    await transporter.sendMail({
      from: {
        name: "AlMahdi AgriGroup",
        address: emailUser,
      },

      // Destination finale
      to: "export.almahdicompany@gmail.com",

      // Quand tu cliques sur "Répondre",
      // Gmail répond directement au client.
      replyTo: email,

      subject: `Nouvelle demande de contact — ${name}`,

      text: `
Nouvelle demande depuis AlMahdi AgriGroup

Nom :
${name}

E-mail :
${email}

Téléphone :
${phone}

Entreprise :
${company}

Message :
${message}
      `.trim(),

      html: `
<!DOCTYPE html>

<html lang="fr">

<head>
  <meta charset="UTF-8" />
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f4f1e8;
    font-family:Arial,Helvetica,sans-serif;
    color:#061b11;
  "
>

  <div
    style="
      width:100%;
      padding:40px 15px;
      box-sizing:border-box;
    "
  >

    <div
      style="
        max-width:650px;
        margin:0 auto;
        background:#ffffff;
        border-radius:18px;
        overflow:hidden;
        border:1px solid #e4ded0;
      "
    >

      <!-- HEADER -->

      <div
        style="
          background:#061b11;
          padding:32px;
          color:#ffffff;
        "
      >

        <div
          style="
            margin-bottom:10px;
            color:#d7ad6a;
            font-size:11px;
            font-weight:bold;
            letter-spacing:3px;
            text-transform:uppercase;
          "
        >
          ALMAHDI AGRIGROUP
        </div>

        <h1
          style="
            margin:0;
            font-size:25px;
            line-height:1.3;
          "
        >
          Nouvelle demande de contact
        </h1>

      </div>

      <!-- BODY -->

      <div
        style="
          padding:32px;
        "
      >

        <!-- NAME -->

        <div
          style="
            margin-bottom:20px;
          "
        >
          <div
            style="
              margin-bottom:5px;
              font-size:11px;
              font-weight:bold;
              color:#7b857f;
              text-transform:uppercase;
              letter-spacing:1px;
            "
          >
            Nom
          </div>

          <div
            style="
              font-size:16px;
              font-weight:bold;
            "
          >
            ${escapeHtml(name)}
          </div>
        </div>

        <!-- EMAIL -->

        <div
          style="
            margin-bottom:20px;
          "
        >
          <div
            style="
              margin-bottom:5px;
              font-size:11px;
              font-weight:bold;
              color:#7b857f;
              text-transform:uppercase;
              letter-spacing:1px;
            "
          >
            E-mail
          </div>

          <a
            href="mailto:${escapeHtml(email)}"
            style="
              color:#075b35;
              font-size:16px;
              font-weight:bold;
            "
          >
            ${escapeHtml(email)}
          </a>
        </div>

        <!-- PHONE -->

        <div
          style="
            margin-bottom:20px;
          "
        >
          <div
            style="
              margin-bottom:5px;
              font-size:11px;
              font-weight:bold;
              color:#7b857f;
              text-transform:uppercase;
              letter-spacing:1px;
            "
          >
            Téléphone
          </div>

          <div>
            ${escapeHtml(phone)}
          </div>
        </div>

        <!-- COMPANY -->

        <div
          style="
            margin-bottom:28px;
          "
        >
          <div
            style="
              margin-bottom:5px;
              font-size:11px;
              font-weight:bold;
              color:#7b857f;
              text-transform:uppercase;
              letter-spacing:1px;
            "
          >
            Entreprise
          </div>

          <div>
            ${escapeHtml(company)}
          </div>
        </div>

        <!-- MESSAGE -->

        <div
          style="
            padding:22px;
            background:#f7f4ec;
            border-left:4px solid #d7ad6a;
            border-radius:8px;
          "
        >

          <div
            style="
              margin-bottom:12px;
              color:#075b35;
              font-size:11px;
              font-weight:bold;
              text-transform:uppercase;
              letter-spacing:2px;
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

        <!-- REPLY -->

        <div
          style="
            margin-top:30px;
          "
        >

          <a
            href="mailto:${escapeHtml(email)}"
            style="
              display:inline-block;
              padding:14px 24px;
              background:#075b35;
              color:#ffffff;
              text-decoration:none;
              font-weight:bold;
              border-radius:7px;
            "
          >
            Répondre au client
          </a>

        </div>

      </div>

      <!-- FOOTER -->

      <div
        style="
          padding:20px 32px;
          background:#f8f5ed;
          color:#79827d;
          font-size:12px;
        "
      >
        Message reçu depuis le formulaire de contact
        AlMahdi AgriGroup.
      </div>

    </div>

  </div>

</body>

</html>
      `,
    });

    // =================================================
    // SUCCESS
    // =================================================

    console.log(
      `[CONTACT] Message envoyé par ${email}`
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dès que possible.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    // =================================================
    // ERROR
    // =================================================

    console.error(
      "[CONTACT] Erreur d'envoi :",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Impossible d'envoyer votre message pour le moment. Veuillez réessayer.",
      },
      {
        status: 500,
      }
    );
  }
}