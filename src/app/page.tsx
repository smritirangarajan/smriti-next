import HomeHero from "@/components/HomeHero";
import Section from "@/components/ui/Section";
import TornTitle from "@/components/ui/TornTitle";
import HobbiesPolaroids from "@/components/HobbiesPolaroids";

export default function Home() {
  return (
    <main>
      <HomeHero />

      <TornTitle text="Highlights" />
      <Section title="">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="card p-6">
            <p className="text-black/80">Production Engineering Fellow at Meta + MLH</p>
          </div>
          <div className="card p-6">
            <p className="text-black/80">Program Management Intern at Berkeley SkyDeck</p>
          </div>
        </div>
      </Section>

      <TornTitle text="Hobbies" />
      <HobbiesPolaroids />
    </main>
  );
}
