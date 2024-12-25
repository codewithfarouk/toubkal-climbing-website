import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={\`bg-white rounded-2xl shadow-xl overflow-hidden \${className}\`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: CardProps) {
  return (
    <div className={\`p-6 border-b border-gray-100 \${className}\`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }: CardProps) {
  return (
    <div className={\`p-6 \${className}\`}>
      {children}
    </div>
  );
}