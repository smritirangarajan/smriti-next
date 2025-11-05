import Image from "next/image";

type Hobby = { title: string; image: string };

const hobbies: Hobby[] = [
  { title: "Mock Trial", image: "/assets/gallery/mock.JPG" },
  { title: "Gardening", image: "/assets/gallery/garden.jpg" },
  { title: "Piano", image: "/assets/gallery/piano.jpg" },
  { title: "Traveling", image: "/assets/travel.jpg" },
];

export default function HobbiesPolaroids() {
  return (
    <div className="container-page">
      <div className="mx-auto max-w-5xl">
        {/* Purple clothesline */}
        <div className="relative mb-8">
          <div className="h-1 bg-lavender-300 rounded-full"></div>
          {/* Clothes pins */}
          {hobbies.map((_, i) => (
            <div
              key={i}
              className="absolute top-0 left-0 w-4 h-6 bg-lavender-300 rounded-full transform -translate-y-1/2"
              style={{ left: `${(i * 100) / (hobbies.length - 1)}%` }}
            >
              <div className="w-4 h-6 bg-lavender-300 rounded-full border-2 border-lavender-400"></div>
            </div>
          ))}
        </div>
        
        {/* Polaroid photos */}
        <div className="grid grid-cols-4 gap-8">
          {hobbies.map((h) => (
            <div key={h.title} className="text-center">
              <div className="bg-white border-2 border-gray-300 p-4 shadow-lg">
                <div className="relative h-48 w-full mb-4">
                  <Image src={h.image} alt={h.title} fill className="object-cover" />
                </div>
                <p className="text-center font-display text-lg text-black">{h.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


