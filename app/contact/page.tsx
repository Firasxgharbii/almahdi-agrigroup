"use client";

import { Building, Mail, Phone, Printer } from "lucide-react";
import SoftPaintingHero from "../components/SoftPaintingHero";

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
          <a href={`tel:${phone.replaceAll("-", "")}`} className="font-bold">
            {phone}
          </a>
        </p>
        <p className="mt-1 text-gray-800">{address}</p>
      </div>
    </div>
  );
}

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
        {label && <span className="font-semibold">{label}: </span>}
        <a href={href} className="font-bold underline-offset-2 hover:underline">
          {value}
        </a>
      </p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-white text-black">
      <SoftPaintingHero
        title="Contact"
        image="/images/5312.jpg"
      />

      <section className="w-full px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col justify-between gap-16 md:flex-row md:gap-24">
          <div className="w-full max-w-[560px]">
            <h1 className="mb-6 text-2xl font-extrabold uppercase text-black">
              Envoyez-nous un message
            </h1>

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
                value="information@qacourier.ca"
                href="mailto:information@qacourier.ca"
              />
            </div>

            <p className="mb-5 text-sm leading-6 text-gray-800">
              Complétez le formulaire ci-dessous et nous répondrons à toute
              question dès que possible.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nom *"
                autoComplete="name"
                className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-600 outline-none focus:border-[#ff9f4a] focus:ring-2 focus:ring-[#ff9f4a]/40"
              />

              <input
                type="email"
                placeholder="E-mail *"
                autoComplete="email"
                className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-600 outline-none focus:border-[#ff9f4a] focus:ring-2 focus:ring-[#ff9f4a]/40"
              />

              <input
                type="tel"
                placeholder="Téléphone"
                autoComplete="tel"
                className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-600 outline-none focus:border-[#ff9f4a] focus:ring-2 focus:ring-[#ff9f4a]/40"
              />

              <input
                type="text"
                placeholder="Entreprise"
                autoComplete="organization"
                className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-600 outline-none focus:border-[#ff9f4a] focus:ring-2 focus:ring-[#ff9f4a]/40"
              />

              <textarea
                placeholder="Message *"
                rows={5}
                className="w-full resize-none rounded border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-600 outline-none focus:border-[#ff9f4a] focus:ring-2 focus:ring-[#ff9f4a]/40"
              />

              <button
                type="submit"
                className="rounded bg-[#ff9f4a] px-7 py-3 font-bold uppercase text-black shadow transition hover:bg-[#ffae68]"
              >
                Envoyer le message
              </button>
            </form>
          </div>

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