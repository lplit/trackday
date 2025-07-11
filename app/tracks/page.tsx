import { tracks } from "@/lib/tracks";
import { TrackCard } from "@/components/track-card";

export default function TracksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">European Race Tracks</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Discover the most iconic and challenging racing circuits across Europe. 
          From the legendary Nordschleife to the beautiful hills of Tuscany.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track) => (
          <TrackCard key={track.slug} track={track} />
        ))}
      </div>
    </div>
  );
}
