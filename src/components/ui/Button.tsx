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
    padding: size === 'sm' ? '8px 20px' : size === 'lg' ? '16px 40px' : '10px 24px',
    borderRadius: size === 'lg' ? '12px' : '8px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    border: 'none',
    fontSize: size === 'sm' ? '0.9rem' : size === 'lg' ? '1.15rem' : '1rem',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    textAlign: 'center' as const,
    position: 'relative' as const,
    overflow: 'hidden' as const,
  };

  const variantStyles = {
    primary: {
      background: 'var(--gradient-primary)',
      color: 'white',
      boxShadow: 'var(--shadow-primary)',
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(10px)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-medium)',
      border: '1px solid var(--border-medium)',
    },
  };

  const hoverStyles = {
    primary: {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 30px rgba(0, 201, 255, 0.6)',
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.15)',
      border: '2px solid rgba(255, 255, 255, 0.5)',
      color: 'white',
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
    },
    outline: {
      border: '1px solid var(--primary-500)',
      color: 'var(--primary-500)',
      background: 'var(--primary-50)',
      transform: 'translateY(-2px)',
    },
  };

  const styles = { 
    ...baseStyles, 
    ...variantStyles[variant],
    ...(isHovered ? hoverStyles[variant] : {}),
  };

  // 光泽扫过效果（仅primary和secondary）
  const shineEffect = (variant === 'primary' || variant === 'secondary') ? (
    <span
      style={{
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: variant === 'primary'
          ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
          : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        transition: 'left 0.6s ease',
        ...(isHovered ? { left: '100%' } : {}),
      }}
    />
  ) : null;

  if (href) {
    return (
      <a 
        href={href} 
        style={styles} 
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {shineEffect}
        <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
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
      {shineEffect}
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </button>
  );
}
