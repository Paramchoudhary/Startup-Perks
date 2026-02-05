// components/FeaturedGrid.tsx
import { getFeaturedPerks } from "@/src/data/startup-perks";
import { PerkCard } from "./PerkCard";

export function FeaturedGrid() {
  const featuredPerks = getFeaturedPerks();

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
            Featured Perks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The highest-value programs worth applying to first. These can save your startup hundreds of thousands in cloud and tool costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredPerks.map((perk) => (
            <PerkCard key={perk.id} perk={perk} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
