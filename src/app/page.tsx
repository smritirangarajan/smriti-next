import HomeHero from "@/components/HomeHero";
import Section from "@/components/ui/Section";
import HobbiesPolaroids from "@/components/HobbiesPolaroids";

export default function Home() {
  return (
    <main>
      <HomeHero />

      {/* Highlights removed per request */}

      <Section title="Hobbies">
        <HobbiesPolaroids />
      </Section>
    </main>
  );
}
