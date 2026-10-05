"use client";

import {
  ArrowUpRight,
  Factory,
  Globe2,
  Leaf,
  ShieldCheck,
  Sprout,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Sprout,
    title: "Terroir tunisien",
    text: "Une histoire agricole profondément liée à la terre tunisienne et à ses oliveraies.",
  },
  {
    number: "02",
    icon: Leaf,
    title: "Héritage familial",
    text: "Cinq générations de savoir-faire, de passion et d’expérience transmis dans le temps.",
  },
  {
    number: "03",
    icon: Factory,
    title: "Maîtrise",
    text: "Une organisation moderne pensée pour accompagner la production et la valorisation de nos produits.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Qualité & traçabilité",
    text: "Une attention portée à la qualité, à la confiance et à la maîtrise de chaque étape.",
  },
  {
    number: "05",
    icon: Globe2,
    title: "Vision internationale",
    text: "Une ambition tournée vers les partenaires et les marchés internationaux.",
  },
];

export default function HeritagePillarsSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#06291b]
        px-5
        py-24
        text-white
        sm:px-7
        md:px-10
        md:py-32
        lg:px-16
        xl:px-20
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.13]
          bg-[radial-gradient(circle_at_1px_1px,rgba(215,173,106,0.55)_1px,transparent_0)]
          bg-[size:34px_34px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[250px]
          top-[-250px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#0c7148]/25
          blur-[150px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-[300px]
          right-[-150px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-[#d7ad6a]/10
          blur-[160px]
        "
      />

      {/* GIANT DECORATIVE 05 */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-20px]
          top-[20px]
          hidden
          select-none
          text-[260px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-white/[0.025]
          lg:block
          xl:text-[330px]
        "
      >
        05
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            border-b
            border-white/15
            pb-14
            lg:grid-cols-[1fr_0.75fr]
            lg:items-end
            lg:gap-20
          "
        >
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d7ad6a]" />

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-[#d7ad6a]
                  sm:text-[11px]
                "
              >
                L&apos;héritage AlMahdi
              </p>
            </div>

            <h2
              className="
                max-w-[900px]
                text-[42px]
                font-light
                leading-[0.98]
                tracking-[-0.045em]
                text-[#fff9ed]
                sm:text-[52px]
                md:text-[66px]
                lg:text-[76px]
              "
            >
              Cinq générations.
              <span
                className="
                  mt-2
                  block
                  font-semibold
                  italic
                  text-[#d7ad6a]
                "
              >
                Une même exigence.
              </span>
            </h2>
          </div>

          <div className="max-w-[520px] lg:justify-self-end">
            <p
              className="
                text-[15px]
                leading-7
                text-white/60
                md:text-base
                md:leading-8
              "
            >
              De la terre jusqu&apos;aux marchés internationaux,
              AlMahdi Olive Oil construit son développement autour
              d&apos;un héritage familial, d&apos;une maîtrise agricole
              et d&apos;une vision tournée vers l&apos;avenir.
            </p>

            <div
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#d7ad6a]
              "
            >
              Depuis cinq générations
              <ArrowUpRight size={15} />
            </div>
          </div>
        </div>

        {/* =====================================================
            FIVE PILLARS
        ===================================================== */}

        <div
          className="
            mt-4
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
          "
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.number}
                className={`
                  group
                  relative
                  min-h-[350px]
                  overflow-hidden
                  border-b
                  border-white/10
                  px-2
                  py-10

                  sm:px-6

                  lg:border-b-0
                  lg:px-7
                  lg:py-14

                  ${
                    index !== pillars.length - 1
                      ? "lg:border-r lg:border-white/10"
                      : ""
                  }
                `}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* HOVER BACKGROUND */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    translate-y-full
                    bg-[linear-gradient(180deg,rgba(215,173,106,0.02),rgba(215,173,106,0.10))]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:translate-y-0
                  "
                />

                {/* TOP */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-start
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.2em]
                      text-white/30
                    "
                  >
                    {pillar.number}
                  </span>

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#d7ad6a]
                      shadow-[0_0_16px_rgba(215,173,106,0.8)]
                    "
                  />
                </div>

                {/* ICON */}

                <div
                  className="
                    relative
                    z-10
                    mt-12
                    flex
                    h-[72px]
                    w-[72px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#d7ad6a]/35
                    text-[#d7ad6a]
                    transition-all
                    duration-500

                    group-hover:scale-110
                    group-hover:border-[#d7ad6a]
                    group-hover:bg-[#d7ad6a]
                    group-hover:text-[#06291b]
                  "
                >
                  <Icon
                    size={29}
                    strokeWidth={1.5}
                  />

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -inset-2
                      rounded-full
                      border
                      border-[#d7ad6a]/0
                      transition-all
                      duration-500
                      group-hover:-inset-4
                      group-hover:border-[#d7ad6a]/15
                    "
                  />
                </div>

                {/* TEXT */}

                <div className="relative z-10 mt-9">
                  <h3
                    className="
                      max-w-[210px]
                      text-[20px]
                      font-semibold
                      leading-tight
                      tracking-[-0.025em]
                      text-[#fff9ed]
                      transition-colors
                      duration-300
                      group-hover:text-[#e7c47f]

                      xl:text-[22px]
                    "
                  >
                    {pillar.title}
                  </h3>

                  <div
                    className="
                      mt-5
                      h-px
                      w-8
                      bg-[#d7ad6a]/60
                      transition-all
                      duration-500
                      group-hover:w-16
                    "
                  />

                  <p
                    className="
                      mt-5
                      text-[13px]
                      leading-6
                      text-white/50
                      transition-colors
                      duration-300
                      group-hover:text-white/70

                      xl:text-[14px]
                    "
                  >
                    {pillar.text}
                  </p>
                </div>

                {/* LARGE BACKGROUND NUMBER */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -bottom-6
                    right-1
                    text-[110px]
                    font-black
                    leading-none
                    tracking-[-0.08em]
                    text-white/[0.025]
                    transition-all
                    duration-700

                    group-hover:-translate-y-3
                    group-hover:text-[#d7ad6a]/[0.055]
                  "
                >
                  {pillar.number}
                </span>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM SIGNATURE
        ===================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-5
            border-t
            border-white/15
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.26em]
              text-white/35
              sm:text-[10px]
            "
          >
            Terre · Héritage · Maîtrise · Qualité · International
          </p>

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#d7ad6a]/60" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#d7ad6a]
              "
            >
              AlMahdi Olive Oil
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}