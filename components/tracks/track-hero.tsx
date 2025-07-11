'use client';

import { Track } from '@/lib/tracks/types';
import { Badge } from '@/components/ui/badge';
import { MapPin, Gauge, Calendar, Users, Trophy, Shield, Globe } from 'lucide-react';

interface TrackHeroProps {
  track: Track;
}

/**
 * TrackHero component following React best practices
 * Client Component for any interactive elements
 */
export default function TrackHero({ track }: TrackHeroProps) {
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
    <div className="relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-red-600/10 dark:from-blue-500/20 dark:via-purple-500/10 dark:to-red-500/20"></div>
      
      <div className="relative bg-card/50 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            {/* Main Track Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {track.name}
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{track.location}, {track.country}</span>
                  </div>
                </div>
                
                <Badge 
                  variant="outline" 
                  className={`self-start text-sm font-medium ${getDifficultyColor(track.difficulty)}`}
                >
                  {track.difficulty}
                </Badge>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {track.description}
              </p>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="bg-background/50 rounded-lg p-3 border border-border/30">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Gauge className="h-4 w-4" />
                    Length
                  </div>
                  <div className="font-semibold text-foreground">{track.length}</div>
                </div>
                
                <div className="bg-background/50 rounded-lg p-3 border border-border/30">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Users className="h-4 w-4" />
                    Turns
                  </div>
                  <div className="font-semibold text-foreground">{track.turns}</div>
                </div>

                {track.safetyRating && (
                  <div className="bg-background/50 rounded-lg p-3 border border-border/30">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Shield className="h-4 w-4" />
                      Safety
                    </div>
                    <div className={`font-semibold ${getSafetyColor(track.safetyRating)}`}>
                      {track.safetyRating}/10
                    </div>
                  </div>
                )}

                {track.yearBuilt && (
                  <div className="bg-background/50 rounded-lg p-3 border border-border/30">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Calendar className="h-4 w-4" />
                      Built
                    </div>
                    <div className="font-semibold text-foreground">{track.yearBuilt}</div>
                  </div>
                )}
              </div>

              {/* Record Lap */}
              {track.recordLap && (
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-400/20 dark:to-orange-400/20 rounded-lg p-4 border border-yellow-500/20 dark:border-yellow-400/30">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Trophy className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                    Track Record
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    <div>
                      <div className="font-bold text-lg text-yellow-600 dark:text-yellow-400">
                        {track.recordLap.time}
                      </div>
                      <div className="text-muted-foreground">Lap Time</div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{track.recordLap.driver}</div>
                      <div className="text-muted-foreground">Driver</div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{track.recordLap.vehicle}</div>
                      <div className="text-muted-foreground">{track.recordLap.year}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Next Track Day (if available) */}
            {track.trackdays && track.trackdays.length > 0 && (
              <div className="lg:w-80 bg-background/50 rounded-lg p-6 border border-border/30">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Upcoming Track Days
                </h3>
                <div className="space-y-3">
                  {track.trackdays.slice(0, 3).map((event, index) => (
                    <div key={index} className="pb-3 border-b border-border/30 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex-1">
                          <div className="font-medium text-foreground text-sm">{event.provider}</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(event.nextDate).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {event.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {track.website && (
                  <a 
                    href={track.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mt-4 transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    Visit Official Website
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
