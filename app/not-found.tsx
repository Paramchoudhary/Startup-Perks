// app/not-found.tsx
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-[200px] font-black leading-none mb-4 text-primary">
          404
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black uppercase mb-4">
          Page Not Found
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button size="lg">
              <Home className="h-5 w-5" />
              Go Home
            </Button>
          </Link>
          <Link href="/perks">
            <Button variant="outline" size="lg">
              <ArrowLeft className="h-5 w-5" />
              Browse Perks
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
