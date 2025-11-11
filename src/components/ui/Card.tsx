'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      style={{
        background: 'var(--bg-white)',
        borderRadius: '15px',
        padding: '25px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
        transition: hover ? 'transform 0.3s, box-shadow 0.3s' : 'none',
      }}
      className={className}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        }
      }}
    >
      {children}
    </div>
  );
}

