'use client';

import { ReactNode } from 'react';
import { GeometricBackground, GlowEffect } from './BackgroundDecorations';

interface HeroProps {
  title: string | ReactNode;
  subtitle?: string;
  badge?: string;
  badgeIcon?: string;
  children?: ReactNode;
  align?: 'center' | 'left';
  maxWidth?: string;
  className?: string;
}

/**
 * 统一的Hero组件
 * 用于所有页面的Hero区域，保持一致的视觉风格
 */
export default function Hero({
  title,
  subtitle,
  badge,
  badgeIcon,
  children,
  align = 'center',
  maxWidth = '900px',
  className = '',
}: HeroProps) {
  return (
    <section 
      className={className}
      style={{
        paddingTop: 'calc(80px + clamp(80px, 10vw, 120px))',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
        background: 'linear-gradient(135deg, #0A1929 0%, #1A2F4A 50%, #0F1B2E 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        marginTop: 0,
      }}
    >
      {/* 背景装饰 */}
      <GeometricBackground variant="grid" intensity="subtle" color="rgba(0, 201, 255, 0.1)" />
      <GlowEffect position="top-right" size={500} color="var(--primary-500)" intensity={0.4} />
      <GlowEffect position="bottom-left" size={400} color="var(--secondary-500)" intensity={0.3} />
      <GlowEffect position="center" size={600} color="var(--accent-500)" intensity={0.15} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: align === 'center' ? 'center' : 'flex-start',
          justifyContent: 'center',
          textAlign: align,
          width: '100%',
        }}>
          <div style={{ 
            maxWidth,
            width: '100%',
          }}>
            {/* Badge */}
            {badge && (
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(0, 201, 255, 0.15)',
                color: 'var(--primary-500)',
                padding: '6px 18px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '20px',
                animation: 'fadeInUp 1s ease-out',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 201, 255, 0.3)',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
              }}>
                {badgeIcon && (
                  <span style={{
                    marginRight: '6px',
                    fontSize: '0.95rem',
                  }}>
                    {badgeIcon}
                  </span>
                )}
                {badge}
              </div>
            )}

            {/* Title */}
            <h1 style={{ 
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', 
              marginBottom: subtitle ? '30px' : '0', 
              lineHeight: 1.15,
              fontWeight: 800,
              color: '#FFFFFF',
              textShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
              animation: 'fadeInUp 1s ease-out 0.2s both',
              letterSpacing: '-0.5px',
            }}>
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.8,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                animation: 'fadeInUp 1s ease-out 0.4s both',
                maxWidth: '800px',
                margin: align === 'center' ? '0 auto' : '0',
              }}>
                {subtitle}
              </p>
            )}

            {/* Children (自定义内容) */}
            {children && (
              <div style={{
                animation: 'fadeInUp 1s ease-out 0.6s both',
                marginTop: subtitle ? '40px' : '30px',
              }}>
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

