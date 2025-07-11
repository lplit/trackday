import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { getTrackOrNotFound } from "@/lib/tracks/queries";
import TrackHero from "@/components/tracks/track-hero";
import TrackTabs from "@/components/tracks/track-tabs";
import { GlobalFooter } from "@/components/global-footer";
import { tracks } from "@/lib/tracks/data";

/**
 * Generate static params for all tracks
 * Following Next.js 15 static generation patterns
 */
export async function generateStaticParams() {
  return tracks.map((track) => ({
    slug: track.slug,
  }));
}

/**
 * Generate metadata for each track page
 * Following Next.js 15 metadata patterns
 */
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const track = tracks.find(t => t.slug === slug);
  
  if (!track) {
    return {
      title: "Track Not Found"
    };
  }

  return {
    title: `${track.name} - ${track.location} | TrackConnect`,
    description: track.description,
    keywords: [
      track.name.toLowerCase(),
      track.location.toLowerCase(),
      track.country.toLowerCase(),
      "trackday",
      "racing",
      "circuit",
      "motorsports"
    ]
  };
}

/**
 * Individual track page - Server Component
 * Following Next.js 15 App Router patterns with async data fetching
 */
export default async function TrackPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  // Use the server-side data fetching function with notFound handling
  const track = await getTrackOrNotFound(slug);

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Navigation */}
      <div className="bg-card/50 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link 
                href="/tracks" 
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                All Tracks
              </Link>
            </div>
            <div className="text-sm font-medium text-foreground hidden md:block">
              {track.name}
            </div>
            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Track Hero Section */}
      <TrackHero track={track} />

      {/* Track Content Tabs */}
      <TrackTabs track={track} />

      {/* Global Footer */}
      <GlobalFooter />
    </div>
  );
}
