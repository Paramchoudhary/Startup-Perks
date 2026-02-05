// components/PerkCard.tsx
import Link from "next/link";
import { ExternalLink, Star, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { type StartupPerk, type PerkCategory, categoryLabels } from "@/src/data/startup-perks";

interface PerkCardProps {
  perk: StartupPerk;
  featured?: boolean;
}

const categoryColors: Record<PerkCategory, string> = {
  cloud: "bg-blue-500",
  ai: "bg-purple-500",
  database: "bg-green-500",
  analytics: "bg-orange-500",
  "dev-tools": "bg-cyan-500",
  email: "bg-pink-500",
  design: "bg-yellow-500",
  other: "bg-gray-500",
};

export function PerkCard({ perk, featured }: PerkCardProps) {
  const categoryBgClass = categoryColors[perk.category];

  return (
    <Card className={`flex flex-col h-full brutal-hover ${featured ? 'border-primary bg-primary/5' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-black uppercase tracking-wider text-muted-foreground mb-1">
              {perk.company}
            </p>
            <CardTitle className="line-clamp-2 text-lg">
              {perk.name}
            </CardTitle>
          </div>
          {perk.featured && (
            <div className="flex-shrink-0">
              <Star className="h-5 w-5 fill-primary text-primary" />
            </div>
          )}
        </div>
        
        {perk.credits && (
          <div className="mt-3">
            <span className={`inline-block px-4 py-2 text-lg font-black border-4 border-foreground brutal-shadow-sm ${categoryBgClass} ${perk.category === 'design' ? 'text-black' : 'text-white'}`}>
              {perk.credits}
            </span>
          </div>
        )}
      </CardHeader>

      <CardContent className="flex-1 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {perk.description}
        </p>
        
        <Badge variant={perk.category as PerkCategory}>
          {categoryLabels[perk.category]}
        </Badge>
      </CardContent>

      <CardFooter className="flex gap-2 pt-4 border-t-2 border-foreground/20">
        <Link href={`/perks/${perk.id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            Details
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
        <a
          href={perk.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button size="sm" className="w-full">
            Apply
            <ExternalLink className="h-4 w-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
