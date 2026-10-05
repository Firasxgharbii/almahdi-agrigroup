"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   AWARDS DATA
========================================================= */

const awards = [
  {
    id: 1,
    image: "/awards/awards8.png",
    result: "OR · 2026",
    title: "JOOP · Japan Olive Oil Prize",
    location: "TOKYO, JAPON",
  },
  {
    id: 2,
    image: "/awards/awards12.jpeg",
    result: "DOUBLE OR · 2026",
    title: "Carthage IOOC",
    location: "TUNISIE",
  },
  {
    id: 3,
    image: "/awards/awards9.png",
    result: "OR · 2025",
    title: "London IOOC",
    location: "ROYAUME-UNI",
  },
  {
    id: 4,
    image: "/awards/awards1.png",
    result: "OR · 2025",
    title: "Afro-Asiatic Int. Competition",
    location: "ABU DHABI, EAU",
  },
  {
    id: 5,
    image: "/awards/awards16.jpeg",
    result: "OR · 2025",
    title: "Carthage IOOC",
    location: "TUNISIE",
  },
  {
    id: 6,
    image: "/awards/awards10.png",
    result: "PRESTIGIO ORO · 2025",
    title: "Olivinus",
    location: "MENDOZA, ARGENTINE",
  },
  {
    id: 7,
    image: "/awards/awards13.jpeg",
    result: "ARGENT · 2025",
    title: "Anatolian Int. Competition",
    location: "TURQUIE",
  },
  {
    id: 8,
    image: "/awards/awards18.jpeg",
    result: "BRONZE · 2025",
    title: "Athena Int. Competition",
    location: "GRÈCE",
  },
  {
    id: 9,
    image: "/awards/awards20.jpeg",
    result: "OR · 2024",
    title: "Pyramids IOOC",
    location: "ÉGYPTE",
  },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE_OUT,
    },
  },
};

const gridVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.15,
    },
  },
};

const awardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: EASE_OUT,
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function AwardsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="certifications"
      aria-labelledby="awards-title"
      className="
        relative
        overflow-hidden
        bg-[#f8f1df]
        px-5
        py-20
        text-[#2b251d]
        sm:px-8
        md:px-12
        md:py-28
        lg:px-16
        lg:py-32
      "
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[1000px]
          max-w-full
          -translate-x-1/2
          rounded-full
          bg-[#d7ad6a]/10
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-[1380px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          variants={reduceMotion ? undefined : headerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto mb-16 max-w-[850px] text-center md:mb-20"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-9 bg-[#b9934e]" />

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.32em]
                text-[#9c7741]
              "
            >
              Certifications & Distinctions
            </p>

            <span className="h-px w-9 bg-[#b9934e]" />
          </div>

          <h2
            id="awards-title"
            className="
              text-[40px]
              font-semibold
              leading-[1.04]
              tracking-[-0.045em]
              text-[#17372a]
              sm:text-[50px]
              md:text-[62px]
            "
          >
            Notre palmarès
            <span
              className="
                block
                font-serif
                font-normal
                italic
                text-[#a47b3f]
              "
            >
              international.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-[680px]
              text-[14px]
              leading-7
              text-[#6c6254]
              md:text-[16px]
            "
          >
            Une reconnaissance internationale qui témoigne de notre
            engagement envers la qualité, le savoir-faire et
            l’excellence de notre huile d’olive.
          </p>
        </motion.div>

        {/* =====================================================
            TOP DECORATIVE LINE
        ===================================================== */}

        <motion.div
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 1,
            ease: EASE_OUT,
          }}
          className="
            mb-12
            h-px
            w-full
            origin-center
            bg-[#b9934e]/45
          "
        />

        {/* =====================================================
            AWARDS GRID
        ===================================================== */}

        <motion.div
          variants={reduceMotion ? undefined : gridVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="
            grid
            grid-cols-2
            gap-x-5
            gap-y-14

            sm:grid-cols-3
            sm:gap-x-8

            lg:grid-cols-5
            lg:gap-x-8
            lg:gap-y-16
          "
        >
          {awards.map((award, index) => (
            <motion.article
              key={award.id}
              variants={reduceMotion ? undefined : awardVariants}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -10,
                    }
              }
              transition={{
                duration: 0.35,
                ease: EASE_OUT,
              }}
              className={`
                group
                relative
                flex
                min-w-0
                flex-col
                items-center
                text-center

                ${
                  index === 5
                    ? "lg:col-start-1"
                    : ""
                }
              `}
            >
              {/* IMAGE AREA */}

              <div
                className="
                  relative
                  flex
                  h-[150px]
                  w-full
                  items-center
                  justify-center

                  sm:h-[170px]

                  md:h-[190px]

                  lg:h-[205px]
                "
              >
                {/* HOVER LIGHT */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[120px]
                    w-[120px]
                    -translate-x-1/2
                    -translate-y-1/2
                    scale-75
                    rounded-full
                    bg-[#d1a65d]/0
                    blur-2xl
                    transition-all
                    duration-700

                    group-hover:scale-110
                    group-hover:bg-[#d1a65d]/20
                  "
                />

                <div
                  className="
                    relative
                    h-full
                    w-full
                    max-w-[190px]
                    transition-all
                    duration-700

                    group-hover:scale-[1.07]
                    group-hover:drop-shadow-[0_16px_14px_rgba(75,53,20,0.15)]
                  "
                >
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    sizes="
                      (max-width: 640px) 45vw,
                      (max-width: 1024px) 30vw,
                      190px
                    "
                    className="object-contain"
                  />
                </div>
              </div>

              {/* RESULT */}

              <p
                className="
                  mt-5
                  min-h-[16px]
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#a68148]

                  sm:text-[9px]
                "
              >
                {award.result}
              </p>

              {/* TITLE */}

              <h3
                className="
                  mt-2
                  max-w-[220px]
                  font-serif
                  text-[16px]
                  font-semibold
                  leading-[1.2]
                  text-[#332a20]

                  sm:text-[17px]

                  md:text-[18px]
                "
              >
                {award.title}
              </h3>

              {/* LOCATION */}

              <p
                className="
                  mt-4
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#7b7164]

                  sm:text-[8px]
                "
              >
                {award.location}
              </p>

              {/* MOBILE SMALL LINE */}

              <div
                className="
                  mt-7
                  h-px
                  w-10
                  bg-[#b9934e]/30
                  lg:hidden
                "
              />
            </motion.article>
          ))}
        </motion.div>

        {/* =====================================================
            BOTTOM LINE
        ===================================================== */}

        <motion.div
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 1,
            delay: 0.25,
            ease: EASE_OUT,
          }}
          className="
            mt-16
            h-px
            w-full
            origin-center
            bg-[#b9934e]/45

            md:mt-20
          "
        />

        {/* =====================================================
            SIGNATURE
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: 0.25,
            ease: EASE_OUT,
          }}
          className="mt-10 text-center"
        >
          <p
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.32em]
              text-[#9c7741]
            "
          >
            Médailles internationales
          </p>

          <p
            className="
              mx-auto
              mt-5
              max-w-[700px]
              font-serif
              text-[19px]
              italic
              leading-8
              text-[#66523a]

              md:text-[22px]
            "
          >
            L’excellence d’un terroir tunisien reconnue
            sur la scène internationale.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#b9934e]/60" />

            <span
              className="
                h-[5px]
                w-[5px]
                rotate-45
                bg-[#b9934e]
              "
            />

            <span className="h-px w-10 bg-[#b9934e]/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}