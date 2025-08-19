import HomeHero from "@/components/HomeHero";
import Skills from "@/components/Skills";
import HobbiesPolaroids from "@/components/HobbiesPolaroids";
import Section from "@/components/ui/Section";
import { classes, clubs } from "@/data/classes";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HomeHero />
      
      <Section title="Skills" subtitle="What I work with and enjoy building.">
        <div className="rounded-md border-2 border-lavender-600 bg-white p-6 shadow-[6px_6px_0_0_var(--lavender-600)]">
          <Skills />
        </div>
      </Section>

      {/* Hobbies */}
      <Section title="Hobbies" subtitle="When I'm not debugging, you can find me...">
        <div className="rounded-md border-2 border-lavender-600 bg-white p-6 shadow-[6px_6px_0_0_var(--lavender-600)]">
          <HobbiesPolaroids />
        </div>
      </Section>

      {/* Berkeley Section */}
     {/* Berkeley Section */}
<Section
  title="Berkeley"
  subtitle="Computer Science and Data Science — classes and clubs."
>
  {/* GPA chip */}
  <div className="mb-6">
    <span className="inline-flex items-center gap-2 rounded-full border-2 border-lavender-600 bg-lavender-100 px-4 py-1.5 text-base font-semibold text-black shadow-[3px_3px_0_0_var(--lavender-600)]">
      GPA: <strong className="font-bold">4.0</strong>
    </span>
  </div>

  <div className="grid gap-10 lg:gap-12 md:grid-cols-[1.2fr_520px]">
    {/* Left card: Classes + Clubs */}
    <div className="rounded-md border-2 border-lavender-600 bg-white p-8 shadow-[6px_6px_0_0_var(--lavender-600)]">
      <h3 className="text-2xl font-semibold text-black mb-5">Classes</h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-black/90">
        {classes.map((c) => (
          <li key={c} className="flex items-start gap-3">
            <Image
              src="/assets/decor/checkmark.png"
              alt=""
              width={20}
              height={20}
              className="mt-1 flex-shrink-0"
            />
            <span className="text-lg leading-snug">{c}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold text-black mt-8 mb-5">Clubs</h3>

      <ul className="space-y-5 text-black">
        {clubs.map((club) => (
          <li key={club.name} className="flex items-center gap-4">
            {club.logo ? (
              <Image
                src={club.logo}
                alt={club.name}
                width={48}
                height={48}
                className="rounded-full"
              />
            ) : null}
            <p className="text-xl font-medium">
              {club.name}
              {club.role ? (
                <span className="text-black/60 font-normal"> — {club.role}</span>
              ) : null}
            </p>
          </li>
        ))}
      </ul>
    </div>

    {/* Right card: Bigger image */}
    <div className="rounded-md border-2 border-lavender-600 bg-white p-4 shadow-[6px_6px_0_0_var(--lavender-600)]">
      <div className="relative w-full h-[34rem] lg:h-[38rem]">
        <Image
          src="/assets/fullbodydrawing.png"  // swap to your real photo if you like
          alt="UC Berkeley"
          fill
          className="object-contain rounded-md"
          priority
          sizes="(max-width: 768px) 100vw, 520px"
        />
      </div>
    </div>
  </div>
</Section>

    </main>
  );
}
