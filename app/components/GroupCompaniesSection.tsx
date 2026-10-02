"use client";

import {
  ArrowUpRight,
  Building2,
  Factory,
  Mail,
  Phone,
  Snowflake,
  Wheat,
} from "lucide-react";

const companies = [
  {
    number: "01",
    eyebrow: "Al Mahdi — Société d'huile d'olive",
    name: "Société Almahdi Huile d'Olive",
    activity: "Huilerie & Export",
    icon: Factory,
    description:
      "Extraction, stockage, contrôle qualité et export d'huile d'olive vierge extra en vrac, biologique et conventionnelle. Marque en bouteille : Mediliva.",
    extra: null,
    phones: ["+216 58 868 000"],
    email: "huilerie.almehdi@gmail.com",
    signature: "Fournisseur de Sovena Group · +1 500 t par saison",
  },
  {
    number: "02",
    eyebrow: "VITALE — STPAC",
    name: "STPAC – Vitale",
    activity: "Nutrition animale",
    icon: Wheat,
    description:
      "STPAC – Société Tunisienne de Production des Aliments Composés est spécialisée dans la nutrition animale et la fabrication d'aliments composés. Sa marque VITALE développe des solutions adaptées aux élevages modernes, en associant qualité des matières premières et maîtrise des formulations.",
    extra:
      "Des conventions avec des centres de collecte de lait et de grands éleveurs ovins et bovins lui assurent une proximité privilégiée avec la filière.",
    phones: ["+216 51 203 000", "+216 50 914 918"],
    email: "stpacvital@gmail.com",
    signature: "« Nourrir la performance, construire l'avenir. »",
  },
  {
    number: "03",
    eyebrow: "Fruits Almahdi",
    name: "Fruits Almahdi",
    activity: "Entrepôts frigorifiques",
    icon: Snowflake,
    description:
      "De grandes infrastructures frigorifiques dédiées à la conservation et à la gestion des produits agricoles, en étroite collaboration avec les grands agriculteurs et producteurs de la région.",
    extra:
      "Une maison reconnue pour son professionnalisme, sa fiabilité et la confiance construite avec ses partenaires.",
    phones: ["+216 98 449 172"],
    email: "fruitsalmehdi@gmail.com",
    signature: "« La qualité du terroir, la force de la confiance. »",
  },
];

export default function GroupCompaniesSection() {
  return (
    <section
      id="societes-du-groupe"
      className="relative overflow-hidden bg-[#f7f2e7] px-5 py-24 text-[#06291b] sm:px-7 md:px-10 md:py-32 lg:px-16 xl:px-20"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[120px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#0c7148]/[0.07]
          blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[180px]
          bottom-[50px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#d7ad6a]/10
          blur-[150px]
        "
      />

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
            border-[#06291b]/15
            pb-14
            lg:grid-cols-[1fr_0.72fr]
            lg:items-end
            lg:gap-20
          "
        >
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b78646]" />

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-[#a9773e]
                  sm:text-[11px]
                "
              >
                AlMahdi AgriGroup
              </p>
            </div>

            <h2
              className="
                max-w-[900px]
                text-[42px]
                font-light
                leading-[0.98]
                tracking-[-0.045em]
                text-[#06291b]
                sm:text-[52px]
                md:text-[66px]
                lg:text-[76px]
              "
            >
              Un groupe agroalimentaire
              <span
                className="
                  mt-2
                  block
                  font-semibold
                  italic
                  text-[#a9773e]
                "
              >
                intégré.
              </span>
            </h2>
          </div>

          <div className="max-w-[560px] lg:justify-self-end">
            <p
              className="
                text-[15px]
                leading-7
                text-[#335c4c]
                md:text-base
                md:leading-8
              "
            >
              Trois sociétés basées à Sidi Bouzid, aux métiers
              complémentaires : l&apos;huilerie s&apos;appuie sur la
              solidité, la logistique et l&apos;ancrage agricole de tout un
              groupe familial.
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
                text-[#a9773e]
              "
            >
              <Building2 size={15} />
              3 sociétés · 1 groupe
            </div>
          </div>
        </div>

        {/* =====================================================
            COMPANIES
        ===================================================== */}

        <div className="mt-16 space-y-7">
          {companies.map((company, index) => {
            const Icon = company.icon;

            return (
              <article
                key={company.number}
                className="
                  group
                  relative
                  overflow-hidden
                  border
                  border-[#06291b]/10
                  bg-white/75
                  backdrop-blur-sm
                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:border-[#b78646]/35
                  hover:shadow-[0_28px_80px_rgba(6,41,27,0.10)]
                "
              >
                {/* HOVER BACKGROUND */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-y-0
                    left-0
                    w-0
                    bg-[linear-gradient(90deg,rgba(183,134,70,0.08),transparent)]
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    grid
                    grid-cols-1
                    lg:grid-cols-[0.28fr_0.85fr_1.4fr]
                  "
                >
                  {/* ===========================================
                      NUMBER + ICON
                  =========================================== */}

                  <div
                    className="
                      relative
                      flex
                      min-h-[220px]
                      flex-col
                      justify-between
                      border-b
                      border-[#06291b]/10
                      bg-[#073525]
                      p-7
                      text-white
                      sm:p-9
                      lg:min-h-full
                      lg:border-b-0
                      lg:border-r
                      lg:border-white/10
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-bold
                        tracking-[0.25em]
                        text-[#d7ad6a]
                      "
                    >
                      {company.number}
                    </span>

                    <div
                      className="
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

                        group-hover:rotate-6
                        group-hover:scale-110
                        group-hover:border-[#d7ad6a]
                        group-hover:bg-[#d7ad6a]
                        group-hover:text-[#073525]
                      "
                    >
                      <Icon size={29} strokeWidth={1.45} />
                    </div>

                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        -bottom-6
                        right-2
                        text-[120px]
                        font-black
                        leading-none
                        tracking-[-0.08em]
                        text-white/[0.025]
                      "
                    >
                      {company.number}
                    </span>
                  </div>

                  {/* ===========================================
                      COMPANY IDENTITY
                  =========================================== */}

                  <div
                    className="
                      border-b
                      border-[#06291b]/10
                      p-7
                      sm:p-9
                      lg:border-b-0
                      lg:border-r
                    "
                  >
                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.24em]
                        text-[#a9773e]
                      "
                    >
                      {company.eyebrow}
                    </p>

                    <h3
                      className="
                        mt-5
                        text-[30px]
                        font-semibold
                        leading-[1.05]
                        tracking-[-0.035em]
                        text-[#06291b]
                        md:text-[36px]
                      "
                    >
                      {company.name}
                    </h3>

                    <div className="mt-6 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#b78646]" />

                      <p
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#587064]
                        "
                      >
                        {company.activity}
                      </p>
                    </div>

                    {/* CONTACT */}

                    <div className="mt-10 space-y-5">
                      <div className="flex items-start gap-4">
                        <Phone
                          size={16}
                          className="mt-1 shrink-0 text-[#a9773e]"
                        />

                        <div>
                          <p
                            className="
                              mb-2
                              text-[8px]
                              font-bold
                              uppercase
                              tracking-[0.22em]
                              text-[#06291b]/40
                            "
                          >
                            Tél.
                          </p>

                          {company.phones.map((phone) => (
                            <a
                              key={phone}
                              href={`tel:${phone.replace(/\s/g, "")}`}
                              className="
                                block
                                text-[13px]
                                font-semibold
                                text-[#244c3e]
                                transition-colors
                                hover:text-[#a9773e]
                              "
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Mail
                          size={16}
                          className="mt-1 shrink-0 text-[#a9773e]"
                        />

                        <div className="min-w-0">
                          <p
                            className="
                              mb-2
                              text-[8px]
                              font-bold
                              uppercase
                              tracking-[0.22em]
                              text-[#06291b]/40
                            "
                          >
                            E-mail
                          </p>

                          <a
                            href={`mailto:${company.email}`}
                            className="
                              break-all
                              text-[13px]
                              font-semibold
                              text-[#244c3e]
                              transition-colors
                              hover:text-[#a9773e]
                            "
                          >
                            {company.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ===========================================
                      DESCRIPTION
                  =========================================== */}

                  <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                    <div>
                      <p
                        className="
                          max-w-[700px]
                          text-[15px]
                          leading-8
                          text-[#335c4c]
                        "
                      >
                        {company.description}
                      </p>

                      {company.extra && (
                        <p
                          className="
                            mt-5
                            max-w-[700px]
                            text-[14px]
                            leading-7
                            text-[#587064]
                          "
                        >
                          {company.extra}
                        </p>
                      )}
                    </div>

                    <div
                      className="
                        mt-10
                        flex
                        flex-col
                        gap-5
                        border-t
                        border-[#06291b]/10
                        pt-6
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                      "
                    >
                      <p
                        className="
                          max-w-[540px]
                          text-[12px]
                          font-semibold
                          italic
                          leading-6
                          text-[#a9773e]
                        "
                      >
                        {company.signature}
                      </p>

                      <a
                        href={`mailto:${company.email}`}
                        aria-label={`Contacter ${company.name}`}
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#06291b]/15
                          text-[#06291b]
                          transition-all
                          duration-300

                          hover:rotate-45
                          hover:border-[#a9773e]
                          hover:bg-[#a9773e]
                          hover:text-white
                        "
                      >
                        <ArrowUpRight size={17} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM SIGNATURE
        ===================================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-[#06291b]/15
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
              tracking-[0.25em]
              text-[#06291b]/40
            "
          >
            Agriculture · Transformation · Nutrition · Conservation · Export
          </p>

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#a9773e]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#a9773e]
              "
            >
              AlMahdi AgriGroup
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}