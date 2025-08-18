export type Project = {
  slug: string;
  name: string;
  image: string;
  github: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  // Full Stack
  { slug: "spenderella", name: "Spenderella", image: "/assets/projects/spenderella.png", github: "https://github.com/", description: "Fullstack budgeting app with auth and analytics.", tags: ["Next.js", "Postgres", "Prisma"] },
  { slug: "courtchat", name: "CourtChat", image: "/assets/projects/courtchat.png", github: "https://github.com/", description: "Real-time chat app for mock trial practice rooms.", tags: ["Next.js", "WebSockets", "Redis"] },
  { slug: "munchmatch", name: "MunchMatch", image: "/assets/projects/munchmatch.png", github: "https://github.com/", description: "Swipe to match restaurants with friends.", tags: ["Next.js", "Supabase"] },
  { slug: "verba", name: "VERBA", image: "/assets/projects/verba.png", github: "https://github.com/", description: "Language learning companion app.", tags: ["Next.js", "Auth"] },
  { slug: "tab-itha", name: "Tab-itha", image: "/assets/projects/tabitha.png", github: "https://github.com/", description: "Tabbed new-tab productivity page.", tags: ["React", "UI"] },
  { slug: "mlh-portfolio", name: "MLH Portfolio", image: "/assets/projects/mlh.png", github: "https://github.com/", description: "Production Engineering fellowship portfolio.", tags: ["DevOps", "Linux"] },
  { slug: "evently", name: "Evently", image: "/assets/projects/evently.png", github: "https://github.com/", description: "Event discovery and ticketing.", tags: ["Next.js", "Stripe"] },

  // Machine Learning
  { slug: "eye-disease-detection", name: "Eye Disease Detection", image: "/assets/projects/eye.png", github: "https://github.com/", description: "CNN to classify retinal images.", tags: ["Python", "TensorFlow", "CNN"] },
  { slug: "lstm-stock-prediction", name: "LSTM Time Series", image: "/assets/projects/lstm.png", github: "https://github.com/", description: "LSTM forecasting for stock prices.", tags: ["PyTorch", "Time Series"] },
  { slug: "pdf-kg", name: "PDF Knowledge Graph Generator", image: "/assets/projects/kg.png", github: "https://github.com/", description: "Extracts entities from PDFs to a knowledge graph.", tags: ["NLP", "Graph"] },

  // Just for Fun
  { slug: "mocktrial-type", name: "MockTrial Type", image: "/assets/projects/mocktrial.png", github: "https://github.com/", description: "Typing game themed around mock trial.", tags: ["Game", "Web"] },
  { slug: "donkey-kong", name: "Donkey Kong", image: "/assets/projects/dk.png", github: "https://github.com/", description: "Remake for fun.", tags: ["Game"] },
  { slug: "old-website", name: "Personal Website (Old)", image: "/assets/projects/site.png", github: "https://github.com/", description: "First personal website version.", tags: ["HTML", "CSS", "JS"] },
];


