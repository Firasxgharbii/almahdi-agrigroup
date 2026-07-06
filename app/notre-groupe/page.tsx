import {
  Factory,
  Leaf,
  ShieldCheck,
  Sprout,
} from "lucide-react";

import GroupPage from "../components/GroupPage";
import CinematicStorySection from "../components/CinematicStorySection";

const values = [
  {
    icon: Leaf,
    title: "Production agricole",
    text: "Une base solide autour de la terre, des produits tunisiens et du savoir-faire transmis depuis plusieurs générations.",
  },
  {
    icon: Factory,
    title: "Transformation",
    text: "Une vision moderne pour structurer, transformer et valoriser les produits agroalimentaires avec une image professionnelle.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité & traçabilité",
    text: "Une communication claire autour de la qualité, de la confiance, de la certification et de l’ouverture vers l’export.",
  },
];

export default function NotreGroupePage() {
  return (
    <>
      <GroupPage
        title="Notre histoire"
        image="/images/olivehero3.jpg"
        subtitle="Découvrez l’histoire du groupe."
      />

      <CinematicStorySection />

      <section className="bg-[#fbf8e8] px-6 py-24 text-[#06291b] md:px-10 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 max-w-[760px]">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#007a3d]/20 bg-white px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#007a3d] shadow-sm">
              <Sprout size={16} />
              Nos piliers
            </p>

            <h2 className="text-[42px] font-black leading-[1.05] tracking-[-0.06em] text-[#06291b] md:text-[64px]">
              Un groupe pensé pour <br />
              l’avenir agroalimentaire
            </h2>

            <p className="mt-7 max-w-[680px] text-[18px] leading-8 text-[#335c4c]">
              AlMahdi AgriGroup présente une image sérieuse, familiale, moderne
              et capable de développer plusieurs sociétés, produits et marchés.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-[#06291b]/10 bg-white p-8 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e6f1ec] text-[#007a3d]">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-[25px] font-black tracking-[-0.04em] text-[#06291b]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[16px] leading-8 text-[#335c4c]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}