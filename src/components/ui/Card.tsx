'use client';

import { useState } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'gradient' | 'glow' | 'bordered';
  gradient?: 'primary' | 'secondary' | 'accent';
}

export default function Card({ 
  children, 
  className = '', 
  hover = false,
  variant = 'default',
  gradient = 'primary',
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // 根据variant选择背景样式
  const getBackground = () => {
    if (variant === 'gradient') {
      const gradientMap = {
        primary: 'var(--gradient-card)',
        secondary: 'linear-gradient(135deg, var(--bg-white) 0%, var(--secondary-50) 100%)',
        accent: 'linear-gradient(135deg, var(--bg-white) 0%, var(--accent-50) 100%)',
      };
      return gradientMap[gradient];
    }
    if (variant === 'glow') {
      return 'var(--bg-white)';
    }
    return 'var(--bg-white)';
  };

  const cardStyles: React.CSSProperties = {
    background: getBackground(),
    borderRadius: '20px',
    padding: '30px',
    position: 'relative',
    overflow: 'hidden',
    border: variant === 'bordered' 
      ? `2px solid var(--primary-500)` 
      : 'none',
    boxShadow: isHovered && hover 
      ? variant === 'glow'
        ? 'var(--shadow-primary-hover), 0 0 40px rgba(0, 201, 255, 0.2)'
        : 'var(--shadow-xl)'
      : hover 
        ? variant === 'glow'
          ? 'var(--shadow-primary), 0 0 20px rgba(0, 201, 255, 0.15)'
          : 'var(--shadow-md)'
        : 'var(--shadow-sm)',
    transition: hover ? 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
    transform: isHovered && hover ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
  };

  return (
    <div
      style={cardStyles}
      className={className}
      onMouseEnter={() => hover && setIsHovered(true)}
      onMouseLeave={() => hover && setIsHovered(false)}
    >
      {/* 光晕效果装饰 */}
      {variant === 'glow' && (
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200%',
            height: '200%',
            background: `radial-gradient(circle, var(--primary-500) 0%, transparent 70%)`,
            opacity: isHovered ? 0.1 : 0.05,
            filter: 'blur(40px)',
            pointerEvents: 'none',
            transition: 'opacity 0.3s ease',
          }}
        />
      )}
      
      {/* 边框光晕效果 */}
      {variant === 'bordered' && isHovered && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: '20px',
            padding: '2px',
            background: 'var(--gradient-primary)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none',
            opacity: 0.6,
          }}
        />
      )}

      {/* 内容 */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
