"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

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

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.15,
      ease: EASE_OUT,
    },
  },
};

export default function AwardsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="certifications"
      aria-labelledby="awards-title"
      className="
        relative
        overflow-hidden
        bg-[#fbf8ef]
        px-5
        py-20
        text-[#06291b]

        sm:px-6

        md:px-10
        md:py-28

        lg:px-16
        lg:py-32
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
          left-1/2
          top-20
          h-[450px]
          w-[900px]
          max-w-full
          -translate-x-1/2
          rounded-full
          bg-[#d7ad6a]/10
          blur-[150px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#073525]/[0.04]
          blur-[130px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-[1380px]">

        {/* ===================================================
            HEADER
        =================================================== */}

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
            amount: 0.25,
          }}
          className="
            mx-auto
            max-w-[850px]
            text-center
          "
        >
          {/* LABEL */}

          <div
            className="
              mb-6
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-8
                bg-[#c69a43]
              "
            />

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#a8793e]
              "
            >
              Certifications & Distinctions
            </p>

            <span
              className="
                h-px
                w-8
                bg-[#c69a43]
              "
            />
          </div>

          {/* TITLE */}

          <h2
            id="awards-title"
            className="
              text-[42px]
              font-semibold
              leading-[1]
              tracking-[-0.045em]
              text-[#06291b]

              sm:text-[50px]

              md:text-[62px]
            "
          >
            Une reconnaissance
            <span
              className="
                block
                font-serif
                font-normal
                italic
                text-[#a8793e]
              "
            >
              internationale.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-7
              max-w-[680px]
              text-[14px]
              leading-7
              text-[#577065]

              md:text-[16px]
              md:leading-8
            "
          >
            Notre engagement envers la qualité est reconnu à travers
            plusieurs concours et distinctions internationales dédiés
            à l'huile d'olive.
          </p>
        </motion.div>

        {/* ===================================================
            DECORATIVE LINE
        =================================================== */}

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
              : 0.9,
            delay: 0.15,
            ease: EASE_OUT,
          }}
          className="
            mx-auto
            mt-10
            h-px
            w-[120px]
            origin-center
            bg-[#c69a43]
          "
        />

        {/* ===================================================
            AWARDS20 — COMPLETE AWARDS BOARD
        =================================================== */}

        <motion.div
          variants={
            reduceMotion
              ? undefined
              : imageVariants
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
            group
            relative
            mx-auto
            mt-14
            max-w-[1180px]

            md:mt-16
          "
        >
          {/* SHADOW */}

          <div
            aria-hidden="true"
            className="
              absolute
              -inset-5
              rounded-[32px]
              bg-[#d7ad6a]/10
              opacity-0
              blur-3xl
              transition-opacity
              duration-700

              group-hover:opacity-100
            "
          />

          {/* IMAGE CONTAINER */}

          <div
            className="
              relative
              overflow-hidden
              border
              border-[#b98a4a]/20
              bg-[#f6eedc]
              p-2

              shadow-[0_20px_70px_rgba(6,41,27,0.08)]

              sm:p-3

              md:p-4
            "
          >
            <div
              className="
                relative
                aspect-[16/10]
                w-full
                overflow-hidden
                bg-[#f8f0df]
              "
            >
              <Image
                src="/awards/awards20.jpeg"
                alt="Palmarès international AlMahdi AgriGroup"
                fill
                priority={false}
                sizes="
                  (max-width: 768px) 95vw,
                  (max-width: 1280px) 90vw,
                  1180px
                "
                className="
                  object-contain
                  transition-transform
                  duration-[1200ms]
                  ease-out

                  group-hover:scale-[1.015]
                "
              />
            </div>
          </div>

          {/* NUMBER */}

          <div
            className="
              absolute
              -bottom-5
              left-1/2
              flex
              -translate-x-1/2
              items-center
              gap-4
              bg-[#fbf8ef]
              px-6
              py-2
            "
          >
            <span
              className="
                h-px
                w-8
                bg-[#c69a43]
              "
            />

            <span
              className="
                whitespace-nowrap
                text-[9px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#a8793e]
              "
            >
              Palmarès international
            </span>

            <span
              className="
                h-px
                w-8
                bg-[#c69a43]
              "
            />
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM TEXT
        =================================================== */}

        <motion.div
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
            duration: reduceMotion
              ? 0
              : 0.8,
            delay: 0.25,
            ease: EASE_OUT,
          }}
          className="
            mx-auto
            mt-20
            max-w-[900px]
            border-t
            border-[#06291b]/10
            pt-9
            text-center
          "
        >
          <p
            className="
              font-serif
              text-[21px]
              italic
              leading-8
              text-[#715b3b]

              md:text-[25px]
            "
          >
            « Chaque distinction récompense le travail de la terre,
            la maîtrise de la production et notre recherche constante
            de qualité. »
          </p>

          <div
            className="
              mt-7
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-[5px]
                w-[5px]
                rotate-45
                bg-[#c69a43]
              "
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#06291b]/50
              "
            >
              AlMahdi AgriGroup
            </span>

            <span
              className="
                h-[5px]
                w-[5px]
                rotate-45
                bg-[#c69a43]
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}