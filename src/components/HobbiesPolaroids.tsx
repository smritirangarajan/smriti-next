import Image from "next/image";

type Hobby = { title: string; image: string };

const hobbies: Hobby[] = [
  { title: "Dance", image: "/assets/gallery/dance.jpg" },
  { title: "Gardening", image: "/assets/gallery/garden.jpg" },
  { title: "Piano", image: "/assets/gallery/piano.jpg" },
  { title: "Traveling", image: "/assets/gallery/travel.jpg" },
];

export default function HobbiesPolaroids() {
  return (
    <div className="container-page">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-4">
        {hobbies.map((h, i) => (
          <div key={h.title} className="group relative">
            <div className="relative h-40 w-40 mx-auto rounded-full border-2 border-lavender-600 bg-white shadow-[4px_6px_0_0_var(--lavender-600)] overflow-hidden">
              <Image src={h.image} alt={h.title} fill className="object-cover" />
            </div>
            <div className="absolute left-1/2 -top-3 -translate-x-1/2">
              <Image src="/assets/decor/tack.png" alt="tack" width={18} height={18} />
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-black/60 px-3 py-1 text-white opacity-0 transition-opacity group-hover:opacity-100">
              {h.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


