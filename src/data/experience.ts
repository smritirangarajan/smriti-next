export type Experience = {
  company: string;
  role: string;
  logo: string;
  dates: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Meta and Major League Hacking",
    role: "Production Engineering Fellow",
    logo: "/assets/logos/mlh.jpg",
    dates: "Jun 2025 — Present",
    highlights: [
      "I developed a full-stack web application using Flask, MySQL, and Docker, implementing automated CI/CD pipelines with GitHub Actions that reduced deployment time by 40% and comprehensive monitoring solutions with Prometheus and Grafana that improved incident detection by 80%. Through strategic automation using advanced Linux/UNIX commands and shell scripting, I streamlined system operations and reduced manual workload by 30% while establishing robust testing frameworks with Pytest to ensure code quality.",
    ],
  },
  {
    company: "SETDA (Build4Good)",
    role: "Data Analyst Intern",
    logo: "/assets/logos/buildforgood.png",
    dates: "May 2025 — Aug 2025",
    highlights: [
      "I developed a comprehensive full-stack analytics dashboard using React and Flask that visualized engagement metrics across 300+ organizations and 5,000+ members, featuring an interactive choropleth map that effectively demonstrated organizational strength and contributed to securing 2 corporate partnerships. Additionally, I prototyped an innovative digital Open Badges credentialing system using ReactJS, ExpressJS, and Firebase Authentication and Database, creating a scalable solution for recognizing and validating digital achievements.",
    ],
  },
  {
    company: "Berkeley SkyDeck",
    role: "Program Management Intern",
    logo: "/assets/logos/skydeck.png",
    dates: "Jan 2025 — May 2025",
    highlights: [
      "I conducted comprehensive market research on 100+ Deep Learning workshops and designed 10 targeted educational programs, with 6 selected for implementation, while creating a professional Demo Day booklet in Adobe InDesign that was distributed to over 1,000 investors and industry leaders. My strategic contributions included editing partnership proposals with detailed budget refinement and developing monthly presentations to track and communicate startup progress to stakeholders.",
    ],
  },
  {
    company: "YouShift (YC W25)",
    role: "Product Growth Intern",
    logo: "/assets/logos/youshift.jpeg",
    dates: "Summer 2024 — Dec 2024",
    highlights: [
      "I played a pivotal role in the company's US market expansion by securing the first three American residency programs totaling 80 users through leading live product demonstrations to chief residents and finalizing contract negotiations with program coordinators. Through comprehensive business development efforts, I demonstrated the product to 30 potential clients, executed targeted outreach campaigns reaching 500 prospects via cold email and calls, and conducted strategic competitor analysis to inform market positioning.",
    ],
  },
  {
    company: "Wyzant",
    role: "Tutor",
    logo: "/assets/logos/wyzant.png",
    dates: "Summer 2024 — Dec 2024",
    highlights: [
      "I provided personalized calculus tutoring services to two students through the Wyzant online tutoring platform, helping them work through challenging Calculus II concepts and problem-solving techniques. Through these one-on-one tutoring sessions, I was able to address each student's individual learning needs and guide them toward a deeper understanding of advanced calculus topics such as integration methods, series, and differential equations..",
    ],
  },
];


