'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  href,
  className = '',
}: ButtonProps) {
  const baseStyles = {
    padding: size === 'sm' ? '8px 20px' : size === 'lg' ? '12px 30px' : '10px 24px',
    borderRadius: '8px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.3s',
    border: 'none',
    fontSize: size === 'sm' ? '0.9rem' : size === 'lg' ? '1.1rem' : '1rem',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center' as const,
  };

  const variantStyles = {
    primary: {
      background: 'var(--gradient-primary)',
      color: 'white',
      boxShadow: '0 4px 10px rgba(0, 201, 255, 0.3)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--primary)',
      border: '1px solid var(--primary)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-dark)',
      border: '1px solid var(--border)',
    },
  };

  const styles = { ...baseStyles, ...variantStyles[variant] };

  if (href) {
    return (
      <a href={href} style={styles} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button style={styles} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

