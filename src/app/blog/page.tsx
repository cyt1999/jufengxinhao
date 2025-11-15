'use client';

import { useState, useMemo, useEffect } from 'react';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';
import SectionWithAnimation from '@/components/ui/SectionWithAnimation';
import CardWithAnimation from '@/components/ui/CardWithAnimation';
import { GeometricBackground, GlowEffect } from '@/components/ui/BackgroundDecorations';
import Hero from '@/components/ui/Hero';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // 在客户端获取数据
  useEffect(() => {
    fetch('/api/blog/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts || []);
        setCategories(data.categories || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching posts:', err);
        setLoading(false);
      });
  }, []);

  // 过滤文章
  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // 按分类过滤
    if (selectedCategory !== '全部') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // 按搜索关键词过滤
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [posts, selectedCategory, searchQuery]);

  if (loading) {
    return (
      <div style={{ paddingTop: '100px', minHeight: '80vh', textAlign: 'center' }}>
        <div className="container">
          <p>加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <Hero
        badge="专业交易知识分享"
        title="交易博客"
        subtitle="分享交易心得、市场分析和交易技巧"
      />

      {/* Main Content */}
      <SectionWithAnimation>
        <section className="section-padding" style={{ 
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <GeometricBackground variant="grid" intensity="subtle" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>

            {/* Search and Filter */}
            <CardWithAnimation delay={0}>
              <div style={{ marginBottom: '40px' }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}>
                  {/* Search */}
                  <div>
                    <input
                      type="text"
                      placeholder="搜索文章..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        fontSize: '1rem',
                        border: '2px solid var(--border-medium)',
                        borderRadius: '12px',
                        outline: 'none',
                        transition: 'all 0.3s',
                        background: 'var(--bg-white)',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--primary-500)';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 201, 255, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-medium)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Category Filter */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}>
                    {['全部', ...categories].map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        style={{
                          padding: '10px 20px',
                          borderRadius: '20px',
                          border: '2px solid',
                          borderColor: selectedCategory === category ? 'var(--primary-500)' : 'var(--border-medium)',
                          background: selectedCategory === category ? 'var(--primary-50)' : 'var(--bg-white)',
                          color: selectedCategory === category ? 'var(--primary-500)' : 'var(--text-medium)',
                          fontWeight: selectedCategory === category ? 600 : 400,
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          fontSize: '0.95rem',
                        }}
                        onMouseEnter={(e) => {
                          if (selectedCategory !== category) {
                            e.currentTarget.style.borderColor = 'var(--primary-300)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedCategory !== category) {
                            e.currentTarget.style.borderColor = 'var(--border-medium)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardWithAnimation>

            {/* Posts Grid */}
            {filteredPosts.length === 0 ? (
              <CardWithAnimation delay={0}>
                <Card variant="bordered">
                  <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>
                      {searchQuery ? '没有找到相关文章' : '暂无文章'}
                    </p>
                  </div>
                </Card>
              </CardWithAnimation>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '30px',
              }}>
                {filteredPosts.map((post, index) => (
                  <CardWithAnimation key={post.slug} delay={index * 100}>
                    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                      <Card 
                        hover 
                        variant={index % 4 === 0 ? 'glow' : index % 4 === 1 ? 'gradient' : index % 4 === 2 ? 'bordered' : 'default'}
                        gradient={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent'}
                        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                      >
                        <div style={{
                          fontSize: '0.9rem',
                          color: 'var(--primary-500)',
                          fontWeight: 600,
                          marginBottom: '12px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}>
                          {post.category}
                        </div>
                        <h2 style={{
                          fontSize: '1.5rem',
                          marginBottom: '15px',
                          color: 'var(--text-dark)',
                          lineHeight: 1.4,
                          fontWeight: 600,
                        }}>
                          {post.title}
                        </h2>
                        <p style={{
                          color: 'var(--text-light)',
                          marginBottom: '20px',
                          lineHeight: 1.7,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          flex: 1,
                        }}>
                          {post.excerpt}
                        </p>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginTop: 'auto',
                          paddingTop: '15px',
                          borderTop: '1px solid var(--border-light)',
                        }}>
                          <div style={{
                            fontSize: '0.9rem',
                            color: 'var(--text-muted)',
                          }}>
                            {new Date(post.date).toLocaleDateString('zh-CN', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </div>
                          {post.tags.length > 0 && (
                            <div style={{
                              display: 'flex',
                              gap: '8px',
                              flexWrap: 'wrap',
                            }}>
                              {post.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  style={{
                                    fontSize: '0.8rem',
                                    padding: '4px 10px',
                                    background: 'var(--primary-50)',
                                    borderRadius: '12px',
                                    color: 'var(--primary-500)',
                                    fontWeight: 500,
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </Card>
                    </Link>
                  </CardWithAnimation>
                ))}
              </div>
            )}
          </div>
        </section>
      </SectionWithAnimation>
    </div>
  );
}
