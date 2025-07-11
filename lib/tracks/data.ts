import { Track } from './types';

/**
 * Track database - In production, this would be replaced with:
 * - Database queries
 * - CMS API calls
 * - External API integration
 * 
 * Following Next.js best practices for data fetching
 */
export const tracks: Track[] = [
  {
    slug: "mugello",
    name: "Mugello Circuit",
    location: "Scarperia, Tuscany",
    country: "Italy",
    length: "5.245 km",
    turns: 15,
    description: "Nestled in the beautiful Tuscan hills, Mugello is a challenging and technical circuit that demands precision and skill. Originally built as a road course in 1974, it has become one of Europe's most respected racing venues.",
    difficulty: "Expert",
    type: "Road Course",
    surface: "Asphalt",
    elevation: "65m",
    recordLap: {
      time: "1:15.144",
      vehicle: "Ducati Panigale V4 R",
      driver: "Francesco Bagnaia",
      year: 2023
    },
    facilities: [
      "Paddock Boxes Available",
      "Professional Timing Systems", 
      "On-site Medical Center",
      "Tire Service",
      "Fuel Station",
      "Restaurant & Catering",
      "Spectator Areas",
      "Parking for 2000+ vehicles",
      "Photography Points",
      "Driver Briefing Rooms"
    ],
    trackdays: [
      {
        provider: "MotoGP Experience",
        nextDate: "2025-03-15",
        price: "€450"
      },
      {
        provider: "Italian Track Days",
        nextDate: "2025-04-22",
        price: "€380"
      },
      {
        provider: "Ducati Riding Experience",
        nextDate: "2025-05-10",
        price: "€520"
      }
    ],
    keyCorners: [
      {
        name: "San Donato (Turn 1)",
        description: "A challenging downhill right-hander that requires heavy braking from 300+ km/h. The elevation change makes it difficult to judge braking points.",
        difficulty: "Expert"
      },
      {
        name: "Luco (Turn 2)",
        description: "A fast left-hand sweep that flows naturally from San Donato. Maintaining momentum here is crucial for the following sequence.",
        difficulty: "Advanced"
      },
      {
        name: "Poggio Secco (Turn 5)",
        description: "The signature corner of Mugello - a fast, sweeping right-hander taken at incredible speeds. Demands total commitment and perfect lines.",
        difficulty: "Expert"
      },
      {
        name: "Casanova-Savelli (Turns 6-7)",
        description: "A technical chicane section that breaks up the rhythm. Requires precise positioning and smooth inputs to maintain speed.",
        difficulty: "Advanced"
      },
      {
        name: "Arrabbiata 1 & 2 (Turns 8-9)",
        description: "The most famous corners at Mugello - two connected right-handers that test both rider and machine. Named after the spicy pasta sauce!",
        difficulty: "Expert"
      }
    ],
    history: "Built in 1974, Mugello Circuit has grown from a simple road course to one of Europe's premier racing facilities. Originally designed by architect Hermann Tilke, the circuit has been the home of the Italian MotoGP since 1994. The track's unique character comes from its natural terrain, with significant elevation changes and flowing corners that reward smooth riding technique. Mugello has witnessed some of the greatest battles in motorcycle racing history, with legendary riders like Valentino Rossi treating it as their home circuit. The facility underwent major renovations in 2018 to improve safety standards while maintaining its challenging character.",
    safetyRating: 9,
    yearBuilt: 1974,
    lastModified: 2018,
    website: "https://www.mugellociruit.it",
    coordinates: {
      lat: 44.0344,
      lng: 11.3714
    }
  },
  {
    slug: "spa-francorchamps",
    name: "Circuit de Spa-Francorchamps",
    location: "Stavelot, Ardennes",
    country: "Belgium",
    length: "7.004 km",
    turns: 19,
    description: "The legendary Spa-Francorchamps is often considered the greatest racing circuit in the world. Set in the beautiful Ardennes forest, this historic track features dramatic elevation changes, high-speed sections, and the famous Eau Rouge corner.",
    difficulty: "Expert",
    type: "Road Course",
    surface: "Asphalt",
    elevation: "103m",
    recordLap: {
      time: "1:41.252",
      vehicle: "Formula 1 W11",
      driver: "Lewis Hamilton",
      year: 2020
    },
    safetyRating: 8,
    yearBuilt: 1921,
    lastModified: 2007
  },
  {
    slug: "nurburgring-nordschleife",
    name: "Nürburgring Nordschleife",
    location: "Nürburg, Rhineland-Palatinate",
    country: "Germany",
    length: "20.832 km",
    turns: 154,
    description: "The Green Hell - the most demanding and legendary race track in the world. With over 150 corners across 21 kilometers of German countryside, the Nordschleife is the ultimate test of skill, courage, and mechanical sympathy.",
    difficulty: "Expert",
    type: "Road Course",
    surface: "Asphalt",
    elevation: "300m",
    recordLap: {
      time: "6:43.300",
      vehicle: "Porsche 919 Hybrid Evo",
      driver: "Timo Bernhard",
      year: 2018
    },
    safetyRating: 7,
    yearBuilt: 1927,
    lastModified: 2013
  },
  {
    slug: "silverstone",
    name: "Silverstone Circuit",
    location: "Northamptonshire",
    country: "United Kingdom",
    length: "5.891 km", 
    turns: 18,
    description: "The Home of British Motor Racing. Silverstone combines high-speed corners with technical sections, creating one of the most complete challenges in motorsport. From the iconic Copse corner to the legendary Maggotts-Becketts complex.",
    difficulty: "Advanced",
    type: "Road Course",
    surface: "Asphalt",
    recordLap: {
      time: "1:24.303",
      vehicle: "Formula 1 W12",
      driver: "Lewis Hamilton", 
      year: 2021
    },
    safetyRating: 9,
    yearBuilt: 1948,
    lastModified: 2010
  },
  {
    slug: "monza",
    name: "Autodromo Nazionale Monza",
    location: "Monza, Lombardy",
    country: "Italy",
    length: "5.793 km",
    turns: 11,
    description: "The Temple of Speed. Monza is the fastest circuit in Formula 1, where pure power and slipstreaming tactics reign supreme. The historic banking and the passionate Italian fans create an atmosphere unlike anywhere else in motorsport.",
    difficulty: "Advanced",
    type: "Road Course", 
    surface: "Asphalt",
    recordLap: {
      time: "1:18.887",
      vehicle: "Formula 1 W12",
      driver: "Valtteri Bottas",
      year: 2021
    },
    safetyRating: 8,
    yearBuilt: 1922,
    lastModified: 2000
  }
];
