import Link from "next/link";
import { ArrowLeft, MapPin, Home } from "lucide-react";

export default function TrackNotFound() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="bg-card/50 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link 
              href="/tracks" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Tracks
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <div className="inline-block w-24 h-24 glass-morphism rounded-full border-2 border-primary/20 flex items-center justify-center mb-6">
              <MapPin className="w-12 h-12 text-primary" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4 text-foreground">Track Not Found</h1>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The track you&apos;re looking for doesn&apos;t exist in our database. 
              It might have been removed or the URL might be incorrect.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/tracks"
              className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors racing-glow"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Browse All Tracks
            </Link>
            
            <Link 
              href="/"
              className="inline-flex items-center justify-center w-full border border-border bg-card px-6 py-3 rounded-md hover:bg-muted transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
