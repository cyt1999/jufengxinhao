'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import Logo from '@/components/ui/Logo';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: '首页' },
    { href: '/training', label: '实战训练营' },
    { href: '/blog', label: '博客' },
    { href: '/assessment', label: '测评' },
    { href: '/faq', label: 'FAQ' },
    { href: '/donate', label: '捐赠' },
  ];

  return (
    <>
      <header style={{ 
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
        top: 0,
      }}>
        <div className="container">
          <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 0',
          }}>
            <Link 
              href="/" 
              aria-label="返回首页"
              style={{ textDecoration: 'none' }}
            >
              <Logo size={45} showText={true} />
            </Link>
            
            {/* 桌面端导航 */}
            <ul 
              className="desktop-only flex" 
              role="list"
              style={{
                listStyle: 'none',
                gap: 'clamp(20px, 3vw, 30px)',
                margin: 0,
                padding: 0,
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href} role="none">
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    style={{
                      color: pathname === link.href ? 'var(--primary-500)' : 'rgba(255, 255, 255, 0.85)',
                      textDecoration: 'none',
                      fontWeight: 500,
                      position: 'relative',
                      transition: 'color 0.25s ease',
                      fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                    }}
                    onMouseEnter={(e) => {
                      if (pathname !== link.href) {
                        e.currentTarget.style.color = 'var(--primary-500)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (pathname !== link.href) {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                      }
                    }}
                  >
                    {link.label}
                    <span 
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: 0,
                        width: pathname === link.href ? '100%' : '0%',
                        height: '3px',
                        background: 'var(--gradient-primary)',
                        borderRadius: '3px',
                        transition: 'width 0.25s ease',
                      }} 
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* 右侧按钮区域 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              {/* 移动端菜单按钮 */}
              <button
                className="mobile-only"
                onClick={() => setMobileMenuOpen(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: 'rgba(255, 255, 255, 0.85)',
                  padding: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary-500)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                }}
                aria-label="打开菜单"
              >
                ☰
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* 移动端菜单 */}
      <MobileMenu
        navLinks={navLinks}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
