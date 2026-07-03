"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Music2, Camera } from "lucide-react";

const companyLinks = [
  { label: "Notre histoire", href: "/notre-groupe" },
  { label: "Nouvelles", href: "/actualites" },
  { label: "Blog", href: "/actualites" },
  { label: "Stratégies", href: "/developpement-durable" },
  { label: "FAQ", href: "/contact" },
  { label: "Faites équipe avec nous", href: "/contact" },
  { label: "VRAC par AlMahdi", href: "/" },
];

const shopLinks = [
  { label: "Magasin", href: "/" },
  { label: "Vitale", href: "/nos-societes" },
  { label: "Fruits AlMahdi", href: "/nos-societes" },
  { label: "AlMahdi Olive", href: "/nos-societes" },
  { label: "Wholesale", href: "/contact" },
  { label: "Localisateur de magasin", href: "/contact" },
];

const paymentItems = [
  { name: "American Express", src: "/payments/amex.svg" },
  { name: "Apple Pay", src: "/payments/applepay.svg" },
  { name: "Diners Club", src: "/payments/diners.svg" },
  { name: "Discover", src: "/payments/discover.svg" },
  { name: "Google Pay", src: "/payments/gpay.svg" },
  { name: "Mastercard", src: "/payments/mastercard.svg" },
  { name: "Shop Pay", src: "/payments/shop-pay.svg" },
  { name: "Visa", src: "/payments/visa.svg" },
];

export default function Footer() {
  return (
    <footer className="border-t-[6px] border-[#2b2b2b] bg-[#f4f4f4] text-[#333]">
      <div className="w-full px-8 pb-8 pt-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-5 text-2xl font-bold text-[#555]">Company</h3>

            <div className="space-y-2.5 text-[15px]">
              {companyLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-2xl font-bold text-[#555]">Shop</h3>

            <div className="space-y-2.5 text-[15px]">
              {shopLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-bold text-[#555]">
              Connect with us
            </h3>

            <div className="flex items-center gap-9 text-[#4a4a4a]">
              <a href="mailto:contact@almahdiagrigroup.tn" aria-label="Email">
                <Mail size={17} />
              </a>

              <a href="#" aria-label="Facebook">
                <span className="text-[17px] font-bold">f</span>
              </a>

              <a href="#" aria-label="Instagram">
                <Camera size={17} />
              </a>

              <a href="#" aria-label="TikTok">
                <Music2 size={17} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-2xl font-bold text-[#555]">
              Bulletin d'information
            </h3>

            <form className="max-w-[340px]">
              <input
                type="email"
                placeholder="courriel@exemple.com"
                className="h-10 w-full border-0 border-b border-[#555] bg-transparent text-[15px] outline-none placeholder:text-[#555]"
              />

              <button
                type="submit"
                className="mt-4 bg-[#2f2f2f] px-7 py-3 text-sm font-semibold text-white hover:bg-black"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="flex flex-wrap items-center gap-5 text-sm">
            <p>© 2026, ALMAHDI AGRIGROUP</p>
            <p>OffClassic Studio Inc.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 lg:justify-end">
            {paymentItems.map((item) => (
              <span
                key={item.name}
                className="relative flex h-8 w-[58px] items-center justify-center overflow-hidden rounded border border-[#d0d0d0] bg-white"
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  width={48}
                  height={24}
                  className="max-h-6 w-auto object-contain"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}