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
      <div className="relative mb-8 h-3 w-full rounded-full bg-lavender-300" />
      <div className="grid gap-8 md:grid-cols-4">
        {hobbies.map((h, i) => (
          <div key={h.title} className="relative">
            <div className="absolute -top-6 left-1/2 h-8 w-5 -translate-x-1/2 rounded-sm bg-lavender-300 shadow" />
            <div className="rounded-md border-2 border-black/20 bg-white p-3 shadow-[4px_6px_0_0_rgba(0,0,0,0.3)]">
              <div className="relative h-52 w-full">
                <Image src={h.image} alt={h.title} fill className="object-cover" />
              </div>
              <p className="mt-3 text-center font-[\"Architects Daughter\",cursive] text-xl text-black">{h.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


