/**
 * Track data types following TypeScript best practices
 */

export type TrackDifficulty = "Beginner" | "Intermediate" | "Advanced" | "Expert";
export type TrackType = "Road Course" | "Street Circuit" | "Oval";
export type TrackSurface = "Asphalt" | "Concrete" | "Mixed";

export interface TrackRecordLap {
  time: string;
  vehicle: string;
  driver: string;
  year: number;
}

export interface TrackEvent {
  provider: string;
  nextDate: string;
  price: string;
}

export interface TrackCorner {
  name: string;
  description: string;
  difficulty: string;
}

export interface TrackCoordinates {
  lat: number;
  lng: number;
}

export interface Track {
  slug: string;
  name: string;
  location: string;
  country: string;
  length: string;
  turns: number;
  description: string;
  difficulty: TrackDifficulty;
  type: TrackType;
  surface: TrackSurface;
  elevation?: string;
  recordLap?: TrackRecordLap;
  facilities?: string[];
  trackdays?: TrackEvent[];
  keyCorners?: TrackCorner[];
  history?: string;
  safetyRating?: number;
  yearBuilt?: number;
  lastModified?: number;
  image?: string;
  website?: string;
  coordinates?: TrackCoordinates;
}

/**
 * Track overview type for listing pages
 * Contains essential information for track cards and filtering
 */
export interface TrackOverview {
  slug: string;
  name: string;
  location: string;
  country: string;
  length: string;
  difficulty: TrackDifficulty;
  safetyRating?: number;
}

export interface TrackCardProps {
  track: Track;
}

export interface TrackHeroProps {
  track: Track;
}

export interface TrackTabsProps {
  track: Track;
}
