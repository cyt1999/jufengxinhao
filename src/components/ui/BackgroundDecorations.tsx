'use client';

import React from 'react';

/**
 * 几何图形背景装饰组件
 * 用于为section添加科技感的背景装饰
 */
export const GeometricBackground: React.FC<{
  variant?: 'grid' | 'circles' | 'dots' | 'waves';
  intensity?: 'subtle' | 'medium' | 'strong';
  color?: string;
}> = ({ 
  variant = 'grid', 
  intensity = 'medium',
  color = 'var(--primary-500)'
}) => {
  const opacityMap = {
    subtle: 0.05,
    medium: 0.1,
    strong: 0.2,
  };

  const opacity = opacityMap[intensity];

  if (variant === 'grid') {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(${color} ${opacity} 1px, transparent 1px),
            linear-gradient(90deg, ${color} ${opacity} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    );
  }

  if (variant === 'circles') {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {/* 大圆 */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            border: `2px solid ${color}`,
            opacity: opacity * 2,
            top: '-200px',
            right: '-100px',
            filter: 'blur(40px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: `2px solid ${color}`,
            opacity: opacity * 2,
            bottom: '-150px',
            left: '-100px',
            filter: 'blur(30px)',
          }}
        />
        {/* 中圆 */}
        <div
          style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: color,
            opacity: opacity,
            top: '20%',
            left: '10%',
            filter: 'blur(20px)',
          }}
        />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          opacity: opacity,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    );
  }

  if (variant === 'waves') {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <svg
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: opacity * 2,
          }}
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z"
            fill={color}
            opacity={0.3}
          />
          <path
            d="M0,120 Q400,80 800,120 T1200,120 L1200,200 L0,200 Z"
            fill={color}
            opacity={0.2}
          />
        </svg>
      </div>
    );
  }

  return null;
};

/**
 * 光晕效果组件
 */
export const GlowEffect: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  size?: number;
  color?: string;
  intensity?: number;
}> = ({
  position = 'top-right',
  size = 300,
  color = 'var(--primary-500)',
  intensity = 0.3,
}) => {
  const positionMap = {
    'top-left': { top: 0, left: 0 },
    'top-right': { top: 0, right: 0 },
    'bottom-left': { bottom: 0, left: 0 },
    'bottom-right': { bottom: 0, right: 0 },
    'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
  };

  return (
    <div
      style={{
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: intensity,
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0,
        ...positionMap[position],
      }}
    />
  );
};

/**
 * 渐变背景装饰
 */
export const GradientOverlay: React.FC<{
  direction?: 'horizontal' | 'vertical' | 'diagonal';
  colors?: string[];
  opacity?: number;
}> = ({
  direction = 'diagonal',
  colors = ['var(--primary-500)', 'var(--secondary-500)', 'var(--accent-500)'],
  opacity = 0.1,
}) => {
  const directionMap = {
    horizontal: 'to right',
    vertical: 'to bottom',
    diagonal: '135deg',
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(${directionMap[direction]}, ${colors.map(c => `${c} ${opacity * 100}%`).join(', ')})`,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

