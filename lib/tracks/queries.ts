import { tracks } from './data';
import { Track, TrackOverview } from './types';
import { notFound } from 'next/navigation';

/**
 * Server-side data fetching utilities for tracks
 * Following Next.js 15 App Router patterns with async Server Components
 */

/**
 * Get all tracks with optional filtering
 * Used in Server Components for track listing pages
 */
export async function getTracks(): Promise<TrackOverview[]> {
  // Simulate async data fetching delay
  // In production, this would be a database query or API call
  await new Promise(resolve => setTimeout(resolve, 0));
  
  return tracks.map(track => ({
    slug: track.slug,
    name: track.name,
    location: track.location,
    country: track.country,
    length: track.length,
    difficulty: track.difficulty,
    safetyRating: track.safetyRating
  }));
}

/**
 * Get a single track by slug
 * Used in Server Components for individual track pages
 * Returns null if track not found
 */
export async function getTrack(slug: string): Promise<Track | null> {
  // Simulate async data fetching delay
  // In production, this would be a database query or API call
  await new Promise(resolve => setTimeout(resolve, 0));
  
  const track = tracks.find(t => t.slug === slug);
  return track || null;
}

/**
 * Get a track by slug with notFound() handling
 * Convenience function for Server Components that should show 404
 */
export async function getTrackOrNotFound(slug: string): Promise<Track> {
  const track = await getTrack(slug);
  
  if (!track) {
    notFound();
  }
  
  return track;
}

/**
 * Get tracks filtered by difficulty
 * Used for filtering functionality
 */
export async function getTracksByDifficulty(difficulty: Track['difficulty']): Promise<TrackOverview[]> {
  await new Promise(resolve => setTimeout(resolve, 0));
  
  return tracks
    .filter(track => track.difficulty === difficulty)
    .map(track => ({
      slug: track.slug,
      name: track.name,
      location: track.location,
      country: track.country,
      length: track.length,
      difficulty: track.difficulty,
      safetyRating: track.safetyRating
    }));
}

/**
 * Get tracks by country
 * Used for geographic filtering
 */
export async function getTracksByCountry(country: string): Promise<TrackOverview[]> {
  await new Promise(resolve => setTimeout(resolve, 0));
  
  return tracks
    .filter(track => track.country.toLowerCase() === country.toLowerCase())
    .map(track => ({
      slug: track.slug,
      name: track.name,
      location: track.location,
      country: track.country,
      length: track.length,
      difficulty: track.difficulty,
      safetyRating: track.safetyRating
    }));
}

/**
 * Search tracks by name or location
 * Used for search functionality
 */
export async function searchTracks(query: string): Promise<TrackOverview[]> {
  await new Promise(resolve => setTimeout(resolve, 0));
  
  const searchTerm = query.toLowerCase();
  
  return tracks
    .filter(track => 
      track.name.toLowerCase().includes(searchTerm) ||
      track.location.toLowerCase().includes(searchTerm) ||
      track.country.toLowerCase().includes(searchTerm)
    )
    .map(track => ({
      slug: track.slug,
      name: track.name,
      location: track.location,
      country: track.country,
      length: track.length,
      difficulty: track.difficulty,
      safetyRating: track.safetyRating
    }));
}

/**
 * Get track statistics
 * Used for overview/stats components
 */
export async function getTrackStats() {
  await new Promise(resolve => setTimeout(resolve, 0));
  
  const countries = [...new Set(tracks.map(track => track.country))];
  const difficulties = tracks.reduce((acc, track) => {
    acc[track.difficulty] = (acc[track.difficulty] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const averageLength = tracks.reduce((sum, track) => {
    const length = parseFloat(track.length.replace(' km', ''));
    return sum + length;
  }, 0) / tracks.length;
  
  return {
    totalTracks: tracks.length,
    countries: countries.length,
    averageLength: Math.round(averageLength * 100) / 100,
    difficulties
  };
}
