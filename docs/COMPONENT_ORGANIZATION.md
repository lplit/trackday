# Component Organization

This document outlines the cleaned up and organized component structure following React and Next.js best practices.

## Directory Structure

```
components/
├── auth/                    # Authentication components
│   ├── auth-button.tsx      # Server Component - shows login/logout state
│   ├── login-form.tsx       # Client Component - login form with validation
│   ├── sign-up-form.tsx     # Client Component - registration form
│   ├── forgot-password-form.tsx # Client Component - password reset
│   ├── update-password-form.tsx # Client Component - password update
│   ├── logout-button.tsx    # Client Component - logout functionality
│   └── index.ts            # Organized exports
│
├── landing/                 # Landing page components
│   ├── hero.tsx            # Server Component - landing hero section
│   ├── features.tsx        # Server Component - features showcase
│   ├── footer.tsx          # Server Component - landing footer
│   ├── nav.tsx             # Client Component - landing navigation
│   └── index.ts            # Organized exports
│
├── tracks/                  # Track-related components
│   ├── track-card.tsx      # Client Component - full track card
│   ├── track-overview-card.tsx # Client Component - minimal track card
│   ├── track-hero.tsx      # Client Component - track detail hero
│   ├── track-tabs.tsx      # Client Component - tabbed track content
│   └── index.ts            # Organized exports
│
├── shared/                  # Shared utility components
│   ├── theme-switcher.tsx  # Client Component - theme selection
│   ├── template-hero.tsx   # Server Component - template hero
│   └── index.ts            # Organized exports
│
├── ui/                      # UI primitives (shadcn/ui)
│   ├── badge.tsx           # UI primitive - badge component
│   ├── button.tsx          # UI primitive - button component
│   ├── card.tsx            # UI primitive - card component
│   ├── checkbox.tsx        # UI primitive - checkbox component
│   ├── dropdown-menu.tsx   # UI primitive - dropdown menu
│   ├── input.tsx           # UI primitive - input field
│   ├── label.tsx           # UI primitive - label component
│   └── index.ts            # Organized exports
│
├── tutorial/                # Tutorial and onboarding
│   ├── code-block.tsx      # Code display component
│   ├── connect-supabase-steps.tsx # Tutorial steps
│   ├── fetch-data-steps.tsx # Tutorial steps
│   ├── sign-up-user-steps.tsx # Tutorial steps
│   ├── tutorial-step.tsx   # Generic tutorial step
│   └── index.ts            # Organized exports
│
├── global-footer.tsx        # Global site footer
├── deploy-button.tsx        # Deploy functionality
├── env-var-warning.tsx      # Environment variable warnings
├── next-logo.tsx           # Next.js logo component
├── supabase-logo.tsx       # Supabase logo component
└── index.ts                # Main component exports
```

## Component Patterns

### Server Components
- Used for static content, data fetching, and SEO-optimized rendering
- Examples: `AuthButton`, `LandingHero`, `TrackCard` (when used with full Track data)

### Client Components
- Used for interactivity, state management, and browser APIs
- Marked with `'use client'` directive
- Examples: `LoginForm`, `ThemeSwitcher`, `TrackTabs`

### Type Safety
- All components use TypeScript with proper prop interfaces
- Type definitions separated in `lib/tracks/types.ts`
- Component prop types follow consistent naming patterns

### Modern React Patterns
- Default exports for component files
- Named exports for type interfaces
- Organized index files for clean imports
- Proper JSDoc documentation
- Accessibility considerations (ARIA attributes, semantic HTML)

## Import Patterns

### Organized Imports
```typescript
// Instead of scattered imports:
import { LoginForm } from "@/components/login-form";
import { AuthButton } from "@/components/auth-button";

// Use organized group imports:
import { LoginForm, AuthButton } from "@/components/auth";
```

### Component Groups
```typescript
// Auth components
import { AuthButton, LoginForm, SignUpForm } from "@/components/auth";

// Landing components
import { LandingHero, LandingNav } from "@/components/landing";

// Track components
import { TrackCard, TrackHero, TrackTabs } from "@/components/tracks";

// Shared utilities
import { ThemeSwitcher } from "@/components/shared";

// UI primitives
import { Button, Card, Input } from "@/components/ui";
```

## Best Practices Applied

### 1. Separation of Concerns
- Authentication logic grouped together
- Track-related components in dedicated folder
- Shared utilities separated from specific features

### 2. Component Composition
- Small, focused components with single responsibilities
- Proper prop interfaces for type safety
- Reusable components through organized structure

### 3. Performance Optimizations
- Server/Client component separation for optimal rendering
- Lazy loading of client-side interactivity
- Optimized bundle splitting through proper component boundaries

### 4. Developer Experience
- Clear component organization
- Consistent naming conventions
- Comprehensive TypeScript support
- Easy-to-understand import patterns

## Migration Notes

### Updated Import Paths
- `@/components/auth-button` → `@/components/auth`
- `@/components/login-form` → `@/components/auth`
- `@/components/theme-switcher` → `@/components/shared`
- `@/components/track-*` → `@/components/tracks`

### Removed Files
- Old component files moved to organized directories
- Legacy components cleaned up
- Duplicate components removed

This organization follows Next.js 15 and React 19.1 best practices for maintainable, scalable component architecture.
