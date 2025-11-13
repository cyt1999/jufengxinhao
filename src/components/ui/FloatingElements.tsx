'use client';

import React from 'react';

/**
 * 浮动元素动画组件
 * 用于Hero区域，创建动态的浮动装饰效果
 */
export const FloatingElements: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* 浮动元素1 */}
      <div
        className="float-animation"
        style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          top: '15%',
          left: '10%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 201, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(1px)',
          animation: 'float 25s infinite linear',
          animationDelay: '0s',
        }}
      />
      {/* 浮动元素2 */}
      <div
        className="float-animation"
        style={{
          position: 'absolute',
          width: '180px',
          height: '180px',
          top: '65%',
          left: '85%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 212, 170, 0.15) 0%, transparent 70%)',
          filter: 'blur(1px)',
          animation: 'float 30s infinite linear',
          animationDelay: '-8s',
        }}
      />
      {/* 浮动元素3 */}
      <div
        className="float-animation"
        style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          top: '80%',
          left: '15%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(108, 99, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(1px)',
          animation: 'float 20s infinite linear',
          animationDelay: '-15s',
        }}
      />
      {/* 浮动元素4 */}
      <div
        className="float-animation"
        style={{
          position: 'absolute',
          width: '150px',
          height: '150px',
          top: '25%',
          left: '75%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 201, 255, 0.12) 0%, transparent 70%)',
          filter: 'blur(1px)',
          animation: 'float 35s infinite linear',
          animationDelay: '-5s',
        }}
      />
    </div>
  );
};

