"use client";

import {
  Package,
  Factory,
  Star,
  ArrowRight,
} from "lucide-react";

import CompanyPage from "../components/CompanyPage";

const offers = [
  {
    icon: Package,
    title: "Conditionneurs",
    text: "Une huile vierge extra régulière, prête à être mise en bouteille sous votre étiquette.",
  },
  {
    icon: Star,
    title: "Marques",
    text: "Des lots sélectionnés selon votre cahier des charges, bio ou conventionnels, avec bulletins d’analyse.",
  },
  {
    icon: Factory,
    title: "Industriels",
    text: "Des volumes importants et un calendrier de livraison tenu, appuyés par la logistique du groupe.",
  },
];

export default function ExportPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf4]">
      {/* =====================================================
          HERO EXPORT ACTUEL
      ===================================================== */}

      <CompanyPage
        title="Export"
        image="/images/olive20.jpeg"
        description="Notre activité export accompagne le développement international de nos produits agricoles et valorise le savoir-faire tunisien sur les marchés étrangers."
      />

      {/* =====================================================
          NOTRE OFFRE VRAC
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#fbfaf4] px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-36">
        {/* décorations de fond */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-[#b99a5d]/[0.06] blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#063b29]/[0.05] blur-[120px]"
        />

        <div className="relative z-10 mx-auto max-w-[1280px]">
          {/* =================================================
              TITRE
          ================================================= */}

          <div className="mx-auto max-w-[950px] text-center">
            <div className="offer-label flex items-center justify-center gap-5">
              <span className="h-px w-10 bg-[#b89555]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#ad8a4d] sm:text-[11px]">
                Notre offre vrac
              </p>

              <span className="h-px w-10 bg-[#b89555]" />
            </div>

            <h2 className="offer-title mt-8 font-serif text-[39px] font-normal leading-[1.05] tracking-[-0.035em] text-[#073326] sm:text-[48px] md:text-[58px] lg:text-[68px]">
              Huile d’olive en vrac
              <br className="hidden sm:block" /> pour les professionnels
            </h2>

            <p className="offer-description mx-auto mt-7 max-w-[760px] text-[16px] font-light leading-[1.9] text-[#7c817a] sm:text-[18px]">
              Une capacité supérieure à{" "}
              <strong className="font-medium text-[#4c5d54]">
                1 500 tonnes
              </strong>{" "}
              par campagne pour sécuriser vos approvisionnements, contrat
              après contrat.
            </p>
          </div>

          {/* =================================================
              3 CARTES
          ================================================= */}

          <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3 lg:gap-8">
            {offers.map((offer, index) => {
              const Icon = offer.icon;

              return (
                <article
                  key={offer.title}
                  className="offer-card group relative overflow-hidden border border-[#c8b98f]/35 bg-[#f5f0df] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_30px_70px_rgba(4,48,34,0.14)]"
                  style={{
                    animationDelay: `${index * 180}ms`,
                  }}
                >
                  {/* partie verte */}
                  <div className="relative flex h-[220px] items-center justify-center overflow-hidden bg-[#063727]">
                    {/* lumière */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(205,175,109,0.12),transparent_55%)]" />

                    {/* branche décorative */}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 500 160"
                      className="absolute left-0 top-5 h-[120px] w-full opacity-35 transition-all duration-1000 group-hover:translate-x-5 group-hover:opacity-60"
                      fill="none"
                    >
                      <path
                        d="M-20 80 C100 25 240 105 520 45"
                        stroke="#c9a865"
                        strokeWidth="2"
                      />

                      {[
                        [50, 64, -25],
                        [85, 54, 20],
                        [120, 52, -20],
                        [160, 57, 22],
                        [200, 62, -18],
                        [245, 65, 20],
                        [290, 62, -20],
                        [335, 57, 22],
                        [380, 51, -20],
                        [425, 47, 20],
                      ].map(([x, y, rotation], i) => (
                        <ellipse
                          key={i}
                          cx={x}
                          cy={y}
                          rx="15"
                          ry="5"
                          fill="#c9a865"
                          transform={`rotate(${rotation} ${x} ${y})`}
                        />
                      ))}
                    </svg>

                    {/* cercle animé */}
                    <div className="absolute h-[100px] w-[100px] rounded-full border border-[#d3b46f]/0 transition-all duration-700 group-hover:scale-125 group-hover:border-[#d3b46f]/20" />

                    {/* icône */}
                    <div className="relative z-10 flex h-[82px] w-[82px] items-center justify-center text-[#d4b775] transition-all duration-700 group-hover:scale-110">
                      <Icon
                        size={50}
                        strokeWidth={1.1}
                      />
                    </div>

                    {/* petite ligne basse */}
                    <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#d0af68] transition-all duration-700 group-hover:w-full" />
                  </div>

                  {/* contenu */}
                  <div className="relative min-h-[245px] p-8 sm:p-9">
                    <span className="absolute right-7 top-7 font-serif text-[13px] text-[#ad8a4d]/50">
                      0{index + 1}
                    </span>

                    <h3 className="font-serif text-[31px] font-normal tracking-[-0.025em] text-[#073326]">
                      {offer.title}
                    </h3>

                    <p className="mt-4 max-w-[330px] text-[15px] font-light leading-[1.85] text-[#7a8078]">
                      {offer.text}
                    </p>

                    <div className="mt-7 flex items-center gap-3 overflow-hidden">
                      <span className="h-px w-7 bg-[#b89555] transition-all duration-500 group-hover:w-12" />

                      <ArrowRight
                        size={15}
                        className="-translate-x-8 text-[#9c7b42] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    </div>
                  </div>

                  {/* reflet au hover */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-[1200ms] group-hover:translate-x-[150%]" />
                </article>
              );
            })}
          </div>

          {/* =================================================
              BAS DE SECTION
          ================================================= */}

          <div className="mt-16 flex items-center justify-center gap-4">
            <span className="h-[5px] w-[5px] rotate-45 bg-[#b89555]" />

            <p className="text-center text-[9px] font-semibold uppercase tracking-[0.25em] text-[#a18451] sm:text-[10px]">
              Producteur · Exportateur · Tunisie
            </p>

            <span className="h-[5px] w-[5px] rotate-45 bg-[#b89555]" />
          </div>
        </div>

        {/* =====================================================
            ANIMATIONS
        ===================================================== */}

        <style jsx>{`
          @keyframes offerFadeUp {
            0% {
              opacity: 0;
              transform: translateY(45px);
              filter: blur(5px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes offerTitleReveal {
            0% {
              opacity: 0;
              transform: translateY(35px);
              letter-spacing: -0.08em;
            }

            100% {
              opacity: 1;
              transform: translateY(0);
              letter-spacing: -0.035em;
            }
          }

          @keyframes labelReveal {
            0% {
              opacity: 0;
              transform: translateY(-10px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .offer-label {
            opacity: 0;
            animation: labelReveal 0.8s ease-out 0.1s forwards;
          }

          .offer-title {
            opacity: 0;
            animation: offerTitleReveal 1s
              cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
          }

          .offer-description {
            opacity: 0;
            animation: offerFadeUp 0.9s
              cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards;
          }

          .offer-card {
            opacity: 0;
            animation: offerFadeUp 1s
              cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          @media (prefers-reduced-motion: reduce) {
            .offer-label,
            .offer-title,
            .offer-description,
            .offer-card {
              opacity: 1;
              animation: none;
            }
          }
        `}</style>
      </section>
    </main>
  );
}