import Image from "next/image";
import { skills } from "@/data/skills";

export default function Skills() {
  const groups = [
    "Languages",
    "Frameworks",
    "Databases",
    "Design",
  ] as const;

  return (
    <div className="container-page">
      <div className="grid gap-6">
        {groups.map((group) => (
          <div key={group}>
            <h3 className="mb-3 text-xl font-semibold text-black">{group}</h3>
            <div className="flex flex-wrap gap-4">
              {skills
                .filter((s) => s.category === group)
                .map((s) => (
                  <div key={s.name} className="flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 shadow-sm">
                    <div className="relative h-6 w-6">
                      <Image src={s.image} alt={s.name} fill className="object-contain" />
                    </div>
                    <span className="text-sm text-black/90">{s.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


