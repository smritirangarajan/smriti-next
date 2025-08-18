import Image from "next/image";
export const dynamic = "force-static";
import Section from "@/components/ui/Section";
import { classes, clubs } from "@/data/classes";

export default function BerkeleyPage() {
  return (
    <main>
      <Section title="Berkeley" subtitle="Classes and clubs.">
        <div className="grid gap-8 md:grid-cols-[1fr_320px]">
          <div className="rounded-md border-2 border-lavender-600 bg-white p-6 shadow-[6px_6px_0_0_var(--lavender-600)]">
            <h3 className="text-xl font-semibold text-black">Classes</h3>
            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-black/80">
              {classes.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border-2 border-lavender-600 bg-white p-6 shadow-[6px_6px_0_0_var(--lavender-600)]">
            <h3 className="text-xl font-semibold text-black">Clubs</h3>
            <ul className="mt-2 space-y-2 text-black/80">
              {clubs.map((club) => (
                <li key={club.name} className="flex items-center gap-3">
                  {club.logo ? (
                    <Image src={club.logo} alt={club.name} width={28} height={28} className="rounded-full" />
                  ) : null}
                  <span>
                    {club.name}
                    {club.role ? <span className="text-black/60"> — {club.role}</span> : null}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}


