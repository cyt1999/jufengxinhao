'use client';

import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

/**
 * Logo组件
 * 使用SVG图标替代emoji，更专业
 */
export default function Logo({ size = 45, showText = true, className = '' }: LogoProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }} className={className}>
      <div
        aria-hidden="true"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: 'linear-gradient(135deg, var(--primary-500), var(--secondary-500))',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: showText ? '12px' : '0',
          color: 'white',
          fontSize: '20px',
          boxShadow: '0 0 20px rgba(0, 201, 255, 0.4)',
          animation: 'pulse 2.5s infinite',
        }}
      >
        {/* Chart Line Icon (替代 fa-chart-line) */}
        <svg
          width={size * 0.44}
          height={size * 0.44}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block' }}
        >
          <path
            d="M3 3V21H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 16L12 11L16 15L21 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {showText && (
        <div
          style={{
            fontSize: '26px',
            fontWeight: 800,
            background: 'linear-gradient(to right, var(--primary-500), var(--secondary-500))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.5px',
          }}
        >
          飓风信号
        </div>
      )}
    </div>
  );
}

