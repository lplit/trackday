import { Calendar, MapPin, Mail, Home, Map } from "lucide-react";
import { ThemeSwitcher } from "@/components/shared";
import Link from "next/link";

export function GlobalFooter() {
  return (
    <footer className="relative z-40 border-t border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold racing-text-gradient">
              TrackConnect
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The exclusive platform for European trackday enthusiasts. 
              Built by riders, for riders who appreciate precision and community.
            </p>
            <div className="text-xs text-muted-foreground">
              40+ trackdays between founders
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Explore</h4>
            <nav className="space-y-3 text-sm">
              <Link 
                href="/" 
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                <span>Home</span>
              </Link>
              <Link 
                href="/tracks" 
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Map className="w-4 h-4 mr-2" />
                <span>European Tracks</span>
              </Link>
              <Link 
                href="/auth/sign-up" 
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Join Community</span>
              </Link>
            </nav>
          </div>

          {/* Launch Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Launch Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                <span>Spring 2025 Launch</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span>European Track Network</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <span>Beta Access Available</span>
              </div>
            </div>
          </div>

          {/* Trust Signals & Theme */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Community</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>500+ Pre-registered members</div>
              <div>12 Partner tracks confirmed</div>
              <div>Premium features included</div>
            </div>
            
            {/* Theme Switcher */}
            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Theme</span>
                <ThemeSwitcher />
              </div>
            </div>
            
            <div className="text-xs text-muted-foreground pt-2">
              Built for the 2025 trackday season
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-xs text-muted-foreground">
            © 2025 TrackConnect. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-xs text-muted-foreground">
            <a href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
