export type Skill = {
  name: string;
  image: string;
  category: "Languages" | "Frameworks" | "Databases" | "Design";
};

export const skills: Skill[] = [
  { name: "Python", image: "/assets/skills/python.png", category: "Languages" },
  { name: "JavaScript", image: "/assets/skills/javascript.jpg", category: "Languages" },
  { name: "TypeScript", image: "/assets/skills/javascript.jpg", category: "Languages" },
  { name: "React", image: "/assets/skills/react.png", category: "Frameworks" },
  { name: "Next.js", image: "/assets/skills/react.png", category: "Frameworks" },
  { name: "Express", image: "/assets/skills/javascript.jpg", category: "Frameworks" },
  { name: "Tailwind CSS", image: "/assets/skills/figma.png", category: "Frameworks" },
  { name: "Flask", image: "/assets/skills/python.png", category: "Frameworks" },
  { name: "FastAPI", image: "/assets/skills/python.png", category: "Frameworks" },
  { name: "TensorFlow", image: "/assets/skills/python.png", category: "Frameworks" },
  { name: "PyTorch", image: "/assets/skills/python.png", category: "Frameworks" },
  { name: "MongoDB", image: "/assets/skills/sql.jpg", category: "Databases" },
  { name: "MySQL", image: "/assets/skills/sql.jpg", category: "Databases" },
  { name: "Supabase", image: "/assets/skills/sql.jpg", category: "Databases" },
  { name: "Figma", image: "/assets/skills/figma.png", category: "Design" },
  { name: "Adobe InDesign", image: "/assets/skills/figma.png", category: "Design" },
];


