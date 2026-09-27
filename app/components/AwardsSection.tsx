
"use client";

import Image from "next/image";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";

// ==========================================
// ALMAHDI AGRIGROUP
// AWARDS & CERTIFICATIONS
// ==========================================

const awards = [
  {
    id: 1,
    name: "Distinction AlMahdi 01",
    src: "/awards/awards1.png",
  },
  {
    id: 3,
    name: "Distinction AlMahdi 03",
    src: "/awards/awards3.svg",
  },
  {
    id: 4,
    name: "Distinction AlMahdi 04",
    src: "/awards/awards4.png",
  },
  {
    id: 8,
    name: "Distinction AlMahdi 08",
    src: "/awards/awards8.png",
  },
  {
    id: 9,
    name: "Distinction AlMahdi 09",
    src: "/awards/awards9.png",
  },
  {
    id: 10,
    name: "Distinction AlMahdi 10",
    src: "/awards/awards10.png",
  },
  {
    id: 11,
    name: "Distinction AlMahdi 11",
    src: "/awards/awards11.png",
  },
];

// ==========================================
// ANIMATION SETTINGS
// ==========================================

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

// Header animation

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
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

// Awards container animation

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

// Individual award animation

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.94,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: EASE_OUT,
    },
  },
};

// ==========================================
// AWARDS SECTION
// ==========================================

export default function AwardsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="certifications"
      aria-labelledby="awards-title"
      className="
        relative
        overflow-hidden
        bg-white
        px-6
        py-20
        text-[#061b11]
        md:px-12
        md:py-28
        lg:px-20
      "
    >
      {/* ================================= */}
      {/* BACKGROUND DECORATION */}
      {/* ================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[350px]
          w-[700px]
          max-w-full
          -translate-x-1/2
          rounded-full
          bg-[#d9c18a]/10
          blur-[110px]
        "
      />

      {/* ================================= */}
      {/* MAIN CONTAINER */}
      {/* ================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-[1500px]
        "
      >
        {/* ================================= */}
        {/* SECTION HEADER */}
        {/* ================================= */}

        <motion.div
          variants={
            reduceMotion
              ? undefined
              : headerVariants
          }
          initial={
            reduceMotion
              ? false
              : "hidden"
          }
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            mx-auto
            mb-16
            max-w-[850px]
            text-left
            md:mb-20
          "
        >
          {/* SMALL HEADING */}

          <p
            className="
              mb-5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#b18a2e]
            "
          >
            Certifications & Distinctions
          </p>

          {/* MAIN TITLE */}

          <h2
            id="awards-title"
            className="
              mb-6
              text-[34px]
              font-semibold
              leading-[1.15]
              tracking-[-0.035em]
              text-[#092c20]
              sm:text-[40px]
              md:text-[48px]
            "
          >
            Recent Awards
          </h2>

          {/* GOLD LINE */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    scaleX: 0,
                  }
            }
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: reduceMotion
                ? 0
                : 0.8,
              ease: EASE_OUT,
            }}
            className="
              mb-8
              h-[2px]
              w-14
              origin-left
              bg-[#b99138]
            "
          />

          {/* ================================= */}
          {/* PROFESSIONAL DESCRIPTION */}
          {/* ================================= */}

          <div
            className="
              max-w-[750px]
              space-y-5
              text-[16px]
              font-normal
              leading-[1.85]
              tracking-normal
              text-[#404040]
              sm:text-[17px]
              md:text-[18px]
            "
          >
            <p>
              Our dedication to quality has been
              recognized through international
              awards and distinctions.
            </p>

            <p>
              Each recognition reflects the care
              we bring to our olive groves,
              our production methods, and the
              olive oil we share with the world.
            </p>
          </div>
        </motion.div>

        {/* ================================= */}
        {/* AWARDS GRID */}
        {/* ================================= */}

        <motion.div
          variants={
            reduceMotion
              ? undefined
              : containerVariants
          }
          initial={
            reduceMotion
              ? false
              : "hidden"
          }
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-8
            gap-y-12
            md:gap-x-12
            md:gap-y-16
            lg:gap-x-14
          "
        >
          {awards.map((award) => (
            <motion.div
              key={award.id}
              variants={
                reduceMotion
                  ? undefined
                  : itemVariants
              }
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -8,
                      scale: 1.035,
                    }
              }
              transition={{
                duration: reduceMotion
                  ? 0
                  : 0.35,
                ease: EASE_OUT,
              }}
              className="
                group
                relative
                flex
                h-[140px]
                w-[calc(50%-16px)]
                max-w-[180px]
                items-center
                justify-center
                sm:h-[155px]
                sm:w-[155px]
                md:h-[170px]
                md:w-[170px]
              "
            >
              {/* SOFT GOLD HOVER */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-2
                  rounded-full
                  bg-[#d9c18a]/0
                  blur-2xl
                  transition-all
                  duration-500
                  group-hover:bg-[#d9c18a]/20
                "
              />

              {/* AWARD IMAGE */}

              <div
                className="
                  relative
                  h-full
                  w-full
                  transition-all
                  duration-500
                  group-hover:drop-shadow-[0_12px_16px_rgba(0,0,0,0.12)]
                "
              >
                <Image
                  src={award.src}
                  alt={award.name}
                  fill
                  sizes="
                    (max-width: 640px) 45vw,
                    (max-width: 1024px) 170px,
                    180px
                  "
                  className="
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-[1.07]
                  "
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================================= */}
        {/* BOTTOM DECORATION */}
        {/* ================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 15,
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
            duration: reduceMotion
              ? 0
              : 0.8,
            delay: 0.2,
            ease: EASE_OUT,
          }}
          className="
            mx-auto
            mt-20
            flex
            max-w-[280px]
            items-center
            gap-4
          "
        >
          <div
            className="
              h-px
              flex-1
              bg-gradient-to-r
              from-transparent
              to-[#d9c18a]
            "
          />

          <div
            className="
              h-[6px]
              w-[6px]
              rotate-45
              bg-[#c79a00]
            "
          />

          <div
            className="
              h-px
              flex-1
              bg-gradient-to-l
              from-transparent
              to-[#d9c18a]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}