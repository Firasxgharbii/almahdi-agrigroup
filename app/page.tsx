import Link from "next/link";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import SignatureGallerySection from "./components/SignatureGallerySection";
import AwardsSection from "./components/AwardsSection";
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

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const heroPhotos = [
  "/images/olivehero.png",
  "/images/olivehero2.png",
  "/images/olivehero3.jpg",
  "/images/olivehero4.jpg",
  "/images/olivehero5.jpg",
  "/images/olivehero6.jpg",
  "/images/olivehero7.jpg",
  "/images/olivehero8.jpg",
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

const styles = {
  page: "min-h-screen bg-[#F8F3E3] text-[#061B11]",

  hero:
    "relative isolate min-h-[calc(100vh-120px)] overflow-hidden bg-[#050805] text-white",

  heroBackground: "absolute inset-0",

  heroPhoto:
    "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 animate-hero-slideshow",

  heroOverlay:
    "absolute inset-0 bg-[linear-gradient(90deg,rgba(3,20,12,0.45)_0%,rgba(3,20,12,0.32)_42%,rgba(3,20,12,0.10)_72%,rgba(3,20,12,0.25)_100%)]",

  heroPattern:
    "absolute inset-0 opacity-[0.015] bg-[linear-gradient(90deg,#F4C430_1px,transparent_1px),linear-gradient(#F4C430_1px,transparent_1px)] bg-[size:54px_54px]",

  heroContent:
    "relative z-10 grid min-h-[calc(100vh-120px)] w-full grid-cols-1 items-center gap-10 px-6 py-16 md:px-12 lg:grid-cols-[0.78fr_1.22fr] lg:px-24 xl:px-32",

  heroLeft: "max-w-[620px] space-y-8 text-left",

  eyebrow:
    "inline-flex items-center border-l-4 border-[#F4C430] pl-4 text-sm font-black uppercase tracking-[0.28em] text-[#F4C430]",

  title:
    "max-w-[720px] text-5xl font-black leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl xl:text-8xl drop-shadow-xl",

  titleAccent:
    "block bg-[linear-gradient(110deg,#FFF6BF_0%,#F4C430_45%,#08B64F_100%)] bg-clip-text text-transparent",

  description:
    "max-w-[600px] text-lg leading-8 text-white/90 md:text-xl drop-shadow",

  buttons: "flex flex-col gap-4 pt-2 sm:flex-row",

  primaryButton:
    "inline-flex items-center justify-center gap-3 bg-[#F4C430] px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#061B11] transition hover:bg-[#FFE27A]",

  secondaryButton:
    "inline-flex items-center justify-center gap-3 border border-white/40 bg-black/10 px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#F4C430] hover:text-[#F4C430]",

  trustLine: "flex flex-wrap items-center gap-3 pt-1 text-sm text-white/85",

  trustItem:
    "inline-flex items-center gap-2 border border-white/20 bg-black/15 px-4 py-2 font-semibold backdrop-blur",

  heroRight:
    "relative hidden h-full min-h-[calc(100vh-120px)] lg:flex lg:items-end lg:justify-end",

  mosaic:
    "mb-12 translate-x-16 grid max-w-[560px] grid-cols-3 gap-4 xl:translate-x-24",

  imageCard:
    "group relative overflow-hidden border border-white/10 bg-white shadow-2xl shadow-black/30",

  imageOlive:
    "absolute inset-0 bg-white bg-[url('/almahdi.png')] bg-contain bg-center bg-no-repeat transition duration-700 group-hover:scale-105",

  imageFruits:
    "absolute inset-0 bg-white bg-[url('/logofruits.png')] bg-contain bg-center bg-no-repeat transition duration-700 group-hover:scale-105",

  imageDefault:
    "absolute inset-0 bg-white bg-[url('/logovitale.png')] bg-contain bg-center bg-no-repeat transition duration-700 group-hover:scale-105",

  imageOverlay:
    "absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.22))]",

  imageContent:
    "absolute bottom-0 left-0 right-0 bg-black/55 p-4 backdrop-blur-sm",

  imageTitle:
    "text-lg font-black leading-tight text-white drop-shadow-lg",

  imageLabel:
    "mt-1 text-sm font-bold leading-tight text-[#F4C430] drop-shadow-lg",

  tallCard: "min-h-[330px] lg:row-span-2",

  smallCard: "min-h-[160px]",

  yellowCard:
    "relative flex min-h-[160px] flex-col justify-between overflow-hidden bg-[#F4C430] p-6 text-[#061B11]",

  yellowCardIcon:
    "flex h-12 w-12 items-center justify-center rounded-full bg-[#061B11] text-[#F4C430]",

  yellowCardTitle:
    "max-w-[150px] text-xs font-black uppercase leading-6 tracking-[0.18em]",

  section: "bg-[#F8F3E3] px-5 py-20 md:px-10 lg:px-14 xl:px-20",

  sectionInner: "mx-auto w-full max-w-[1500px]",

  sectionHeader: "mb-12 max-w-3xl",

  sectionEyebrow:
    "mb-4 inline-flex items-center gap-2 rounded-full border border-[#075B35]/15 bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-[#075B35]",

  sectionTitle:
    "text-4xl font-black leading-tight tracking-[-0.04em] text-[#061B11] md:text-6xl",

  sectionText: "mt-5 text-lg leading-8 text-[#47584D]",

  cardsGrid: "grid grid-cols-1 gap-6 md:grid-cols-3",

  card:
    "rounded-[34px] border border-[#075B35]/10 bg-white p-7 shadow-sm",

  cardIcon:
    "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#075B35]/10 text-[#075B35]",

  cardTitle: "text-2xl font-black text-[#061B11]",

  cardText: "mt-4 leading-7 text-[#47584D]",
};

export default function Home() {
  return (
    <main className={`${styles.page} ${bodyFont.className}`}>
      <style>{`
        @keyframes heroSlideshow {
          0% { opacity: 0; transform: scale(1.04); }
          3% { opacity: 1; transform: scale(1); }
          12.5% { opacity: 1; transform: scale(1); }
          15.5% { opacity: 0; transform: scale(1.04); }
          100% { opacity: 0; transform: scale(1.04); }
        }

        .animate-hero-slideshow {
          animation: heroSlideshow 40s infinite ease-in-out;
        }
      `}</style>

      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          {heroPhotos.map((photo, index) => (
            <div
              key={photo}
              className={styles.heroPhoto}
              style={{
                backgroundImage: `url(${photo})`,
                animationDelay: `${index * 5}s`,
              }}
            />
          ))}
        </div>

        <div className={styles.heroOverlay} />
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
                <ArrowRight size={18} />
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
              <div className={`${styles.imageCard} ${styles.tallCard}`}>
                <div className={styles.imageOlive} />
                <div className={styles.imageOverlay} />
                <div className={styles.imageContent}>
                  <p className={styles.imageTitle}>AlMahdi Olive</p>
                  <p className={styles.imageLabel}>Export premium</p>
                </div>
              </div>

              <div className={`${styles.imageCard} ${styles.smallCard}`}>
                <div className={styles.imageDefault} />
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

              <div className={`${styles.imageCard} ${styles.smallCard}`}>
                <div className={styles.imageFruits} />
                <div className={styles.imageOverlay} />
                <div className={styles.imageContent}>
                  <p className={styles.imageTitle}>Fruits AlMahdi</p>
                  <p className={styles.imageLabel}>Stockage frigorifique</p>
                </div>
              </div>

              <div className={`${styles.imageCard} ${styles.smallCard}`}>
                <div className={styles.imageDefault} />
                <div className={styles.imageOverlay} />
                <div className={styles.imageContent}>
                  <p className={styles.imageTitle}>Qualité</p>
                  <p className={styles.imageLabel}>Traçabilité</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SignatureGallerySection />

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
        </div>
      </section>
      <AwardsSection />
    </main>
  );
}