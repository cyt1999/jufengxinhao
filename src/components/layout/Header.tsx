'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

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
    { href: '/about', label: '关于我们' },
  ];

  return (
    <>
      <header style={{ 
        backgroundColor: 'var(--bg-white)', 
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
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
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            >
              <div 
                aria-hidden="true"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px',
                  color: 'white',
                  fontSize: '18px',
                }}
              >
                📈
              </div>
              <div style={{
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                fontWeight: 800,
                background: 'var(--gradient-accent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                飓风信号
              </div>
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
                      color: pathname === link.href ? 'var(--primary)' : 'var(--text-dark)',
                      textDecoration: 'none',
                      fontWeight: 500,
                      position: 'relative',
                      transition: 'color 0.25s ease',
                      fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                    }}
                    onMouseEnter={(e) => {
                      if (pathname !== link.href) {
                        e.currentTarget.style.color = 'var(--primary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (pathname !== link.href) {
                        e.currentTarget.style.color = 'var(--text-dark)';
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
              {/* 桌面端申请按钮 */}
              <div className="desktop-only">
                <Link href="/training">
                  <button style={{
                    padding: '8px 20px',
                    borderRadius: '8px',
                    fontWeight: 500,
                    background: 'var(--gradient-primary)',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0, 201, 255, 0.3)',
                    transition: 'all 0.3s',
                    fontSize: 'clamp(0.85rem, 1vw, 1rem)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 201, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 201, 255, 0.3)';
                  }}
                  >
                    申请训练营
                  </button>
                </Link>
              </div>

              {/* 移动端菜单按钮 */}
              <button
                className="mobile-only"
                onClick={() => setMobileMenuOpen(true)}
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
