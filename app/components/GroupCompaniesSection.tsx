"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Factory,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Snowflake,
  Sprout,
  Wheat,
} from "lucide-react";

const companies = [
  {
    number: "01",
    eyebrow: "Al Mahdi — Société d'huile d'olive",
    name: "Société Almahdi Huile d'Olive",
    activity: "Huilerie & Export",
    icon: Factory,
    description:
      "Extraction, stockage, contrôle qualité et export d'huile d'olive vierge extra en vrac, biologique et conventionnelle. Marque en bouteille : Mediliva.",
    extra: null,
    phones: ["+216 58 868 000"],
    email: "huilerie.almehdi@gmail.com",
    signature: "Fournisseur de Sovena Group · +1 500 t par saison",
    tags: ["BIO", "CONVENTIONNEL", "VRAC", "EXPORT"],
    metric: "+1 500 t",
    metricLabel: "par saison",
  },
  {
    number: "02",
    eyebrow: "VITALE — STPAC",
    name: "STPAC – Vitale",
    activity: "Nutrition animale",
    icon: Wheat,
    description:
      "STPAC – Société Tunisienne de Production des Aliments Composés est spécialisée dans la nutrition animale et la fabrication d'aliments composés. Sa marque VITALE développe des solutions adaptées aux élevages modernes, en associant qualité des matières premières et maîtrise des formulations.",
    extra:
      "Des conventions avec des centres de collecte de lait et de grands éleveurs ovins et bovins lui assurent une proximité privilégiée avec la filière.",
    phones: ["+216 51 203 000", "+216 50 914 918"],
    email: "stpacvital@gmail.com",
    signature: "« Nourrir la performance, construire l'avenir. »",
    tags: ["NUTRITION", "FORMULATION", "ÉLEVAGE", "FILIÈRE"],
    metric: "VITALE",
    metricLabel: "nutrition animale",
  },
  {
    number: "03",
    eyebrow: "Fruits Almahdi",
    name: "Fruits Almahdi",
    activity: "Entrepôts frigorifiques",
    icon: Snowflake,
    description:
      "De grandes infrastructures frigorifiques dédiées à la conservation et à la gestion des produits agricoles, en étroite collaboration avec les grands agriculteurs et producteurs de la région.",
    extra:
      "Une maison reconnue pour son professionnalisme, sa fiabilité et la confiance construite avec ses partenaires.",
    phones: ["+216 98 449 172"],
    email: "fruitsalmehdi@gmail.com",
    signature: "« La qualité du terroir, la force de la confiance. »",
    tags: ["FROID", "CONSERVATION", "STOCKAGE", "AGRICULTURE"],
    metric: "FROID",
    metricLabel: "conservation agricole",
  },
];

const sectors = [
  "Agriculture",
  "Transformation",
  "Nutrition",
  "Conservation",
  "Export",
];

function TypewriterTitle({ active }: { active: boolean }) {
  const first = "Un groupe agroalimentaire";
  const second = "intégré.";
  const full = `${first}|${second}`;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

    const timer = window.setInterval(() => {
      setCount((current) => {
        if (current >= full.length) {
          window.clearInterval(timer);
          return current;
        }
        return current + 1;
      });
    }, 38);

    return () => window.clearInterval(timer);
  }, [active, full.length]);

  const visible = full.slice(0, count);
  const [line1 = "", line2 = ""] = visible.split("|");

  return (
    <h2
      aria-label="Un groupe agroalimentaire intégré."
      className="max-w-[930px] text-[44px] font-light leading-[0.96] tracking-[-0.055em] text-[#f8f3e7] sm:text-[58px] md:text-[72px] lg:text-[86px]"
    >
      <span className="block min-h-[1.02em]">{line1}</span>
      <span className="mt-1 block min-h-[1.02em] font-semibold italic text-[#d7ad6a]">
        {line2}
        {count < full.length && (
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-[0.82em] w-[2px] translate-y-[0.08em] bg-[#d7ad6a] animate-pulse"
          />
        )}
      </span>
    </h2>
  );
}

export default function GroupCompaniesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="societes-du-groupe"
      className="relative overflow-hidden bg-[#061f17] text-white"
    >
      {/* =====================================================
          INTRO / CORPORATE HERO
      ===================================================== */}
      <div className="relative overflow-hidden px-5 py-24 sm:px-7 md:px-10 md:py-28 lg:px-16 xl:px-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:radial-gradient(circle_at_center,rgba(215,173,106,0.5)_1px,transparent_1px)] [background-size:34px_34px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[250px] top-[30px] h-[650px] w-[650px] rounded-full bg-[#0d8155]/20 blur-[180px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[220px] bottom-[-180px] h-[600px] w-[600px] rounded-full bg-[#d7ad6a]/10 blur-[170px]"
        />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          {/* top identity */}
          <div
            className={`flex flex-col gap-6 border-b border-white/10 pb-8 transition-all duration-1000 sm:flex-row sm:items-center sm:justify-between ${
              visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#d7ad6a]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#d7ad6a]">
                AlMahdi AgriGroup
              </span>
            </div>

            <div className="flex items-center gap-3 text-white/45">
              <MapPin size={15} className="text-[#d7ad6a]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.24em]">
                Sidi Bouzid · Tunisie
              </span>
            </div>
          </div>

          {/* title + real-world information */}
          <div className="grid grid-cols-1 gap-14 py-16 lg:grid-cols-[1.18fr_0.62fr] lg:items-end lg:gap-24 lg:py-20">
            <div>
              <div
                className={`mb-8 flex items-center gap-3 transition-all delay-100 duration-1000 ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-6 opacity-0"
                }`}
              >
                <Sprout size={17} className="text-[#d7ad6a]" />
                <p className="text-[9px] font-bold uppercase tracking-[0.27em] text-white/40">
                  Groupe agroalimentaire familial
                </p>
              </div>

              <TypewriterTitle active={visible} />
            </div>

            <div
              className={`transition-all delay-300 duration-1000 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <p className="border-l border-[#d7ad6a]/45 pl-6 text-[15px] leading-8 text-white/62 md:text-[16px]">
                Trois sociétés basées à Sidi Bouzid, aux métiers
                complémentaires. De la production agricole à la transformation,
                la nutrition, la conservation et l&apos;export, le groupe
                rassemble ses activités autour d&apos;une même organisation
                familiale.
              </p>

              <div className="mt-9 grid grid-cols-3 border-y border-white/10">
                <div className="py-6">
                  <strong className="block text-[28px] font-light tracking-[-0.04em] text-[#f8f3e7]">
                    03
                  </strong>
                  <span className="mt-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                    sociétés
                  </span>
                </div>

                <div className="border-x border-white/10 px-5 py-6">
                  <strong className="block text-[28px] font-light tracking-[-0.04em] text-[#d7ad6a]">
                    05
                  </strong>
                  <span className="mt-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                    générations
                  </span>
                </div>

                <div className="pl-5 py-6">
                  <strong className="block text-[28px] font-light tracking-[-0.04em] text-[#f8f3e7]">
                    +1 500 t
                  </strong>
                  <span className="mt-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                    par saison
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* business chain */}
          <div
            className={`transition-all delay-500 duration-1000 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
            }`}
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[8px] font-bold uppercase tracking-[0.24em] text-white/30">
                Écosystème du groupe
              </span>
              <Globe2 size={15} className="text-[#d7ad6a]/75" />
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-5">
              {sectors.map((sector, index) => (
                <div
                  key={sector}
                  className="group/sector relative bg-[#08271d] px-5 py-6 transition-colors duration-500 hover:bg-[#0c3528]"
                >
                  <span className="text-[8px] font-bold tracking-[0.2em] text-[#d7ad6a]/55">
                    0{index + 1}
                  </span>
                  <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.13em] text-white/55">
                    {sector}
                  </p>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d7ad6a] transition-all duration-500 group-hover/sector:w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          COMPANIES — EDITORIAL / REAL BUSINESS CARDS
      ===================================================== */}
      <div className="relative border-t border-white/10 bg-[#f5f0e4] px-5 py-24 text-[#06291b] sm:px-7 md:px-10 md:py-32 lg:px-16 xl:px-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[200px] top-[200px] h-[520px] w-[520px] rounded-full bg-[#0c7148]/[0.07] blur-[150px]"
        />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <div className="mb-16 grid grid-cols-1 gap-8 border-b border-[#06291b]/12 pb-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#a9773e]">
                Les sociétés du groupe
              </p>
              <h3 className="mt-5 max-w-[850px] text-[38px] font-light leading-[1] tracking-[-0.045em] md:text-[54px]">
                Trois métiers complémentaires,
                <span className="block font-semibold italic text-[#a9773e]">
                  une structure intégrée.
                </span>
              </h3>
            </div>

            <p className="max-w-[500px] text-[14px] leading-7 text-[#46675a] lg:justify-self-end">
              Chaque société intervient sur une étape précise de
              l&apos;écosystème agroalimentaire du groupe.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-[21px] top-0 hidden w-px bg-[#06291b]/10 lg:block"
            >
              <div
                className={`w-full bg-[#b78646] transition-all duration-[1800ms] ease-out ${
                  visible ? "h-full" : "h-0"
                }`}
              />
            </div>

            <div className="space-y-10 lg:space-y-14">
              {companies.map((company, index) => {
                const Icon = company.icon;

                return (
                  <article
                    key={company.number}
                    style={{ transitionDelay: `${300 + index * 150}ms` }}
                    className={`group relative transition-all duration-1000 ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-14 opacity-0"
                    }`}
                  >
                    <div className="absolute left-[15px] top-11 z-20 hidden h-[13px] w-[13px] rounded-full border-2 border-[#b78646] bg-[#f5f0e4] shadow-[0_0_0_7px_rgba(183,134,70,0.09)] lg:block" />

                    <div className="lg:pl-[72px]">
                      <div className="relative overflow-hidden border border-[#06291b]/10 bg-white shadow-[0_22px_70px_rgba(6,41,27,0.07)] transition-all duration-700 hover:-translate-y-1 hover:border-[#b78646]/35 hover:shadow-[0_30px_90px_rgba(6,41,27,0.12)]">
                        <div className="grid grid-cols-1 xl:grid-cols-[0.68fr_1.32fr]">
                          {/* identity */}
                          <div className="relative overflow-hidden bg-[#073525] p-8 text-white sm:p-10 xl:min-h-[500px] xl:p-12">
                            <span className="text-[10px] font-bold tracking-[0.25em] text-[#d7ad6a]">
                              {company.number} / 03
                            </span>

                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -right-5 -top-12 text-[190px] font-black leading-none tracking-[-0.09em] text-white/[0.025]"
                            >
                              {company.number}
                            </span>

                            <div className="mt-16 flex h-[86px] w-[86px] items-center justify-center rounded-full border border-[#d7ad6a]/35 text-[#d7ad6a] transition-all duration-700 group-hover:rotate-6 group-hover:scale-105 group-hover:bg-[#d7ad6a] group-hover:text-[#073525]">
                              <Icon size={34} strokeWidth={1.3} />
                            </div>

                            <p className="mt-12 text-[9px] font-bold uppercase tracking-[0.25em] text-[#d7ad6a]">
                              {company.eyebrow}
                            </p>

                            <h4 className="mt-5 max-w-[520px] text-[34px] font-semibold leading-[1] tracking-[-0.04em] text-[#f8f3e7] sm:text-[42px]">
                              {company.name}
                            </h4>

                            <div className="mt-7 flex items-center gap-4">
                              <span className="h-px w-9 bg-[#d7ad6a]" />
                              <span className="text-[9px] font-bold uppercase tracking-[0.19em] text-white/45">
                                {company.activity}
                              </span>
                            </div>
                          </div>

                          {/* details */}
                          <div className="flex flex-col justify-between p-8 sm:p-10 xl:p-12">
                            <div>
                              <div className="flex flex-col gap-7 border-b border-[#06291b]/10 pb-8 md:flex-row md:items-end md:justify-between">
                                <div>
                                  <p className="text-[8px] font-bold uppercase tracking-[0.24em] text-[#06291b]/35">
                                    Expertise
                                  </p>
                                  <div className="mt-4 flex flex-wrap gap-2">
                                    {company.tags.map((tag) => (
                                      <span
                                        key={tag}
                                        className="rounded-full border border-[#b78646]/20 bg-[#b78646]/[0.06] px-3 py-2 text-[8px] font-bold tracking-[0.16em] text-[#98662f]"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                <div className="md:text-right">
                                  <strong className="block text-[31px] font-light tracking-[-0.04em] text-[#a9773e]">
                                    {company.metric}
                                  </strong>
                                  <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.18em] text-[#06291b]/35">
                                    {company.metricLabel}
                                  </span>
                                </div>
                              </div>

                              <p className="mt-8 max-w-[780px] text-[15px] leading-8 text-[#335c4c]">
                                {company.description}
                              </p>

                              {company.extra && (
                                <p className="mt-5 max-w-[780px] text-[14px] leading-7 text-[#587064]">
                                  {company.extra}
                                </p>
                              )}

                              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                                <div className="border-t border-[#06291b]/10 pt-5">
                                  <div className="flex items-center gap-3 text-[#a9773e]">
                                    <Phone size={15} />
                                    <span className="text-[8px] font-bold uppercase tracking-[0.2em]">
                                      Téléphone
                                    </span>
                                  </div>
                                  <div className="mt-4">
                                    {company.phones.map((phone) => (
                                      <a
                                        key={phone}
                                        href={`tel:${phone.replace(/\s/g, "")}`}
                                        className="block py-1 text-[13px] font-semibold text-[#244c3e] transition-colors hover:text-[#a9773e]"
                                      >
                                        {phone}
                                      </a>
                                    ))}
                                  </div>
                                </div>

                                <div className="border-t border-[#06291b]/10 pt-5">
                                  <div className="flex items-center gap-3 text-[#a9773e]">
                                    <Mail size={15} />
                                    <span className="text-[8px] font-bold uppercase tracking-[0.2em]">
                                      E-mail
                                    </span>
                                  </div>
                                  <a
                                    href={`mailto:${company.email}`}
                                    className="mt-5 block break-all text-[13px] font-semibold text-[#244c3e] transition-colors hover:text-[#a9773e]"
                                  >
                                    {company.email}
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="mt-11 flex flex-col gap-6 border-t border-[#06291b]/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                              <p className="max-w-[570px] text-[12px] font-semibold italic leading-6 text-[#a9773e]">
                                {company.signature}
                              </p>

                              <a
                                href={`mailto:${company.email}`}
                                className="group/link inline-flex items-center gap-4 self-start text-[9px] font-bold uppercase tracking-[0.2em] text-[#06291b]/55 transition-colors hover:text-[#a9773e]"
                              >
                                Nous contacter
                                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#06291b]/15 transition-all duration-300 group-hover/link:rotate-45 group-hover/link:border-[#a9773e] group-hover/link:bg-[#a9773e] group-hover/link:text-white">
                                  <ArrowUpRight size={16} />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* final signature */}
          <div className="mt-20 border-t border-[#06291b]/12 pt-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 text-[#06291b]/35">
                <Building2 size={15} />
                <span className="text-[8px] font-bold uppercase tracking-[0.23em]">
                  Agriculture · Transformation · Nutrition · Conservation · Export
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#a9773e]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#a9773e]">
                  AlMahdi AgriGroup
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}