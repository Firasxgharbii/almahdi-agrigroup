"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function MedilivaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#f3ecd9] text-[#082c1f]">
      {/* décor subtil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#d7ad6a]/10 blur-[120px]" />

        <div className="absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-[#0a4a34]/5 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #082c1f 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-6 py-24 md:px-10 md:py-32 lg:px-20">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          {/* TEXTE */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 40,
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
              duration: reduceMotion ? 0 : 0.9,
              ease,
            }}
          >
            {/* petit titre */}
            <div className="flex items-center gap-5">
              <span className="h-px w-10 bg-[#a9773e]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#9a6a35]">
                Notre marque en bouteille
              </p>
            </div>

            {/* MEDILIVA */}
            <motion.h2
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -25,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                delay: reduceMotion ? 0 : 0.12,
                ease,
              }}
              className="
                mt-10
                font-serif
                text-[62px]
                font-normal
                uppercase
                leading-[0.9]
                tracking-[0.16em]
                text-[#0a3527]
                sm:text-[76px]
                md:text-[96px]
                lg:text-[112px]
              "
            >
              Mediliva
            </motion.h2>

            {/* ligne */}
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
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                delay: reduceMotion ? 0 : 0.25,
                ease,
              }}
              className="mt-8 h-px max-w-[700px] origin-left bg-[#082c1f]/15"
            />

            {/* description */}
            <p className="mt-8 max-w-[760px] text-[17px] font-light leading-8 text-[#52675f] md:text-[19px] md:leading-9">
              L&apos;huile d&apos;olive extra vierge Al Mahdi, mise en bouteille
              sous notre propre marque et médaillée à l&apos;international.
              Découvrez la gamme, son histoire et son identité.
            </p>

            {/* signature */}
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-8 bg-[#a9773e]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#a9773e]">
                AlMahdi Olive Oil · Tunisie
              </span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 40,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.15,
              ease,
            }}
            className="lg:flex lg:justify-end"
          >
            <Link
              href="https://mediliva.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                inline-flex
                min-h-[76px]
                w-full
                max-w-[430px]
                items-center
                justify-between
                overflow-hidden
                bg-[#082c1f]
                px-8
                text-white
                shadow-[0_22px_60px_rgba(8,44,31,0.16)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_30px_80px_rgba(8,44,31,0.24)]
                md:px-10
              "
            >
              {/* hover */}
              <span
                className="
                  absolute
                  inset-0
                  origin-left
                  scale-x-0
                  bg-[#0d4935]
                  transition-transform
                  duration-500
                  group-hover:scale-x-100
                "
              />

              <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.22em]">
                Découvrir Mediliva.com
              </span>

              <span
                className="
                  relative
                  z-10
                  ml-6
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  transition-all
                  duration-500
                  group-hover:rotate-[-45deg]
                  group-hover:border-[#d7ad6a]
                  group-hover:bg-[#d7ad6a]
                  group-hover:text-[#082c1f]
                "
              >
                <ArrowRight size={17} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* bas décoratif */}
        <div className="mt-20 flex items-center gap-5">
          <div className="h-px flex-1 bg-[#082c1f]/10" />

          <span className="h-1.5 w-1.5 rounded-full bg-[#a9773e]" />

          <div className="h-px w-16 bg-[#082c1f]/10" />
        </div>
      </div>
    </section>
  );
}