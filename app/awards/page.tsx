import AwardsSection from "../components/AwardsSection";

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* =====================================================
          HERO — MÉDAILLES & DISTINCTIONS
      ===================================================== */}

      <section
        className="
          relative
          flex
          min-h-[520px]
          items-center
          justify-center
          overflow-hidden
          bg-[#032f22]
          px-6
          py-24
          text-center
          md:min-h-[600px]
          md:px-12
        "
      >
        {/* ===================================================
            BACKGROUND IMAGE
        =================================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-[url('/images/olivehero2.png')]
            bg-cover
            bg-center
            bg-no-repeat
            scale-[1.02]
          "
        />

        {/* ===================================================
            DARK GREEN OVERLAY
        =================================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-[#012d20]/65
          "
        />

        {/* ===================================================
            CINEMATIC GRADIENT
        =================================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#011d15]/35
            via-[#032f22]/20
            to-[#01271c]/80
          "
        />

        {/* ===================================================
            SOFT CENTER LIGHT
        =================================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[850px]
            max-w-[90vw]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.035]
            blur-[100px]
          "
        />

        {/* ===================================================
            GOLD TOP LINE
        =================================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-[75%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#d6b66f]/80
            to-transparent
          "
        />

        {/* ===================================================
            CONTENT
        =================================================== */}

        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          {/* BRAND */}

          <div className="flex items-center justify-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#d6b66f]/80"
            />

            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.45em]
                text-[#e0bd63]
                sm:text-[11px]
                md:text-[12px]
              "
            >
              AlMahdi Olive Oil
            </p>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#d6b66f]/80"
            />
          </div>

          {/* TITLE */}

          <h1
            className="
              mx-auto
              mt-8
              max-w-5xl
              text-[42px]
              font-light
              lowercase
              leading-[1.08]
              tracking-[0.08em]
              text-[#fffaf0]
              drop-shadow-[0_5px_30px_rgba(0,0,0,0.35)]
              sm:text-[50px]
              md:mt-10
              md:text-[64px]
              lg:text-[72px]
            "
          >
            médailles et distinctions
          </h1>

          {/* GOLD DECORATION */}

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#d6b66f]/60" />

            <span
              className="
                h-[5px]
                w-[5px]
                rotate-45
                bg-[#d6b66f]
              "
            />

            <span className="h-px w-12 bg-[#d6b66f]/60" />
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-7
              max-w-[680px]
              text-[14px]
              font-light
              leading-7
              tracking-[0.04em]
              text-[#fffaf0]/80
              md:text-[15px]
              md:leading-8
            "
          >
            Une sélection des récompenses et certifications obtenues autour de
            la qualité de nos produits.
          </p>
        </div>

        {/* ===================================================
            BOTTOM FADE
        =================================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-x-0
            bottom-0
            h-28
            bg-gradient-to-t
            from-[#032f22]/65
            to-transparent
          "
        />
      </section>

      {/* =====================================================
          AWARDS
      ===================================================== */}

      <AwardsSection />
    </main>
  );
}