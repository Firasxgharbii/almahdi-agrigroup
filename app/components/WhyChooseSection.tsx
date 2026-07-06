import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Check,
  Globe2,
  Leaf,
  Play,
  Sprout,
} from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 text-[#061b11] md:px-12 lg:px-20">
      <div className="pointer-events-none absolute left-10 top-36 h-[520px] w-[720px] opacity-[0.045] bg-[url('/globe.svg')] bg-contain bg-center bg-no-repeat" />

      <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-[#4b7f2b]">
            <Leaf size={18} />
            Pourquoi nous choisir ?
          </div>

          <h2 className="max-w-[760px] text-4xl font-black leading-[1.08] tracking-[-0.04em] md:text-6xl">
            L’olive qui respecte la tradition, pour un goût incomparable.
          </h2>

          <p className="mt-8 max-w-[680px] text-lg font-semibold leading-8 text-[#061b11]/65">
            Nous sommes fiers de notre présence mondiale, un signe de notre
            engagement envers la qualité, la traçabilité et le développement
            durable.
          </p>

          <div className="mt-10 space-y-9">
            <div className="flex gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#4b7f2b] text-white shadow-lg">
                <Award size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-black">
                  Une présence mondiale d’exception
                </h3>
                <p className="mt-3 max-w-[650px] text-base leading-7 text-[#061b11]/60">
                  Une présence construite autour de partenaires fiables, de
                  marchés exigeants et d’un savoir-faire tunisien reconnu.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#4b7f2b] text-white shadow-lg">
                <Globe2 size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-black">
                  L’excellence de l’huile d’olive
                </h3>
                <p className="mt-3 max-w-[650px] text-base leading-7 text-[#061b11]/60">
                  Chaque goutte reflète une exigence de qualité, une passion
                  agricole et une volonté de faire rayonner la Tunisie.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-9 grid max-w-[520px] grid-cols-2 gap-4 text-sm font-black">
            {["Expérience", "Qualité", "Savoir-faire", "Passion"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check size={18} className="text-[#4b7f2b]" />
                  {item}
                </div>
              )
            )}
          </div>

          <Link
            href="/nos-societes"
            className="mt-10 inline-flex items-center gap-4 rounded-full bg-[#4b7f2b] px-8 py-4 text-sm font-black text-white transition hover:bg-[#061b11]"
          >
            Notre production
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="relative min-h-[620px]">
          <div className="absolute left-8 top-0 z-10 hidden h-28 w-28 bg-[radial-gradient(#4b7f2b_2px,transparent_2px)] bg-[size:18px_18px] opacity-80 lg:block" />

          <div className="absolute right-0 top-8 h-[330px] w-[420px] overflow-hidden rounded-[24px] shadow-2xl">
            <Image
              src="/images/olivehero5.jpg"
              alt="Olive branch"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-10 left-0 z-20 h-[300px] w-[330px] overflow-hidden rounded-[22px] shadow-2xl">
            <Image
              src="/images/olivehero6.jpg"
              alt="Olive harvest"
              fill
              className="object-cover"
            />

            <button
              type="button"
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#fff000] text-[#061b11] shadow-xl transition hover:scale-105"
            >
              <Play size={30} fill="currentColor" />
            </button>
          </div>

          <div className="absolute bottom-20 right-16 z-30 flex h-[210px] w-[170px] flex-col items-center justify-center rounded-[24px] bg-white text-center shadow-2xl">
            <Sprout size={46} className="text-[#061b11]" />
            <p className="mt-5 text-5xl font-black text-[#4b7f2b]">25+</p>
            <p className="mt-2 max-w-[120px] text-sm font-black leading-5">
              marchés internationaux
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}