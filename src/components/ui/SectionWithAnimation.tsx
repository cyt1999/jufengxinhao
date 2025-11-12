'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ReactNode } from 'react';

interface SectionWithAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * 带滚动动画的 Section 组件
 * 当元素进入视口时，会添加 fade-in-up 动画类
 */
export default function SectionWithAnimation({
  children,
  delay = 0,
  className = '',
}: SectionWithAnimationProps) {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
  });

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`${className} ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
      style={{
        transitionDelay: `${delay}ms`,
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {children}
    </div>
  );
}

