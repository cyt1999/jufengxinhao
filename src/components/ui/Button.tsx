'use client';

import { useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
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
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = {
    padding: size === 'sm' ? '8px 20px' : size === 'lg' ? '12px 30px' : '10px 24px',
    borderRadius: '8px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.25s ease',
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
      boxShadow: 'var(--shadow-primary)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--primary-500)',
      border: '1px solid var(--primary-500)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-medium)',
      border: '1px solid var(--border-medium)',
    },
  };

  const hoverStyles = {
    primary: {
      transform: 'translateY(-2px)',
      boxShadow: 'var(--shadow-primary-hover)',
    },
    secondary: {
      background: 'var(--primary-50)',
      borderColor: 'var(--primary-700)',
      color: 'var(--primary-700)',
      transform: 'translateY(-1px)',
    },
    outline: {
      borderColor: 'var(--primary-500)',
      color: 'var(--primary-500)',
      background: 'var(--primary-50)',
    },
  };

  const styles = { 
    ...baseStyles, 
    ...variantStyles[variant],
    ...(isHovered ? hoverStyles[variant] : {}),
  };

  if (href) {
    return (
      <a 
        href={href} 
        style={styles} 
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      style={styles} 
      onClick={onClick} 
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}
