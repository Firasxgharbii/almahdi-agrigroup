"use client";

import Image from "next/image";
import {
  Globe,
  Link as LinkIcon,
  Share2,
} from "lucide-react";

import SoftPaintingHero from "../components/SoftPaintingHero";
import OrganicCertificationSection from "../components/OrganicCertificationSection";

const sections = [
  {
    title: "Qualité supérieure",
    image: "/images/olivehero2.png",
  },
  {
    title: "Traçabilité",
    image: "/images/olivehero3.jpg",
  },
  {
    title: "Certifications",
    image: "/images/olivehero4.jpg",
  },
  {
    title: "Production contrôlée",
    image: "/images/olivehero5.jpg",
  },
  {
    title: "Savoir-faire tunisien",
    image: "/images/olivehero6.jpg",
  },
  {
    title: "Engagement qualité",
    image: "/images/olivehero7.jpg",
  },
  {
    title: "Produits primés",
    image: "/images/olivehero8.jpg",
  },
  {
    title: "Excellence internationale",
    image: "/images/olivehero.png",
  },
];

const paragraphs = [
  "L’olivier a façonné, au fil des millénaires, les paysages, l’histoire, la culture et la gastronomie du bassin méditerranéen, notamment celle de la Tunisie ; berceau de civilisations qui se sont transmis, à travers l’histoire, le savoir-faire de la culture et de la production de l’huile d’olive de père en fils.",

  "En hommage à ce voyage, nous mettons en avant notre savoir-faire, notre exigence de qualité et notre engagement envers une huile d’olive équilibrée, authentique et idéale au quotidien.",

  "Nos produits se distinguent par une excellente tenue à la chaleur sans perdre leurs vertus. Ils accompagnent la cuisine avec des saveurs méditerranéennes pour un voyage goûteux et gourmand.",
];

function SocialIcons() {
  return (
    <div className="mt-7 flex justify-center gap-5">
      <a
        href="#"
        aria-label="Partager"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#4b4b4b]
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#007a3d]
        "
      >
        <Share2 size={20} />
      </a>

      <a
        href="#"
        aria-label="Site web"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#4b4b4b]
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#007a3d]
        "
      >
        <Globe size={20} />
      </a>

      <a
        href="#"
        aria-label="Lien"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#4b4b4b]
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#007a3d]
        "
      >
        <LinkIcon size={20} />
      </a>
    </div>
  );
}

export default function QualiteCertificatsPage() {
  return (
    <main className="min-h-screen bg-white text-[#061b13]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <SoftPaintingHero
        title="Qualité & Certificats"
        image="/images/olivehero.png"
      />

      {/* =====================================================
          CERTIFICATION BIOLOGIQUE
          ECOCERT + USDA ORGANIC
      ===================================================== */}

      <OrganicCertificationSection />

      {/* =====================================================
          QUALITÉ / TRAÇABILITÉ / PRODUCTION
      ===================================================== */}

      <section className="relative w-full overflow-hidden bg-white px-6 py-24 sm:px-8 md:py-28 lg:px-16 xl:px-24">
        {/* BACKGROUND DECORATION */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-[200px]
            top-[300px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#0c6a45]/[0.04]
            blur-[130px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-[200px]
            top-[1200px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#b1874d]/[0.06]
            blur-[130px]
          "
        />

        <div className="relative z-10 mx-auto max-w-[1450px]">
          {/* =================================================
              INTRO
          ================================================= */}

          <div className="mx-auto mb-28 max-w-[850px] text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#b7813f]" />

              <span className="text-[9px] font-black uppercase tracking-[0.32em] text-[#a87538] sm:text-[10px]">
                Notre exigence
              </span>

              <span className="h-px w-10 bg-[#b7813f]" />
            </div>

            <h2 className="mt-7 font-serif text-[42px] font-normal leading-[1.05] tracking-[-0.04em] text-[#06291b] sm:text-[52px] md:text-[64px]">
              De l&apos;olivier
              <br />

              <span className="italic text-[#a87538]">
                jusqu&apos;à votre table.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-[650px] text-[15px] leading-8 text-[#456558] md:text-[16px]">
              Une attention portée à chaque étape de la production afin
              de préserver l&apos;authenticité, la qualité et le caractère
              de notre huile d&apos;olive tunisienne.
            </p>
          </div>

          {/* =================================================
              SECTIONS
          ================================================= */}

          <div className="space-y-36 lg:space-y-44">
            {sections.map((section, index) => {
              const imageLeft = index % 2 === 0;

              return (
                <article
                  key={section.title}
                  className="
                    group
                    grid
                    w-full
                    grid-cols-1
                    items-center
                    gap-12

                    lg:grid-cols-2
                    lg:gap-20

                    xl:gap-28
                  "
                >
                  {/* =========================================
                      IMAGE
                  ========================================== */}

                  <div
                    className={`
                      w-full

                      ${
                        imageLeft
                          ? "lg:order-1"
                          : "lg:order-2"
                      }
                    `}
                  >
                    <div
                      className="
                        relative
                        h-[350px]
                        w-full
                        overflow-hidden
                        bg-[#eef0e8]

                        sm:h-[420px]
                        md:h-[470px]
                        lg:h-[500px]
                      "
                    >
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        sizes="
                          (max-width: 1024px) 100vw,
                          50vw
                        "
                        className="
                          object-cover
                          transition-transform
                          duration-[1200ms]
                          ease-out
                          group-hover:scale-[1.045]
                        "
                      />

                      {/* DARK IMAGE GRADIENT */}

                      <div
                        aria-hidden="true"
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#06291b]/30
                          via-transparent
                          to-transparent
                        "
                      />

                      {/* BORDER */}

                      <div
                        aria-hidden="true"
                        className="
                          absolute
                          inset-5
                          border
                          border-white/25
                          transition-all
                          duration-700

                          group-hover:inset-7
                          group-hover:border-white/40
                        "
                      />

                      {/* NUMBER */}

                      <div
                        className="
                          absolute
                          bottom-7
                          left-7
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <span className="h-px w-8 bg-[#d6b476]" />

                        <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    <SocialIcons />
                  </div>

                  {/* =========================================
                      CONTENT
                  ========================================== */}

                  <div
                    className={`
                      w-full
                      max-w-[650px]

                      ${
                        imageLeft
                          ? "lg:order-2"
                          : "lg:order-1 lg:justify-self-end"
                      }
                    `}
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <span className="h-px w-8 bg-[#b7813f]" />

                      <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#a87538]">
                        AlMahdi Olive Oil
                      </span>
                    </div>

                    <h2
                      className="
                        max-w-[600px]
                        font-serif
                        text-[39px]
                        font-normal
                        leading-[1.05]
                        tracking-[-0.04em]
                        text-[#06291b]

                        sm:text-[46px]
                        md:text-[52px]
                      "
                    >
                      {section.title}
                    </h2>

                    <div
                      className="
                        mt-7
                        h-px
                        w-12
                        bg-[#b7813f]
                        transition-all
                        duration-700
                        group-hover:w-24
                      "
                    />

                    <div className="mt-8 space-y-6">
                      {paragraphs.map((paragraph, paragraphIndex) => (
                        <p
                          key={`${section.title}-${paragraphIndex}`}
                          className="
                            text-[15px]
                            font-light
                            leading-[1.9]
                            text-[#456558]

                            md:text-[16px]
                          "
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* BOTTOM SIGNATURE */}

                    <div className="mt-9 flex items-center gap-3 border-t border-[#06291b]/10 pt-6">
                      <span className="h-1.5 w-1.5 rotate-45 bg-[#b7813f]" />

                      <span className="text-[8px] font-black uppercase tracking-[0.24em] text-[#06291b]/40">
                        Qualité · Authenticité · Traçabilité
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}