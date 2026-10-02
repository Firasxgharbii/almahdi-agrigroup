import {
  Factory,
  Leaf,
  ShieldCheck,
  Sprout,
} from "lucide-react";

import GroupPage from "../components/GroupPage";
import HeritagePillarsSection from "../components/HeritagePillarsSection";
import GroupCompaniesSection from "../components/GroupCompaniesSection";

const values = [
  {
    icon: Leaf,
    title: "Production agricole",
    text:
      "Une base solide autour de la terre, des produits tunisiens et du savoir-faire transmis depuis plusieurs générations.",
  },
  {
    icon: Factory,
    title: "Transformation",
    text:
      "Une vision moderne pour structurer, transformer et valoriser les produits agroalimentaires avec une image professionnelle.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité & traçabilité",
    text:
      "Une communication claire autour de la qualité, de la confiance, de la certification et de l’ouverture vers l’export.",
  },
];

export default function NotreGroupePage() {
  return (
    <>
      {/* =====================================================
          HERO — NOTRE HISTOIRE
      ===================================================== */}

      <GroupPage
        title="Notre histoire"
        image="/images/olivehero3.jpg"
        subtitle="Découvrez l’histoire du groupe."
      />

      {/* =====================================================
          5 GÉNÉRATIONS / HÉRITAGE ALMAHDI
      ===================================================== */}

      <HeritagePillarsSection />

      {/* =====================================================
          SOCIÉTÉS DU GROUPE
      ===================================================== */}

      <GroupCompaniesSection />

      {/* =====================================================
          NOS PILIERS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#fbf8e8] px-6 py-24 text-[#06291b] md:px-10 md:py-28 lg:px-20 lg:py-32">
        {/* Décoration arrière-plan */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-[180px]
            top-[40px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#0b6844]/[0.05]
            blur-[120px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-[180px]
            right-[-120px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#c49555]/[0.08]
            blur-[130px]
          "
        />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-10
              border-b
              border-[#06291b]/10
              pb-14
              lg:grid-cols-[1fr_0.65fr]
              lg:items-end
              lg:gap-20
            "
          >
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#b7813f]" />

                <p
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.3em]
                    text-[#a87538]
                    sm:text-[11px]
                  "
                >
                  Nos piliers
                </p>
              </div>

              <h2
                className="
                  max-w-[850px]
                  text-[42px]
                  font-light
                  leading-[0.98]
                  tracking-[-0.05em]
                  text-[#06291b]
                  sm:text-[50px]
                  md:text-[62px]
                  lg:text-[72px]
                "
              >
                Un groupe pensé pour
                <span
                  className="
                    mt-2
                    block
                    font-semibold
                    italic
                    text-[#b7813f]
                  "
                >
                  l’avenir agroalimentaire.
                </span>
              </h2>
            </div>

            <div className="max-w-[500px] lg:justify-self-end">
              <p
                className="
                  text-[15px]
                  leading-7
                  text-[#335c4c]
                  md:text-[16px]
                  md:leading-8
                "
              >
                AlMahdi AgriGroup construit une vision familiale,
                moderne et structurée, capable d&apos;accompagner
                plusieurs sociétés, produits et marchés.
              </p>

              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-3
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.22em]
                  text-[#a87538]
                "
              >
                <Sprout size={15} />
                Terre · Savoir-faire · Avenir
              </div>
            </div>
          </div>

          {/* =================================================
              CARDS
          ================================================= */}

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-[#06291b]/10 bg-[#06291b]/10 md:grid-cols-3">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="
                    group
                    relative
                    min-h-[390px]
                    overflow-hidden
                    bg-[#fffdf7]
                    p-8
                    transition-all
                    duration-500
                    md:p-9
                    lg:p-10
                  "
                >
                  {/* Hover background */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      translate-y-full
                      bg-[linear-gradient(180deg,transparent,rgba(6,41,27,0.055))]
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:translate-y-0
                    "
                  />

                  {/* Numéro */}

                  <div className="relative z-10 flex items-start justify-between">
                    <span
                      className="
                        text-[10px]
                        font-black
                        tracking-[0.22em]
                        text-[#06291b]/30
                      "
                    >
                      0{index + 1}
                    </span>

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#b7813f]
                        shadow-[0_0_14px_rgba(183,129,63,0.45)]
                      "
                    />
                  </div>

                  {/* Icône */}

                  <div
                    className="
                      relative
                      z-10
                      mt-14
                      flex
                      h-[70px]
                      w-[70px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#b7813f]/35
                      text-[#a87538]
                      transition-all
                      duration-500

                      group-hover:rotate-6
                      group-hover:scale-110
                      group-hover:border-[#b7813f]
                      group-hover:bg-[#b7813f]
                      group-hover:text-white
                    "
                  >
                    <Icon size={28} strokeWidth={1.5} />

                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        -inset-2
                        rounded-full
                        border
                        border-transparent
                        transition-all
                        duration-500

                        group-hover:-inset-4
                        group-hover:border-[#b7813f]/15
                      "
                    />
                  </div>

                  {/* Texte */}

                  <div className="relative z-10 mt-10">
                    <h3
                      className="
                        max-w-[270px]
                        text-[25px]
                        font-semibold
                        leading-[1.08]
                        tracking-[-0.035em]
                        text-[#06291b]
                        transition-colors
                        duration-300

                        group-hover:text-[#9d6b32]
                      "
                    >
                      {item.title}
                    </h3>

                    <div
                      className="
                        mt-6
                        h-px
                        w-9
                        bg-[#b7813f]
                        transition-all
                        duration-500
                        group-hover:w-20
                      "
                    />

                    <p
                      className="
                        mt-6
                        max-w-[330px]
                        text-[14px]
                        leading-7
                        text-[#456558]
                      "
                    >
                      {item.text}
                    </p>
                  </div>

                  {/* Grand numéro décoratif */}

                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-7
                      right-1
                      text-[120px]
                      font-black
                      leading-none
                      tracking-[-0.09em]
                      text-[#06291b]/[0.025]
                      transition-all
                      duration-700

                      group-hover:-translate-y-3
                      group-hover:text-[#b7813f]/[0.06]
                    "
                  >
                    0{index + 1}
                  </span>
                </article>
              );
            })}
          </div>

          {/* =================================================
              SIGNATURE
          ================================================= */}

          <div
            className="
              mt-10
              flex
              flex-col
              gap-5
              border-t
              border-[#06291b]/10
              pt-8
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.25em]
                text-[#06291b]/35
              "
            >
              Agriculture · Transformation · Qualité · Export
            </p>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#b7813f]" />

              <span
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#a87538]
                "
              >
                AlMahdi AgriGroup
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}