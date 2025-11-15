'use client';

import { useState, useRef, useMemo } from 'react';
import Card from '@/components/ui/Card';
import Hero from '@/components/ui/Hero';
import SectionWithAnimation from '@/components/ui/SectionWithAnimation';
import CardWithAnimation from '@/components/ui/CardWithAnimation';
import { GeometricBackground } from '@/components/ui/BackgroundDecorations';
import faqContent from '@/content/zh/faq.json';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  // 高亮匹配文本的函数
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => {
      const testRegex = new RegExp(`^${escapedQuery}$`, 'i');
      return testRegex.test(part) ? (
        <mark key={index} style={{
          background: 'var(--primary-100)',
          color: 'var(--primary-700)',
          padding: '2px 4px',
          borderRadius: '4px',
          fontWeight: 600,
        }}>
          {part}
        </mark>
      ) : part;
    });
  };

  // 高亮HTML内容中的匹配文本
  const highlightHTML = (html: string, query: string) => {
    if (!query.trim()) return html;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return html.replace(regex, (match) => 
      `<mark style="background: var(--primary-100); color: var(--primary-700); padding: 2px 4px; border-radius: 4px; font-weight: 600;">${match}</mark>`
    );
  };

  // 过滤FAQ数据
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return faqContent.categories;
    }

    const query = searchQuery.toLowerCase();
    
    return faqContent.categories
      .map(category => {
        const filteredQuestions = category.questions.filter(faq => {
          const questionMatch = faq.question.toLowerCase().includes(query);
          // 移除HTML标签后搜索答案
          const answerText = faq.answer.replace(/<[^>]*>/g, '').toLowerCase();
          const answerMatch = answerText.includes(query);
          return questionMatch || answerMatch;
        });

        return filteredQuestions.length > 0
          ? { ...category, questions: filteredQuestions }
          : null;
      })
      .filter((category): category is typeof faqContent.categories[0] => category !== null);
  }, [searchQuery]);

  const toggleItem = (categoryKey: string, questionIndex: number) => {
    const key = `${categoryKey}-${questionIndex}`;
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(key)) {
      newOpenItems.delete(key);
    } else {
      newOpenItems.add(key);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero
        badge="常见问题"
        title={faqContent.title}
        subtitle={faqContent.subtitle}
      />

      {/* Search Section */}
      <SectionWithAnimation>
        <section style={{ 
          padding: '40px 0 20px',
          background: 'var(--bg-light)',
          position: 'relative',
        }}>
          <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
            <CardWithAnimation delay={0}>
              <div style={{
                position: 'relative',
                marginBottom: '20px',
              }}>
                <input
                  type="text"
                  placeholder="搜索问题或答案..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 50px 14px 20px',
                    fontSize: '1rem',
                    border: '1px solid var(--border-light)',
                    borderRadius: '12px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    backgroundColor: 'var(--bg-white)',
                    color: 'var(--text-dark)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-500)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px var(--primary-100)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: searchQuery ? 'var(--primary-500)' : 'var(--text-light)',
                  fontSize: '1.2rem',
                  pointerEvents: 'none',
                }}>
                  {searchQuery ? (
                    <button
                      onClick={() => setSearchQuery('')}
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--primary-500)',
                        fontSize: '1.2rem',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'auto',
                      }}
                      aria-label="清除搜索"
                    >
                      ✕
                    </button>
                  ) : (
                    '🔍'
                  )}
                </div>
                {searchQuery && (
                  <div style={{
                    marginTop: '12px',
                    fontSize: '0.9rem',
                    color: 'var(--text-light)',
                  }}>
                    找到 {filteredCategories.reduce((sum, cat) => sum + cat.questions.length, 0)} 个相关问题
                  </div>
                )}
              </div>
            </CardWithAnimation>
          </div>
        </section>
      </SectionWithAnimation>

      {/* FAQ Content */}
      <SectionWithAnimation>
        <section style={{ 
          padding: '20px 0 40px',
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <GeometricBackground variant="dots" intensity="subtle" />
          <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
            {filteredCategories.length === 0 ? (
              <CardWithAnimation delay={0}>
                <div style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  color: 'var(--text-light)',
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '20px',
                  }}>🔍</div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '12px',
                    color: 'var(--text-dark)',
                  }}>
                    未找到相关问题
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-light)',
                  }}>
                    请尝试使用其他关键词搜索
                  </p>
                </div>
              </CardWithAnimation>
            ) : (
              filteredCategories.map((category, categoryIndex) => (
              <SectionWithAnimation key={category.key} delay={categoryIndex * 100}>
                <div style={{ marginBottom: '50px' }}>
                  <CardWithAnimation delay={0}>
                    <h2 style={{
                      fontSize: '1.8rem',
                      marginBottom: '30px',
                      color: 'var(--primary-500)',
                      fontWeight: 700,
                      textAlign: 'center',
                      padding: '20px 0',
                    }}>
                      {category.name}
                    </h2>
                  </CardWithAnimation>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {category.questions.map((faq, index) => {
                      const key = `${category.key}-${index}`;
                      const isOpen = openItems.has(key);
                      const cardRef = useRef<HTMLDivElement>(null);

                      return (
                        <CardWithAnimation key={index} delay={index * 50}>
                          <div
                            ref={cardRef}
                            style={{
                              border: '1px solid var(--border-light)',
                              borderRadius: '20px',
                              backgroundColor: 'var(--bg-white)',
                              transition: 'all 0.3s ease',
                              overflow: 'hidden',
                            }}
                            onMouseEnter={() => {
                              if (cardRef.current) {
                                cardRef.current.style.borderColor = 'var(--primary-200)';
                                cardRef.current.style.backgroundColor = 'var(--primary-50)';
                              }
                            }}
                            onMouseLeave={() => {
                              if (cardRef.current) {
                                cardRef.current.style.borderColor = 'var(--border-light)';
                                cardRef.current.style.backgroundColor = 'var(--bg-white)';
                              }
                            }}
                          >
                            <Card 
                              variant="default" 
                              hover={false}
                              style={{ 
                                marginBottom: 0,
                                padding: '0',
                                border: 'none',
                                boxShadow: 'none',
                                background: 'transparent',
                              }}
                            >
                              <button
                                onClick={() => toggleItem(category.key, index)}
                                style={{
                                  width: '100%',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  background: 'none',
                                  border: 'none',
                                  cursor: 'pointer',
                                  textAlign: 'left',
                                  padding: '12px 16px',
                                }}
                              >
                                <h3 style={{
                                  fontSize: '1.1rem',
                                  fontWeight: 600,
                                  marginBottom: 0,
                                  color: 'var(--text-dark)',
                                  flex: 1,
                                  paddingRight: '20px',
                                  lineHeight: 1.5,
                                }}>
                                  {highlightText(faq.question, searchQuery)}
                                </h3>
                                <span style={{
                                  fontSize: '1.2rem',
                                  color: 'var(--primary-500)',
                                  transition: 'transform 0.3s ease',
                                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                  flexShrink: 0,
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  width: '24px',
                                  height: '24px',
                                }}>
                                  ▼
                                </span>
                              </button>
                              {isOpen && (
                                <div 
                                  style={{
                                    marginTop: '0',
                                    padding: '12px 16px 16px',
                                    borderTop: '1px solid var(--border-light)',
                                    color: 'var(--text-dark)',
                                    lineHeight: 1.8,
                                    animation: 'fadeInUp 0.3s ease-out',
                                  }}
                                  dangerouslySetInnerHTML={{ __html: highlightHTML(faq.answer, searchQuery) }}
                                />
                              )}
                            </Card>
                          </div>
                        </CardWithAnimation>
                      );
                    })}
                  </div>
                </div>
              </SectionWithAnimation>
              ))
            )}
          </div>
        </section>
      </SectionWithAnimation>
    </div>
  );
}
