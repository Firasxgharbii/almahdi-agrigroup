import Link from "next/link";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import {
  ArrowRight,
  BadgeCheck,
  Factory,
  Globe2,
  Leaf,
  ShieldCheck,
  Sparkles,
  Sprout,
  Tractor,
} from "lucide-react";

/* =======================
   Fonts
======================= */

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

/* =======================
   Data
======================= */

const stats = [
  {
    value: "5ème",
    label: "Génération",
    text: "Héritage familial tunisien",
  },
  {
    value: "3",
    label: "Sociétés",
    text: "Vitale · Fruits AlMahdi · AlMahdi Olive",
  },
  {
    value: "+1000T",
    label: "Stockage froid",
    text: "Fruits & légumes",
  },
  {
    value: "+1200T",
    label: "Huile d’olive",
    text: "Stockage & export",
  },
];

const values = [
  {
    icon: Tractor,
    title: "Production agricole",
    text: "Une base solide autour de la terre, des produits tunisiens et du savoir-faire transmis depuis plusieurs générations.",
  },
  {
    icon: Factory,
    title: "Transformation",
    text: "Une vision moderne pour structurer, transformer et valoriser les produits agroalimentaires avec une image professionnelle.",
  },
  {
    icon: BadgeCheck,
    title: "Qualité & traçabilité",
    text: "Une communication claire autour de la qualité, de la confiance, de la certification et de l’ouverture vers l’export.",
  },
];

const mosaicImages = [
  {
    title: "Olive",
    label: "Export premium",
    className: "lg:row-span-2 min-h-[360px]",
  },
  {
    title: "Production",
    label: "Savoir-faire",
    className: "min-h-[175px]",
  },
  {
    title: "Qualité",
    label: "Contrôle",
    className: "min-h-[175px]",
  },
  {
    title: "Terre",
    label: "Tunisie",
    className: "min-h-[175px]",
  },
];

/* =======================
   Styles
======================= */

const styles = {
  page: "min-h-screen bg-[#F8F3E3] text-[#061B11]",

  hero:
    "relative isolate min-h-[calc(100vh-120px)] overflow-hidden bg-[#050805] text-white",

  heroBackground:
    "absolute inset-0 bg-[url('/images/olivehero.png')] bg-cover bg-center opacity-50",

  heroOverlay:
    "absolute inset-0 bg-[linear-gradient(90deg,rgba(3,20,12,0.94)_0%,rgba(3,20,12,0.80)_38%,rgba(3,20,12,0.58)_62%,rgba(3,20,12,0.94)_100%)]",

  heroGoldGlow:
    "absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#F4C430]/20 blur-3xl",

  heroGreenGlow:
    "absolute -right-32 bottom-10 h-[520px] w-[520px] rounded-full bg-[#08713F]/35 blur-3xl",

  heroPattern:
    "absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#F4C430_1px,transparent_1px),linear-gradient(#F4C430_1px,transparent_1px)] bg-[size:54px_54px]",

  heroContent:
    "relative z-10 mx-auto grid min-h-[calc(100vh-120px)] w-full max-w-[1500px] grid-cols-1 items-center gap-12 px-5 py-14 md:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-14 xl:px-20",

  heroLeft:
    "max-w-2xl space-y-8 animate-fade-up",

  eyebrow:
    "inline-flex items-center border-l-4 border-[#F4C430] pl-4 text-sm font-black uppercase tracking-[0.28em] text-[#F4C430]",

  title:
    "text-5xl font-black leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl xl:text-8xl",

  titleAccent:
    "block bg-[linear-gradient(110deg,#FFFFFF_0%,#F4C430_42%,#08B64F_100%)] bg-clip-text text-transparent",

  description:
    "max-w-xl text-lg leading-8 text-white/74 md:text-xl",

  buttons:
    "flex flex-col gap-4 pt-2 sm:flex-row",

  primaryButton:
    "group inline-flex items-center justify-center gap-3 bg-[#F4C430] px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#061B11] shadow-xl shadow-black/30 transition hover:-translate-y-1 hover:bg-[#FFE27A]",

  secondaryButton:
    "inline-flex items-center justify-center gap-3 border border-white/25 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-white backdrop-blur transition hover:border-[#F4C430] hover:text-[#F4C430]",

  trustLine:
    "flex flex-wrap items-center gap-3 pt-1 text-sm text-white/70",

  trustItem:
    "inline-flex items-center gap-2 border border-white/10 bg-white/[0.06] px-4 py-2 font-semibold backdrop-blur",

  heroRight:
    "relative hidden lg:block animate-slide-in-right",

  mosaic:
    "grid grid-cols-3 gap-4",

  imageCard:
    "group relative overflow-hidden border border-white/10 bg-white/10 shadow-2xl shadow-black/30",

  image:
    "absolute inset-0 bg-[url('/images/olivehero.png')] bg-cover bg-center transition duration-700 group-hover:scale-110",

  imageOverlay:
    "absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.58))]",

  imageContent:
    "absolute bottom-0 left-0 right-0 p-5",

  imageTitle:
    "text-xl font-black text-white",

  imageLabel:
    "mt-1 text-sm font-semibold text-[#F4C430]",

  yellowCard:
    "relative flex min-h-[175px] flex-col justify-between overflow-hidden bg-[#F4C430] p-6 text-[#061B11] shadow-2xl shadow-black/30",

  yellowCardIcon:
    "flex h-12 w-12 items-center justify-center rounded-full bg-[#061B11] text-[#F4C430]",

  yellowCardTitle:
    "text-sm font-black uppercase leading-6 tracking-[0.18em]",

  heroBottomStats:
    "relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-12 md:px-10 lg:px-14 xl:px-20",

  statsGrid:
    "grid grid-cols-1 gap-4 rounded-[34px] border border-white/10 bg-white/[0.08] p-4 backdrop-blur-xl md:grid-cols-4",

  statCard:
    "rounded-[26px] border border-white/10 bg-[#061B11]/45 p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]",

  statNumber:
    "text-3xl font-black text-[#F4C430]",

  statLabel:
    "mt-2 font-black text-white",

  statText:
    "mt-1 text-sm text-white/58",

  section:
    "bg-[#F8F3E3] px-5 py-20 md:px-10 lg:px-14 xl:px-20",

  sectionInner:
    "mx-auto w-full max-w-[1500px]",

  sectionHeader:
    "mb-12 max-w-3xl",

  sectionEyebrow:
    "mb-4 inline-flex items-center gap-2 rounded-full border border-[#075B35]/15 bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-[#075B35]",

  sectionTitle:
    "text-4xl font-black leading-tight tracking-[-0.04em] text-[#061B11] md:text-6xl",

  sectionText:
    "mt-5 text-lg leading-8 text-[#47584D]",

  cardsGrid:
    "grid grid-cols-1 gap-6 md:grid-cols-3",

  card:
    "group rounded-[34px] border border-[#075B35]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#075B35]/10",

  cardIcon:
    "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#075B35]/10 text-[#075B35] transition group-hover:bg-[#F4C430] group-hover:text-[#061B11]",

  cardTitle:
    "text-2xl font-black text-[#061B11]",

  cardText:
    "mt-4 leading-7 text-[#47584D]",

  banner:
    "relative mt-20 overflow-hidden rounded-[42px] bg-[#061B11] p-8 text-white shadow-2xl shadow-[#061B11]/20 md:p-12 lg:p-14",

  bannerPattern:
    "absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#F4C430_1px,transparent_1px),linear-gradient(#F4C430_1px,transparent_1px)] bg-[size:48px_48px]",

  bannerGlow:
    "absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#F4C430]/20 blur-3xl",

  bannerContent:
    "relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end",

  bannerTitle:
    "max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-6xl",

  bannerText:
    "mt-6 max-w-2xl text-lg leading-8 text-white/72",

  bannerButtonWrapper:
    "flex lg:justify-end",

  bannerButton:
    "group inline-flex items-center justify-center gap-3 bg-[#F4C430] px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#061B11] transition hover:bg-[#FFE27A]",
};

/* =======================
   Component
======================= */

export default function Home() {
  return (
    <main className={`${styles.page} ${bodyFont.className}`}>
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroGoldGlow} />
        <div className={styles.heroGreenGlow} />
        <div className={styles.heroPattern} />

        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <p className={styles.eyebrow}>Famille AlMahdi · Tunisie</p>

            <h1 className={`${styles.title} ${displayFont.className}`}>
              L’Agroalimentaire Tunisien
              <span className={styles.titleAccent}>à son Excellence</span>
            </h1>

            <p className={styles.description}>
              Groupe familial ancré dans cinq générations de savoir-faire
              agricole. Trois sociétés complémentaires, une même ambition : la
              qualité au service de la Tunisie et des marchés internationaux.
            </p>

            <div className={styles.buttons}>
              <Link href="/notre-groupe" className={styles.primaryButton}>
                Découvrir le groupe
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link href="/nos-societes" className={styles.secondaryButton}>
                Nos sociétés
              </Link>
            </div>

            <div className={styles.trustLine}>
              <div className={styles.trustItem}>
                <ShieldCheck size={16} className="text-[#F4C430]" />
                Qualité
              </div>

              <div className={styles.trustItem}>
                <Sparkles size={16} className="text-[#F4C430]" />
                5ème génération
              </div>

              <div className={styles.trustItem}>
                <Globe2 size={16} className="text-[#F4C430]" />
                Export
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.mosaic}>
              <div className={`${styles.imageCard} ${mosaicImages[0].className}`}>
                <div className={styles.image} />
                <div className={styles.imageOverlay} />
                <div className={styles.imageContent}>
                  <p className={styles.imageTitle}>AlMahdi Olive</p>
                  <p className={styles.imageLabel}>Export premium</p>
                </div>
              </div>

              <div className={`${styles.imageCard} ${mosaicImages[1].className}`}>
                <div className={styles.image} />
                <div className={styles.imageOverlay} />
                <div className={styles.imageContent}>
                  <p className={styles.imageTitle}>Vitale</p>
                  <p className={styles.imageLabel}>Nutrition animale</p>
                </div>
              </div>

              <div className={styles.yellowCard}>
                <div className={styles.yellowCardIcon}>
                  <Leaf size={24} />
                </div>

                <p className={styles.yellowCardTitle}>
                  Groupe agroalimentaire tunisien
                </p>
              </div>

              <div className={`${styles.imageCard} ${mosaicImages[2].className}`}>
                <div className={styles.image} />
                <div className={styles.imageOverlay} />
                <div className={styles.imageContent}>
                  <p className={styles.imageTitle}>Fruits AlMahdi</p>
                  <p className={styles.imageLabel}>Stockage frigorifique</p>
                </div>
              </div>

              <div className={`${styles.imageCard} ${mosaicImages[3].className}`}>
                <div className={styles.image} />
                <div className={styles.imageOverlay} />
                <div className={styles.imageContent}>
                  <p className={styles.imageTitle}>Qualité</p>
                  <p className={styles.imageLabel}>Traçabilité</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroBottomStats}>
          <div className={styles.statsGrid}>
            {stats.map((item) => (
              <div key={item.value} className={styles.statCard}>
                <p className={styles.statNumber}>{item.value}</p>
                <p className={styles.statLabel}>{item.label}</p>
                <p className={styles.statText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>
              <Sprout size={16} />
              Nos piliers
            </p>

            <h2 className={styles.sectionTitle}>
              Un groupe pensé pour l’avenir agroalimentaire
            </h2>

            <p className={styles.sectionText}>
              AlMahdi AgriGroup présente une image sérieuse, familiale, moderne
              et capable de développer plusieurs sociétés, produits et marchés.
            </p>
          </div>

          <div className={styles.cardsGrid}>
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className={styles.card}>
                  <div className={styles.cardIcon}>
                    <Icon size={28} />
                  </div>

                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className={styles.banner}>
            <div className={styles.bannerPattern} />
            <div className={styles.bannerGlow} />

            <div className={styles.bannerContent}>
              <div>
                <h2 className={styles.bannerTitle}>
                  Trois sociétés, une même ambition.
                </h2>

                <p className={styles.bannerText}>
                  Nutrition animale, stockage frigorifique et export d’huile
                  d’olive : AlMahdi AgriGroup construit une présence forte pour
                  inspirer confiance et valoriser le savoir-faire tunisien.
                </p>
              </div>

              <div className={styles.bannerButtonWrapper}>
                <Link href="/contact" className={styles.bannerButton}>
                  Parler avec nous
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}