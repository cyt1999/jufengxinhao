'use client';

import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

/**
 * Logo组件
 * 使用base.svg作为logo
 */
export default function Logo({ size = 45, showText = true, className = '' }: LogoProps) {
  // 根据viewBox计算高度，保持宽高比 (2048:1638 ≈ 1.25:1)
  const logoHeight = size;
  const logoWidth = size * (2048 / 1638);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }} className={className}>
      <div
        aria-hidden="true"
        style={{
          width: `${logoWidth}px`,
          height: `${logoHeight}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: showText ? '12px' : '0',
        }}
      >
        <img
          src="/logo.svg"
          alt="飓风信号 Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
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

