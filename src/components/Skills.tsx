"use client";

import Image from "next/image";
import { skills } from "@/data/skills";
import { useState } from "react";

type SpinDir = "fwd" | "back";

export default function Skills() {
  const [flippedSkills, setFlippedSkills] = useState<Set<string>>(new Set());
  const [spinning, setSpinning] = useState<{ name: string; dir: SpinDir } | null>(null);

  const toggleSkill = (skillName: string) => {
    // ignore clicks while animating
    if (spinning?.name === skillName) return;

    const isFlipped = flippedSkills.has(skillName);
    const dir: SpinDir = isFlipped ? "back" : "fwd";

    setSpinning({ name: skillName, dir });

    // When the 600ms spin finishes, commit the flipped state and clear spinning
    setTimeout(() => {
      setFlippedSkills((prev) => {
        const next = new Set(prev);
        if (isFlipped) next.delete(skillName);
        else next.add(skillName);
        return next;
      });
      setSpinning((s) => (s?.name === skillName ? null : s));
    }, 600);
  };

  const groups = ["Languages", "Technologies/Frameworks"] as const;

  return (
    <div className="container-page">
      <div className="grid gap-6">
        {groups.map((group) => (
          <div key={group}>
            <h3 className="mb-3 text-lg font-semibold text-black">{group}</h3>

            <div className="flex flex-wrap gap-4">
              {skills
                .filter((s) => s.category === group)
                .map((s) => {
                  const isFlipped = flippedSkills.has(s.name);
                  const isSpinning = spinning?.name === s.name;
                  const spinClass = isSpinning
                    ? spinning!.dir === "fwd"
                      ? "animate-spin-y"
                      : "animate-unspin-y"
                    : isFlipped
                    ? "rotate-y-180"
                    : "";

                  return (
                    <div key={s.name} className="group relative h-24 w-24 perspective-1000">
                      <button
                        type="button"
                        onClick={() => toggleSkill(s.name)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggleSkill(s.name);
                          }
                        }}
                        aria-pressed={isFlipped}
                        aria-label={s.name}
                        className={[
                          "relative h-full w-full transition-transform duration-500",
                          "transform-style-preserve-3d cursor-pointer focus:outline-none",
                          spinClass,
                        ].join(" ")}
                      >
                        {/* Front side - Logo */}
                        <div className="absolute inset-0 backface-hidden">
                          <div className="h-full w-full rounded-full border-2 border-lavender-300 bg-white p-4 shadow-[4px_4px_0_0_var(--lavender-600)] flex items-center justify-center">
                            <Image
                              src={s.image}
                              alt={s.name}
                              width={64}
                              height={64}
                              className="object-contain"
                            />
                          </div>
                        </div>

                        {/* Back side - Skill Name */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180">
                          <div className="h-full w-full rounded-full border-2 border-lavender-600 bg-lavender-100 shadow-[4px_4px_0_0_var(--lavender-600)] flex items-center justify-center px-2">
                            <span className="text-sm font-semibold text-black text-center leading-tight">
                              {s.name}
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
