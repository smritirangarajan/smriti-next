import Image from "next/image";
export const dynamic = "force-static";
import Section from "@/components/ui/Section";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main>
      <Section title="Experience">
        <div className="grid gap-6 sm:grid-cols-2">
          {experience.map((e) => (
            <div key={e.company} className="card p-6">
              <div className="flex items-center gap-4">
                <Image src={e.logo} alt={e.company} width={48} height={48} className="rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-black">{e.role}</h3>
                  <p className="text-black/70">{e.company}</p>
                </div>
              </div>
              <ul className="mt-3 list-disc pl-5 text-black/80">
                {e.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}


