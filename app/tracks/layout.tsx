import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | TrackConnect",
    default: "European Race Tracks | TrackConnect"
  },
  description: "Discover the most iconic and challenging racing circuits across Europe. Book trackdays, read detailed track guides, and connect with fellow enthusiasts.",
  keywords: [
    "trackdays",
    "racing circuits", 
    "European tracks",
    "motorsports",
    "track guides",
    "circuit information",
    "race tracks",
    "driving experiences"
  ]
};

export default function TracksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {children}
    </div>
  );
}
