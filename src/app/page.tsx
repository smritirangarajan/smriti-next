import HomeHero from "@/components/HomeHero";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <main>
      <HomeHero />

      <Section title="Highlights">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="card p-6">
            <p className="text-black/80">Production Engineering Fellow at Meta + MLH</p>
          </div>
          <div className="card p-6">
            <p className="text-black/80">Program Management Intern at Berkeley SkyDeck</p>
          </div>
        </div>
      </Section>
    </main>
  );
}
