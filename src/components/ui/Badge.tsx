import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger';
  children: React.ReactNode;
}

export function Badge({ variant = 'default', children }: BadgeProps) {
  const variants = {
    default: 'bg-earth-100 text-earth-800',
    success: 'bg-forest-100 text-forest-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  };

  return (
    <span className={\`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium \${variants[variant]}\`}>
      {children}
    </span>
  );
}