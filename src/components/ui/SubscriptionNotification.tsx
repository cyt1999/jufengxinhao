'use client';

import React, { useState, useEffect } from 'react';

interface Notification {
  id: string;
  email: string;
}

// 生成随机Gmail邮箱（中间部分用*替代）
function generateRandomEmail(): string {
  const prefixes = ['user', 'trader', 'investor', 'crypto', 'finance', 'bitcoin', 'eth', 'trade', 'market', 'pro'];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomNum = Math.floor(Math.random() * 9999);

  // 邮箱格式: us***23@gmail.com
  const visibleStart = prefix.substring(0, 2);
  const visibleEnd = randomNum.toString().substring(0, 2);

  return `${visibleStart}***${visibleEnd}@gmail.com`;
}

export default function SubscriptionNotification() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const showNotification = () => {
      const newNotification: Notification = {
        id: Date.now().toString(),
        email: generateRandomEmail(),
      };

      setNotifications(prev => [...prev, newNotification]);

      // 3秒后自动移除通知
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 3000);
    };

    // 首次延迟2秒显示
    const initialTimeout = setTimeout(showNotification, 2000);

    // 之后每8-15秒随机显示一次
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 7000 + 8000); // 8-15秒随机间隔

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      zIndex: 50,
      pointerEvents: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="subscription-notification"
          style={{
            pointerEvents: 'auto',
          }}
        >
          <div style={{
            background: 'white',
            border: '2px solid var(--border)',
            borderRadius: '12px',
            padding: '16px',
            maxWidth: '320px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          }}
          className="subscription-notification-card"
          >
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
            }}>
              {/* 图标 */}
              <div style={{
                flexShrink: 0,
                width: '40px',
                height: '40px',
                background: 'var(--primary-500)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
              }}>
                <span style={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                }}>NEW</span>
              </div>

              {/* 内容 */}
              <div style={{
                flex: 1,
                minWidth: 0,
              }}>
                <p style={{
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  margin: 0,
                  marginBottom: '4px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {notification.email}
                </p>
                <p style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-light)',
                  margin: 0,
                  marginBottom: '4px',
                }}>
                  已成为使用会员
                </p>
                <p style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  margin: 0,
                }}>
                  刚刚
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

