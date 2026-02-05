// components/SearchFilter.tsx
"use client";

import { useCallback, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Checkbox } from "@/components/ui/Checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { type PerkCategory, categoryLabels } from "@/src/data/startup-perks";

const categories: PerkCategory[] = [
  "cloud",
  "ai",
  "database",
  "analytics",
  "dev-tools",
  "email",
  "design",
  "other",
];

export function SearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const query = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  const featured = searchParams.get("featured") === "true";
  const sort = searchParams.get("sort") || "value";

  const updateParams = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());
      
      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === "") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });

      startTransition(() => {
        router.push(`/perks?${params.toString()}`, { scroll: false });
      });
    },
    [router, searchParams]
  );

  const clearFilters = useCallback(() => {
    startTransition(() => {
      router.push("/perks", { scroll: false });
    });
  }, [router]);

  const hasFilters = query || category || featured || sort !== "value";

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search perks by company, name, or description..."
          value={query}
          onChange={(e) => updateParams({ q: e.target.value || null })}
          className="pl-12 pr-12 h-14 text-base"
        />
        {query && (
          <button
            onClick={() => updateParams({ q: null })}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5" />
          <span className="font-black uppercase text-sm">Filters:</span>
        </div>

        {/* Category Select */}
        <Select
          value={category || "all"}
          onValueChange={(value) => updateParams({ category: value === "all" ? null : value })}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {categoryLabels[cat]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort Select */}
        <Select
          value={sort}
          onValueChange={(value) => updateParams({ sort: value })}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="value">Highest Value</SelectItem>
            <SelectItem value="alpha">Alphabetical</SelectItem>
            <SelectItem value="company">By Company</SelectItem>
          </SelectContent>
        </Select>

        {/* Featured Checkbox */}
        <label className="flex items-center gap-3 cursor-pointer">
          <Checkbox
            checked={featured}
            onCheckedChange={(checked) =>
              updateParams({ featured: checked ? "true" : null })
            }
          />
          <span className="font-bold text-sm uppercase">Featured Only</span>
        </label>

        {/* Clear Filters */}
        {hasFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="ml-auto"
          >
            <X className="h-4 w-4" />
            Clear All
          </Button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        <button onClick={() => updateParams({ category: null })}>
          <Badge
            variant={!category ? "default" : "outline"}
            className="cursor-pointer hover:scale-105 transition-transform"
          >
            All ({categories.length})
          </Badge>
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => updateParams({ category: cat === category ? null : cat })}
          >
            <Badge
              variant={category === cat ? cat : "outline"}
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              {categoryLabels[cat]}
            </Badge>
          </button>
        ))}
      </div>

      {/* Loading indicator */}
      {isPending && (
        <div className="h-1 bg-primary/20 overflow-hidden">
          <div className="h-full bg-primary animate-pulse" />
        </div>
      )}
    </div>
  );
}
