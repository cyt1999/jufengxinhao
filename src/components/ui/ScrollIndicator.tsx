'use client';

import React from 'react';

/**
 * 滚动指示器组件
 * 用于Hero区域底部，提示用户可以向下滚动
 */
export const ScrollIndicator: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '0.9rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        zIndex: 10,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      className="scroll-indicator"
    >
      <span>探索更多</span>
      <div
        style={{
          fontSize: '1.5rem',
          animation: 'bounce 2s infinite',
        }}
      >
        ↓
      </div>
    </div>
  );
};

