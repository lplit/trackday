'use client';

import { Track } from '@/lib/tracks/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { MapPin, Gauge, Shield, Calendar } from 'lucide-react';

interface TrackCardProps {
  track: Track;
}

/**
 * TrackCard component following React best practices
 * Client Component for interactive elements like hover states
 */
export default function TrackCard({ track }: TrackCardProps) {
  const getDifficultyColor = (difficulty: Track['difficulty']) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20';
      case 'Intermediate':
        return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20';
      case 'Advanced':
        return 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20';
      case 'Expert':
        return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20';
    }
  };

  const getSafetyColor = (rating?: number) => {
    if (!rating) return 'text-gray-500';
    if (rating >= 9) return 'text-green-600 dark:text-green-400';
    if (rating >= 7) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <Link href={`/tracks/${track.slug}`} className="block group">
      <Card className="h-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10 group-hover:border-blue-500/30 dark:group-hover:shadow-blue-400/10 dark:group-hover:border-blue-400/30 border-border/50 bg-card/50 backdrop-blur-sm">
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
            <Badge 
              variant="outline" 
              className={`shrink-0 text-xs font-medium ${getDifficultyColor(track.difficulty)}`}
            >
              {track.difficulty}
            </Badge>
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
            
            {track.safetyRating && (
              <div className="flex items-center gap-2">
                <Shield className={`h-4 w-4 shrink-0 ${getSafetyColor(track.safetyRating)}`} />
                <span className={`font-medium ${getSafetyColor(track.safetyRating)}`}>
                  {track.safetyRating}/10
                </span>
              </div>
            )}
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
