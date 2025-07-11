import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Ruler, RotateCcw } from "lucide-react";
import { Track, getDifficultyColor } from "@/lib/tracks";

interface TrackCardProps {
  track: Track;
}

export function TrackCard({ track }: TrackCardProps) {
  return (
    <Link href={`/tracks/${track.slug}`} className="block">
      <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-[1.02]">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {track.name}
            </CardTitle>
            <Badge className={getDifficultyColor(track.difficulty)}>
              {track.difficulty}
            </Badge>
          </div>
          <CardDescription className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            {track.location}, {track.country}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
              {track.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Ruler className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Length</p>
                  <p className="text-sm font-medium">{track.length}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Turns</p>
                  <p className="text-sm font-medium">{track.turns}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              <Badge variant="outline" className="text-xs">
                {track.type}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {track.surface}
              </Badge>
              {track.yearBuilt && (
                <Badge variant="outline" className="text-xs">
                  Est. {track.yearBuilt}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
