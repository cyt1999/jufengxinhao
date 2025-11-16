'use client';

import React, { useState } from 'react';

interface FloatingContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FloatingContactForm({ isOpen, onClose }: FloatingContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // 清除之前的提交状态
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || '提交成功！我们会尽快与您联系。',
        });
        // 清空表单
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        // 3秒后自动关闭
        setTimeout(() => {
          onClose();
          setSubmitStatus({ type: null, message: '' });
        }, 3000);
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || '提交失败，请稍后重试',
        });
      }
    } catch (error) {
      console.error('提交表单时出错:', error);
      setSubmitStatus({
        type: 'error',
        message: '网络错误，请检查您的网络连接后重试',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      data-contact-form
      style={{
        position: 'fixed',
        right: '24px',
        bottom: '100px',
        zIndex: 100,
        width: '384px',
        maxWidth: 'calc(100vw - 48px)',
      }}
    >
      <div style={{
        background: 'white',
        border: '2px solid var(--primary-500)',
        borderRadius: '12px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          background: 'var(--primary-500)',
          color: 'white',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: 700,
            margin: 0,
          }}>
            快速联系
          </h3>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="关闭"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >

          {/* Name Field */}
          <div>
            <label
              htmlFor="contact-name"
              style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: '8px',
                color: 'var(--text-dark)',
              }}
            >
              姓名 *
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid var(--border)',
                borderRadius: '8px',
                background: 'var(--bg-white)',
                color: 'var(--text-dark)',
                fontSize: '0.875rem',
                outline: 'none',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-500)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
              placeholder="请输入您的姓名"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="contact-email"
              style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: '8px',
                color: 'var(--text-dark)',
              }}
            >
              邮箱 *
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid var(--border)',
                borderRadius: '8px',
                background: 'var(--bg-white)',
                color: 'var(--text-dark)',
                fontSize: '0.875rem',
                outline: 'none',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-500)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
              placeholder="请输入您的邮箱"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="contact-phone"
              style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: '8px',
                color: 'var(--text-dark)',
              }}
            >
              电话
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid var(--border)',
                borderRadius: '8px',
                background: 'var(--bg-white)',
                color: 'var(--text-dark)',
                fontSize: '0.875rem',
                outline: 'none',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-500)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
              placeholder="请输入您的电话（可选）"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="contact-message"
              style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: '8px',
                color: 'var(--text-dark)',
              }}
            >
              留言
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid var(--border)',
                borderRadius: '8px',
                background: 'var(--bg-white)',
                color: 'var(--text-dark)',
                fontSize: '0.875rem',
                outline: 'none',
                transition: 'border-color 0.3s',
                resize: 'vertical',
                fontFamily: 'inherit',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-500)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
              placeholder="请告诉我们您的需求..."
            />
          </div>

          {/* Submit Status Message */}
          {submitStatus.type && (
            <div style={{
              padding: '12px 16px',
              borderRadius: '8px',
              background: submitStatus.type === 'success' 
                ? 'var(--success-light)' 
                : 'var(--danger-light)',
              color: submitStatus.type === 'success' 
                ? 'var(--success-dark)' 
                : 'var(--danger-dark)',
              fontSize: '0.875rem',
              textAlign: 'center',
              border: `1px solid ${submitStatus.type === 'success' 
                ? 'var(--success)' 
                : 'var(--danger)'}`,
            }}>
              {submitStatus.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '12px 24px',
              background: isSubmitting ? 'var(--text-muted)' : 'var(--primary-500)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s',
              boxShadow: isSubmitting 
                ? 'none' 
                : '0 4px 12px rgba(0, 201, 255, 0.3)',
              opacity: isSubmitting ? 0.7 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.background = 'var(--primary-700)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 201, 255, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.background = 'var(--primary-500)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 201, 255, 0.3)';
              }
            }}
          >
            {isSubmitting ? '提交中...' : '快联系我'}
          </button>

          {/* Privacy Note */}
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            textAlign: 'center',
            margin: 0,
          }}>
            我们重视您的隐私，不会分享您的信息。
          </p>
        </form>
      </div>
    </div>
  );
}

