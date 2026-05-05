import React from 'react';

export interface BadgeProps {
  label: string;
}

const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-primary">
      {label}
    </span>
  );
};

export default Badge;
