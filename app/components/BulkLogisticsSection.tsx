"use client";

import { useEffect, useRef, useState } from "react";
import { Droplet, Package, Truck } from "lucide-react";

// =====================================================
// DATA
// =====================================================

const logistics = [
  {
    icon: Truck,
    number: "01",
    title: "Citerne",
    text: "Chargement direct en camion-citerne, depuis nos cuves de stockage inox.",
  },
  {
    icon: Package,
    number: "02",
    title: "Conteneur",
    text: "Chargement en conteneur pour l’export maritime vers vos ports de destination.",
  },
  {
    icon: Droplet,
    number: "03",
    title: "Bio & conventionnelle",
    text: "Deux filières certifiées. Échantillons fournis sur demande.",
  },
];

// =====================================================
// COMPONENT
// =====================================================

export default function BulkLogisticsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  // =====================================================
  // SCROLL ANIMATION
  // =====================================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#fbfaf4]
        px-5
        py-20
        sm:px-8
        md:py-28
        lg:px-12
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#b89555]/[0.05]
          blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#063727]/[0.04]
          blur-[110px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        {/* =====================================================
            SECTION LABEL
        ===================================================== */}

        <div
          className={`
            mb-12
            flex
            items-center
            justify-center
            gap-5
            transition-all
            duration-1000

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0"
            }
          `}
        >
          <span className="h-px w-10 bg-[#b89555]" />

          <p
            className="
              text-center
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#a58149]
              sm:text-[10px]
            "
          >
            Nos solutions logistiques
          </p>

          <span className="h-px w-10 bg-[#b89555]" />
        </div>

        {/* =====================================================
            LOGISTICS GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            border
            border-[#c8b98f]/40
            bg-[#fffdf7]
            md:grid-cols-3
          "
        >
          {logistics.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`
                  group
                  relative
                  flex
                  min-h-[410px]
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  px-7
                  py-14
                  text-center
                  transition-all
                  duration-1000

                  ${
                    index < logistics.length - 1
                      ? "border-b border-[#c8b98f]/40 md:border-b-0 md:border-r"
                      : ""
                  }

                  ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-16 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${200 + index * 180}ms`,
                }}
              >
                {/* NUMBER */}

                <span
                  className="
                    absolute
                    right-6
                    top-5
                    font-serif
                    text-[12px]
                    text-[#b89555]/35
                  "
                >
                  {item.number}
                </span>

                {/* GOLD HALO */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-[90px]
                    h-[170px]
                    w-[170px]
                    -translate-x-1/2
                    scale-75
                    rounded-full
                    bg-[#b89555]/0
                    blur-[45px]
                    transition-all
                    duration-700

                    group-hover:scale-125
                    group-hover:bg-[#b89555]/10
                  "
                />

                {/* ANIMATED CIRCLE */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    top-[76px]
                    h-[115px]
                    w-[115px]
                    scale-75
                    rounded-full
                    border
                    border-[#b89555]/0
                    transition-all
                    duration-700

                    group-hover:scale-110
                    group-hover:border-[#b89555]/20
                  "
                />

                {/* ICON */}

                <div
                  className="
                    relative
                    flex
                    h-[110px]
                    items-center
                    justify-center
                    text-[#173c30]
                    transition-all
                    duration-700

                    group-hover:-translate-y-2
                    group-hover:scale-110
                    group-hover:text-[#a58149]
                  "
                >
                  <Icon size={72} strokeWidth={1} />
                </div>

                {/* TITLE */}

                <h3
                  className="
                    mt-5
                    font-serif
                    text-[33px]
                    font-normal
                    tracking-[-0.025em]
                    text-[#153a2e]
                    sm:text-[36px]
                  "
                >
                  {item.title}
                </h3>

                {/* GOLD DIVIDER */}

                <div
                  className="
                    mt-5
                    h-px
                    w-8
                    bg-[#b89555]
                    transition-all
                    duration-700

                    group-hover:w-16
                  "
                />

                {/* DESCRIPTION */}

                <p
                  className="
                    mx-auto
                    mt-6
                    max-w-[350px]
                    text-[15px]
                    font-light
                    leading-[1.9]
                    text-[#7c817a]
                    sm:text-[16px]
                  "
                >
                  {item.text}
                </p>

                {/* BOTTOM ANIMATION */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    bg-[#b89555]
                    transition-all
                    duration-700

                    group-hover:w-full
                  "
                />

                {/* LIGHT REFLECTION */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -translate-x-[150%]
                    bg-gradient-to-r
                    from-transparent
                    via-[#b89555]/[0.06]
                    to-transparent
                    transition-transform
                    duration-[1300ms]

                    group-hover:translate-x-[150%]
                  "
                />
              </article>
            );
          })}
        </div>

        {/* =====================================================
            SIGNATURE
        ===================================================== */}

        <div
          className={`
            mt-12
            flex
            items-center
            justify-center
            gap-4
            transition-all
            delay-700
            duration-1000

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          <span className="h-[5px] w-[5px] rotate-45 bg-[#b89555]" />

          <p
            className="
              text-center
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#a18451]
              sm:text-[10px]
            "
          >
            Citerne · Conteneur · Bio & conventionnelle
          </p>

          <span className="h-[5px] w-[5px] rotate-45 bg-[#b89555]" />
        </div>
      </div>
    </section>
  );
}