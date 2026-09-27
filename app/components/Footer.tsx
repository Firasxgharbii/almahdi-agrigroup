
"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  Music2,
  Camera,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

// ==========================================
// COMPANY LINKS
// ==========================================

const companyLinks = [
  {
    label: "Notre histoire",
    href: "/notre-groupe",
  },
  {
    label: "Nouvelles",
    href: "/actualites",
  },
  {
    label: "Blog",
    href: "/actualites",
  },
  {
    label: "Stratégies",
    href: "/developpement-durable",
  },
  {
    label: "FAQ",
    href: "/contact",
  },
  {
    label: "Faites équipe avec nous",
    href: "/contact",
  },
  {
    label: "VRAC par AlMahdi",
    href: "/",
  },
];

// ==========================================
// SHOP LINKS
// ==========================================

const shopLinks = [
  {
    label: "Magasin",
    href: "/",
  },
  {
    label: "Vitale",
    href: "/nos-societes",
  },
  {
    label: "Fruits AlMahdi",
    href: "/nos-societes",
  },
  {
    label: "AlMahdi Olive",
    href: "/nos-societes",
  },
  {
    label: "Wholesale",
    href: "/contact",
  },
  {
    label: "Localisateur de magasin",
    href: "/contact",
  },
];

// ==========================================
// PAYMENT METHODS
// ==========================================

const paymentItems = [
  {
    name: "Visa",
    src: "/payments/visa.svg",
  },
  {
    name: "Mastercard",
    src: "/payments/mastercard.svg",
  },
  {
    name: "American Express",
    src: "/payments/amex.svg",
  },
  {
    name: "PayPal",
    src: "/payments/paypal.svg",
  },
  {
    name: "Stripe",
    src: "/payments/stripe.svg",
  },
  {
    name: "Apple Pay",
    src: "/payments/applepay.svg",
  },
  {
    name: "Google Pay",
    src: "/payments/gpay.svg",
  },
];

// ==========================================
// FOOTER COMPONENT
// ==========================================

export default function Footer() {
  return (
    <footer
      className="
        border-t-[6px]
        border-[#2b2b2b]
        bg-[#f4f4f4]
        text-[#333]
      "
    >

      <div
        className="
          w-full

          px-6
          pb-8
          pt-12

          sm:px-8

          md:px-16

          lg:px-24
        "
      >

        {/* ================================= */}
        {/* FOOTER MAIN GRID */}
        {/* ================================= */}

        <div
          className="
            grid
            grid-cols-1

            gap-x-12
            gap-y-12

            md:grid-cols-2

            lg:grid-cols-4
          "
        >

          {/* ============================== */}
          {/* COMPANY */}
          {/* ============================== */}

          <div>

            <h3
              className="
                mb-5

                text-2xl
                font-bold

                text-[#555]
              "
            >
              Company
            </h3>

            <div
              className="
                space-y-2.5

                text-[15px]
              "
            >

              {companyLinks.map((item) => (
                <Link
                  key={item.label}

                  href={item.href}

                  className="
                    group

                    flex
                    w-fit

                    items-center
                    gap-1

                    text-[#444]

                    transition-colors
                    duration-200

                    hover:text-black
                  "
                >

                  <span>
                    {item.label}
                  </span>

                  <ArrowUpRight
                    size={12}

                    className="
                      opacity-0

                      transition-all
                      duration-200

                      group-hover:
                      opacity-100

                      group-hover:
                      translate-x-0.5

                      group-hover:
                      -translate-y-0.5
                    "
                  />

                </Link>
              ))}

            </div>

          </div>

          {/* ============================== */}
          {/* SHOP */}
          {/* ============================== */}

          <div>

            <h3
              className="
                mb-5

                text-2xl
                font-bold

                text-[#555]
              "
            >
              Shop
            </h3>

            <div
              className="
                space-y-2.5

                text-[15px]
              "
            >

              {shopLinks.map((item) => (
                <Link
                  key={item.label}

                  href={item.href}

                  className="
                    group

                    flex
                    w-fit

                    items-center
                    gap-1

                    text-[#444]

                    transition-colors
                    duration-200

                    hover:text-black
                  "
                >

                  <span>
                    {item.label}
                  </span>

                  <ArrowUpRight
                    size={12}

                    className="
                      opacity-0

                      transition-all
                      duration-200

                      group-hover:
                      opacity-100

                      group-hover:
                      translate-x-0.5

                      group-hover:
                      -translate-y-0.5
                    "
                  />

                </Link>
              ))}

            </div>

          </div>

          {/* ============================== */}
          {/* SOCIAL MEDIA */}
          {/* ============================== */}

          <div>

            <h3
              className="
                mb-8

                text-2xl
                font-bold

                text-[#555]
              "
            >
              Connect with us
            </h3>

            <div
              className="
                flex

                items-center

                gap-7

                text-[#4a4a4a]
              "
            >

              {/* EMAIL */}

              <a
                href="mailto:contact@almahdiagrigroup.tn"

                aria-label="Email"

                className="
                  transition-all
                  duration-200

                  hover:-translate-y-1
                  hover:text-black
                "
              >

                <Mail size={18} />

              </a>

              {/* FACEBOOK */}

              <a
                href="#"

                aria-label="Facebook"

                className="
                  transition-all
                  duration-200

                  hover:-translate-y-1
                  hover:text-black
                "
              >

                <span
                  className="
                    text-[20px]
                    font-bold
                  "
                >
                  f
                </span>

              </a>

              {/* INSTAGRAM */}

              <a
                href="#"

                aria-label="Instagram"

                className="
                  transition-all
                  duration-200

                  hover:-translate-y-1
                  hover:text-black
                "
              >

                <Camera size={18} />

              </a>

              {/* TIKTOK */}

              <a
                href="#"

                aria-label="TikTok"

                className="
                  transition-all
                  duration-200

                  hover:-translate-y-1
                  hover:text-black
                "
              >

                <Music2 size={18} />

              </a>

            </div>

          </div>

          {/* ============================== */}
          {/* NEWSLETTER */}
          {/* ============================== */}

          <div>

            <h3
              className="
                mb-5

                text-2xl
                font-bold

                text-[#555]
              "
            >
              Bulletin d'information
            </h3>

            <form
              className="
                max-w-[340px]
              "

              onSubmit={(event) => {
                event.preventDefault();

                // Connect your newsletter API here.
              }}
            >

              <label
                htmlFor="footer-email"

                className="
                  sr-only
                "
              >
                Adresse courriel
              </label>

              <input
                id="footer-email"

                type="email"

                required

                placeholder="courriel@exemple.com"

                className="
                  h-10
                  w-full

                  border-0
                  border-b
                  border-[#555]

                  bg-transparent

                  text-[15px]

                  text-[#333]

                  outline-none

                  transition-colors

                  focus:border-black

                  placeholder:
                  text-[#777]
                "
              />

              <button
                type="submit"

                className="
                  group

                  mt-4

                  inline-flex

                  items-center
                  justify-center

                  gap-3

                  bg-[#2f2f2f]

                  px-7
                  py-3

                  text-sm
                  font-semibold

                  text-white

                  transition-all
                  duration-300

                  hover:bg-black
                "
              >

                S'inscrire

                <ArrowRight
                  size={15}

                  className="
                    transition-transform

                    group-hover:
                    translate-x-1
                  "
                />

              </button>

            </form>

          </div>

        </div>

        {/* ================================= */}
        {/* FOOTER BOTTOM */}
        {/* ================================= */}

        <div
          className="
            mt-20

            grid
            grid-cols-1

            gap-8

            border-t
            border-[#dedede]

            pt-7

            lg:grid-cols-[1fr_auto]

            lg:items-end
          "
        >

          {/* ============================== */}
          {/* COPYRIGHT */}
          {/* ============================== */}

          <div
            className="
              flex

              flex-wrap

              items-center

              gap-x-5
              gap-y-2

              text-[13px]

              text-[#555]
            "
          >

            <p>
              © 2026, ALMAHDI AGRIGROUP
            </p>

            <p>
              Made by{" "}

              <span
                className="
                  font-semibold

                  text-[#333]
                "
              >
                OffClassic Studio Inc.
              </span>
            </p>

          </div>

          {/* ============================== */}
          {/* PAYMENT METHODS */}
          {/* ============================== */}

          <div
            className="
              flex
              flex-col

              gap-3

              lg:items-end
            "
          >

            <p
              className="
                text-[10px]

                font-semibold

                uppercase

                tracking-[0.15em]

                text-[#777]
              "
            >
              Paiements sécurisés
            </p>

            <div
              className="
                flex

                flex-wrap

                items-center

                gap-2

                lg:justify-end
              "
            >

              {paymentItems.map((item) => (

                <div
                  key={item.name}

                  title={item.name}

                  className="
                    relative

                    flex

                    h-[35px]
                    w-[58px]

                    items-center
                    justify-center

                    overflow-hidden

                    rounded-[5px]

                    border
                    border-[#dedede]

                    bg-white

                    px-1.5

                    shadow-sm

                    transition-all
                    duration-300

                    hover:-translate-y-0.5

                    hover:border-[#aaa]

                    hover:shadow-md
                  "
                >

                  <Image
                    src={item.src}

                    alt={item.name}

                    width={50}

                    height={26}

                    unoptimized

                    className="
                      h-[25px]

                      w-full

                      object-contain
                    "
                  />

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}