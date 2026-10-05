"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "5",
    label: "générations",
  },
  {
    value: "3",
    label: "lignes d’extraction",
  },
  {
    value: "4",
    label: "continents qui nous ont primés",
  },
];

export default function MaisonAlMahdiSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#062d21]
        text-[#f7f1df]
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[200px]
          top-[80px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#b8955d]/[0.06]
          blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-[240px]
          right-[-160px]
          h-[560px]
          w-[560px]
          rounded-full
          bg-[#0c5b40]/40
          blur-[150px]
        "
      />

      {/* subtle vertical line */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[47%]
          top-0
          hidden
          w-px
          bg-white/[0.035]
          lg:block
        "
      />

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[760px]
          max-w-[1500px]
          grid-cols-1
          lg:grid-cols-[0.82fr_1.18fr]
        "
      >
        {/* ===================================================
            LEFT — PHOTO
        ==================================================== */}

        <div
          className={`
            relative
            min-h-[540px]
            overflow-hidden
            transition-all
            duration-[1200ms]
            ease-out

            lg:min-h-[760px]

            ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }
          `}
        >
          <Image
            src="/images/olivehero4.jpg"
            alt="Héritage familial Al Mahdi à Sidi Bouzid"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="
              object-cover
              object-center
              transition-transform
              duration-[1800ms]
              ease-out
            "
            priority={false}
          />

          {/* DARK OVERLAY */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#062d21]/10
              via-transparent
              to-[#062d21]/80
            "
          />

          {/* BOTTOM OVERLAY */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-x-0
              bottom-0
              h-[45%]
              bg-gradient-to-t
              from-[#062d21]
              via-[#062d21]/30
              to-transparent
            "
          />

          {/* GOLD FRAME */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-6
              border
              border-[#d1ad73]/20
              sm:inset-8
              lg:inset-10
            "
          />

          {/* CORNER */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-6
              top-6
              h-[55px]
              w-[55px]
              border-l
              border-t
              border-[#d1ad73]
              sm:left-8
              sm:top-8
              lg:left-10
              lg:top-10
            "
          />

          {/* PHOTO CAPTION */}

          <div
            className={`
              absolute
              bottom-10
              left-10
              right-10
              transition-all
              delay-500
              duration-1000

              sm:bottom-12
              sm:left-12

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#d1ad73]" />

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#d8ba89]
                "
              >
                Sidi Bouzid · Tunisie
              </p>
            </div>

            <p
              className="
                mt-4
                max-w-[300px]
                text-[13px]
                leading-6
                text-white/65
              "
            >
              Une histoire construite autour de la terre,
              de la famille et de l&apos;olivier tunisien.
            </p>
          </div>
        </div>

        {/* ===================================================
            RIGHT — STORY
        ==================================================== */}

        <div
          className="
            relative
            flex
            items-center
            px-6
            py-20

            sm:px-10
            sm:py-24

            md:px-14

            lg:px-16
            lg:py-24

            xl:px-20
          "
        >
          <div className="w-full max-w-[720px]">

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
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
            >
              <span className="h-px w-9 bg-[#caa267]" />

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-[#d2ae76]

                  sm:text-[10px]
                "
              >
                La Maison Al Mahdi
              </p>
            </div>

            {/* TITLE */}

            <h2
              className={`
                mt-7
                max-w-[650px]
                font-serif
                text-[43px]
                font-normal
                leading-[1.02]
                tracking-[-0.035em]
                text-[#f5efdf]
                transition-all
                delay-100
                duration-1000

                sm:text-[54px]
                md:text-[62px]
                lg:text-[58px]
                xl:text-[68px]

                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              Enracinée dans
              <br />
              cinq générations
            </h2>

            {/* PARAGRAPH */}

            <p
              className={`
                mt-8
                max-w-[630px]
                text-[15px]
                font-light
                leading-[1.9]
                text-[#e5e0d2]/75
                transition-all
                delay-200
                duration-1000

                md:text-[16px]

                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              Au cœur de Sidi Bouzid, première région oléicole de Tunisie,
              la famille Al Mahdi transmet depuis cinq générations l&apos;art
              de faire naître une grande huile. Ce savoir-faire s&apos;appuie
              aujourd&apos;hui sur un outil industriel de premier plan,
              un laboratoire interne et une exigence absolue de traçabilité.
            </p>

            {/* QUOTE */}

            <div
              className={`
                relative
                mt-10
                max-w-[640px]
                border-l
                border-[#caa267]/55
                py-1
                pl-6
                transition-all
                delay-300
                duration-1000

                ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }
              `}
            >
              <span
                aria-hidden="true"
                className="
                  absolute
                  -left-[5px]
                  -top-5
                  font-serif
                  text-[50px]
                  leading-none
                  text-[#caa267]/20
                "
              >
                “
              </span>

              <p
                className="
                  font-serif
                  text-[20px]
                  italic
                  leading-[1.55]
                  text-[#e6c48c]

                  md:text-[22px]
                "
              >
                « Un fruité équilibré, une amertume et un
                piquant harmonieux : la signature d&apos;une
                huile fraîche et riche en polyphénols. »
              </p>
            </div>

            {/* =================================================
                STATS
            ================================================== */}

            <div
              className="
                mt-14
                grid
                grid-cols-1
                border-y
                border-white/10

                sm:grid-cols-3
              "
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    relative
                    py-7
                    transition-all
                    duration-700

                    sm:px-6
                    sm:first:pl-0

                    ${
                      index !== stats.length - 1
                        ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                        : ""
                    }

                    ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: `${450 + index * 120}ms`,
                  }}
                >
                  <p
                    className="
                      font-serif
                      text-[46px]
                      leading-none
                      text-[#f4ead7]
                    "
                  >
                    {stat.value}
                  </p>

                  <div className="mt-3 flex items-start gap-2">
                    <span
                      className="
                        mt-[7px]
                        h-1
                        w-1
                        shrink-0
                        rounded-full
                        bg-[#caa267]
                      "
                    />

                    <p
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        leading-4
                        tracking-[0.15em]
                        text-[#e8dfce]/50
                      "
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM SIGNATURE */}

            <div
              className={`
                mt-8
                flex
                flex-col
                gap-4
                transition-all
                delay-700
                duration-1000

                sm:flex-row
                sm:items-center
                sm:justify-between

                ${
                  visible
                    ? "opacity-100"
                    : "opacity-0"
                }
              `}
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#d0a76d]/70
                "
              >
                Héritage · Terre · Excellence
              </p>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#caa267]/50" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#f4ead7]/55
                  "
                >
                  Al Mahdi Olive Oil
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM GOLD LINE */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          w-[86%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#caa267]/45
          to-transparent
        "
      />
    </section>
  );
}