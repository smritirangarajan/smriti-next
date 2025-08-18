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
          <div key={h.title} className="relative">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2">
              <Image src="/assets/decor/tack.png" alt="tack" width={24} height={24} />
            </div>
            <div className="rounded-md border-2 border-black/20 bg-white p-3 shadow-[4px_6px_0_0_rgba(0,0,0,0.3)]">
              <div className="relative h-52 w-full">
                <Image src={h.image} alt={h.title} fill className="object-cover" />
              </div>
              <p className="mt-3 text-center font-display text-xl text-black">{h.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


