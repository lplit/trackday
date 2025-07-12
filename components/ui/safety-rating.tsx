import * as React from "react";
import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";

interface SafetyRatingProps extends React.HTMLAttributes<HTMLDivElement> {
  rating?: number;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const getSafetyColor = (rating?: number) => {
  if (!rating) return 'text-gray-500';
  if (rating >= 9) return 'text-status-success dark:text-green-400';
  if (rating >= 7) return 'text-status-warning dark:text-yellow-400';
  return 'text-status-error dark:text-red-400';
};

const getSafetyLabel = (rating?: number) => {
  if (!rating) return 'Unrated';
  if (rating >= 9) return 'Excellent';
  if (rating >= 7) return 'Good';
  if (rating >= 5) return 'Fair';
  return 'Poor';
};

const sizeConfig = {
  sm: {
    icon: 'h-3 w-3',
    text: 'text-xs',
    gap: 'gap-1'
  },
  md: {
    icon: 'h-4 w-4', 
    text: 'text-sm',
    gap: 'gap-2'
  },
  lg: {
    icon: 'h-5 w-5',
    text: 'text-base', 
    gap: 'gap-2'
  }
};

export function SafetyRating({ 
  rating, 
  showIcon = true, 
  size = 'md',
  className,
  ...props 
}: SafetyRatingProps) {
  const colorClass = getSafetyColor(rating);
  const config = sizeConfig[size];
  
  if (!rating) {
    return (
      <div 
        className={cn("flex items-center", config.gap, className)} 
        {...props}
      >
        {showIcon && <Shield className={cn(config.icon, "text-gray-500", "shrink-0")} />}
        <span className={cn("font-medium text-gray-500", config.text)}>
          Unrated
        </span>
      </div>
    );
  }

  return (
    <div 
      className={cn("flex items-center", config.gap, className)} 
      {...props}
    >
      {showIcon && <Shield className={cn(config.icon, colorClass, "shrink-0")} />}
      <span className={cn("font-medium", colorClass, config.text)}>
        {rating}/10
      </span>
    </div>
  );
}

export function SafetyRatingWithLabel({
  rating,
  showIcon = true,
  size = 'md', 
  className,
  ...props
}: SafetyRatingProps) {
  const colorClass = getSafetyColor(rating);
  const label = getSafetyLabel(rating);
  const config = sizeConfig[size];

  return (
    <div 
      className={cn("flex items-center", config.gap, className)}
      {...props}
    >
      {showIcon && <Shield className={cn(config.icon, colorClass, "shrink-0")} />}
      <div className="flex flex-col">
        <span className={cn("font-medium", colorClass, config.text)}>
          {rating ? `${rating}/10` : 'Unrated'}
        </span>
        <span className={cn("text-muted-foreground", 
          size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-sm' : 'text-xs'
        )}>
          {label}
        </span>
      </div>
    </div>
  );
}
