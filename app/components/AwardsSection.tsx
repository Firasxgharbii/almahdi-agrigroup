import Image from "next/image";

const awards = [
  { name: "Award 1", src: "/awards/awards1.png" },
  { name: "Award 2", src: "/awards/awards2.png" },
  { name: "Award 3", src: "/awards/awards3.png" },
  { name: "Award 4", src: "/awards/awards4.png" },
  { name: "Award 5", src: "/awards/awards5.png" },
  { name: "Award 6", src: "/awards/awards6.png" },
  { name: "Award 7", src: "/awards/awards7.png" },
];

export default function AwardsSection() {
  return (
    <section className="bg-white px-6 py-16 text-[#061b11] md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1500px]">
        <p className="mb-3 text-center text-xs font-black uppercase tracking-[0.35em] text-[#c79a00]">
          Certifications
        </p>

        <h2 className="mb-14 text-center text-3xl font-black tracking-[-0.03em] md:text-4xl">
          Recent Awards
        </h2>

        <div className="grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-14 sm:grid-cols-3 lg:grid-cols-7">
          {awards.map((award) => (
            <div
              key={award.name}
              className="group relative flex h-[145px] w-[145px] items-center justify-center transition duration-300 hover:-translate-y-2 md:h-[165px] md:w-[165px]"
            >
              <Image
                src={award.src}
                alt={award.name}
                width={170}
                height={170}
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}