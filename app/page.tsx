import { TrackConnectHero } from "@/components/trackconnect-hero";
import { TrackConnectNav } from "@/components/trackconnect-nav";
import { TrackConnectFeatures } from "@/components/trackconnect-features";
import { TrackConnectFooter } from "@/components/trackconnect-footer";

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
        <TrackConnectNav />
      </header>

      {/* Full Viewport Hero Section */}
      <section className="min-h-screen relative">
        <TrackConnectHero />
      </section>

      {/* Features Section */}
      <section className="relative z-10">
        <TrackConnectFeatures />
      </section>

      {/* Footer */}
      <TrackConnectFooter />
    </main>
  );
}
