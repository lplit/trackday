import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

export default function TrackNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <MapPin className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
        
        <h1 className="text-3xl font-bold mb-4">Track Not Found</h1>
        
        <p className="text-muted-foreground mb-8">
          The track you&apos;re looking for doesn&apos;t exist in our database. 
          It might have been removed or the URL might be incorrect.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/tracks"
            className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Browse All Tracks
          </Link>
          
          <Link 
            href="/"
            className="inline-flex items-center justify-center w-full border border-input bg-background px-6 py-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
