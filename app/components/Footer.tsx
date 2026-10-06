"use client";

import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Mail,
  MapPin,
  Music2,
} from "lucide-react";

// =====================================================
// LINKS
// =====================================================

const huilerieLinks = [
  {
    label: "Notre histoire",
    href: "/notre-groupe",
  },
  {
    label: "Savoir-faire & qualité",
    href: "/qualite",
  },
  {
    label: "Certifications",
    href: "/qualite",
  },
];

const exportLinks = [
  {
    label: "Offre vrac",
    href: "/export",
  },
  {
    label: "Palmarès",
    href: "/awards",
  },
  {
    label: "Demander un devis",
    href: "/contact",
  },
];

const groupLinks = [
  {
    label: "AlMahdi AgriGroup",
    href: "/le-groupe",
  },
  {
    label: "Vitale",
    href: "/vitale",
  },
  {
    label: "Bio & USDA Organic",
    href: "/qualite",
  },
];

// =====================================================
// FOOTER LINK
// =====================================================

function FooterLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="
        group
        flex
        w-full
        max-w-[245px]
        items-center
        justify-between
        gap-5
        border-b
        border-[#d6b66f]/15
        py-3
        text-[14px]
        font-light
        tracking-[-0.01em]
        text-[#f8f4ea]/80
        transition-all
        duration-300
        hover:border-[#d6b66f]/50
        hover:text-white
      "
    >
      <span>{label}</span>

      <ArrowRight
        size={14}
        strokeWidth={1.4}
        className="
          shrink-0
          text-[#e0bd63]
          transition-transform
          duration-300
          group-hover:translate-x-1.5
        "
      />
    </Link>
  );
}

// =====================================================
// SOCIAL BUTTON
// =====================================================

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        h-[44px]
        w-[44px]
        items-center
        justify-center
        rounded-full
        border
        border-[#d6b66f]/50
        bg-[#032f22]/30
        text-[#f8f4e9]/90
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#e0bd63]
        hover:bg-[#d6b66f]
        hover:text-[#032f22]
        hover:shadow-[0_10px_35px_rgba(214,182,111,0.18)]
      "
    >
      {children}
    </a>
  );
}

// =====================================================
// COLUMN TITLE
// =====================================================

function ColumnTitle({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mb-5">
      <p
        className="
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.3em]
          text-[#e0bd63]
        "
      >
        {children}
      </p>

      <div
        className="
          mt-4
          h-[2px]
          w-10
          rounded-full
          bg-[#d6b66f]
        "
      />
    </div>
  );
}

// =====================================================
// CONTACT ITEM
// =====================================================

function ContactItem({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-0 items-center gap-4">
      <div
        className="
          flex
          h-[48px]
          w-[48px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#d6b66f]/55
          bg-[#032f22]/30
          text-[#e0bd63]
          backdrop-blur-sm
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.26em]
            text-[#e0bd63]
          "
        >
          {title}
        </p>

        <div
          className="
            mt-1.5
            text-[13px]
            font-light
            leading-6
            text-[#f8f4ea]/80
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// =====================================================
// FOOTER
// =====================================================

export default function Footer() {
  return (
    <footer
      className="
        relative
        isolate
        overflow-hidden
        border-t
        border-[#d6b66f]/45
        bg-[#023424]
        text-white
      "
    >
      {/* =====================================================
          BOTANICAL BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
        "
      >
        <Image
          src="/images/Cadre botanique aux branches d’olivier.png"
          alt=""
          fill
          sizes="100vw"
          className="
            object-cover
            object-center
            opacity-[0.58]
          "
        />
      </div>

      {/* =====================================================
          DARK OVERLAY
          Keeps the center clean and readable
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[#023424]/50
        "
      />

      {/* CENTER READING AREA */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-1/2
          z-[2]
          w-[72%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#023424]/60
          to-transparent
        "
      />

      {/* =====================================================
          LIGHT EFFECTS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[200px]
          bottom-[-220px]
          z-[2]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#d6b66f]/[0.07]
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[-220px]
          z-[2]
          h-[480px]
          w-[480px]
          rounded-full
          bg-[#d6b66f]/[0.06]
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-200px]
          z-[2]
          h-[400px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-[#0b6245]/25
          blur-[140px]
        "
      />

      {/* TOP GOLD LINE */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-0
          right-0
          top-[38px]
          z-[3]
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#d6b66f]/55
          to-transparent
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1320px]
          px-6
          pb-8
          pt-20
          sm:px-8
          md:px-10
          lg:px-12
          lg:pb-8
          lg:pt-20
        "
      >
        {/* ===================================================
            MAIN GRID
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-y-12
            md:grid-cols-2
            md:gap-x-14
            lg:grid-cols-[1.4fr_0.9fr_0.9fr_1.05fr]
            lg:items-start
            lg:gap-x-16
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div className="flex flex-col items-start">
            <Link
              href="/"
              aria-label="AlMahdi Olive Oil - Accueil"
              className="
                inline-flex
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              <div
                className="
                  relative
                  h-[110px]
                  w-[190px]
                "
              >
                <Image
                  src="/logoalmahdi.png"
                  alt="AlMahdi Olive Oil"
                  fill
                  priority
                  sizes="190px"
                  className="
                    object-contain
                    object-left
                    drop-shadow-[0_4px_20px_rgba(214,182,111,0.08)]
                  "
                />
              </div>
            </Link>

            <p
              className="
                mt-5
                max-w-[350px]
                text-[14px]
                font-light
                leading-[1.85]
                tracking-[-0.01em]
                text-[#f8f4ea]/80
                md:text-[15px]
              "
            >
              Huile d&apos;olive extra vierge en vrac, bio et
              conventionnelle. Producteur et exportateur à Sidi Bouzid,
              Tunisie.
            </p>

            {/* SOCIAL */}

            <div className="mt-7 flex items-center gap-3">
              <SocialButton href="#" label="Facebook">
                <span className="text-[18px] font-medium leading-none">
                  f
                </span>
              </SocialButton>

              <SocialButton href="#" label="LinkedIn">
                <span className="text-[12px] font-semibold leading-none">
                  in
                </span>
              </SocialButton>

              <SocialButton href="#" label="Instagram">
                <span className="text-[18px] font-medium leading-none">
                  ◎
                </span>
              </SocialButton>

              <SocialButton href="#" label="TikTok">
                <Music2 size={17} strokeWidth={1.5} />
              </SocialButton>
            </div>
          </div>

          {/* =================================================
              L'HUILERIE
          ================================================= */}

          <div className="flex flex-col items-start lg:pt-3">
            <ColumnTitle>L&apos;huilerie</ColumnTitle>

            <nav
              aria-label="Liens de l'huilerie"
              className="flex w-full flex-col items-start"
            >
              {huilerieLinks.map((item) => (
                <FooterLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </nav>
          </div>

          {/* =================================================
              EXPORT
          ================================================= */}

          <div className="flex flex-col items-start lg:pt-3">
            <ColumnTitle>Export</ColumnTitle>

            <nav
              aria-label="Liens export"
              className="flex w-full flex-col items-start"
            >
              {exportLinks.map((item) => (
                <FooterLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </nav>
          </div>

          {/* =================================================
              LE GROUPE
          ================================================= */}

          <div className="flex flex-col items-start lg:pt-3">
            <ColumnTitle>Le groupe</ColumnTitle>

            <nav
              aria-label="Liens du groupe"
              className="flex w-full flex-col items-start"
            >
              {groupLinks.map((item) => (
                <FooterLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}

              <Link
                href="/contact"
                className="
                  group
                  mt-4
                  flex
                  w-full
                  max-w-[245px]
                  items-center
                  justify-between
                  gap-4
                  text-[14px]
                  font-light
                  text-[#f8f4ea]/80
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                <span className="flex items-center gap-2.5">
                  <MapPin
                    size={17}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#e0bd63]"
                  />

                  <span>Nous trouver sur Google</span>
                </span>

                <ArrowRight
                  size={14}
                  strokeWidth={1.4}
                  className="
                    shrink-0
                    text-[#e0bd63]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1.5
                  "
                />
              </Link>
            </nav>
          </div>
        </div>

        {/* ===================================================
            PREMIUM DIVIDER
        =================================================== */}

        <div
          className="
            mt-14
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#d6b66f]/55
            to-transparent
            lg:mt-16
          "
        />

        {/* ===================================================
            CONTACT + COPYRIGHT
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-8
            py-6
            lg:grid-cols-[1.15fr_1.15fr_1fr]
            lg:items-center
            lg:gap-12
          "
        >
          {/* ADDRESS */}

          <ContactItem
            title="Notre adresse"
            icon={
              <MapPin
                size={19}
                strokeWidth={1.5}
              />
            }
          >
            Sidi Bouzid Ouest · El Hichria · Tunisie
          </ContactItem>

          {/* EMAIL */}

          <ContactItem
            title="Contact export"
            icon={
              <Mail
                size={19}
                strokeWidth={1.5}
              />
            }
          >
            <a
              href="mailto:export.almahdicompany@gmail.com"
              className="
                break-all
                transition-colors
                duration-300
                hover:text-[#e0bd63]
              "
            >
              export.almahdicompany@gmail.com
            </a>
          </ContactItem>

          {/* COPYRIGHT + NAV */}

          <div
            className="
              flex
              flex-col
              gap-4
              lg:items-end
            "
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-2
                text-[10px]
                uppercase
                tracking-[0.06em]
                text-[#f8f4ea]/50
                lg:justify-end
              "
            >
              <span>© 2026 AlMahdi Olive Oil</span>

              <span
                aria-hidden="true"
                className="h-3 w-px bg-[#d6b66f]/30"
              />

              <span>
                Made by{" "}
                <span
                  className="
                    normal-case
                    tracking-normal
                    text-[#f8f4ea]/70
                  "
                >
                  OffClassic Studio Inc.
                </span>
              </span>
            </div>

            <nav
              aria-label="Navigation secondaire"
              className="
                flex
                flex-wrap
                items-center
                gap-4
                text-[11px]
                font-light
                text-[#f8f4ea]/65
                lg:justify-end
              "
            >
              <Link
                href="/contact"
                className="
                  transition-colors
                  duration-300
                  hover:text-[#e0bd63]
                "
              >
                Contact
              </Link>

              <span className="h-1 w-1 rounded-full bg-[#d6b66f]" />

              <Link
                href="/#faq"
                className="
                  transition-colors
                  duration-300
                  hover:text-[#e0bd63]
                "
              >
                FAQ
              </Link>

              <span className="h-1 w-1 rounded-full bg-[#d6b66f]" />

              <Link
                href="/qualite"
                className="
                  transition-colors
                  duration-300
                  hover:text-[#e0bd63]
                "
              >
                Qualité
              </Link>
            </nav>
          </div>
        </div>

        {/* BOTTOM LINE */}

        <div
          className="
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          MOBILE BOTANICAL FADE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[3]
          h-24
          bg-gradient-to-t
          from-[#023424]/40
          to-transparent
        "
      />
    </footer>
  );
} 