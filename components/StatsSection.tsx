// components/StatsSection.tsx
import { startupPerks, categoryLabels } from "@/src/data/startup-perks";
import { extractCreditValue } from "@/src/lib/utils";
import { DollarSign, Layers, Award, Building2 } from "lucide-react";

export function StatsSection() {
  const totalPerks = startupPerks.length;
  const featuredCount = startupPerks.filter((p) => p.featured).length;
  const categoriesCount = Object.keys(categoryLabels).length;
  
  // Calculate estimated total value
  const totalValue = startupPerks.reduce((sum, perk) => {
    return sum + extractCreditValue(perk.credits);
  }, 0);

  const formatValue = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M+`;
    }
    return `$${(value / 1000).toFixed(0)}K+`;
  };

  const stats = [
    {
      label: "Total Perks",
      value: totalPerks.toString(),
      icon: Layers,
      color: "bg-blue-500",
    },
    {
      label: "Est. Value",
      value: formatValue(totalValue),
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      label: "Featured",
      value: featuredCount.toString(),
      icon: Award,
      color: "bg-yellow-500",
    },
    {
      label: "Categories",
      value: categoriesCount.toString(),
      icon: Building2,
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-12 px-4 bg-muted border-y-4 border-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-6 bg-background border-4 border-foreground brutal-shadow"
              >
                <div
                  className={`w-14 h-14 ${stat.color} border-4 border-foreground flex items-center justify-center mb-4 brutal-shadow-sm`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <span className="text-3xl md:text-4xl font-black">
                  {stat.value}
                </span>
                <span className="text-sm font-bold uppercase tracking-wide text-muted-foreground mt-1">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
