// components/Footer.tsx
import { Github, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-muted mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-bold">
            <span>Last updated: February 2026</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-destructive fill-destructive" /> for founders
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">Source Code</span>
            </Link>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t-2 border-foreground/20">
          <p className="text-xs text-muted-foreground text-center">
            Data sourced from official program pages and verified startup resources.
            Always verify eligibility and terms directly with program providers.
          </p>
        </div>
      </div>
    </footer>
  );
}
