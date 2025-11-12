'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ReactNode } from 'react';

interface CardWithAnimationProps {
  children: ReactNode;
  delay?: number;
}

/**
 * 带滚动动画的 Card 包装组件
 * 用于卡片依次出现的动画效果
 */
export default function CardWithAnimation({
  children,
  delay = 0,
}: CardWithAnimationProps) {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px',
    triggerOnce: true,
  });

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={isVisible ? 'fade-in-up' : 'opacity-0'}
      style={{
        transitionDelay: `${delay}ms`,
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
      }}
    >
      {children}
    </div>
  );
}

