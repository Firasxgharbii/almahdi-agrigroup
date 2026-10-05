"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Check,
  ExternalLink,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const benefits = [
  "« Virgin olive oil — 100 % Organic » et « Packaged olive oil — 100 % Organic »",
  "Sites de production et de transformation audités par Ecocert le 20/10/2025",
  "Certificats vérifiables en ligne : Ecocert et USDA Organic Integrity Database",
];

const certificates = [
  {
    image: "/images/seal-bio-ecocert.svg",
    eyebrow: "Agriculture biologique",
    title: "Tunisie",
    organization: "Certifié par Ecocert SAS",
    details: [
      {
        label: "Certificat",
        value: "306856-TN-2025-Z-404758-2026",
      },
      {
        label: "Produit",
        value: "Huile d’olive vierge ≥ 95 % bio",
      },
      {
        label: "Validité",
        value: "20/01/2026 – 20/04/2027",
      },
    ],
  },
  {
    image: "/images/seal-usda-organic.svg",
    eyebrow: "USDA",
    title: "Organic · NOP",
    organization: "Ecocert SAS · 7 CFR Part 205",
    details: [
      {
        label: "Operation ID",
        value: "7880306856",
      },
      {
        label: "Produits",
        value: "Virgin & packaged olive oil — 100 % Organic",
      },
      {
        label: "Périmètre",
        value: "Crops & Handling/Processing",
      },
    ],
  },
];

export default function OrganicCertificationSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.14,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#f3ecd9]
        px-5
        py-24
        text-[#123c2d]
        sm:px-8
        md:py-28
        lg:px-12
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[50px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#b28a4f]/[0.08]
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-[220px]
          right-[-140px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#0e5138]/[0.07]
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-[88%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#b48a50]/35
          to-transparent
        "
      />

      <div className="relative z-10 mx-auto max-w-[1450px]">

        {/* =====================================================
            TOP SIGNATURE
        ====================================================== */}

        <div
          className={`
            mb-16
            flex
            items-center
            justify-between
            gap-5
            border-b
            border-[#153d2f]/10
            pb-6
            transition-all
            duration-1000

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }
          `}
        >
          <div className="flex items-center gap-3">
            <Leaf
              size={15}
              strokeWidth={1.5}
              className="text-[#a57940]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#936a39]">
              AlMahdi Olive Oil
            </span>
          </div>

          <span className="hidden text-[9px] font-semibold uppercase tracking-[0.24em] text-[#153d2f]/35 sm:block">
            Organic · Certified · Traceable
          </span>
        </div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-16
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* =================================================
              LEFT
          ================================================== */}

          <div>
            {/* LABEL */}

            <div
              className={`
                flex
                items-center
                gap-4
                transition-all
                duration-700

                ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }
              `}
            >
              <span className="h-px w-9 bg-[#b1874d]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.34em] text-[#9b7040] sm:text-[10px]">
                Certification biologique
              </span>
            </div>

            {/* TITLE */}

            <h2
              className={`
                mt-8
                max-w-[680px]
                font-serif
                text-[45px]
                font-normal
                leading-[1.03]
                tracking-[-0.035em]
                text-[#123c2d]
                transition-all
                delay-100
                duration-1000

                sm:text-[55px]
                md:text-[65px]
                lg:text-[60px]
                xl:text-[72px]

                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }
              `}
            >
              Huile d&apos;olive bio,
              <br />
              certifiée en Tunisie
              <br />

              <span className="italic text-[#a4773f]">
                et aux États-Unis.
              </span>
            </h2>

            {/* INTRO */}

            <p
              className={`
                mt-9
                max-w-[610px]
                text-[16px]
                font-light
                leading-[1.9]
                text-[#49665b]
                transition-all
                delay-200
                duration-1000

                md:text-[17px]

                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              Nos olives proviennent du groupement de producteurs
              d&apos;El Hichria, site certifié biologique. Production
              et transformation sont auditées par Ecocert, pour une
              huile vendue bio en Europe comme en Amérique du Nord.
            </p>

            {/* =================================================
                BENEFITS
            ================================================== */}

            <div className="mt-10 max-w-[640px] space-y-5">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className={`
                    group
                    flex
                    items-start
                    gap-4
                    transition-all
                    duration-700

                    ${
                      visible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-8 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: `${350 + index * 130}ms`,
                  }}
                >
                  <div
                    className="
                      mt-[3px]
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#9ba963]/35
                      bg-[#edf0d8]
                      transition-all
                      duration-300

                      group-hover:scale-110
                      group-hover:border-[#73863f]
                      group-hover:bg-[#73863f]
                      group-hover:text-white
                    "
                  >
                    <Check size={12} strokeWidth={2.5} />
                  </div>

                  <p className="text-[14px] leading-7 text-[#294b3e] md:text-[15px]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* TRUST BOX */}

            <div
              className={`
                mt-12
                max-w-[610px]
                border-l-2
                border-[#b1874d]
                bg-white/35
                px-6
                py-5
                backdrop-blur-sm
                transition-all
                delay-700
                duration-1000

                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              <div className="flex items-start gap-4">
                <ShieldCheck
                  size={22}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#9a6f3d]"
                />

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#916538]">
                    Traçabilité & conformité
                  </p>

                  <p className="mt-2 text-[13px] leading-6 text-[#49665b]">
                    Une certification pensée pour garantir la conformité
                    biologique de la production jusqu&apos;à la transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              CERTIFICATE CARDS
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:gap-6
            "
          >
            {certificates.map((certificate, index) => (
              <article
                key={certificate.title}
                className={`
                  group
                  relative
                  overflow-hidden
                  border
                  border-[#123c2d]/10
                  bg-[#fffdf6]
                  px-6
                  py-9
                  shadow-[0_20px_60px_rgba(30,50,40,0.07)]
                  transition-all
                  duration-700

                  hover:-translate-y-3
                  hover:border-[#a67b43]/35
                  hover:shadow-[0_28px_80px_rgba(30,50,40,0.13)]

                  sm:px-7
                  lg:px-6
                  xl:px-8

                  ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-14 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${250 + index * 180}ms`,
                }}
              >
                {/* TOP GOLD LINE */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-0
                    top-0
                    h-[3px]
                    w-0
                    bg-gradient-to-r
                    from-[#8e6738]
                    via-[#d2ad70]
                    to-[#8e6738]
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />

                {/* NUMBER */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    right-4
                    top-3
                    font-serif
                    text-[70px]
                    leading-none
                    text-[#123c2d]/[0.025]
                  "
                >
                  0{index + 1}
                </span>

                {/* LOGO */}

                <div className="relative mx-auto h-[150px] w-[150px] sm:h-[160px] sm:w-[160px]">
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-3
                      rounded-full
                      bg-[#c39a5d]/10
                      blur-2xl
                      transition-all
                      duration-700
                      group-hover:scale-125
                      group-hover:bg-[#c39a5d]/20
                    "
                  />

                  <Image
                    src={certificate.image}
                    alt={`${certificate.eyebrow} ${certificate.title}`}
                    fill
                    sizes="180px"
                    className="
                      relative
                      z-10
                      object-contain
                      transition-transform
                      duration-700
                      group-hover:scale-110
                      group-hover:rotate-[2deg]
                    "
                  />
                </div>

                {/* TITLE */}

                <div className="mt-7 text-center">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9a6f3d]">
                    {certificate.eyebrow}
                  </p>

                  <h3 className="mt-2 font-serif text-[31px] leading-none text-[#153d2f]">
                    {certificate.title}
                  </h3>

                  <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#a37a49]">
                    {certificate.organization}
                  </p>
                </div>

                {/* DETAILS */}

                <div className="mt-8 border-t border-[#123c2d]/10">
                  {certificate.details.map((detail) => (
                    <div
                      key={detail.label}
                      className="
                        border-b
                        border-[#123c2d]/10
                        py-5
                        text-center
                      "
                    >
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#23483a]">
                        {detail.label}
                      </p>

                      <p className="mx-auto mt-2 max-w-[220px] text-[12px] leading-5 text-[#6c756f]">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* BOTTOM */}

                <div className="mt-6 flex items-center justify-center gap-2 text-[#a07745]">
                  <Sparkles size={12} />

                  <span className="text-[8px] font-bold uppercase tracking-[0.22em]">
                    Certification biologique
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className={`
            mt-16
            flex
            flex-col
            gap-5
            border-t
            border-[#153d2f]/10
            pt-7
            transition-all
            delay-1000
            duration-1000

            sm:flex-row
            sm:items-center
            sm:justify-between

            ${visible ? "opacity-100" : "opacity-0"}
          `}
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rotate-45 bg-[#a4773f]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#9a7040]">
              Tunisie · Europe · Amérique du Nord
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#153d2f]/45">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
              Certifications vérifiables
            </span>

            <ExternalLink size={12} />
          </div>
        </div>
      </div>
    </section>
  );
}