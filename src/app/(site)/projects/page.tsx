import Image from "next/image";
export const dynamic = "force-static";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <Section title="Projects" subtitle="Organized by category">
        {[
          { label: "Full Stack", match: (slug: string) => ["bigbro", "spenderella", "courtchat", "munchmatch", "mlh-portfolio", "evently", "verba", "tab-itha"].includes(slug) },
          { label: "Machine Learning", match: (slug: string) => ["eye-disease-detection", "lstm-stock-prediction", "pdf-kg"].includes(slug) },
          { label: "Just for Fun", match: (slug: string) => ["mocktrial-type", "donkey-kong", "old-website"].includes(slug) },
        ].map((group) => (
          <div key={group.label} className="mb-10">
            <h3 className="mb-4 text-2xl font-semibold text-black">{group.label}</h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((p) => group.match(p.slug))
                .map((p, i) => (
                  <Reveal key={p.slug} delay={i * 0.05}>
                    <div className="overflow-hidden rounded-md border-2 border-lavender-600 bg-white shadow-[6px_6px_0_0_var(--lavender-600)]">
                      <div className="relative h-48 w-full">
                        <Image src={p.image} alt={p.name} fill className="object-cover" />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-black">{p.name}</h4>
                        <p className="text-black/70 mt-1 text-sm">{p.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <span key={t} className="pill text-black/90 bg-lavender-300/60">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4">
                          <a className="text-black font-medium hover:underline" href={p.github} target="_blank" rel="noreferrer">
                            GitHub →
                          </a>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
            </div>
          </div>
        ))}
      </Section>
    </main>
  );
}


