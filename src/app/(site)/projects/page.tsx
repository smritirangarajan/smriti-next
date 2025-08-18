import Image from "next/image";
export const dynamic = "force-static";
import Section from "@/components/ui/Section";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <Section title="Projects" subtitle="Each project has a GitHub link and short description.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.slug} className="card overflow-hidden">
              <div className="relative h-40 w-full">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">{p.name}</h3>
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
          ))}
        </div>
      </Section>
    </main>
  );
}


