import HomeHero from "@/components/HomeHero";
import Section from "@/components/ui/Section";
import TornTitle from "@/components/ui/TornTitle";
import HobbiesPolaroids from "@/components/HobbiesPolaroids";

export default function Home() {
  return (
    <main>
      <HomeHero />

      {/* Highlights removed per request */}

      <TornTitle text="Hobbies" />
      <HobbiesPolaroids />
    </main>
  );
}
