'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

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
    <header style={{ 
      backgroundColor: 'var(--bg-white)', 
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      position: 'fixed',
      width: '100%',
      zIndex: 1000,
    }}>
      <div className="container">
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px 0',
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <div style={{
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
            }}>
              📈
            </div>
            <div style={{
              fontSize: '24px',
              fontWeight: 800,
              background: 'var(--gradient-accent)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              飓风信号
            </div>
          </Link>
          
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '30px',
          }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    color: pathname === link.href ? 'var(--primary)' : 'var(--text-dark)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    position: 'relative',
                    transition: 'color 0.3s',
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
                  {pathname === link.href && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-5px',
                      left: 0,
                      width: '100%',
                      height: '3px',
                      background: 'var(--gradient-primary)',
                      borderRadius: '3px',
                    }} />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div>
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
              }}>
                申请训练营
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

