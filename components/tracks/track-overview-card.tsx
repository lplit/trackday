'use client';

import { TrackOverview as BaseTrackOverview } from '@/lib/tracks/types';

interface TrackOverview extends BaseTrackOverview {
  leftTurns?: number;
  rightTurns?: number;
}

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Gauge, Shield } from 'lucide-react';

interface TrackOverviewCardProps {
  track: TrackOverview
}

// Helper to render country flag emoji from ISO code
function getFlagEmoji(countryCode?: string) {
  if (!countryCode || countryCode.length !== 2) return null;
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
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



  return (
    <Link
      href={`/tracks/${track.slug}`}
      className="block group h-full"
      data-testid="track-card-link"
    >
      <Card
        className="h-full flex flex-col transition-all duration-300 group-hover:shadow-2xl border-none bg-gradient-to-br from-card via-white/80 to-muted/60 dark:from-card dark:via-muted/80 dark:to-card/80 hover:scale-[1.025] hover:ring-2 hover:ring-primary/30 shadow-lg overflow-hidden relative"
        style={{ minHeight: 440 }}
      >
        {/* Decorative blurred background circle */}
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-primary/10 rounded-full blur-3xl z-0 pointer-events-none" />
        <div className="relative z-10 grid grid-rows-[auto,auto,auto,auto] grid-cols-1 gap-0 pt-10 pb-6 px-8 h-full" style={{ minHeight: 380 }}>
          {/* Title Row */}
          <div className="flex flex-col items-center w-full row-span-1">
            <div className="flex items-center gap-4 mb-3" data-testid="track-card-title-row">
              <CardTitle
                className="text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors text-center drop-shadow-sm tracking-tight"
                data-testid="track-card-title"
              >
                {track.name}
              </CardTitle>
            </div>
            <Badge
              variant="outline"
              className={`text-sm font-semibold px-5 py-2 rounded-full shadow-sm mb-2 mt-1 ${getDifficultyColor(track.difficulty)}`}
              data-testid="track-card-difficulty"
            >
              {track.difficulty}
            </Badge>
          </div>
          {/* Location Row */}
          <div className="flex items-center justify-center w-full row-span-1">
            <CardDescription
              className="flex items-center gap-3 text-lg text-muted-foreground mb-0 mt-0 justify-center max-w-full px-2"
              data-testid="track-card-location"
            >
              {track.countryCode && (
                <span
                  title={track.country}
                  className="text-2xl align-middle select-none drop-shadow-sm"
                  data-testid="track-card-flag"
                >
                  {getFlagEmoji(track.countryCode)}
                </span>
              )}
              <span
                className="font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-[16rem] sm:max-w-[22rem] text-center"
                title={`${track.location}, ${track.country}`}
              >
                {track.location.length > 24
                  ? `${track.location.slice(0, 22)}…`
                  : track.location
                }, {track.country}
              </span>
            </CardDescription>
          </div>
          {/* Categories Row */}
          <div className="flex flex-col gap-5 items-start w-full max-w-xs mx-auto px-2 min-h-[8.5rem] row-span-1" data-testid="track-card-categories">
            {/* Motorcycle Category Row */}
            {track.highestMotorcycleCategory ? (
              <span className="flex flex-col gap-2 px-5 py-3 rounded-xl bg-muted/30 shadow-sm w-full">
                <span className="flex items-center gap-4">
                  <span className="text-2xl">🏍️</span>
                  <span className="font-semibold text-base">{track.highestMotorcycleCategory}</span>
                </span>
                {track.motorcycleRecordLapTime && track.motorcycleRecordLapDriver && (
                  <span className="flex items-center gap-2 text-xs text-muted-foreground pl-8 pt-1" data-testid="track-card-moto-record-lap">
                    <span className="font-semibold text-foreground">{track.motorcycleRecordLapTime}</span>
                    <span>by</span>
                    <span className="font-medium text-foreground">{track.motorcycleRecordLapDriver}</span>
                  </span>
                )}
              </span>
            ) : (
              <span className="flex items-center gap-3 px-4 py-2 rounded-lg w-full opacity-0 select-none pointer-events-none" aria-hidden="true">
                <span className="text-xl">�️</span>
                <span className="font-semibold text-base">Placeholder</span>
              </span>
            )}
            {/* Car Category Row */}
            {track.highestCarCategory ? (
              <span className="flex flex-col gap-2 px-5 py-3 rounded-xl bg-muted/30 shadow-sm w-full">
                <span className="flex items-center gap-4">
                  <span className="text-2xl">🏎️</span>
                  <span className="font-semibold text-base">{track.highestCarCategory}</span>
                </span>
                {track.carRecordLapTime && track.carRecordLapDriver && (
                  <span className="flex items-center gap-2 text-xs text-muted-foreground pl-8 pt-1" data-testid="track-card-car-record-lap">
                    <span className="font-semibold text-foreground">{track.carRecordLapTime}</span>
                    <span>by</span>
                    <span className="font-medium text-foreground">{track.carRecordLapDriver}</span>
                  </span>
                )}
              </span>
            ) : (
              <span className="flex items-center gap-3 px-4 py-2 rounded-lg w-full opacity-0 select-none pointer-events-none" aria-hidden="true">
                <span className="text-xl">�️</span>
                <span className="font-semibold text-base">Placeholder</span>
              </span>
            )}
          </div>
        </div>


        {/* Turns Row */}
        <div className="relative z-10 flex flex-row justify-between items-center gap-6 px-8 pb-0 pt-0 min-h-[3.5rem]">
          <div className="flex-1 flex flex-col items-center justify-center">
            <span className="text-xs text-muted-foreground">Left Turns</span>
            <span className="text-lg font-bold text-foreground" data-testid="track-card-left-turns">
              {typeof track.leftTurns === 'number' ? track.leftTurns : '-'}
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <span className="text-xs text-muted-foreground">Right Turns</span>
            <span className="text-lg font-bold text-foreground" data-testid="track-card-right-turns">
              {typeof track.rightTurns === 'number' ? track.rightTurns : '-'}
            </span>
          </div>
        </div>



        <CardContent className="relative z-10 flex flex-col gap-8 pt-2 pb-8 px-8">
          {/* Track Length */}
          <div className="flex flex-col items-center gap-2 py-4 rounded-xl bg-muted/40 shadow-sm border border-border/20" data-testid="track-card-length">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-muted/30 mb-2">
              <Gauge className="h-7 w-7 text-primary" />
            </div>
            <p className="text-base text-muted-foreground font-medium">Track Length</p>
            <p className="text-2xl font-extrabold text-foreground tracking-tight">{track.length}</p>
          </div>

          {/* Safety Rating */}
          {track.safetyRating && (
            <div className="flex flex-col items-center gap-2 py-4 rounded-xl bg-muted/40 shadow-sm border border-border/20" data-testid="track-card-safety">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-200/20 to-muted/30 mb-2">
                <Shield className="h-7 w-7 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-base text-muted-foreground font-medium">Safety Rating</p>
              <div className="flex items-center gap-3 mt-1">
                <span className={`text-2xl font-extrabold ${track.safetyRating >= 9
                  ? 'text-green-600 dark:text-green-400'
                  : track.safetyRating >= 7
                    ? 'text-yellow-600 dark:text-yellow-400'
                    : 'text-red-600 dark:text-red-400'
                  }`}>
                  {track.safetyRating}/10
                </span>
                <span className={`text-xs px-3 py-1 rounded-full font-semibold shadow-sm ${track.safetyRating >= 9
                  ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                  : track.safetyRating >= 7
                    ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                    : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                  }`}>
                  {track.safetyRating >= 9 ? 'Excellent' : track.safetyRating >= 7 ? 'Good' : 'Fair'}
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
