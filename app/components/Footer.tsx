"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Send,
  Sprout,
} from "lucide-react";

const company = {
  name: "AlMahdi AgriGroup",
  tagline: "GROUPE AGROALIMENTAIRE TUNISIEN · 5ÈME GÉNÉRATION",
  email: "contact@almahdiagrigroup.tn",
  phone: "+216 79 350 170",
  location: "Tunisie",
};

const navigationLinks = [
  { label: "Accueil", href: "/" },
  { label: "Notre Groupe", href: "/notre-groupe" },
  { label: "Nos Sociétés", href: "/nos-societes" },
  { label: "Qualité & Certifs", href: "/qualite" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

const agroLinks = [
  "Vitale · Nutrition animale",
  "Fruits AlMahdi · Stockage frigorifique",
  "AlMahdi Olive · Huile d’olive",
  "Export agroalimentaire",
  "Qualité & traçabilité",
];

const trustItems = [
  { icon: MapPin, text: "Ancrage tunisien" },
  { icon: Globe2, text: "Marchés locaux & internationaux" },
  { icon: Leaf, text: "Nutrition animale, froid & huile d’olive" },
  { icon: CheckCircle2, text: "Qualité, traçabilité & savoir-faire familial" },
];

const styles = {
  footer:
    "relative overflow-hidden bg-[#03140C] text-white border-t border-white/10",

  background:
    "absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(244,196,48,0.13),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(8,169,71,0.18),transparent_30%),linear-gradient(135deg,#03140C_0%,#052317_45%,#063D24_100%)]",

  pattern:
    "absolute inset-0 opacity-[0.07] bg-[linear-gradient(90deg,#F4C430_1px,transparent_1px),linear-gradient(#F4C430_1px,transparent_1px)] bg-[size:54px_54px]",

  topLine:
    "absolute left-0 top-0 h-[3px] w-full bg-[linear-gradient(90deg,#F4C430,#08A947,#F4C430)]",

  container:
    "relative z-10 w-full px-5 md:px-8 lg:px-12 xl:px-16 pt-14 pb-8",

  footerShell: "w-full max-w-none",

  topGrid:
    "grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-8 xl:gap-12 items-start",

  newsletterCard:
    "group relative justify-self-start w-full max-w-[420px] overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#08B64F_0%,#06913F_55%,#075B35_100%)] p-6 md:p-8 shadow-2xl shadow-black/25 animate-footer-rise",

  newsletterShine:
    "absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_30%_0%,rgba(255,255,255,0.22),transparent_34%)]",

  decorativeEnvelope: "absolute -right-10 -top-10 opacity-[0.08] text-white",

  newsletterIcon:
    "relative mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-white backdrop-blur",

  newsletterTitle:
    "relative text-3xl md:text-[34px] font-black tracking-[-0.04em] mb-3",

  newsletterText:
    "relative text-white/86 leading-relaxed text-sm md:text-base mb-6",

  form: "relative space-y-3",

  input:
    "h-12 w-full rounded-full border border-white/20 bg-white px-5 text-[#061B11] outline-none placeholder:text-[#7B857F] focus:ring-4 focus:ring-[#F4C430]/25",

  subscribeButton:
    "group/button flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#F4C430] px-5 font-black text-[#061B11] transition hover:bg-[#FFE27A] shadow-lg shadow-black/15",

  rightArea:
    "px-0 md:px-4 lg:px-6 xl:px-8 space-y-8 animate-footer-rise-delayed",

  contactGrid: "grid grid-cols-1 md:grid-cols-3 gap-4",

  contactCard:
    "rounded-[26px] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09] hover:border-[#F4C430]/25",

  contactIcon:
    "mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4C430] text-[#061B11] shadow-lg shadow-black/20",

  contactLabel: "text-sm font-black text-[#F4C430] mb-1",

  contactValue:
    "text-base md:text-lg font-bold text-white leading-snug break-words",

  generationCard:
    "rounded-[26px] bg-[linear-gradient(135deg,#F4C430,#FFD84A)] p-5 text-[#061B11] flex items-center justify-between gap-4 shadow-xl shadow-black/15",

  generationSmall:
    "text-xs font-black uppercase tracking-[0.22em] leading-[1.35]",

  generationNumber: "text-6xl font-black leading-none",

  divider: "h-px w-full bg-white/10",

  contentGrid:
    "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.2fr_0.85fr_0.9fr_1.15fr] gap-9 xl:gap-12",

  brandBlock: "max-w-sm",

  brand: "flex items-center gap-4 mb-5",

  brandIcon:
    "flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4C430] text-[#075B35] shadow-lg shadow-black/20",

  brandName: "text-2xl font-black tracking-[-0.03em] leading-tight",

  brandTagline:
    "mt-2 text-[10px] font-bold uppercase tracking-[0.22em] leading-[1.45] text-[#F4C430]",

  brandText: "text-white/70 leading-relaxed mb-6",

  socials: "flex items-center gap-3",

  social:
    "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-sm font-bold text-white/80 transition hover:bg-[#F4C430] hover:text-[#061B11] hover:-translate-y-1",

  columnTitle: "mb-5 text-lg font-black text-white",

  linkList: "space-y-3",

  footerLink:
    "group flex items-center gap-2 text-white/68 transition hover:text-[#F4C430]",

  linkArrow: "text-[#F4C430] transition group-hover:translate-x-1",

  trustList: "space-y-4",

  trustLine: "flex items-start gap-3 text-white/70 leading-relaxed",

  trustIcon: "mt-1 text-[#F4C430] shrink-0",

  bottom:
    "mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm text-white/50",

  bottomLinks: "flex flex-wrap items-center gap-3",

  bottomLink: "transition hover:text-[#F4C430]",
};

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.background} />
      <div className={styles.pattern} />
      <div className={styles.topLine} />

      <div className={styles.container}>
        <div className={styles.footerShell}>
          <div className={styles.topGrid}>
            <div className={styles.newsletterCard}>
              <div className={styles.newsletterShine} />
              <Mail size={150} className={styles.decorativeEnvelope} />

              <div className={styles.newsletterIcon}>
                <Mail size={24} />
              </div>

              <h2 className={styles.newsletterTitle}>Restez connecté</h2>

              <p className={styles.newsletterText}>
                Recevez nos nouveautés, nos actualités agricoles, nos événements
                et les informations importantes sur les produits du groupe.
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Adresse Mail*"
                  className={styles.input}
                />

                <button type="submit" className={styles.subscribeButton}>
                  S’abonner
                  <ArrowRight
                    size={18}
                    className="transition group-hover/button:translate-x-1"
                  />
                </button>
              </form>
            </div>

            <div className={styles.rightArea}>
              <div className={styles.contactGrid}>
                <a
                  href={`mailto:${company.email}`}
                  className={styles.contactCard}
                >
                  <div className={styles.contactIcon}>
                    <Send size={22} />
                  </div>

                  <p className={styles.contactLabel}>Demandes générales</p>
                  <p className={styles.contactValue}>{company.email}</p>
                </a>

                <a
                  href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                  className={styles.contactCard}
                >
                  <div className={styles.contactIcon}>
                    <Phone size={22} />
                  </div>

                  <p className={styles.contactLabel}>Appelez-nous</p>
                  <p className={styles.contactValue}>{company.phone}</p>
                </a>

                <div className={styles.generationCard}>
                  <p className={styles.generationSmall}>
                    Entreprise
                    <br />
                    familiale
                    <br />
                    5ème génération
                  </p>

                  <p className={styles.generationNumber}>5</p>
                </div>
              </div>

              <div className={styles.divider} />

              <div className={styles.contentGrid}>
                <div className={styles.brandBlock}>
                  <Link href="/" className={styles.brand}>
                    <div className={styles.brandIcon}>
                      <Sprout size={28} />
                    </div>

                    <div>
                      <h3 className={styles.brandName}>{company.name}</h3>
                      <p className={styles.brandTagline}>{company.tagline}</p>
                    </div>
                  </Link>

                  <p className={styles.brandText}>
                    Groupe familial agroalimentaire tunisien à la 5ème
                    génération. Nous développons trois pôles complémentaires :
                    nutrition animale, stockage frigorifique et export d’huile
                    d’olive.
                  </p>

                  <div className={styles.socials}>
                    <a href="#" className={styles.social} aria-label="LinkedIn">
                      in
                    </a>
                    <a href="#" className={styles.social} aria-label="Facebook">
                      f
                    </a>
                    <a
                      href="#"
                      className={styles.social}
                      aria-label="Instagram"
                    >
                      ig
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className={styles.columnTitle}>Navigation</h4>

                  <div className={styles.linkList}>
                    {navigationLinks.map((link, index) => (
                      <Link
                        key={`${link.label}-${link.href}-${index}`}
                        href={link.href}
                        className={styles.footerLink}
                      >
                        <span className={styles.linkArrow}>›</span>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={styles.columnTitle}>Agroalimentaire</h4>

                  <div className={styles.linkList}>
                    {agroLinks.map((item, index) => (
                      <div
                        key={`${item}-${index}`}
                        className={styles.footerLink}
                      >
                        <span className={styles.linkArrow}>›</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={styles.columnTitle}>Présence & confiance</h4>

                  <div className={styles.trustList}>
                    {trustItems.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={`${item.text}-${index}`}
                          className={styles.trustLine}
                        >
                          <Icon size={18} className={styles.trustIcon} />
                          <span>{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <p>© 2025 AlMahdi AgriGroup. Tous droits réservés.</p>

            <div className={styles.bottomLinks}>
              <Link href="/qualite" className={styles.bottomLink}>
                Qualité
              </Link>

              <span>·</span>

              <Link href="/export" className={styles.bottomLink}>
                Export
              </Link>

              <span>·</span>

              <Link href="/contact" className={styles.bottomLink}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}