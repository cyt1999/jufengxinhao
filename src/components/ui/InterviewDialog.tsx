'use client';

import React, { useState } from 'react';

interface InterviewDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InterviewDialog({ isOpen, onClose }: InterviewDialogProps) {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'jufengxinhao@gmail.com';
  const emailSubject = '外汇交易员沟通';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const handleOpenEmailClient = () => {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`;
    window.location.href = mailtoLink;
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '16px',
          padding: 'clamp(24px, 5vw, 40px)',
          maxWidth: '500px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--bg-gray)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
          aria-label="关闭"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--text-dark)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 标题 */}
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          marginBottom: '24px',
          color: 'var(--text-dark)',
          textAlign: 'center',
        }}>
          职业交易员面试预约
        </h2>

        {/* 说明文字 */}
        <p style={{
          fontSize: '1rem',
          color: 'var(--text-light)',
          marginBottom: '30px',
          lineHeight: 1.6,
          textAlign: 'center',
        }}>
          请发送您的简历到以下邮箱，我们会尽快与您联系：
        </p>

        {/* 邮箱地址 */}
        <div style={{
          marginBottom: '24px',
        }}>
          <label style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: 600,
            marginBottom: '8px',
            color: 'var(--text-dark)',
          }}>
            邮箱地址：
          </label>
          <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
          }}>
            <div style={{
              flex: 1,
              padding: '12px 16px',
              background: 'var(--bg-light)',
              border: '2px solid var(--border)',
              borderRadius: '8px',
              fontSize: '1rem',
              color: 'var(--text-dark)',
              fontFamily: 'monospace',
            }}>
              {emailAddress}
            </div>
            <button
              onClick={handleCopyEmail}
              style={{
                padding: '12px 24px',
                background: copied ? 'var(--success)' : 'var(--primary-500)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (!copied) {
                  e.currentTarget.style.background = 'var(--primary-700)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!copied) {
                  e.currentTarget.style.background = 'var(--primary-500)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              {copied ? '已复制' : '复制'}
            </button>
          </div>
        </div>

        {/* 邮件主题 */}
        <div style={{
          marginBottom: '24px',
        }}>
          <label style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: 600,
            marginBottom: '8px',
            color: 'var(--text-dark)',
          }}>
            邮件主题：
          </label>
          <div style={{
            padding: '12px 16px',
            background: 'var(--bg-light)',
            border: '2px solid var(--border)',
            borderRadius: '8px',
            fontSize: '1rem',
            color: 'var(--text-dark)',
          }}>
            {emailSubject}
          </div>
        </div>

        {/* 提示 */}
        <div style={{
          padding: '16px',
          background: 'var(--info-light)',
          border: '1px solid var(--info)',
          borderRadius: '8px',
          marginBottom: '30px',
        }}>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--info-dark)',
            margin: 0,
            lineHeight: 1.6,
          }}>
            <strong>提示：</strong>请在邮件中包含您的基本信息、教育背景、以及为什么想成为外汇交易员。
          </p>
        </div>

        {/* 按钮组 */}
        <div style={{
          display: 'flex',
          gap: '12px',
        }}>
          <button
            onClick={handleOpenEmailClient}
            style={{
              flex: 1,
              padding: '14px 24px',
              background: 'var(--primary-500)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-700)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--primary-500)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            打开邮件客户端
          </button>
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: '14px 24px',
              background: 'var(--bg-light)',
              color: 'var(--text-dark)',
              border: '2px solid var(--border)',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg-gray)';
              e.currentTarget.style.borderColor = 'var(--border-medium)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg-light)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
}

