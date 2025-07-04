import { Shield, Users, Calendar, Trophy, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function TrackConnectFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Exclusive Community",
      description: "Private club atmosphere for serious trackday enthusiasts who value quality over quantity.",
    },
    {
      icon: Users,
      title: "Box Sharing",
      description: "Connect with like-minded riders to share premium paddock boxes and reduce costs.",
    },
    {
      icon: Calendar,
      title: "Event Discovery",
      description: "Discover and coordinate attendance at the finest trackday events across Europe.",
    },
    {
      icon: Trophy,
      title: "Premium Events",
      description: "Access to exclusive trackdays at legendary circuits like Le Mans, Spa, and Nürburgring.",
    },
    {
      icon: MapPin,
      title: "European Network",
      description: "Comprehensive coverage of Europe's most prestigious racing circuits and organizers.",
    },
    {
      icon: Clock,
      title: "Early Access",
      description: "Be among the first to secure spots at high-demand trackday events before public release.",
    },
  ];

  const testimonials = [
    {
      name: "Alexandre M.",
      location: "Le Mans Regular",
      quote: "Finally, a platform built for serious trackday enthusiasts. Can't wait for the full launch.",
      avatar: "AM",
    },
    {
      name: "Sophia K.",
      location: "Spa-Francorchamps",
      quote: "The box-sharing feature will revolutionize how we approach trackdays. Brilliant concept.",
      avatar: "SK",
    },
    {
      name: "Marco R.",
      location: "Mugello Circuit",
      quote: "Built by people who actually understand trackday culture. This is what we've been waiting for.",
      avatar: "MR",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Features Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 mb-6">
            Platform Features
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Built for the Modern{" "}
            <span className="racing-text-gradient">Trackday Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every feature designed with the affluent European trackday enthusiast in mind. 
            From coordination to community, we understand what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-6">
            What Early Members Are Saying
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join riders who understand the value of precision, community, and exclusive access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
              <blockquote className="text-sm italic text-muted-foreground leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              <span>40+ Combined Trackdays</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              <span>European Focus</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              <span>Premium Partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
