"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Mail, Star, Trophy, Zap } from "lucide-react";

export function TrackConnectHero() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call - in real implementation, connect to your newsletter service
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Premium Background with Parallax Effect */}
      <div className="absolute inset-0 hero-parallax">
        {/* Base background with subtle pattern */}
        <div className="absolute inset-0 track-pattern opacity-30" />
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/90" />
        
        {/* Floating geometric elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Racing stripe accents */}
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 right-1/3 translate-x-2 w-1 h-full bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
      </div>

      {/* Split-screen layout as specified */}
      <div className="relative z-40 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[60%,40%] gap-12 items-center">
            
            {/* Left Side - Content (60% width) */}
            <div className="space-y-8 lg:space-y-10">
              {/* Premium launch badge */}
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium">
                <Star className="w-3 h-3 mr-2" />
                Launching Spring 2025 • Limited Beta Access
              </Badge>

              {/* Primary headline stack as specified */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight tracking-tight">
                  The Private Club for{" "}
                  <span className="racing-text-gradient">European Trackday</span>{" "}
                  Enthusiasts
                </h1>
                
                <h2 className="text-xl md:text-2xl lg:text-3xl font-normal text-muted-foreground leading-relaxed">
                  Connect. Coordinate. Conquer the Track.
                </h2>
              </div>

              {/* Value proposition copy as specified */}
              <div className="space-y-4 text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-2xl">
                <p className="text-foreground/80">
                  Join Europe's most exclusive trackday community. Share boxes, discover premium events, 
                  and connect with fellow enthusiasts who appreciate the art of precision driving. 
                  From Le Mans to Spa-Francorchamps, your next trackday adventure starts here.
                </p>
                <p className="text-base lg:text-lg font-medium text-primary">
                  Early access to our exclusive platform launching Spring 2025. Be the first to experience the future of trackday coordination.
                </p>
              </div>

              {/* Premium Newsletter Signup Form */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl p-8 lg:p-10 premium-shadow max-w-md">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Join the Elite</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Limited beta access for founding members
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Optional first name field */}
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="First Name (optional)"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="h-14 text-base border-2 focus:border-primary/50 transition-colors"
                        />
                      </div>
                      
                      {/* Email field with floating label design */}
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="pl-10 h-14 text-base border-2 focus:border-primary/50 transition-colors"
                        />
                      </div>
                      
                      {/* Primary CTA button with gradient */}
                      <Button 
                        type="submit" 
                        size="lg"
                        className="w-full h-14 text-lg font-semibold racing-gradient hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Joining the Elite...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            Join the Elite
                            <ChevronRight className="w-5 h-5 ml-2" />
                          </div>
                        )}
                      </Button>
                    </form>
                    
                    <p className="text-xs text-muted-foreground mt-4 text-center">
                      First 1,000 subscribers get premium features free
                    </p>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Welcome to the Elite!</h3>
                    <p className="text-sm text-muted-foreground">
                      You'll be the first to know when we launch in Spring 2025.
                    </p>
                  </div>
                )}
              </div>

              {/* Social proof elements */}
              <div className="space-y-4">
                <blockquote className="border-l-4 border-primary/20 pl-4 italic text-muted-foreground">
                  "Finally, a platform built for serious trackday enthusiasts. Can't wait for the full launch."
                  <footer className="text-sm mt-1 font-medium text-foreground">
                    — Alexandre M., Le Mans Regular
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Right Side - Visual Content (40% width) */}
            <div className="relative lg:block hidden">
              {/* Hero image placeholder with floating statistics */}
              <div className="relative">
                {/* Main visual area */}
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 rounded-2xl border border-border/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <Zap className="w-12 h-12 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground px-8">
                        Premium trackday imagery will be placed here
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating statistics overlay */}
                  <div className="absolute top-6 right-6 floating-stats rounded-lg p-4 max-w-[140px]">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-xs text-muted-foreground">Pre-Registered</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 floating-stats rounded-lg p-4 max-w-[140px]">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">12</div>
                      <div className="text-xs text-muted-foreground">Partner Tracks</div>
                    </div>
                  </div>
                </div>

                {/* Additional brand elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
