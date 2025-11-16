'use client';

import React, { useState, useEffect } from 'react';
import FloatingContactForm from './FloatingContactForm';

interface ButtonConfig {
  id: string;
  icon: string;
  label: string;
  onClick: () => void;
  showCondition?: boolean;
}

const buttonBaseStyle: React.CSSProperties = {
  width: '48px',
  height: '48px',
  borderRadius: '8px',
  background: 'var(--primary-500)',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 20px rgba(0, 201, 255, 0.4)',
  transition: 'all 0.3s ease',
  fontSize: '20px',
  position: 'relative',
};

const containerStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '24px',
  right: '24px',
  zIndex: 50,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  alignItems: 'flex-end',
};

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // 监听滚动，显示/隐藏回到顶部按钮
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 按钮配置
  const buttons: ButtonConfig[] = [
    {
      id: 'scrollTop',
      icon: '↑',
      label: '回到顶部',
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      showCondition: showScrollTop,
    },
    {
      id: 'contact',
      icon: '✉️',
      label: '快速联系',
      onClick: () => { setIsContactFormOpen(true); },
    },
    {
      id: 'consultation',
      icon: '📅',
      label: '预约咨询',
      onClick: () => { window.location.href = '/training'; },
    },
  ];

  // 处理悬停效果
  const handleMouseEnter = (buttonId: string, e: React.MouseEvent<HTMLButtonElement>) => {
    setHoveredButton(buttonId);
    e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
    e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 201, 255, 0.6)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setHoveredButton(null);
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 201, 255, 0.4)';
  };

  return (
    <>
      <div data-floating-buttons style={containerStyle}>
        {buttons.map((button) => {
          // 如果按钮有显示条件且不满足，则不渲染
          if (button.showCondition !== undefined && !button.showCondition) {
            return null;
          }

          return (
            <div key={button.id} style={{ position: 'relative' }}>
              <button
                onClick={button.onClick}
                className="floating-button"
                style={buttonBaseStyle}
                onMouseEnter={(e) => handleMouseEnter(button.id, e)}
                onMouseLeave={handleMouseLeave}
                aria-label={button.label}
              >
                {button.icon}
              </button>
              {hoveredButton === button.id && (
                <div className="floating-button-tooltip">
                  {button.label}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* 快速联系表单 */}
      <FloatingContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  );
}

