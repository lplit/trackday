import Link from "next/link";
import { getTracks, getTrackStats } from "@/lib/tracks/queries";
import { TrackOverviewCard } from "@/components/tracks";
import { Badge } from "@/components/ui/badge";
import { Filter, Home } from "lucide-react";
import { GlobalFooter } from "@/components/global-footer";

/**
 * Tracks listing page - Server Component
 * Following Next.js 15 App Router patterns with async data fetching
 */
export default async function TracksPage() {
  // Fetch data in Server Component
  const tracks = await getTracks();
  const stats = await getTrackStats();
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Link>
            <h2 className="text-lg font-semibold text-foreground">European Race Tracks</h2>
            <div className="w-16" /> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Racing stripe decoration */}
            <div className="racing-stripe mb-8 max-w-xs mx-auto"></div>
            
            <h1 className="text-5xl font-bold mb-6 tracking-tight racing-title text-foreground">
              European Race Tracks
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover the most iconic and challenging racing circuits across Europe. 
              From the legendary Nordschleife to the beautiful hills of Tuscany.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 text-center">
              <div className="glass-morphism rounded-lg p-4">
                <p className="text-3xl font-bold racing-text-gradient">{tracks.length}</p>
                <p className="text-sm text-muted-foreground">Tracks Available</p>
              </div>
              <div className="glass-morphism rounded-lg p-4">
                <p className="text-3xl font-bold racing-text-gradient">
                  {new Set(tracks.map(t => t.country)).size}
                </p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div className="glass-morphism rounded-lg p-4">
                <p className="text-3xl font-bold racing-text-gradient">
                  {Object.keys(stats.difficulties).length}
                </p>
                <p className="text-sm text-muted-foreground">Difficulty Levels</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center text-sm font-medium text-muted-foreground">
              <Filter className="w-4 h-4 mr-2" />
              Filter by difficulty:
            </div>
            <div className="flex flex-wrap gap-2">
              {["Beginner", "Intermediate", "Advanced", "Expert"].map((difficulty) => {
                const count = tracks.filter(t => t.difficulty === difficulty).length;
                if (count === 0) return null;
                
                return (
                  <Badge key={difficulty} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                    {difficulty} ({count})
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Tracks Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track) => (
            <TrackOverviewCard key={track.slug} track={track} />
          ))}
        </div>
      </div>

      {/* Global Footer */}
      <GlobalFooter />
    </div>
  );
}
