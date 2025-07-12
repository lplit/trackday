import * as React from "react";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Track } from "@/lib/tracks/types";

interface DifficultyBadgeProps extends Omit<BadgeProps, 'children'> {
  difficulty: Track['difficulty'];
}

const difficultyConfig = {
  'Beginner': {
    className: 'bg-status-success/10 text-status-success border-status-success/20 dark:text-green-400',
    label: 'Beginner'
  },
  'Intermediate': {
    className: 'bg-status-warning/10 text-status-warning border-status-warning/20 dark:text-yellow-400', 
    label: 'Intermediate'
  },
  'Advanced': {
    className: 'bg-orange-500/10 text-orange-600 border-orange-500/20 dark:text-orange-400',
    label: 'Advanced'
  },
  'Expert': {
    className: 'bg-status-error/10 text-status-error border-status-error/20 dark:text-red-400',
    label: 'Expert'
  }
} as const;

export function DifficultyBadge({ difficulty, className, ...props }: DifficultyBadgeProps) {
  const config = difficultyConfig[difficulty] || {
    className: 'bg-gray-500/10 text-gray-600 border-gray-500/20 dark:text-gray-400',
    label: difficulty
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        "text-xs font-medium",
        config.className,
        className
      )}
      {...props}
    >
      {config.label}
    </Badge>
  );
}
