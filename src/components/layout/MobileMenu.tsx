'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  navLinks: Array<{ href: string; label: string }>;
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ navLinks, isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // 阻止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 点击链接后关闭菜单
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* 遮罩层 */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998,
            animation: 'fadeIn 0.3s ease-out',
          }}
        />
      )}

      {/* 菜单面板 */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '280px',
          height: '100vh',
          background: 'var(--bg-white)',
          boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)',
          zIndex: 999,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-out',
          overflowY: 'auto',
        }}
      >
        {/* 菜单头部 */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{
            fontSize: '20px',
            fontWeight: 700,
            background: 'var(--gradient-accent)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            飓风信号
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: 'var(--text-dark)',
              padding: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="关闭菜单"
          >
            ✕
          </button>
        </div>

        {/* 导航链接 */}
        <nav style={{ padding: '20px 0' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  display: 'block',
                  padding: '15px 20px',
                  color: isActive ? 'var(--primary)' : 'var(--text-dark)',
                  textDecoration: 'none',
                  fontWeight: isActive ? 600 : 400,
                  borderLeft: isActive ? '3px solid var(--primary)' : '3px solid transparent',
                  background: isActive ? 'var(--primary-light)' : 'transparent',
                  transition: 'all 0.3s',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* 申请按钮 */}
        <div style={{ padding: '20px' }}>
          <Link href="/training" onClick={handleLinkClick}>
            <button style={{
              width: '100%',
              padding: '12px 20px',
              borderRadius: '8px',
              fontWeight: 600,
              background: 'var(--gradient-primary)',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0, 201, 255, 0.3)',
              transition: 'all 0.3s',
            }}>
              申请训练营
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

