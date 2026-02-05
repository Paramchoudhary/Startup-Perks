// components/Header.tsx
import Link from "next/link";
import { Zap } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-foreground bg-background">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-12 w-12 items-center justify-center border-4 border-foreground bg-primary brutal-shadow-sm group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:group-hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all">
            <Zap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-black uppercase tracking-tight hidden sm:block">
            Startup Perks
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/perks">
            <Button variant="ghost" size="sm">
              Browse All
            </Button>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
