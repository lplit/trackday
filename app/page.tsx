import { LandingHero, LandingNav, LandingFeatures } from "@/components/landing";
import { GlobalFooter } from "@/components/global-footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Premium Header with Navigation */}
      <header className="relative z-50 flex items-center justify-between px-6 lg:px-8 py-6 bg-background/80 backdrop-blur-lg border-b border-border/10">
        <div className="flex items-center">
          <h1 className="text-2xl lg:text-3xl font-serif font-bold racing-text-gradient tracking-tight">
            TrackConnect
          </h1>
        </div>
        <LandingNav />
      </header>

      {/* Full Viewport Hero Section */}
      <section className="min-h-screen relative">
        <LandingHero />
      </section>

      {/* Features Section */}
      <section className="relative z-10">
        <LandingFeatures />
      </section>

      {/* Footer */}
      <GlobalFooter />
    </main>
  );
}
