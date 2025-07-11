"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TrackConnectNav() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <Link 
          href="/tracks" 
          className="hover:text-primary transition-colors duration-200"
        >
          Tracks
        </Link>
        <a 
          href="#about" 
          className="hover:text-primary transition-colors duration-200"
        >
          About
        </a>
        <a 
          href="#contact" 
          className="hover:text-primary transition-colors duration-200"
        >
          Contact
        </a>
        
        {/* Language Selector */}
        <div className="flex items-center space-x-2 text-xs">
          <button className="px-2 py-1 rounded hover:bg-muted transition-colors">
            EN
          </button>
          <span className="text-muted-foreground">|</span>
          <button className="px-2 py-1 rounded hover:bg-muted transition-colors">
            FR
          </button>
          <span className="text-muted-foreground">|</span>
          <button className="px-2 py-1 rounded hover:bg-muted transition-colors">
            PL
          </button>
        </div>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-8 h-8 p-0"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 transition-transform duration-300 rotate-0 scale-100" />
          ) : (
            <Moon className="h-4 w-4 transition-transform duration-300 rotate-0 scale-100" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-8 h-8 p-0"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-8 h-8 p-0"
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link 
              href="/tracks"
              className="text-xl hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tracks
            </Link>
            <a 
              href="#about"
              className="text-xl hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact"
              className="text-xl hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            
            <div className="flex items-center space-x-4 text-lg">
              <button className="px-3 py-2 rounded hover:bg-muted transition-colors">
                EN
              </button>
              <button className="px-3 py-2 rounded hover:bg-muted transition-colors">
                FR
              </button>
              <button className="px-3 py-2 rounded hover:bg-muted transition-colors">
                PL
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
