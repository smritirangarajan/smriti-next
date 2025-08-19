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
  { slug: "spenderella", name: "Spenderella", image: "/assets/projects/spenderella.png", github: "https://github.com/smritirangarajan/spenderella", description: "Fullstack budgeting app with auth, analytics, and receipt scanenrs", tags: ["MERN Stack", "Gemini API", "Cron Jobs"] },
  { slug: "courtchat", name: "CourtChat", image: "/assets/projects/courtchat.png", github: "https://github.com/court-chat", description: "RAG Chatbot for Supreme Courtcases", tags: ["VectorDB", "Next.js", "OpenAI"] },
  { slug: "munchmatch", name: "MunchMatch", image: "/assets/projects/munchmatch.png", github: "https://github.com/munchmatch", description: "Swipe to match restaurants with friends.", tags: ["MERN Stack", "Vercel", "Render"] },
  { slug: "verba", name: "VERBA", image: "/assets/projects/verba.png", github: "https://github.com/jmx1e/verba", description: "AI EMS Voice Agent", tags: ["Vapi", "Letta LLM", "CalHacks"] },
  { slug: "tab-itha", name: "Tab-itha", image: "/assets/projects/tabitha.png", github: "https://github.com/smritirangarajan/tabitha-2", description: "AI Browser Agent", tags: ["React", "Claude", "FastAPI"] },
  { slug: "mlh-portfolio", name: "MLH Portfolio", image: "/assets/projects/mlh.png", github: "https://github.com/smritirangarajan/mlh-portfolio", description: "Production Engineering fellowship portfolio.", tags: ["DevOps", "Linux", "Flask"] },
  { slug: "evently", name: "Evently", image: "/assets/projects/evently.png", github: "https://github.com/smritirangarajan/evently", description: "Event discovery and ticketing.", tags: ["React", "Express", "Firebase"] },

  // Machine Learning
  { slug: "eye-disease-detection", name: "Eye Disease Detection", image: "/assets/projects/eye.png", github: "https://github.com/eye-disease-detection", description: "CNN to classify retinal images.", tags: ["Python", "TensorFlow", "CNN"] },
  { slug: "lstm-stock-prediction", name: "LSTM Time Series", image: "/assets/projects/lstm.png", github: "https://github.com/smritirangarajan/lstm-stock-prediction", description: "LSTM forecasting for stock prices.", tags: ["LSTM", "Time Series", "Data Visualization"] },
  { slug: "pdf-kg", name: "PDF Knowledge Graph Generator", image: "/assets/projects/kg.png", github: "https://github.com/smritirangarajan/pdf-knowledge-graph", description: "Extracts entities from PDFs to a knowledge graph.", tags: ["Spacy NER", "Knowledge graphs", "NLP"] },

  // Just for Fun
  { slug: "mocktrial-type", name: "MockTrial Type", image: "/assets/projects/mocktrial.png", github: "https://github.com/smritirangarajan/mocktrial-type", description: "Typing game themed around Mock Trial Rules of Evidence.", tags: ["React", "JSON", "Game"] },
  { slug: "donkey-kong", name: "Donkey Kong", image: "/assets/projects/dk.png", github: "https://github.com/smritirangarajan/donkey-kong", description: "Remake for fun.", tags: ["Pygame", "OOP"] },
  { slug: "old-website", name: "Personal Website (Old)", image: "/assets/projects/site.png", github: "https://github.com/smritirangarajan/personal-website", description: "First personal website version.", tags: ["HTML", "CSS", "JS"] },
];


