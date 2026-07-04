import {
  MapPin,
  Phone,
  Printer,
} from "lucide-react";

const filiales = [
  {
    flag: "🇹🇳",
    title: "ALMAHDI TUNISIE",
    address: ["Route de Mfg", "3066 sidi bouzid"],
    phone: "+216 79 350 170",
    fax: "+216 79 350 171",
  },
  {
    flag: "🇨🇦",
    title: "ALMAHDI CANADA",
    address: ["Montréal, Québec", "Canada"],
    phone: "+1 514 000 0000",
    fax: "+1 514 000 0000",
  },
  {
    flag: "🇲🇦",
    title: "ALMAHDI MAROC",
    address: ["Casablanca", "Maroc"],
    phone: "+212 000 000 000",
    fax: "+212 000 000 000",
  },
  {
    flag: "🇨🇳",
    title: "ALMAHDI CHINE",
    address: ["Shanghai", "Chine"],
    phone: "+86 000 000 000",
    fax: "+86 000 000 000",
  },
  {
    flag: "🇫🇷",
    title: "ALMAHDI FRANCE",
    address: ["Paris", "France"],
    phone: "+33 000 000 000",
    fax: "+33 000 000 000",
  },
  {
    flag: "🇨🇮",
    title: "ALMAHDI AFRIQUE",
    address: ["Abidjan", "Côte d’Ivoire"],
    phone: "+225 00 00 00 00",
    fax: "+225 00 00 00 00",
  },
  {
    flag: "🇺🇸",
    title: "ALMAHDI USA",
    address: ["Houston, Texas", "USA"],
    phone: "+1 000 000 0000",
    fax: "+1 000 000 0000",
  },
  {
    flag: "🇷🇺",
    title: "ALMAHDI RUSSIE",
    address: ["Moscou", "Russie"],
    phone: "+7 000 000 0000",
    fax: "+7 000 000 0000",
  },
  {
    flag: "🇬🇧",
    title: "ALMAHDI ROYAUME-UNI",
    address: ["Londres", "Royaume-Uni"],
    phone: "+44 000 000 000",
    fax: "+44 000 000 000",
  },
];

export default function FilialesSection() {
  return (
    <section className="bg-white px-6 py-20 text-[#333] md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-16 flex items-center justify-center gap-8">
          <span className="hidden h-px w-56 bg-[#d8d8d8] md:block" />

          <h2 className="text-center text-5xl font-black uppercase tracking-[0.08em] text-[#2c2c2c]">
            Filiales
          </h2>

          <span className="hidden h-px w-56 bg-[#d8d8d8] md:block" />
        </div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {filiales.map((item) => (
            <div key={item.title} className="flex items-start gap-5">
              <div className="flex h-12 w-16 shrink-0 items-center justify-center border border-[#e5e5e5] bg-white text-4xl shadow-sm">
                {item.flag}
              </div>

              <div>
                <h3 className="mb-2 text-sm font-black uppercase text-[#333]">
                  {item.title}
                </h3>

                <div className="space-y-1 text-sm leading-6 text-[#666]">
                  <p className="flex gap-1">
                    <MapPin size={15} className="mt-1 shrink-0 text-[#0b8f3a]" />
                    <span>
                      {item.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </p>

                  <p className="flex items-center gap-2">
                    <Phone size={14} className="text-[#0b8f3a]" />
                    Tel : {item.phone}
                  </p>

                  <p className="flex items-center gap-2">
                    <Printer size={14} className="text-[#0b8f3a]" />
                    Fax : {item.fax}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}