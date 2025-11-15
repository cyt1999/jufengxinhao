'use client';

import { useState } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'gradient' | 'glow' | 'bordered';
  gradient?: 'primary' | 'secondary' | 'accent';
  style?: React.CSSProperties;
}

export default function Card({ 
  children, 
  className = '', 
  hover = false,
  variant = 'default',
  gradient = 'primary',
  style,
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

  // 视觉样式（由variant控制，不应被style覆盖）
  const visualStyles: React.CSSProperties = {
    background: getBackground(),
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
  };

  // 布局和结构样式（可以被style覆盖）
  const layoutStyles: React.CSSProperties = {
    borderRadius: '20px',
    padding: '30px',
    position: 'relative',
    overflow: 'hidden',
    transition: hover ? 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
    transform: isHovered && hover ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
  };

  // 从传入的style中分离布局属性和视觉属性
  // 只允许布局属性（margin, padding, width, height, display, flex等）被覆盖
  // 视觉属性（background, border, boxShadow等）由variant控制，不应被覆盖
  const layoutOnlyStyle: Record<string, any> = {};
  if (style) {
    const layoutProps = [
      'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
      'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
      'width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight',
      'display', 'flex', 'flexDirection', 'flexWrap', 'flexGrow', 'flexShrink', 'flexBasis',
      'alignItems', 'justifyContent', 'alignSelf', 'order',
      'gridArea', 'gridColumn', 'gridRow',
      'position', 'top', 'right', 'bottom', 'left', 'zIndex',
      'overflow', 'overflowX', 'overflowY',
    ];
    
    (Object.keys(style) as Array<keyof React.CSSProperties>).forEach(key => {
      if (layoutProps.includes(key as string)) {
        layoutOnlyStyle[key as string] = style[key];
      }
    });
  }

  const mergedStyles: React.CSSProperties = {
    ...visualStyles,
    ...layoutStyles,
    ...layoutOnlyStyle,
  } as React.CSSProperties;

  return (
    <div
      style={mergedStyles}
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
