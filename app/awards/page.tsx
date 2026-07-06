import AwardsSection from "../components/AwardsSection";
import PremiumOliveHero from "../components/PremiumOliveHero";

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#f7f5f1] px-6 py-24 text-center md:px-12">
        <p className="text-[12px] uppercase tracking-[0.45em] text-[#9a8a80]">
          AlMahdi AgriGroup
        </p>

        <h1 className="mx-auto mt-8 max-w-5xl text-[42px] font-light lowercase leading-[1.2] tracking-[0.16em] text-[#6f625c] md:text-[64px]">
          médailles et distinctions
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-8 tracking-[0.06em] text-[#8a7d76]">
          Une sélection des récompenses et certifications obtenues autour de la
          qualité de nos produits.
        </p>
      </section>
      <PremiumOliveHero />
      <AwardsSection />
       
    </main>
  );
}