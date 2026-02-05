// app/perks/page.tsx
import { Suspense } from "react";
import { Metadata } from "next";
import { startupPerks, type PerkCategory } from "@/src/data/startup-perks";
import { extractCreditValue } from "@/src/lib/utils";
import { SearchFilter } from "@/components/SearchFilter";
import { PerkCard } from "@/components/PerkCard";

export const metadata: Metadata = {
  title: "Browse All Perks | Startup Perks Database",
  description:
    "Search and filter through 40+ startup perks, credits, and programs. Find cloud credits, AI API access, developer tools, and more.",
};

interface PageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    featured?: string;
    sort?: string;
  }>;
}

export default async function PerksPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const query = params.q?.toLowerCase() || "";
  const category = params.category || "";
  const featured = params.featured === "true";
  const sort = params.sort || "value";

  // Filter perks based on search params
  let filteredPerks = [...startupPerks];

  // Search filter
  if (query) {
    filteredPerks = filteredPerks.filter(
      (perk) =>
        perk.company.toLowerCase().includes(query) ||
        perk.name.toLowerCase().includes(query) ||
        perk.description.toLowerCase().includes(query)
    );
  }

  // Category filter
  if (category) {
    filteredPerks = filteredPerks.filter(
      (perk) => perk.category === (category as PerkCategory)
    );
  }

  // Featured filter
  if (featured) {
    filteredPerks = filteredPerks.filter((perk) => perk.featured);
  }

  // Sort
  switch (sort) {
    case "alpha":
      filteredPerks.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "company":
      filteredPerks.sort((a, b) => a.company.localeCompare(b.company));
      break;
    case "value":
    default:
      filteredPerks.sort(
        (a, b) => extractCreditValue(b.credits) - extractCreditValue(a.credits)
      );
      break;
  }

  return (
    <div className="py-8 md:py-12 px-4">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">
            All Perks
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse and filter through {startupPerks.length}+ startup programs,
            credits, and discounts.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 p-6 bg-muted border-4 border-foreground brutal-shadow">
          <Suspense
            fallback={
              <div className="h-32 flex items-center justify-center">
                <div className="animate-pulse font-bold">Loading filters...</div>
              </div>
            }
          >
            <SearchFilter />
          </Suspense>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="font-bold">
            <span className="text-2xl">{filteredPerks.length}</span>{" "}
            <span className="text-muted-foreground">
              {filteredPerks.length === 1 ? "result" : "results"}
              {query && ` for "${query}"`}
            </span>
          </p>
        </div>

        {/* Perks Grid */}
        {filteredPerks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPerks.map((perk) => (
              <PerkCard key={perk.id} perk={perk} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border-4 border-dashed border-foreground/30 bg-muted">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-black uppercase mb-2">
              No perks found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filters to find what you&apos;re
              looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
