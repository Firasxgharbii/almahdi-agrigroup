"use client";

import {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";

import {
  Building,
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
  Printer,
} from "lucide-react";

import ContactMapHero from "../components/ContactMapHero";

// =====================================================
// TYPES
// =====================================================

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type FormStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

// =====================================================
// OFFICE ITEM
// =====================================================

function OfficeItem({
  city,
  phone,
  address,
}: {
  city: string;
  phone: string;
  address: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white">
        <Building size={20} />
      </div>

      <div>
        <p className="font-bold text-black">
          {city}:{" "}
          <a
            href={`tel:${phone.replaceAll("-", "")}`}
            className="font-bold"
          >
            {phone}
          </a>
        </p>

        <p className="mt-1 text-gray-800">
          {address}
        </p>
      </div>
    </div>
  );
}

// =====================================================
// CONTACT INFO
// =====================================================

function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label?: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white">
        <Icon size={20} />
      </div>

      <p className="text-black">
        {label && (
          <span className="font-semibold">
            {label}:{" "}
          </span>
        )}

        <a
          href={href}
          className="font-bold underline-offset-2 hover:underline"
        >
          {value}
        </a>
      </p>
    </div>
  );
}

// =====================================================
// PAGE
// =====================================================

export default function ContactPage() {
  const [formData, setFormData] =
    useState<ContactFormData>({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });

  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [statusMessage, setStatusMessage] =
    useState("");

  // =====================================================
  // INPUT CHANGE
  // =====================================================

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (
      status === "error" ||
      status === "success"
    ) {
      setStatus("idle");
      setStatusMessage("");
    }
  }

  // =====================================================
  // SUBMIT
  // =====================================================

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            company: formData.company.trim(),
            message: formData.message.trim(),
          }),
        }
      );

      let data: {
        success?: boolean;
        message?: string;
      } = {};

      try {
        data = await response.json();
      } catch {
        throw new Error(
          "Réponse invalide du serveur."
        );
      }

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Impossible d'envoyer le message."
        );
      }

      setStatus("success");

      setStatusMessage(
        data.message ||
          "Merci ! Votre message a été envoyé avec succès."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "Erreur formulaire contact :",
        error
      );

      setStatus("error");

      if (error instanceof Error) {
        setStatusMessage(error.message);
      } else {
        setStatusMessage(
          "Une erreur est survenue. Veuillez réessayer."
        );
      }
    }
  }

  // =====================================================
  // UI
  // =====================================================

  return (
    <main className="bg-white text-black">
      {/* ================================================= */}
      {/* MAP HERO */}
      {/* ================================================= */}

      <ContactMapHero />

      {/* ================================================= */}
      {/* CONTACT SECTION */}
      {/* ================================================= */}

      <section className="w-full px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col justify-between gap-16 md:flex-row md:gap-24">
          {/* ============================================= */}
          {/* LEFT */}
          {/* ============================================= */}

          <div className="w-full max-w-[560px]">
            <h1 className="mb-6 text-2xl font-extrabold uppercase text-black">
              Envoyez-nous un message
            </h1>

            {/* CONTACT INFO */}

            <div className="mb-8 space-y-5">
              <ContactInfo
                icon={Phone}
                label="Sans frais"
                value="1-888-675-1515"
                href="tel:18886751515"
              />

              <ContactInfo
                icon={Printer}
                label="Fax"
                value="1-888-875-2145"
                href="tel:18888752145"
              />

              <ContactInfo
                icon={Mail}
                value="export.almahdicompany@gmail.com"
                href="mailto:export.almahdicompany@gmail.com"
              />
            </div>

            <p className="mb-5 text-sm leading-6 text-gray-800">
              Complétez le formulaire ci-dessous
              et nous répondrons à toute question
              dès que possible.
            </p>

            {/* =========================================== */}
            {/* FORM */}
            {/* =========================================== */}

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* NOM */}

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nom *"
                autoComplete="name"
                required
                disabled={status === "loading"}
                className="
                  w-full
                  rounded
                  border
                  border-gray-300
                  bg-white
                  px-4
                  py-3
                  text-black
                  placeholder-gray-600
                  outline-none
                  transition
                  focus:border-[#ff9f4a]
                  focus:ring-2
                  focus:ring-[#ff9f4a]/40
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              />

              {/* EMAIL */}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail *"
                autoComplete="email"
                required
                disabled={status === "loading"}
                className="
                  w-full
                  rounded
                  border
                  border-gray-300
                  bg-white
                  px-4
                  py-3
                  text-black
                  placeholder-gray-600
                  outline-none
                  transition
                  focus:border-[#ff9f4a]
                  focus:ring-2
                  focus:ring-[#ff9f4a]/40
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              />

              {/* PHONE */}

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Téléphone"
                autoComplete="tel"
                disabled={status === "loading"}
                className="
                  w-full
                  rounded
                  border
                  border-gray-300
                  bg-white
                  px-4
                  py-3
                  text-black
                  placeholder-gray-600
                  outline-none
                  transition
                  focus:border-[#ff9f4a]
                  focus:ring-2
                  focus:ring-[#ff9f4a]/40
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              />

              {/* ENTREPRISE */}

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Entreprise"
                autoComplete="organization"
                disabled={status === "loading"}
                className="
                  w-full
                  rounded
                  border
                  border-gray-300
                  bg-white
                  px-4
                  py-3
                  text-black
                  placeholder-gray-600
                  outline-none
                  transition
                  focus:border-[#ff9f4a]
                  focus:ring-2
                  focus:ring-[#ff9f4a]/40
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              />

              {/* MESSAGE */}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message *"
                rows={5}
                required
                disabled={status === "loading"}
                className="
                  w-full
                  resize-none
                  rounded
                  border
                  border-gray-300
                  bg-white
                  px-4
                  py-3
                  text-black
                  placeholder-gray-600
                  outline-none
                  transition
                  focus:border-[#ff9f4a]
                  focus:ring-2
                  focus:ring-[#ff9f4a]/40
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              />

              {/* SUCCESS */}

              {status === "success" && (
                <div
                  role="status"
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-lg
                    border
                    border-green-200
                    bg-green-50
                    px-4
                    py-4
                    text-sm
                    leading-6
                    text-green-800
                  "
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0"
                  />

                  <span>
                    {statusMessage}
                  </span>
                </div>
              )}

              {/* ERROR */}

              {status === "error" && (
                <div
                  role="alert"
                  className="
                    rounded-lg
                    border
                    border-red-200
                    bg-red-50
                    px-4
                    py-4
                    text-sm
                    leading-6
                    text-red-700
                  "
                >
                  {statusMessage}
                </div>
              )}

              {/* BUTTON */}

              <button
                type="submit"
                disabled={status === "loading"}
                className="
                  inline-flex
                  min-w-[220px]
                  items-center
                  justify-center
                  gap-2
                  rounded
                  bg-[#ff9f4a]
                  px-7
                  py-3
                  font-bold
                  uppercase
                  text-black
                  shadow
                  transition
                  hover:bg-[#ffae68]
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              >
                {status === "loading" ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />

                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer le message"
                )}
              </button>
            </form>
          </div>

          {/* ============================================= */}
          {/* RIGHT / BUREAUX */}
          {/* ============================================= */}

          <div className="w-full max-w-[640px]">
            <h2 className="mb-6 text-2xl font-extrabold uppercase text-black">
              Bureaux
            </h2>

            <div className="space-y-7">
              <OfficeItem
                city="Toronto"
                phone="416-365-1515"
                address="20 Maud Street, Suite 102, Toronto, Ontario, M5V 2M5"
              />

              <hr className="border-gray-300" />

              <OfficeItem
                city="Montréal"
                phone="514-875-1515"
                address="1323 Rue Saint-Jacques, Montréal, QC, H3C 4K2"
              />

              <hr className="border-gray-300" />

              <OfficeItem
                city="Ottawa"
                phone="613-228-1020"
                address="323 Coventry Road Suite L025, Ottawa, Ontario, K1K 3X6"
              />

              <hr className="border-gray-300" />

              <OfficeItem
                city="Waterloo"
                phone="519-744-6729"
                address="681 Keats Way, Waterloo, Ontario, N2T 2X2"
              />

              <hr className="border-gray-300" />

              <OfficeItem
                city="Kirkland"
                phone="514-694-9583"
                address="16 637 boulevard Hymus, Kirkland, Québec, H9H 4R9"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}