<div align="center">
  <h1>🏁 TrackConnect</h1>
  <h2>The Private Club for European Trackday Enthusiasts</h2>
</div>

<p align="center">
  <em>Join Europe's most exclusive trackday community. Share boxes, discover premium events, and connect with fellow enthusiasts who appreciate the art of precision driving.</em>
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#design-philosophy"><strong>Design Philosophy</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#development"><strong>Development</strong></a> ·
  <a href="#deployment"><strong>Deployment</strong></a>
</p>

<div align="center">
  <strong>🚀 Launching Spring 2025</strong>
</div>

<br/>

## Overview

TrackConnect is a premium landing page for an exclusive European trackday community platform. Built for affluent motorsports enthusiasts who value precision, performance, and community, TrackConnect positions itself as the "private members' club" for trackday coordination.

From Le Mans to Spa-Francorchamps, TrackConnect will be the platform where serious riders connect, coordinate, and conquer Europe's most prestigious racing circuits.

## Features

### 🎯 **Premium Landing Page**
- **Split-screen hero design** (60/40 layout) with premium aesthetics
- **Newsletter signup** with progressive enhancement (optional first name)
- **Social proof elements** with testimonials and statistics
- **Floating statistics overlay** showing community engagement
- **Premium form design** with glassmorphism effects

### 🎨 **Design Excellence** 
- **Motorsports-inspired typography** with racing gradients
- **Dual theme support** (light/dark) with smooth transitions
- **Racing stripe accents** and subtle geometric patterns
- **Premium color schemes** targeting luxury market segment
- **Responsive design** optimized for desktop, tablet, and mobile

### 🌍 **European Focus**
- **Multi-language support** (EN/FR/PL) with language selector
- **European track references** (Le Mans, Spa-Francorchamps, Nürburgring)
- **Premium positioning** for affluent €150-750/trackday market
- **Cultural authenticity** built by trackday veterans

### ⚡ **Technical Features**
- **Next.js 15** with App Router and Turbopack
- **TypeScript** for type safety
- **Tailwind CSS** with custom racing-inspired utilities
- **Framer Motion ready** for advanced animations
- **Performance optimized** with <2s loading on 3G
- **SEO optimized** with proper metadata and schema

## Design Philosophy

TrackConnect balances **motorsports authenticity** with **luxury brand aesthetics**, similar to how premium automotive brands like Aston Martin and Rolex position themselves. The design philosophy centers on:

- **Exclusivity**: "Private club" positioning for wealthy enthusiasts
- **Precision**: Clean, minimal design with attention to detail
- **Performance**: Fast loading and smooth interactions
- **Community**: Emphasis on connecting like-minded individuals
- **European Heritage**: Respect for racing culture and tradition

## Tech Stack

### **Core Framework**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 19** - Latest React features

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Premium component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **next-themes** - Theme switching system

### **Backend Ready**
- **Supabase** - Database and authentication ready
- **Server Actions** - Form handling and API endpoints
- **Middleware** - Request/response processing

### **Development Tools**
- **ESLint** - Code linting with Next.js config
- **PostCSS** - CSS processing with Autoprefixer
- **Turbopack** - Fast development builds

## Development

### **Prerequisites**
- Node.js 18+ 
- npm/yarn/pnpm
- Git

### **Quick Start**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd trackday
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### **Available Scripts**

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### **Project Structure**

```
trackday/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with custom utilities
│   ├── layout.tsx         # Root layout with fonts and themes
│   └── page.tsx           # Landing page composition
├── components/            # React components
│   ├── trackconnect-hero.tsx     # Premium hero section
│   ├── trackconnect-nav.tsx      # Navigation with theme toggle
│   ├── trackconnect-features.tsx # Features and testimonials
│   ├── trackconnect-footer.tsx   # Footer with trust signals
│   └── ui/                       # shadcn/ui components
├── docs/                  # Documentation
│   └── LANDING_PAGE.md   # Complete design specification
├── lib/                   # Utilities
│   └── utils.ts          # Tailwind utilities
└── public/               # Static assets
```

## Deployment

### **Environment Setup**
The project includes Supabase integration for future backend functionality:

1. **Create `.env.local`**
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### **Performance Targets**
- **Loading Speed**: <2 seconds on 3G connection
- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Green across all metrics
- **Mobile Optimization**: Perfect responsive design

## Brand Guidelines

### **Typography**
- **Headlines**: Playfair Display (serif) for premium feel
- **Body Text**: Inter (sans-serif) for readability
- **Racing Gradients**: Custom CSS utilities for brand colors

### **Colors**
- **Primary**: Racing Red (#DC2626 light, #EF4444 dark)
- **Secondary**: Dark Gray (#1F2937 light, #F3F4F6 dark)
- **Accents**: Success Green, Warning Amber
- **Premium Backgrounds**: Subtle gradients and glassmorphism

### **Voice & Tone**
- **Exclusive**: "Private club" positioning
- **Professional**: Premium service quality
- **Authentic**: Built by trackday veterans
- **European**: Cultural respect and local knowledge

## Future Roadmap

### **Phase 1**: Landing Page (Current)
- ✅ Premium design implementation
- ✅ Newsletter signup and lead capture
- ✅ Brand positioning and messaging

### **Phase 2**: Platform Development (Spring 2025)
- 🔄 User authentication and profiles
- 🔄 Event discovery and coordination
- 🔄 Box sharing functionality
- 🔄 Track partnership integration

### **Phase 3**: Community Features
- 📋 Member directory and networking
- 📋 Event reviews and ratings
- 📋 Premium member benefits
- 📋 Mobile app development

## Contributing

This project represents a premium brand implementation. Contributions should maintain the high-quality design standards and performance targets established in the design specification.

### **Standards**
- Follow TypeScript best practices
- Maintain 90+ Lighthouse scores
- Preserve premium design aesthetic
- Ensure responsive compatibility
- Write meaningful commit messages

## License

TrackConnect © 2025. All rights reserved.

---

<div align="center">
  <p><strong>Built by riders, for riders who appreciate precision.</strong></p>
  <p><em>40+ trackdays between founders • European focus • Premium quality</em></p>
</div>
