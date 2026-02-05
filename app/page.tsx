// app/page.tsx
import Link from "next/link";
import { ArrowRight, Sparkles, Rocket, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FeaturedGrid } from "@/components/FeaturedGrid";
import { StatsSection } from "@/components/StatsSection";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 border-4 border-foreground rotate-12" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/20 border-4 border-foreground -rotate-6" />
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-accent/20 border-4 border-foreground rotate-45" />
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-primary/10 border-4 border-foreground -rotate-12" />
        </div>

        <div className="container mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary border-4 border-foreground brutal-shadow mb-8">
            <Sparkles className="h-5 w-5" />
            <span className="font-black uppercase text-sm">
              Updated February 2026
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-6">
            Startup
            <br />
            <span className="inline-block bg-primary px-4 py-2 -rotate-1 border-4 border-foreground brutal-shadow-lg">
              Perks
            </span>
            <br />
            Database
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto mb-12 text-muted-foreground">
            Discover <span className="text-foreground">$1M+</span> in free cloud credits, 
            AI API access, developer tools, and startup programs. 
            All in one place, constantly updated.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/perks">
              <Button size="xl" className="gap-3">
                <Rocket className="h-6 w-6" />
                Browse All Perks
                <ArrowRight className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="/perks?featured=true">
              <Button variant="secondary" size="xl" className="gap-3">
                <Zap className="h-6 w-6" />
                Featured Only
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Perks Grid */}
      <FeaturedGrid />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary border-y-4 border-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 text-primary-foreground">
            Ready to Save?
          </h2>
          <p className="text-xl font-bold max-w-2xl mx-auto mb-8 text-primary-foreground/80">
            Stop paying full price for the tools you need. Start applying to these programs today and save your runway.
          </p>
          <Link href="/perks">
            <Button variant="outline" size="xl" className="bg-background">
              Explore All {/* Using a placeholder, actual count from data */}
              <span className="bg-primary text-primary-foreground px-2 py-1 ml-2 border-2 border-foreground text-sm">
                40+ Perks
              </span>
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-12">
            By Category
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Cloud Infrastructure", color: "bg-blue-500", emoji: "☁️" },
              { name: "AI & ML Platforms", color: "bg-purple-500", emoji: "🤖" },
              { name: "Database Services", color: "bg-green-500", emoji: "🗄️" },
              { name: "Analytics & Monitoring", color: "bg-orange-500", emoji: "📊" },
              { name: "Developer Tools", color: "bg-cyan-500", emoji: "🛠️" },
              { name: "Communication", color: "bg-pink-500", emoji: "📧" },
              { name: "Design & Collab", color: "bg-yellow-500", emoji: "🎨" },
              { name: "Other Services", color: "bg-gray-500", emoji: "📦" },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={`/perks?category=${cat.name.toLowerCase().split(" ")[0]}`}
                className={`${cat.color} p-6 border-4 border-foreground brutal-shadow brutal-hover flex flex-col items-center text-center`}
              >
                <span className="text-4xl mb-2">{cat.emoji}</span>
                <span className={`font-black uppercase text-sm ${cat.color === 'bg-yellow-500' ? 'text-black' : 'text-white'}`}>
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
