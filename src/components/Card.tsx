import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl ${className}`}>
      {children}
    </div>
  );
}