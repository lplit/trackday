import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, MapPin, Ruler, RotateCcw, Calendar, Car } from "lucide-react";
import { 
  getTrackBySlug, 
  getAllTrackSlugs, 
  getDifficultyColor, 
  getCornerDifficultyColor
} from "@/lib/tracks";

export async function generateStaticParams() {
  // Get all track slugs for static generation
  return getAllTrackSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const track = getTrackBySlug(slug);
  
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

export default async function TrackPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const track = getTrackBySlug(slug);

  if (!track) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Navigation */}
      <Link 
        href="/tracks" 
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Tracks
      </Link>

      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">{track.name}</h1>
            <div className="flex items-center text-lg text-muted-foreground mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              {track.location}, {track.country}
            </div>
          </div>
          <Badge className={getDifficultyColor(track.difficulty)}>
            {track.difficulty}
          </Badge>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-4xl">{track.description}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <Ruler className="w-6 h-6 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">{track.length}</p>
            <p className="text-sm text-muted-foreground">Length</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <RotateCcw className="w-6 h-6 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">{track.turns}</p>
            <p className="text-sm text-muted-foreground">Turns</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="w-6 h-6 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">{track.yearBuilt || 'N/A'}</p>
            <p className="text-sm text-muted-foreground">Built</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Car className="w-6 h-6 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">{track.safetyRating ? `${track.safetyRating}/10` : 'N/A'}</p>
            <p className="text-sm text-muted-foreground">Safety</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Technical Details */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Circuit Type</p>
                  <p className="text-muted-foreground">{track.type}</p>
                </div>
                <div>
                  <p className="font-medium">Surface</p>
                  <p className="text-muted-foreground">{track.surface}</p>
                </div>
                <div>
                  <p className="font-medium">Elevation Change</p>
                  <p className="text-muted-foreground">{track.elevation || 'N/A'}</p>
                </div>
                <div>
                  <p className="font-medium">Last Modified</p>
                  <p className="text-muted-foreground">{track.lastModified || 'N/A'}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Record Lap */}
          {track.recordLap && (
            <Card>
              <CardHeader>
                <CardTitle>Track Record</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="font-medium">Time</p>
                    <p className="text-muted-foreground">{track.recordLap.time}</p>
                  </div>
                  <div>
                    <p className="font-medium">Vehicle</p>
                    <p className="text-muted-foreground">{track.recordLap.vehicle}</p>
                  </div>
                  <div>
                    <p className="font-medium">Driver</p>
                    <p className="text-muted-foreground">{track.recordLap.driver}</p>
                  </div>
                  <div>
                    <p className="font-medium">Year</p>
                    <p className="text-muted-foreground">{track.recordLap.year}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Key Corners */}
          {track.keyCorners && track.keyCorners.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Key Corners</CardTitle>
                <CardDescription>
                  The most challenging and characteristic sections of the circuit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {track.keyCorners.map((corner, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{corner.name}</h4>
                        <Badge className={getCornerDifficultyColor(corner.difficulty)}>
                          {corner.difficulty}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{corner.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* History */}
          {track.history && (
            <Card>
              <CardHeader>
                <CardTitle>History</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{track.history}</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Trackdays */}
          {track.trackdays && track.trackdays.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Track Days</CardTitle>
                <CardDescription>
                  Book your spot at {track.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {track.trackdays.map((event, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium">{event.provider}</p>
                        <Badge variant="outline">{event.price}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {new Date(event.nextDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                      <button className="w-full bg-primary text-primary-foreground px-3 py-2 rounded text-sm hover:bg-primary/90 transition-colors">
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Facilities */}
          {track.facilities && track.facilities.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {track.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                      <span className="text-sm">{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                Book Track Day
              </button>
              <button className="w-full border border-input bg-background px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground transition-colors">
                Share Track Info
              </button>
              <button className="w-full border border-input bg-background px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground transition-colors">
                Add to Favorites
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
