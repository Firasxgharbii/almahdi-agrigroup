"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Globe2,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sprout,
} from "lucide-react";

const company = {
  name: "AlMahdi AgriGroup",
  email: "contact@almahdiagri.com",
  phone: "+216 79 350 170",
  location: "Tunisie",
};

const offices = [
  {
    city: "Siège principal",
    phone: "+216 79 350 170",
    address: "Tunisie — adresse complète à confirmer",
  },
  {
    city: "Service commercial",
    phone: "+216 79 350 170",
    address: "Demandes clients, partenariats, distribution et devis.",
  },
  {
    city: "Développement export",
    phone: "+216 79 350 170",
    address: "Marchés locaux et internationaux, produits agricoles et export.",
  },
];

const trustItems = [
  {
    icon: Leaf,
    title: "Savoir-faire agricole",
    text: "Une identité construite autour de la terre, de la qualité et des produits tunisiens.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité & traçabilité",
    text: "Une communication claire autour de la confiance, du contrôle et de la transparence.",
  },
  {
    icon: Globe2,
    title: "Vision internationale",
    text: "Une présence pensée pour les marchés locaux, les partenaires et le développement à l’export.",
  },
];

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
    <div className="group rounded-[28px] border border-[#075B35]/10 bg-white/75 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#075B35] text-white shadow-lg shadow-[#075B35]/20 transition group-hover:bg-[#F4C430] group-hover:text-[#061B11]">
          <Building2 size={22} />
        </div>

        <div>
          <h3 className="text-xl font-black text-[#061B11]">{city}</h3>

          <a
            href={`tel:${phone.replaceAll(" ", "")}`}
            className="mt-1 inline-block font-bold text-[#075B35] hover:text-[#C79A00]"
          >
            {phone}
          </a>

          <p className="mt-3 leading-relaxed text-[#516257]">{address}</p>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-[#F8F3E3] text-[#061B11]">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(244,196,48,0.25),transparent_28%),radial-gradient(circle_at_88%_20%,rgba(7,91,53,0.18),transparent_34%),linear-gradient(135deg,#F8F3E3_0%,#FFFDF3_48%,#EAF1D5_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#075B35_1px,transparent_1px),linear-gradient(#075B35_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#075B35]/15 bg-white/65 px-5 py-2 text-sm font-extrabold text-[#075B35] shadow-sm backdrop-blur">
              <Sprout size={18} />
              Contact & demandes professionnelles
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#061B11] md:text-7xl">
              Parlons de votre{" "}
              <span className="text-[#075B35]">projet agroalimentaire</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#405247] md:text-xl">
              Contactez AlMahdi AgriGroup pour une demande commerciale, un
              partenariat, une information produit ou une opportunité à
              l’export.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-5 pb-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[38px] border border-[#075B35]/10 bg-white p-6 shadow-2xl shadow-[#075B35]/10 md:p-9">
          <div className="mb-8">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#C79A00]">
              Formulaire
            </p>

            <h2 className="text-3xl font-black tracking-[-0.03em] text-[#061B11] md:text-4xl">
              Envoyez-nous un message
            </h2>

            <p className="mt-4 leading-relaxed text-[#5A6B61]">
              Complétez le formulaire ci-dessous. Notre équipe vous répondra
              dès que possible.
            </p>
          </div>

          {sent && (
            <div className="mb-6 rounded-2xl border border-[#075B35]/15 bg-[#075B35]/10 px-5 py-4 text-sm font-semibold text-[#075B35]">
              Votre message est prêt. Pour l’instant, ce formulaire est visuel.
              Il faudra ensuite connecter une API ou un service email.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-[#061B11]">
                  Nom complet *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Votre nom"
                  autoComplete="name"
                  className="h-14 w-full rounded-2xl border border-[#075B35]/15 bg-[#F8F3E3]/55 px-5 text-[#061B11] outline-none transition placeholder:text-[#7A867F] focus:border-[#075B35] focus:ring-4 focus:ring-[#075B35]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#061B11]">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  placeholder="votre@email.com"
                  autoComplete="email"
                  className="h-14 w-full rounded-2xl border border-[#075B35]/15 bg-[#F8F3E3]/55 px-5 text-[#061B11] outline-none transition placeholder:text-[#7A867F] focus:border-[#075B35] focus:ring-4 focus:ring-[#075B35]/10"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-[#061B11]">
                  Téléphone
                </label>
                <input
                  type="tel"
                  placeholder="+216 ..."
                  autoComplete="tel"
                  className="h-14 w-full rounded-2xl border border-[#075B35]/15 bg-[#F8F3E3]/55 px-5 text-[#061B11] outline-none transition placeholder:text-[#7A867F] focus:border-[#075B35] focus:ring-4 focus:ring-[#075B35]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#061B11]">
                  Entreprise
                </label>
                <input
                  type="text"
                  placeholder="Nom de l’entreprise"
                  autoComplete="organization"
                  className="h-14 w-full rounded-2xl border border-[#075B35]/15 bg-[#F8F3E3]/55 px-5 text-[#061B11] outline-none transition placeholder:text-[#7A867F] focus:border-[#075B35] focus:ring-4 focus:ring-[#075B35]/10"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#061B11]">
                Sujet *
              </label>
              <select
                required
                className="h-14 w-full rounded-2xl border border-[#075B35]/15 bg-[#F8F3E3]/55 px-5 text-[#061B11] outline-none transition focus:border-[#075B35] focus:ring-4 focus:ring-[#075B35]/10"
              >
                <option value="">Choisir une demande</option>
                <option>Demande de devis</option>
                <option>Partenariat</option>
                <option>Export</option>
                <option>Produits agricoles</option>
                <option>Qualité & certification</option>
                <option>Autre demande</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#061B11]">
                Message *
              </label>
              <textarea
                required
                rows={6}
                placeholder="Expliquez votre demande..."
                className="w-full resize-none rounded-2xl border border-[#075B35]/15 bg-[#F8F3E3]/55 px-5 py-4 text-[#061B11] outline-none transition placeholder:text-[#7A867F] focus:border-[#075B35] focus:ring-4 focus:ring-[#075B35]/10"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex h-15 w-full items-center justify-center gap-3 rounded-full bg-[#075B35] px-7 py-4 font-black text-white shadow-xl shadow-[#075B35]/20 transition hover:bg-[#06482B] md:w-auto"
            >
              Envoyer le message
              <ArrowRight
                size={19}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-[38px] bg-[#061B11] p-6 text-white shadow-2xl shadow-[#061B11]/20 md:p-8">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#F4C430]">
              Informations directes
            </p>

            <h2 className="text-3xl font-black tracking-[-0.03em] md:text-4xl">
              Contactez-nous directement
            </h2>

            <div className="mt-8 space-y-4">
              <a
                href={`tel:${company.phone.replaceAll(" ", "")}`}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 transition hover:bg-white/[0.1]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4C430] text-[#061B11]">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#F4C430]">Téléphone</p>
                  <p className="font-black">{company.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 transition hover:bg-white/[0.1]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4C430] text-[#061B11]">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#F4C430]">E-mail</p>
                  <p className="font-black break-all">{company.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4C430] text-[#061B11]">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#F4C430]">
                    Localisation
                  </p>
                  <p className="font-black">{company.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4C430] text-[#061B11]">
                  <Clock3 size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#F4C430]">
                    Disponibilité
                  </p>
                  <p className="font-black">Lundi - Vendredi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[38px] border border-[#075B35]/10 bg-white/75 p-6 shadow-xl shadow-[#075B35]/10 md:p-8">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#C79A00]">
              Bureaux & services
            </p>

            <h2 className="text-3xl font-black tracking-[-0.03em] text-[#061B11]">
              Nos points de contact
            </h2>

            <div className="mt-7 space-y-5">
              {offices.map((office) => (
                <OfficeItem key={office.city} {...office} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-24 md:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[30px] border border-[#075B35]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#075B35]/10 text-[#075B35]">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-black text-[#061B11]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-relaxed text-[#5A6B61]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}