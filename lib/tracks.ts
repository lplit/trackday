export interface Track {
  slug: string;
  name: string;
  location: string;
  country: string;
  length: string;
  turns: number;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  type: "Road Course" | "Street Circuit" | "Oval";
  surface: "Asphalt" | "Concrete" | "Mixed";
  elevation?: string;
  recordLap?: {
    time: string;
    vehicle: string;
    driver: string;
    year: number;
  };
  facilities?: string[];
  trackdays?: {
    provider: string;
    nextDate: string;
    price: string;
  }[];
  keyCorners?: {
    name: string;
    description: string;
    difficulty: string;
  }[];
  history?: string;
  safetyRating?: number;
  yearBuilt?: number;
  lastModified?: number;
  image?: string;
  website?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Track database - in a real application, this would come from a database, CMS, or API
export const tracks: Track[] = [
  {
    slug: "mugello",
    name: "Mugello Circuit",
    location: "Scarperia, Tuscany",
    country: "Italy",
    length: "5.245 km",
    turns: 15,
    description: "One of the most beautiful and challenging circuits in the world, nestled in the rolling hills of Tuscany. Mugello combines high-speed sections with technical corners, demanding precision and bravery from drivers.",
    difficulty: "Expert",
    type: "Road Course",
    surface: "Asphalt",
    elevation: "±51m",
    recordLap: {
      time: "1:15.144",
      vehicle: "MotoGP",
      driver: "Jorge Martin",
      year: 2023
    },
    facilities: [
      "Professional timing system",
      "Medical center",
      "Garages with power",
      "Fuel station",
      "Restaurant",
      "Tire service",
      "Parts shop",
      "Paddock club"
    ],
    trackdays: [
      {
        provider: "PistaDays",
        nextDate: "2025-08-15",
        price: "€395"
      },
      {
        provider: "European Track Events",
        nextDate: "2025-09-22",
        price: "€420"
      },
      {
        provider: "Mugello Exclusive",
        nextDate: "2025-10-10",
        price: "€450"
      }
    ],
    keyCorners: [
      {
        name: "San Donato",
        description: "First corner hairpin requiring heavy braking from 300+ km/h",
        difficulty: "High"
      },
      {
        name: "Luco",
        description: "Fast left-hander taken at around 200 km/h",
        difficulty: "Medium"
      },
      {
        name: "Poggio Secco",
        description: "Challenging chicane section testing car balance",
        difficulty: "High"
      },
      {
        name: "Casanova-Savelli",
        description: "Fast flowing S-curves requiring commitment",
        difficulty: "Very High"
      },
      {
        name: "Arrabiata",
        description: "Double left-hander complex with elevation changes",
        difficulty: "Very High"
      }
    ],
    history: "Built in 1974 as a test track for road cars, Mugello was purchased by Ferrari in 1988. The circuit has hosted Formula 1, MotoGP, and countless other racing series. Its challenging layout and stunning Tuscan backdrop make it a favorite among drivers and enthusiasts worldwide.",
    safetyRating: 9.2,
    yearBuilt: 1974,
    lastModified: 2019,
    website: "https://www.mugellocircuit.it",
    coordinates: {
      lat: 44.0344,
      lng: 11.3719
    }
  },
  {
    slug: "spa-francorchamps",
    name: "Circuit de Spa-Francorchamps",
    location: "Stavelot, Wallonia",
    country: "Belgium",
    length: "7.004 km",
    turns: 20,
    description: "The legendary circuit through the Ardennes forest, home to the famous Eau Rouge corner. A true test of skill and courage.",
    difficulty: "Expert",
    type: "Road Course",
    surface: "Asphalt",
    yearBuilt: 1920,
    lastModified: 2022,
    safetyRating: 8.8
  },
  {
    slug: "nurburgring-nordschleife",
    name: "Nürburgring Nordschleife",
    location: "Nürburg, Rhineland-Palatinate",
    country: "Germany",
    length: "20.832 km",
    turns: 154,
    description: "The Green Hell - the most demanding and iconic racetrack in the world. A pilgrimage site for every driving enthusiast.",
    difficulty: "Expert",
    type: "Road Course",
    surface: "Asphalt",
    yearBuilt: 1927,
    lastModified: 2013,
    safetyRating: 7.5
  },
  {
    slug: "silverstone",
    name: "Silverstone Circuit",
    location: "Northamptonshire",
    country: "United Kingdom",
    length: "5.891 km",
    turns: 18,
    description: "The home of British motorsport, known for its high-speed corners and challenging layout.",
    difficulty: "Advanced",
    type: "Road Course",
    surface: "Asphalt",
    yearBuilt: 1948,
    lastModified: 2010,
    safetyRating: 9.0
  },
  {
    slug: "monza",
    name: "Autodromo Nazionale Monza",
    location: "Monza, Lombardy",
    country: "Italy",
    length: "5.793 km",
    turns: 11,
    description: "The Temple of Speed - a high-velocity circuit demanding slipstream tactics and bravery.",
    difficulty: "Advanced",
    type: "Road Course",
    surface: "Asphalt",
    yearBuilt: 1922,
    lastModified: 2000,
    safetyRating: 8.5
  }
];

// Utility functions
export function getTrackBySlug(slug: string): Track | undefined {
  return tracks.find(track => track.slug === slug);
}

export function getAllTrackSlugs(): string[] {
  return tracks.map(track => track.slug);
}

export function getTracksByCountry(country: string): Track[] {
  return tracks.filter(track => track.country.toLowerCase() === country.toLowerCase());
}

export function getTracksByDifficulty(difficulty: Track["difficulty"]): Track[] {
  return tracks.filter(track => track.difficulty === difficulty);
}

export function getDifficultyColor(difficulty: Track["difficulty"]): string {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800 hover:bg-green-100";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
    case "Advanced":
      return "bg-orange-100 text-orange-800 hover:bg-orange-100";
    case "Expert":
      return "bg-red-100 text-red-800 hover:bg-red-100";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-100";
  }
}

export function getCornerDifficultyColor(difficulty: string): string {
  switch (difficulty.toLowerCase()) {
    case "low":
      return "bg-green-100 text-green-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "high":
      return "bg-orange-100 text-orange-800";
    case "very high":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}
