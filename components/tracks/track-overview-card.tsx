'use client';

import { TrackOverview } from '@/lib/tracks/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { MapPin, Gauge, Shield } from 'lucide-react';

interface TrackOverviewCardProps {
  track: TrackOverview;
}

/**
 * TrackOverviewCard component for listing pages
 * Client Component for interactive elements like hover states
 */
export default function TrackOverviewCard({ track }: TrackOverviewCardProps) {
  const getDifficultyColor = (difficulty: TrackOverview['difficulty']) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800';
      case 'Intermediate':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-400 dark:border-yellow-800';
      case 'Advanced':
        return 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-400 dark:border-orange-800';
      case 'Expert':
        return 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-400 dark:border-red-800';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-400 dark:border-gray-800';
    }
  };

  const getSafetyRating = (rating?: number) => {
    if (!rating) return null;
    
    const color = rating >= 9 
      ? 'text-green-600 dark:text-green-400' 
      : rating >= 7 
      ? 'text-yellow-600 dark:text-yellow-400' 
      : 'text-red-600 dark:text-red-400';
    
    return (
      <div className="flex items-center gap-1.5">
        <Shield className={`h-4 w-4 ${color}`} />
        <span className={`text-sm font-semibold ${color}`}>
          {rating}/10
        </span>
      </div>
    );
  };

  return (
    <Link href={`/tracks/${track.slug}`} className="block group h-full">
      <Card className="h-full transition-all duration-200 group-hover:shadow-lg border-border/50 bg-card hover:border-border">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-2">
                {track.name}
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-base text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">{track.location}, {track.country}</span>
              </CardDescription>
            </div>
            <Badge 
              variant="outline" 
              className={`flex-shrink-0 text-xs font-semibold px-3 py-1 ${getDifficultyColor(track.difficulty)}`}
            >
              {track.difficulty}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="space-y-4">
            {/* Track Length */}
            <div className="flex items-center justify-between py-3 border-b border-border/30">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted/50">
                  <Gauge className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Track Length</p>
                  <p className="text-lg font-bold text-foreground">{track.length}</p>
                </div>
              </div>
            </div>

            {/* Safety Rating */}
            {track.safetyRating && (
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted/50">
                    <Shield className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Safety Rating</p>
                    <div className="flex items-center gap-2">
                      <p className={`text-lg font-bold ${
                        track.safetyRating >= 9 
                          ? 'text-green-600 dark:text-green-400' 
                          : track.safetyRating >= 7 
                          ? 'text-yellow-600 dark:text-yellow-400' 
                          : 'text-red-600 dark:text-red-400'
                      }`}>
                        {track.safetyRating}/10
                      </p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        track.safetyRating >= 9 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                          : track.safetyRating >= 7 
                          ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' 
                          : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                      }`}>
                        {track.safetyRating >= 9 ? 'Excellent' : track.safetyRating >= 7 ? 'Good' : 'Fair'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
