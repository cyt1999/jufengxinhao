'use client';

import { useState } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles = {
    background: 'var(--bg-white)',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: isHovered && hover 
      ? 'var(--shadow-lg)' 
      : hover 
        ? 'var(--shadow-md)' 
        : 'var(--shadow-sm)',
    transition: hover ? 'all 0.25s ease' : 'none',
    transform: isHovered && hover ? 'translateY(-4px)' : 'translateY(0)',
  };

  return (
    <div
      style={cardStyles}
      className={className}
      onMouseEnter={() => hover && setIsHovered(true)}
      onMouseLeave={() => hover && setIsHovered(false)}
    >
      {children}
    </div>
  );
}
