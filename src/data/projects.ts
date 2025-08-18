export type Project = {
  slug: string;
  name: string;
  image: string;
  github: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "eye-disease-detection",
    name: "Eye Disease Detection",
    image: "/assets/gallery/dance.jpg", // TODO: replace with real project image
    github: "https://github.com/",
    description: "Deep learning model to classify retinal images and detect eye diseases.",
    tags: ["Python", "TensorFlow", "CNN"],
  },
  {
    slug: "lstm-stock-prediction",
    name: "LSTM Time Series Stock Prediction",
    image: "/assets/gallery/piano.jpg",
    github: "https://github.com/",
    description: "Sequence models to forecast stock prices and visualize uncertainty.",
    tags: ["Python", "PyTorch", "Time Series"],
  },
  {
    slug: "spenderella",
    name: "Spenderella",
    image: "/assets/gallery/garden.jpg",
    github: "https://github.com/",
    description: "Fullstack budgeting app with auth and analytics.",
    tags: ["Next.js", "Postgres", "Prisma"],
  },
  {
    slug: "courtchat",
    name: "CourtChat",
    image: "/assets/gallery/travel.jpg",
    github: "https://github.com/",
    description: "Real-time chat app for mock trial practice rooms.",
    tags: ["Next.js", "WebSockets", "Redis"],
  },
];


