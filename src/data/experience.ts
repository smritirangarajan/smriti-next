export type Experience = {
  company: string;
  role: string;
  logo: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Meta and Major League Hacking",
    role: "Production Engineering Fellow",
    logo: "/assets/logos/pwlogo.png",
    highlights: [
      "Built infra and reliability features with mentorship.",
      "Shipped a portfolio of DevOps and SRE exercises.",
    ],
  },
  {
    company: "SETDA (Build4Good)",
    role: "Data Analyst Intern",
    logo: "/assets/logos/buildforgood.png",
    highlights: [
      "Analyzed datasets and built dashboards to inform education policy.",
    ],
  },
  {
    company: "Berkeley SkyDeck",
    role: "Program Management Intern",
    logo: "/assets/logos/skydeck.png",
    highlights: [
      "Coordinated accelerator programming and tracked startup progress.",
    ],
  },
  {
    company: "YouShift (YC W25)",
    role: "Product Growth Intern",
    logo: "/assets/logos/youshift.jpeg",
    highlights: [
      "Drove activation experiments and user research for growth.",
    ],
  },
];


