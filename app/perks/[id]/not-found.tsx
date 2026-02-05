// app/perks/[id]/not-found.tsx
import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-destructive border-4 border-foreground brutal-shadow mb-8">
          <SearchX className="h-12 w-12 text-destructive-foreground" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">
          Perk Not Found
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          The perk you&apos;re looking for doesn&apos;t exist or may have been removed.
        </p>
        
        <Link href="/perks">
          <Button size="lg">
            <ArrowLeft className="h-5 w-5" />
            Browse All Perks
          </Button>
        </Link>
      </div>
    </div>
  );
}
