"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SoftPaintingHero from "../components/SoftPaintingHero";

const events = [
  {
    title: "Summer Fancy Food Show",
    date: "JUIN 23, 2024",
    image: "/images/olivehero.png",
    side: "left",
    certificates: ["/images/certificat1.png", "/images/certificat2.png"],
  },
  {
    title: "APAS Show Brazil",
    date: "MAI 13, 2024",
    image: "/images/olivehero2.png",
    side: "right",
    certificates: ["/images/certificat3.png"],
  },
  {
    title: "Gulfood Dubai",
    date: "FÉVRIER 19, 2024",
    image: "/images/olivehero4.jpg",
    side: "right",
    certificates: ["/images/certificat4.png", "/images/certificat5.png"],
  },
  {
    title: "Anuga Germany",
    date: "OCTOBRE 07, 2023",
    image: "/images/olivehero5.jpg",
    side: "left",
    certificates: ["/images/certificat6.png"],
  },
  {
    title: "Food Expo Athens",
    date: "MARS 18, 2023",
    image: "/images/olivehero7.jpg",
    side: "left",
    certificates: ["/images/certificat7.png", "/images/certificat8.png"],
  },
  {
    title: "Biofach Germany",
    date: "FÉVRIER 14, 2023",
    image: "/images/olivehero8.jpg",
    side: "right",
    certificates: ["/images/certificat9.png"],
  },
];

export default function EvenementsPage() {
  return (
    <main className="min-h-screen bg-white text-[#061b13]">
      <SoftPaintingHero title="Foires & Salons" image="/images/olivehero.png" />

      <section className="mx-auto w-full max-w-[1450px] px-6 py-16 md:px-10 lg:px-12">
    

        <div className="space-y-28">
          {events.map((event, index) => {
            const isRight = event.side === "right";

            return (
              <article
                key={event.title}
                className={`relative flex w-full ${
                  isRight ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 gap-5 md:flex ${
                    isRight ? "left-[8%]" : "right-[8%]"
                  }`}
                >
                  {event.certificates.map((cert, i) => (
                    <div
                      key={cert}
                      className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-white shadow-2xl ring-1 ring-black/10 lg:h-32 lg:w-32"
                      style={{
                        transform: `translateY(${i % 2 === 0 ? "-20px" : "25px"})`,
                      }}
                    >
                      <Image
                        src={cert}
                        alt="Certificat"
                        fill
                        className="object-cover"
                        sizes="130px"
                      />
                    </div>
                  ))}
                </div>

                <div
                  className={`w-full max-w-[650px] animate-[fadeUp_0.9s_ease_both] ${
                    isRight ? "md:translate-x-6" : "md:-translate-x-6"
                  }`}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="relative h-[280px] overflow-hidden rounded-[20px] bg-gray-100 shadow-md md:h-[330px]">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 650px"
                    />

                    <div className="absolute left-5 top-5 rounded-full bg-[#007a3d] px-5 py-3 text-sm font-black uppercase text-white shadow-xl">
                      {event.date}
                    </div>
                  </div>

                  <div className="pt-7">
                    <h2 className="text-3xl font-black tracking-[-0.03em] text-black md:text-4xl">
                      {event.title}
                    </h2>

                    <button className="mt-7 inline-flex items-center gap-3 text-base font-black text-[#061b13] transition hover:gap-5 hover:text-[#007a3d]">
                      Read More
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(45px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}