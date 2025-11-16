'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';

interface MobileMenuProps {
  navLinks: Array<{ href: string; label: string }>;
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ navLinks, isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // 阻止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // 聚焦到关闭按钮
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 键盘导航：ESC 关闭菜单
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="移动端导航菜单"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: 'max-content',
          minWidth: '160px',
          maxWidth: '70vw',
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
          padding: '12px 14px',
          borderBottom: '1px solid var(--border)',
        }}>
          <Logo size={28} showText={false} />
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
        <nav role="navigation" aria-label="移动端导航" style={{ padding: '12px 0' }}>
          {navLinks.map((link, index) => {
            // 改进路径匹配逻辑：支持精确匹配和子路径匹配
            const isActive = link.href === '/' 
              ? pathname === '/' 
              : pathname === link.href || pathname.startsWith(link.href + '/');
            const isFirst = index === 0;
            return (
              <Link
                key={link.href}
                ref={isFirst ? firstLinkRef : undefined}
                href={link.href}
                onClick={handleLinkClick}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  color: isActive ? 'var(--primary-700)' : 'var(--text-medium)',
                  textDecoration: 'none',
                  fontWeight: isActive ? 700 : 400,
                  borderLeft: isActive ? '4px solid var(--primary-500)' : '4px solid transparent',
                  background: isActive ? 'var(--primary-50)' : 'transparent',
                  transition: 'all 0.3s',
                  position: 'relative',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'var(--bg-gray)';
                    e.currentTarget.style.color = 'var(--primary-500)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--text-medium)';
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

