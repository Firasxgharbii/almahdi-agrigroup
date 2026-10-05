import {
  BadgeCheck,
  Factory,
  Sprout,
  Tractor,
} from "lucide-react";

import { Plus_Jakarta_Sans } from "next/font/google";

import PremiumOliveHero from "./components/PremiumOliveHero";
import FilialesSection from "./components/FilialesSection";
import GlobalTestimonialsSection from "./components/GlobalTestimonialsSection";
import CinematicStorySection from "./components/CinematicStorySection";
import WhyChooseSection from "./components/WhyChooseSection";
import PremiumFAQSection from "./components/PremiumFAQSection";

// =====================================================
// FONT
// =====================================================

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// =====================================================
// VALUES
// =====================================================

const values = [
  {
    icon: Tractor,
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
    icon: BadgeCheck,
    title: "Qualité & traçabilité",
    text:
      "Une communication claire autour de la qualité, de la confiance, de la certification et de l’ouverture vers l’export.",
  },
];

// =====================================================
// PAGE
// =====================================================

export default function Home() {
  return (
    <main
      className={`
        ${bodyFont.className}
        min-h-screen
        bg-[#F8F3E3]
        text-[#061B11]
      `}
    >
      {/* ================================================= */}
      {/* PREMIUM HERO */}
      {/* ================================================= */}

      <PremiumOliveHero />

      {/* ================================================= */}
      {/* CINEMATIC STORY */}
      {/* ================================================= */}

      <CinematicStorySection />

      {/* ================================================= */}
      {/* TESTIMONIALS */}
      {/* ================================================= */}

      <GlobalTestimonialsSection />

      {/* ================================================= */}
      {/* PILIERS */}
      {/* ================================================= */}

      <section
        className="
          bg-[#F8F3E3]
          px-5
          py-20
          md:px-10
          md:py-28
          lg:px-14
          xl:px-20
        "
      >
        <div className="mx-auto w-full max-w-[1500px]">
          {/* HEADER */}

          <div className="mb-14 max-w-3xl">
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#075B35]/15
                bg-white
                px-4
                py-2
                text-[11px]
                font-black
                uppercase
                tracking-[0.18em]
                text-[#075B35]
              "
            >
              <Sprout size={16} />

              Nos piliers
            </div>

            <h2
              className="
                text-4xl
                font-black
                leading-[1.05]
                tracking-[-0.04em]
                text-[#061B11]
                md:text-5xl
                lg:text-6xl
              "
            >
              Un groupe pensé pour
              <br className="hidden md:block" />
              l’avenir agroalimentaire
            </h2>

            <p
              className="
                mt-6
                max-w-[720px]
                text-base
                leading-8
                text-[#47584D]
                md:text-lg
              "
            >
              AlMahdi Olive Oil présente une image sérieuse, familiale et
              moderne, capable de développer plusieurs sociétés, produits et
              marchés en Tunisie et à l’international.
            </p>
          </div>

          {/* ================================================= */}
          {/* CARDS */}
          {/* ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-3
            "
          >
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-[#075B35]/10
                    bg-white
                    p-7
                    shadow-[0_12px_40px_rgba(6,27,17,0.04)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_25px_70px_rgba(6,27,17,0.10)]
                    md:p-8
                  "
                >
                  {/* DECORATION */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      bg-[#d7ad6a]/0
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:bg-[#d7ad6a]/15
                    "
                  />

                  {/* ICON */}

                  <div
                    className="
                      relative
                      mb-7
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#075B35]/10
                      text-[#075B35]
                      transition-all
                      duration-500
                      group-hover:bg-[#075B35]
                      group-hover:text-white
                    "
                  >
                    <Icon size={27} />
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      relative
                      text-xl
                      font-black
                      tracking-[-0.02em]
                      text-[#061B11]
                      md:text-2xl
                    "
                  >
                    {item.title}
                  </h3>

                  {/* TEXT */}

                  <p
                    className="
                      relative
                      mt-4
                      text-[15px]
                      leading-7
                      text-[#5b685f]
                    "
                  >
                    {item.text}
                  </p>

                  {/* BOTTOM LINE */}

                  <div
                    className="
                      mt-8
                      h-[2px]
                      w-10
                      bg-[#d7ad6a]
                      transition-all
                      duration-500
                      group-hover:w-20
                    "
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* WHY CHOOSE */}
      {/* ================================================= */}

      <WhyChooseSection />

      {/* ================================================= */}
      {/* FAQ */}
      {/* ================================================= */}

      <PremiumFAQSection />

      {/* ================================================= */}
      {/* FILIALES */}
      {/* ================================================= */}

      <FilialesSection />
    </main>
  );
}