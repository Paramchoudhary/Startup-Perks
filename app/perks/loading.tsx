// app/perks/loading.tsx
export default function Loading() {
  return (
    <div className="py-8 md:py-12 px-4">
      <div className="container mx-auto">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-12 w-64 bg-muted border-4 border-foreground brutal-shadow animate-pulse mb-4" />
          <div className="h-6 w-96 max-w-full bg-muted border-2 border-foreground/30 animate-pulse" />
        </div>

        {/* Filter Skeleton */}
        <div className="mb-8 p-6 bg-muted border-4 border-foreground brutal-shadow">
          <div className="h-14 w-full bg-background border-4 border-foreground brutal-shadow animate-pulse mb-4" />
          <div className="flex flex-wrap gap-4">
            <div className="h-12 w-48 bg-background border-4 border-foreground brutal-shadow animate-pulse" />
            <div className="h-12 w-40 bg-background border-4 border-foreground brutal-shadow animate-pulse" />
            <div className="h-6 w-32 bg-background border-2 border-foreground animate-pulse" />
          </div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-80 bg-card border-4 border-foreground brutal-shadow animate-pulse"
            >
              <div className="p-6 space-y-4">
                <div className="h-4 w-20 bg-muted border-2 border-foreground/30" />
                <div className="h-6 w-full bg-muted border-2 border-foreground/30" />
                <div className="h-10 w-32 bg-primary/20 border-4 border-foreground brutal-shadow-sm" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-muted border-2 border-foreground/30" />
                  <div className="h-4 w-3/4 bg-muted border-2 border-foreground/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
