"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Globe2,
  Leaf,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";

import {
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
} from "next/font/google";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type FAQItem = {
  number: string;
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    number: "01",
    question: "Quelle capacité d’huile d’olive pouvez-vous fournir ?",
    answer:
      "Notre capacité de production dépasse 1 500 tonnes par saison. Grâce à notre infrastructure de stockage et à notre organisation logistique, nous pouvons accompagner aussi bien des commandes ponctuelles que des programmes d’approvisionnement réguliers destinés aux marchés internationaux.",
  },
  {
    number: "02",
    question: "Votre huile d’olive est-elle certifiée biologique ?",
    answer:
      "Oui. Une partie de notre production est destinée aux marchés biologiques et répond aux exigences de certification applicables à nos programmes Bio et USDA Organic. La traçabilité accompagne chaque lot depuis son origine jusqu’à sa préparation pour l’export.",
  },
  {
    number: "03",
    question: "Quelles variétés d’olives travaillez-vous ?",
    answer:
      "Nous travaillons notamment avec des variétés reconnues en Tunisie telles que Chemlali, ainsi qu’avec d’autres profils variétaux sélectionnés selon les caractéristiques recherchées par le client. Les assemblages peuvent être adaptés au profil organoleptique et au cahier des charges demandé.",
  },
  {
    number: "04",
    question: "Comment l’huile d’olive en vrac est-elle expédiée ?",
    answer:
      "Selon le marché et le volume commandé, les expéditions peuvent être organisées dans des solutions adaptées au transport international. Notre objectif est de préserver la qualité du produit pendant le stockage, le chargement et l’acheminement jusqu’à sa destination.",
  },
  {
    number: "05",
    question: "Comment assurez-vous la qualité et la traçabilité ?",
    answer:
      "Chaque lot est identifié et suivi dans notre processus de production. Des contrôles sont réalisés afin de vérifier les paramètres de qualité et de maintenir une traçabilité claire entre les olives, la production, le stockage et le lot destiné au client.",
  },
  {
    number: "06",
    question: "Travaillez-vous avec des importateurs et distributeurs ?",
    answer:
      "Oui. AlMahdi Olive Oil développe une approche B2B destinée aux importateurs, distributeurs, industriels et partenaires internationaux recherchant une origine tunisienne fiable, une capacité d’approvisionnement structurée et une relation commerciale durable.",
  },
];

const exportPoints = [
  "Production tunisienne",
  "Traçabilité des lots",
  "Programmes Bio",
  "Solutions B2B",
];

export default function PremiumFAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      id="faq"
      className={`${bodyFont.className} relative overflow-hidden bg-[#f4f0e6] text-[#082c1f]`}
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 h-[500px] w-[500px] rounded-full bg-[#d8b271]/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 bottom-0 h-[600px] w-[600px] rounded-full bg-[#0b4c35]/5 blur-[150px]"
      />

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-28 lg:px-14 xl:px-20 xl:py-36">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="faq-reveal grid gap-10 border-b border-[#0b3b2b]/15 pb-14 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b78646]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a16e34] md:text-[11px]">
                Questions fréquentes
              </span>
            </div>

            <h2
              className={`${displayFont.className} max-w-[850px] text-[48px] font-medium leading-[0.94] tracking-[-0.035em] sm:text-[62px] md:text-[76px] lg:text-[86px]`}
            >
              Parlons de votre
              <span className="block italic text-[#a9773e]">
                prochain lot.
              </span>
            </h2>
          </div>

          <div className="max-w-[480px] lg:justify-self-end">
        

            <a
              href="/contact"
              className="group mt-7 inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#082c1f]"
            >
              Une question spécifique ?

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0b3b2b]/20 transition-all duration-300 group-hover:rotate-45 group-hover:border-[#b78646] group-hover:bg-[#b78646] group-hover:text-white">
                <ArrowUpRight size={15} />
              </span>
            </a>
          </div>
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="mt-16 grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 xl:gap-28">
          {/* ===================================================
              LEFT PANEL
          =================================================== */}

          <aside className="faq-reveal lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden bg-[#073525] p-8 text-white sm:p-10 lg:p-9 xl:p-12">
              {/* subtle pattern */}
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10"
              />

              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d5ad70]/40 bg-white/5 text-[#dfbd82]">
                  <Globe2 size={20} strokeWidth={1.6} />
                </div>

                <p className="mt-9 text-[10px] font-bold uppercase tracking-[0.28em] text-[#d9b376]">
                  AlMahdi · Export
                </p>

                <h3
                  className={`${displayFont.className} mt-4 max-w-[370px] text-[38px] font-medium leading-[1.02] sm:text-[44px]`}
                >
                  Une origine.
                  <br />
                  Une exigence.
                  <br />

                  <span className="italic text-[#d9b376]">
                    Une confiance.
                  </span>
                </h3>

                <p className="mt-7 max-w-[380px] text-[13px] leading-6 text-white/60">
                  Notre approche repose sur une relation directe avec nos
                  partenaires et sur une maîtrise attentive de chaque étape,
                  de la production jusqu’à l’expédition.
                </p>

                <div className="mt-10 border-t border-white/10 pt-7">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {exportPoints.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-[11px] font-medium text-white/75"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d5ad70]/15 text-[#e0bd82]">
                          <Check size={11} strokeWidth={2.5} />
                        </span>

                        {point}
                      </div>
                    ))}
                  </div>
                </div>

                {/* MINI METRICS */}

                <div className="mt-10 grid grid-cols-3 border-t border-white/10 pt-8">
                  <div>
                    <p
                      className={`${displayFont.className} text-3xl text-[#f5eee2]`}
                    >
                      5
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                      Générations
                    </p>
                  </div>

                  <div className="border-l border-white/10 pl-5">
                    <p
                      className={`${displayFont.className} text-3xl text-[#f5eee2]`}
                    >
                      +1.5K
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                      Tonnes
                    </p>
                  </div>

                  <div className="border-l border-white/10 pl-5">
                    <p
                      className={`${displayFont.className} text-3xl text-[#f5eee2]`}
                    >
                      B2B
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                      Export
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* little labels */}

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 border border-[#0b3b2b]/15 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.17em] text-[#244c3e]/70">
                <Leaf size={13} />
                Agriculture
              </span>

              <span className="inline-flex items-center gap-2 border border-[#0b3b2b]/15 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.17em] text-[#244c3e]/70">
                <ShieldCheck size={13} />
                Qualité
              </span>

              <span className="inline-flex items-center gap-2 border border-[#0b3b2b]/15 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.17em] text-[#244c3e]/70">
                <PackageCheck size={13} />
                Export
              </span>
            </div>
          </aside>

          {/* ===================================================
              FAQ
          =================================================== */}

          <div className="faq-reveal">
            <div className="border-t border-[#0b3b2b]/18">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <article
                    key={item.number}
                    className="group border-b border-[#0b3b2b]/18"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-start gap-5 py-7 text-left sm:gap-8 sm:py-9 md:gap-10"
                    >
                      {/* NUMBER */}

                      <span className="mt-1 min-w-[34px] text-[9px] font-bold tracking-[0.2em] text-[#a9773e] sm:min-w-[45px]">
                        {item.number}
                      </span>

                      {/* QUESTION */}

                      <span
                        className={`${displayFont.className} flex-1 text-[25px] font-medium leading-[1.12] text-[#0b3326] transition-colors duration-300 group-hover:text-[#9a6a35] sm:text-[30px] md:text-[34px]`}
                      >
                        {item.question}
                      </span>

                      {/* BUTTON */}

                      <span
                        className={`
                          mt-0.5
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition-all
                          duration-500
                          sm:h-12
                          sm:w-12
                          ${
                            isOpen
                              ? "rotate-180 border-[#a9773e] bg-[#a9773e] text-white"
                              : "border-[#0b3b2b]/20 text-[#0b3b2b] group-hover:border-[#a9773e] group-hover:text-[#a9773e]"
                          }
                        `}
                      >
                        <ChevronDown size={17} strokeWidth={1.6} />
                      </span>
                    </button>

                    {/* ANSWER */}

                    <div
                      className={`
                        grid
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-9 pl-[54px] pr-4 sm:pl-[77px] sm:pr-16 md:pl-[85px]">
                          <div className="max-w-[720px] border-l border-[#b8874d]/40 pl-6">
                            <p className="text-[13px] leading-7 text-[#3f5d52]/75 sm:text-[14px] md:text-[15px]">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* ===================================================
                FINAL CTA
            =================================================== */}

            <div className="mt-12 flex flex-col gap-7 border border-[#0b3b2b]/15 bg-white/30 p-7 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between md:p-9">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#a9773e]">
                  Votre projet est différent ?
                </p>

                <p
                  className={`${displayFont.className} mt-2 text-[27px] leading-tight text-[#0b3326] md:text-[31px]`}
                >
                  Parlons de vos besoins.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex min-h-[52px] shrink-0 items-center justify-center gap-4 bg-[#073525] px-6 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b4934]"
              >
                Nous contacter

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}