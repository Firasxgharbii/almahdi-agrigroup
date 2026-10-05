"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  Globe2,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Snowflake,
  Sprout,
  Wheat,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

/* =========================================================
   ALMAHDI AGRIGROUP — LE GROUPE
========================================================= */

const companies = [
  {
    number: "01",
    name: "Société Almahdi Huile d'Olive",
    shortName: "Al Mahdi",
    activity: "Huilerie & Export",
    icon: Factory,
    description:
      "Extraction, stockage, contrôle qualité et export d'huile d'olive vierge extra en vrac, biologique et conventionnelle.",
    extra:
      "Une activité tournée vers les professionnels et les marchés internationaux, avec Mediliva comme marque en bouteille.",
    phones: ["+216 58 868 000"],
    email: "huilerie.almehdi@gmail.com",
    signature: "Fournisseur de Sovena Group · +1 500 t par saison",
  },
  {
    number: "02",
    name: "STPAC – Vitale",
    shortName: "Vitale",
    activity: "Nutrition animale",
    icon: Wheat,
    description:
      "La Société Tunisienne de Production des Aliments Composés est spécialisée dans la nutrition animale et la fabrication d'aliments composés.",
    extra:
      "Sa marque VITALE développe des solutions adaptées aux élevages modernes, avec une attention particulière portée à la qualité des matières premières et à la maîtrise des formulations.",
    phones: ["+216 51 203 000", "+216 50 914 918"],
    email: "stpacvital@gmail.com",
    signature: "Nourrir la performance, construire l'avenir.",
  },
  {
    number: "03",
    name: "Fruits Almahdi",
    shortName: "Fruits Almahdi",
    activity: "Entrepôts frigorifiques",
    icon: Snowflake,
    description:
      "Des infrastructures frigorifiques dédiées à la conservation et à la gestion des produits agricoles.",
    extra:
      "Une activité développée en étroite collaboration avec les agriculteurs et producteurs de la région.",
    phones: ["+216 98 449 172"],
    email: "fruitsalmehdi@gmail.com",
    signature: "La qualité du terroir, la force de la confiance.",
  },
];

const ecosystem = [
  {
    number: "01",
    icon: Sprout,
    title: "Agriculture",
    text: "Un ancrage agricole historique au cœur du terroir tunisien et de la région de Sidi Bouzid.",
  },
  {
    number: "02",
    icon: Factory,
    title: "Transformation",
    text: "Des activités de transformation structurées pour valoriser les productions agricoles.",
  },
  {
    number: "03",
    icon: Wheat,
    title: "Nutrition",
    text: "Une expertise dédiée à la nutrition animale et à la fabrication d'aliments composés.",
  },
  {
    number: "04",
    icon: Snowflake,
    title: "Conservation",
    text: "Des infrastructures frigorifiques destinées à préserver et gérer les produits agricoles.",
  },
  {
    number: "05",
    icon: Globe2,
    title: "Export",
    text: "Une ouverture vers les partenaires et marchés internationaux, notamment dans l'huile d'olive.",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Héritage",
    text: "Un savoir-faire familial transmis à travers cinq générations.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité",
    text: "Une attention constante portée à la maîtrise, à la confiance et à la traçabilité.",
  },
  {
    icon: Building2,
    title: "Structure",
    text: "Des sociétés complémentaires réunies dans une vision commune de développement.",
  },
  {
    icon: Globe2,
    title: "International",
    text: "Une ambition tournée vers les partenaires professionnels et les marchés internationaux.",
  },
];

const stats = [
  {
    value: "03",
    label: "Sociétés",
  },
  {
    value: "05",
    label: "Générations",
  },
  {
    value: "+1 500 t",
    label: "Huilerie / saison",
  },
  {
    value: "05",
    label: "Métiers intégrés",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function LeGroupePage() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 35,
        },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.15,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.8,
      ease,
    },
  };

  return (
    <main className="overflow-hidden bg-[#f6f1e5] text-[#082c1f]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[760px] overflow-hidden bg-[#061f17] text-white">
        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-48 -top-48 h-[700px] w-[700px] rounded-full bg-[#b98a4a]/10 blur-[160px]" />

          <div className="absolute -bottom-60 -left-48 h-[750px] w-[750px] rounded-full bg-[#1c6b4c]/20 blur-[180px]" />

          <div
            className="absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />

          <div className="absolute right-[10%] top-[17%] h-[450px] w-[450px] rounded-full border border-white/[0.04]" />

          <div className="absolute right-[14%] top-[22%] h-[330px] w-[330px] rounded-full border border-white/[0.04]" />
        </div>

        <div className="relative mx-auto flex min-h-[760px] max-w-[1500px] flex-col justify-between px-6 pb-12 pt-24 md:px-10 md:pt-28 lg:px-16 xl:px-20">
          {/* HERO TOP */}

          <motion.div {...reveal}>
            <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-9 bg-[#d7ad6a]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7ad6a]">
                  AlMahdi AgriGroup
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/45">
                <MapPin size={13} />

                <span>Sidi Bouzid · Tunisie</span>
              </div>
            </div>
          </motion.div>

          {/* HERO CONTENT */}

          <motion.div
            {...reveal}
            transition={{
              duration: reduceMotion ? 0 : 0.95,
              delay: reduceMotion ? 0 : 0.1,
              ease,
            }}
            className="max-w-[1180px] py-20"
          >
            <p className="mb-7 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#d7ad6a]">
              <span className="h-px w-10 bg-[#d7ad6a]" />
              Groupe agroalimentaire familial
            </p>

            <h1 className="max-w-[1150px] text-[54px] font-semibold leading-[0.92] tracking-[-0.055em] sm:text-[68px] md:text-[86px] lg:text-[106px]">
              De la terre

              <span className="block font-serif font-normal italic text-[#d7ad6a]">
                aux marchés.
              </span>
            </h1>

            <div className="mt-10 grid max-w-[950px] gap-8 border-l border-[#d7ad6a]/30 pl-6 md:grid-cols-[1fr_auto] md:items-end md:pl-8">
              <p className="max-w-[720px] text-[16px] leading-8 text-white/60 md:text-[18px]">
                AlMahdi AgriGroup réunit des activités complémentaires
                autour de l'agriculture, de la transformation, de la
                nutrition animale, de la conservation et de l'export.
              </p>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full border border-white/15 md:flex">
                <ArrowRight
                  size={18}
                  className="rotate-90 text-[#d7ad6a]"
                />
              </div>
            </div>
          </motion.div>

          {/* HERO STATS */}

          <div className="grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : index * 0.08,
                  ease,
                }}
                className="
                  border-b
                  border-white/10
                  py-7

                  sm:border-r
                  sm:px-6

                  lg:border-b-0
                "
              >
                <p className="font-serif text-[38px] leading-none text-[#f2e8d7]">
                  {stat.value}
                </p>

                <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-20">
        <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div {...reveal}>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#a9773e]">
              Notre groupe
            </p>

            <h2 className="mt-5 max-w-[570px] text-[44px] font-semibold leading-[1] tracking-[-0.045em] md:text-[62px]">
              Un groupe construit autour

              <span className="block font-serif font-normal italic text-[#a9773e]">
                d'un même territoire.
              </span>
            </h2>
          </motion.div>

          <motion.div {...reveal} className="lg:pt-14">
            <p className="max-w-[720px] text-[19px] leading-9 text-[#36594c]">
              Implanté à Sidi Bouzid, AlMahdi AgriGroup s'appuie sur
              un héritage familial transmis depuis cinq générations et
              sur des sociétés aux métiers complémentaires.
            </p>

            <p className="mt-6 max-w-[720px] text-[15px] leading-8 text-[#567065]">
              Cette complémentarité permet au groupe de créer des liens
              entre production agricole, transformation, nutrition,
              conservation, logistique et développement international.
            </p>

            <div className="mt-10 flex items-center gap-4 border-t border-[#082c1f]/15 pt-7">
              <Leaf
                size={20}
                strokeWidth={1.5}
                className="shrink-0 text-[#a9773e]"
              />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Terre · Héritage · Maîtrise · Développement
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="bg-[#ede6d7] px-6 py-24 md:px-10 lg:px-20">
        <div className="mx-auto max-w-[1450px]">
          <motion.div {...reveal}>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#a9773e]">
              Notre identité
            </p>

            <h2 className="mt-5 max-w-[750px] text-[43px] font-semibold leading-[1] tracking-[-0.045em] md:text-[60px]">
              Une vision construite

              <span className="block font-serif font-normal italic text-[#a9773e]">
                sur le long terme.
              </span>
            </h2>
          </motion.div>

          <div className="mt-14 grid border-l border-t border-[#082c1f]/15 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 25,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion ? 0 : index * 0.08,
                    ease,
                  }}
                  className="group min-h-[310px] border-b border-r border-[#082c1f]/15 p-7 transition-all duration-500 hover:bg-[#082c1f] hover:text-white md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={25}
                      strokeWidth={1.4}
                      className="text-[#a9773e]"
                    />

                    <span className="font-serif text-[12px] text-[#a9773e]">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-24">
                    <h3 className="text-[23px] font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-[270px] text-[13px] leading-7 text-[#587166] transition-colors duration-500 group-hover:text-white/55">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ECOSYSTEM
      ===================================================== */}

      <section className="bg-white px-6 py-24 md:px-10 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1450px]">
          <motion.div
            {...reveal}
            className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#a9773e]">
                Notre écosystème
              </p>

              <h2 className="mt-5 text-[44px] font-semibold leading-[1] tracking-[-0.045em] md:text-[64px]">
                Cinq métiers.

                <span className="block font-serif font-normal italic text-[#a9773e]">
                  Une chaîne de valeur.
                </span>
              </h2>
            </div>

            <p className="max-w-[520px] text-[14px] leading-7 text-[#587166] lg:justify-self-end">
              Des activités complémentaires organisées autour de la
              production, de la transformation et de la valorisation
              des produits agricoles.
            </p>
          </motion.div>

          <div className="mt-16 grid border-l border-t border-[#082c1f]/15 md:grid-cols-2 lg:grid-cols-5">
            {ecosystem.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 25,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion ? 0 : index * 0.07,
                    ease,
                  }}
                  className="group min-h-[340px] border-b border-r border-[#082c1f]/15 p-7 transition-all duration-500 hover:bg-[#082c1f] hover:text-white"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#a9773e]/30">
                      <Icon
                        size={22}
                        strokeWidth={1.4}
                        className="text-[#a9773e]"
                      />
                    </div>

                    <span className="font-serif text-[13px] text-[#a9773e]">
                      {item.number}
                    </span>
                  </div>

                  <div className="mt-24">
                    <h3 className="text-[22px] font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[13px] leading-6 text-[#577065] transition-colors duration-500 group-hover:text-white/55">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPANIES
      ===================================================== */}

      <section className="bg-[#f6f1e5] px-6 py-24 md:px-10 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1450px]">
          <motion.div
            {...reveal}
            className="grid gap-10 border-b border-[#082c1f]/15 pb-12 lg:grid-cols-2 lg:items-end"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#a9773e]">
                Structure du groupe
              </p>

              <h2 className="mt-5 text-[46px] font-semibold leading-[0.98] tracking-[-0.045em] md:text-[66px]">
                Nos trois

                <span className="block font-serif font-normal italic text-[#a9773e]">
                  sociétés.
                </span>
              </h2>
            </div>

            <p className="max-w-[600px] text-[15px] leading-8 text-[#567065] lg:justify-self-end">
              Trois entreprises, trois expertises et une même ambition :
              développer un groupe agroalimentaire tunisien structuré,
              fiable et ouvert sur l'international.
            </p>
          </motion.div>

          <div className="mt-14 space-y-8">
            {companies.map((company, index) => {
              const Icon = company.icon;

              return (
                <motion.article
                  key={company.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 40,
                          scale: 0.985,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.75,
                    delay: reduceMotion ? 0 : index * 0.05,
                    ease,
                  }}
                  className="group overflow-hidden border border-[#082c1f]/15 bg-white shadow-[0_15px_45px_rgba(6,41,27,0.04)] lg:grid lg:grid-cols-[0.45fr_1.55fr]"
                >
                  {/* COMPANY LEFT */}

                  <div className="relative flex min-h-[290px] flex-col justify-between overflow-hidden bg-[#073525] p-8 text-white md:p-10">
                    <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />

                    <div className="absolute -right-6 -top-6 h-36 w-36 rounded-full border border-white/[0.06]" />

                    <div className="relative flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d7ad6a]/30 text-[#d7ad6a]">
                        <Icon
                          size={23}
                          strokeWidth={1.5}
                        />
                      </div>

                      <span className="font-serif text-[15px] text-white/30">
                        {company.number} / 03
                      </span>
                    </div>

                    <div className="relative mt-16">
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#d7ad6a]">
                        {company.activity}
                      </p>

                      <p className="mt-3 font-serif text-[31px] leading-none">
                        {company.shortName}
                      </p>
                    </div>
                  </div>

                  {/* COMPANY RIGHT */}

                  <div className="p-8 md:p-10 lg:p-12">
                    <div className="grid gap-10 xl:grid-cols-[1fr_0.65fr]">
                      <div>
                        <h3 className="text-[30px] font-semibold tracking-[-0.035em] md:text-[38px]">
                          {company.name}
                        </h3>

                        <p className="mt-6 max-w-[720px] text-[14px] leading-7 text-[#49675c]">
                          {company.description}
                        </p>

                        <p className="mt-4 max-w-[720px] text-[13px] leading-7 text-[#6a7e76]">
                          {company.extra}
                        </p>

                        <div className="mt-8 border-l-2 border-[#b98a4a] pl-5">
                          <p className="font-serif italic text-[#7d5c33]">
                            {company.signature}
                          </p>
                        </div>
                      </div>

                      {/* CONTACT */}

                      <div className="border-t border-[#082c1f]/10 pt-7 xl:border-l xl:border-t-0 xl:pl-9 xl:pt-0">
                        <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#9a6a35]">
                          Coordonnées
                        </p>

                        <div className="space-y-4">
                          {company.phones.map((phone) => (
                            <a
                              key={phone}
                              href={`tel:${phone.replace(/\s/g, "")}`}
                              className="flex items-center gap-3 text-[13px] transition-colors hover:text-[#a9773e]"
                            >
                              <Phone
                                size={15}
                                strokeWidth={1.5}
                              />

                              {phone}
                            </a>
                          ))}

                          <a
                            href={`mailto:${company.email}`}
                            className="flex items-start gap-3 break-all text-[13px] transition-colors hover:text-[#a9773e]"
                          >
                            <Mail
                              size={15}
                              strokeWidth={1.5}
                              className="mt-0.5 shrink-0"
                            />

                            {company.email}
                          </a>
                        </div>

                        <div className="mt-8 flex h-11 w-11 items-center justify-center rounded-full border border-[#082c1f]/15 text-[#082c1f] transition-all duration-300 group-hover:border-[#a9773e] group-hover:text-[#a9773e]">
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section className="bg-white px-6 py-24 md:px-10 md:py-32 lg:px-20">
        <div className="mx-auto grid max-w-[1450px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LOCATION INFO */}

          <motion.div {...reveal}>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#a9773e]">
              Implantation
            </p>

            <h2 className="mt-5 text-[45px] font-semibold leading-[1] tracking-[-0.045em] md:text-[62px]">
              Au cœur de

              <span className="block font-serif font-normal italic text-[#a9773e]">
                Sidi Bouzid.
              </span>
            </h2>

            <p className="mt-7 max-w-[540px] text-[15px] leading-8 text-[#567065]">
              L'ancrage territorial du groupe permet de rester proche
              de la production agricole, des producteurs et des
              différents acteurs de la filière.
            </p>

            <div className="mt-10 space-y-6 border-t border-[#082c1f]/15 pt-8">
              <div className="flex gap-4">
                <MapPin
                  className="mt-1 shrink-0 text-[#a9773e]"
                  size={19}
                  strokeWidth={1.5}
                />

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em]">
                    Société Almahdi Huile d'Olive
                  </p>

                  <p className="mt-2 text-[14px] leading-7 text-[#567065]">
                    El Hichria
                    <br />
                    9100 Sidi Bouzid
                    <br />
                    Tunisie
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone
                  className="shrink-0 text-[#a9773e]"
                  size={18}
                  strokeWidth={1.5}
                />

                <a
                  href="tel:+21658868000"
                  className="text-[14px] transition-colors hover:text-[#a9773e]"
                >
                  +216 58 868 000
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail
                  className="shrink-0 text-[#a9773e]"
                  size={18}
                  strokeWidth={1.5}
                />

                <a
                  href="mailto:huilerie.almehdi@gmail.com"
                  className="text-[14px] transition-colors hover:text-[#a9773e]"
                >
                  huilerie.almehdi@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* LOCATION VISUAL */}

          <motion.div
            {...reveal}
            className="relative min-h-[520px] overflow-hidden bg-[#073525]"
          >
            <div
              className="absolute inset-0 opacity-[0.09]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7ad6a]/10" />

            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7ad6a]/15" />

            <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7ad6a]/20" />

            <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7ad6a]/30" />

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      scale: 0.85,
                      opacity: 0,
                    }
              }
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                ease,
              }}
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d7ad6a] text-[#073525] shadow-[0_0_0_14px_rgba(215,173,106,0.1)]">
                <MapPin size={25} />
              </div>

              <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-[#d7ad6a]">
                El Hichria
              </p>

              <p className="mt-2 whitespace-nowrap font-serif text-[27px] text-white">
                Sidi Bouzid · Tunisie
              </p>

              <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-white/35">
                AlMahdi AgriGroup
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          INTERNATIONAL
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#082c1f] px-6 py-24 text-white md:px-10 md:py-32 lg:px-20">
        <div className="pointer-events-none absolute -right-48 top-0 h-[600px] w-[600px] rounded-full bg-[#d7ad6a]/5 blur-[130px]" />

        <motion.div
          {...reveal}
          className="relative mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
        >
          <div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d7ad6a]/25">
              <Globe2
                size={27}
                strokeWidth={1.3}
                className="text-[#d7ad6a]"
              />
            </div>

            <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.28em] text-[#d7ad6a]">
              Vision internationale
            </p>

            <h2 className="mt-5 max-w-[900px] text-[48px] font-semibold leading-[0.98] tracking-[-0.045em] md:text-[72px]">
              Un ancrage tunisien.

              <span className="block font-serif font-normal italic text-[#d7ad6a]">
                Une ambition internationale.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[540px] text-[15px] leading-8 text-white/55">
              Le groupe développe des relations professionnelles
              durables avec ses clients, fournisseurs et partenaires,
              en Tunisie comme sur les marchés internationaux.
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
              <ShieldCheck
                size={17}
                strokeWidth={1.5}
                className="text-[#d7ad6a]"
              />

              Qualité · Traçabilité · Fiabilité
            </div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ===================================================== */}

      <section className="bg-[#d7ad6a] px-6 py-20 text-[#06291b] md:px-10 md:py-24 lg:px-20">
        <motion.div
          {...reveal}
          className="mx-auto flex max-w-[1450px] flex-col gap-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em]">
              AlMahdi AgriGroup
            </p>

            <h2 className="mt-4 max-w-[850px] text-[42px] font-semibold leading-[1] tracking-[-0.04em] md:text-[58px]">
              Construisons de nouvelles

              <span className="block font-serif font-normal italic">
                opportunités ensemble.
              </span>
            </h2>
          </div>

          <Link
            href="/contact"
            className="
              group
              inline-flex
              min-h-[64px]
              shrink-0
              items-center
              justify-center
              gap-6
              bg-[#06291b]
              px-8
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white
              shadow-[0_15px_30px_rgba(6,41,27,0.15)]
              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#0b4935]
            "
          >
            Nous contacter

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}