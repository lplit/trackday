import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'serif': ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Status colors for consistent semantics
        status: {
          success: {
            DEFAULT: "hsl(142 76% 36%)", // green-600
            light: "hsl(142 76% 45%)", // green-500  
            bg: "hsl(142 76% 97%)", // green-50
            "bg-dark": "hsl(142 76% 6%)", // green-950/60
            border: "hsl(142 76% 89%)", // green-200
            "border-dark": "hsl(142 76% 15%)", // green-900/50
          },
          warning: {
            DEFAULT: "hsl(45 93% 47%)", // yellow-500
            light: "hsl(45 93% 58%)", // yellow-400
            bg: "hsl(45 93% 97%)", // yellow-50  
            "bg-dark": "hsl(45 93% 6%)", // yellow-950/60
            border: "hsl(45 93% 88%)", // yellow-200
            "border-dark": "hsl(45 93% 15%)", // yellow-900/50
          },
          error: {
            DEFAULT: "hsl(0 84% 60%)", // red-500
            light: "hsl(0 84% 70%)", // red-400
            bg: "hsl(0 84% 97%)", // red-50
            "bg-dark": "hsl(0 84% 6%)", // red-950/60  
            border: "hsl(0 84% 89%)", // red-200
            "border-dark": "hsl(0 84% 15%)", // red-900/50
          },
          info: {
            DEFAULT: "hsl(213 94% 68%)", // blue-500
            light: "hsl(213 94% 78%)", // blue-400
            bg: "hsl(213 94% 97%)", // blue-50
            "bg-dark": "hsl(213 94% 6%)", // blue-950/60
            border: "hsl(213 94% 89%)", // blue-200  
            "border-dark": "hsl(213 94% 15%)", // blue-900/50
          },
        },
        // Track difficulty colors
        difficulty: {
          beginner: "hsl(142 76% 36%)", // green-600
          intermediate: "hsl(45 93% 47%)", // yellow-500  
          advanced: "hsl(25 95% 53%)", // orange-500
          expert: "hsl(0 84% 60%)", // red-500
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
