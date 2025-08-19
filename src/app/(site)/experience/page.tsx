import Image from "next/image";
export const dynamic = "force-static";
import Section from "@/components/ui/Section";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main>
      <Section title="Experience">
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-1/2 top-0 -ml-[2px] h-full w-1 bg-black/20" />
          <div className="space-y-10">
            {experience.map((e, idx) => (
              <div key={e.company} className={`grid grid-cols-1 items-start gap-6 md:grid-cols-2 ${idx % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}`}>
                <div className="md:col-span-1">
                  <div className="rounded-md border-2 border-lavender-600 bg-white p-5 shadow-[6px_6px_0_0_var(--lavender-600)]">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 flex-shrink-0">
                        <Image src={e.logo} alt={e.company} fill className="rounded-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-black">{e.role}</h3>
                        <p className="text-black/70">{e.company}</p>
                        <p className="text-sm text-black/60">{e.dates}</p>
                      </div>
                    </div>
                    <ul className="mt-3 list-disc pl-5 text-black/80">
                      {e.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-1" />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}


