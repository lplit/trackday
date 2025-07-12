import { Track } from '@/lib/tracks/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DifficultyBadge, SafetyRating } from '@/components/ui';
import Link from 'next/link';
import { MapPin, Gauge, Calendar } from 'lucide-react';

interface TrackCardProps {
  track: Track;
}

/**
 * TrackCard component following React 19 best practices
 * Server Component - No client-side state needed for static display
 * React 19 automatically optimizes this component
 */
export default function TrackCard({ track }: TrackCardProps) {
  return (
    <Link href={`/tracks/${track.slug}`} className="block group">
      <Card className="h-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10 group-hover:border-blue-500/30 dark:group-hover:shadow-blue-400/10 dark:group-hover:border-blue-400/30 border-border/50 glass-card">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                {track.name}
              </CardTitle>
              <CardDescription className="flex items-center gap-1 text-sm mt-1">
                <MapPin className="h-3 w-3 shrink-0" />
                <span className="truncate">{track.location}, {track.country}</span>
              </CardDescription>
            </div>
            <DifficultyBadge difficulty={track.difficulty} className="shrink-0" />
          </div>
        </CardHeader>

        <CardContent className="pt-0 space-y-3">
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {track.description}
          </p>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Gauge className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="text-foreground font-medium">{track.length}</span>
            </div>
            
            <SafetyRating rating={track.safetyRating} size="sm" />
          </div>

          {track.trackdays && track.trackdays.length > 0 && (
            <div className="flex items-center gap-2 text-sm pt-1 border-t border-border/30">
              <Calendar className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="text-muted-foreground">
                Next event: {new Date(track.trackdays[0].nextDate).toLocaleDateString()}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
