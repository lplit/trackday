'use client';

import { useState } from 'react';
import { Track } from '@/lib/tracks/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MapPin, 
  History, 
  Flag, 
  Car,
  ExternalLink,
  Wrench
} from 'lucide-react';

interface TrackTabsProps {
  track: Track;
}

/**
 * TrackTabs component following React best practices
 * Client Component for tab state management and interactivity
 */
export default function TrackTabs({ track }: TrackTabsProps) {
  const [activeTab, setActiveTab] = useState<'details' | 'corners' | 'events' | 'facilities'>('details');

  const tabs = [
    { id: 'details' as const, label: 'Track Details', icon: MapPin },
    { id: 'corners' as const, label: 'Key Corners', icon: Flag, disabled: !track.keyCorners?.length },
    { id: 'events' as const, label: 'Track Days', icon: Calendar, disabled: !track.trackdays?.length },
    { id: 'facilities' as const, label: 'Facilities', icon: Wrench, disabled: !track.facilities?.length }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20';
      case 'intermediate':
        return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20';
      case 'advanced':
        return 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20';
      case 'expert':
        return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20';
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 p-1 bg-muted/30 rounded-lg border border-border/30">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => !tab.disabled && setActiveTab(tab.id)}
              disabled={tab.disabled}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all
                ${tab.disabled 
                  ? 'text-muted-foreground/50 cursor-not-allowed' 
                  : activeTab === tab.id
                    ? 'bg-background text-foreground shadow-sm border border-border/50'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                }
              `}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'details' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Technical Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Technical Specifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Length</div>
                    <div className="font-semibold text-foreground">{track.length}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Turns</div>
                    <div className="font-semibold text-foreground">{track.turns}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Type</div>
                    <div className="font-semibold text-foreground">{track.type}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Surface</div>
                    <div className="font-semibold text-foreground">{track.surface}</div>
                  </div>
                  {track.elevation && (
                    <>
                      <div>
                        <div className="text-muted-foreground">Elevation Change</div>
                        <div className="font-semibold text-foreground">{track.elevation}</div>
                      </div>
                    </>
                  )}
                  {track.yearBuilt && (
                    <div>
                      <div className="text-muted-foreground">Year Built</div>
                      <div className="font-semibold text-foreground">{track.yearBuilt}</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Track History */}
            {track.history && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <History className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    Track History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {track.history}
                  </p>
                  {track.website && (
                    <a 
                      href={track.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mt-4 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Official Website
                    </a>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {activeTab === 'corners' && track.keyCorners && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {track.keyCorners.map((corner, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle className="text-lg">{corner.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Flag className="h-4 w-4" />
                        Turn {index + 1}
                      </CardDescription>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getDifficultyColor(corner.difficulty)}`}
                    >
                      {corner.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {corner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'events' && track.trackdays && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {track.trackdays.map((event, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/20 to-transparent"></div>
                <CardHeader>
                  <CardTitle className="text-lg">{event.provider}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(event.nextDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Price</div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {event.price}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">
                        {Math.ceil((new Date(event.nextDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))} days
                      </div>
                      <div className="text-xs text-muted-foreground">until event</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'facilities' && track.facilities && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-green-600 dark:text-green-400" />
                Available Facilities
              </CardTitle>
              <CardDescription>
                Services and amenities available at the circuit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {track.facilities.map((facility, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/30"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-foreground">{facility}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
