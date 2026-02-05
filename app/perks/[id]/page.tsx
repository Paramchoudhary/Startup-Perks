// app/perks/[id]/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Star,
  CheckCircle2,
  Info,
  Building2,
} from "lucide-react";
import { getPerkById, categoryLabels, startupPerks } from "@/src/data/startup-perks";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return startupPerks.map((perk) => ({
    id: perk.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const perk = getPerkById(id);
  
  if (!perk) {
    return {
      title: "Perk Not Found | Startup Perks Database",
    };
  }

  return {
    title: `${perk.name} | ${perk.company} | Startup Perks Database`,
    description: perk.description,
    openGraph: {
      title: `${perk.name} - ${perk.credits || "Free"}`,
      description: perk.description,
    },
  };
}

export default async function PerkDetailPage({ params }: PageProps) {
  const { id } = await params;
  const perk = getPerkById(id);

  if (!perk) {
    notFound();
  }

  const categoryBgColors: Record<string, string> = {
    cloud: "bg-blue-500",
    ai: "bg-purple-500",
    database: "bg-green-500",
    analytics: "bg-orange-500",
    "dev-tools": "bg-cyan-500",
    email: "bg-pink-500",
    design: "bg-yellow-500",
    other: "bg-gray-500",
  };

  return (
    <div className="py-8 md:py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Link */}
        <Link
          href="/perks"
          className="inline-flex items-center gap-2 font-bold hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to All Perks
        </Link>

        {/* Hero Card */}
        <Card className="mb-8 overflow-hidden">
          <div
            className={`${categoryBgColors[perk.category]} p-6 md:p-8 border-b-4 border-foreground`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className={`h-5 w-5 ${perk.category === 'design' ? 'text-black' : 'text-white'}`} />
                  <span className={`text-sm font-black uppercase tracking-wider ${perk.category === 'design' ? 'text-black/70' : 'text-white/70'}`}>
                    {perk.company}
                  </span>
                </div>
                <h1 className={`text-3xl md:text-4xl font-black ${perk.category === 'design' ? 'text-black' : 'text-white'}`}>
                  {perk.name}
                </h1>
              </div>
              {perk.featured && (
                <div className="flex items-center gap-2 bg-primary px-4 py-2 border-4 border-foreground brutal-shadow-sm">
                  <Star className="h-5 w-5 fill-primary-foreground" />
                  <span className="font-black uppercase text-sm">Featured</span>
                </div>
              )}
            </div>

            {/* Credits Badge */}
            {perk.credits && (
              <div className="mt-6">
                <div className="inline-block bg-background text-foreground px-6 py-4 border-4 border-foreground brutal-shadow">
                  <span className="text-3xl md:text-4xl font-black">
                    {perk.credits}
                  </span>
                </div>
              </div>
            )}
          </div>

          <CardContent className="p-6 md:p-8">
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-black uppercase mb-4">Description</h2>
              <p className="text-lg leading-relaxed">{perk.description}</p>
            </div>

            {/* Category Badge */}
            <div className="mb-8">
              <Badge variant={perk.category} className="text-sm">
                {categoryLabels[perk.category]}
              </Badge>
            </div>

            {/* Apply Button */}
            <a
              href={perk.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button size="xl" className="w-full md:w-auto">
                Apply Now
                <ExternalLink className="h-5 w-5" />
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Eligibility */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
                Eligibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{perk.eligibility}</p>
            </CardContent>
          </Card>

          {/* Notes */}
          {perk.notes && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-6 w-6 text-blue-500" />
                  Additional Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{perk.notes}</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-muted border-4 border-foreground brutal-shadow text-center">
          <h3 className="text-2xl font-black uppercase mb-4">
            Ready to get started?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Click the button below to visit {perk.company}&apos;s official program page
            and submit your application.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={perk.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                Apply to {perk.company}
                <ExternalLink className="h-5 w-5" />
              </Button>
            </a>
            <Link href="/perks">
              <Button variant="outline" size="lg">
                Browse More Perks
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
