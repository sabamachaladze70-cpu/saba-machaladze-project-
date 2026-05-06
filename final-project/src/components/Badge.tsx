import React from 'react';

export interface BadgeProps {
  label: string;
}

const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-background text-primary border border-primary/10 shadow-sm">
      {label}
    </span>
  );
};

export default Badge;
