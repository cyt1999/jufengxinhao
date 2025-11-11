'use client';

import { useState, useMemo, useEffect } from 'react';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

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
    <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 700 }}>
            博客
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-light)',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            分享交易心得、市场分析和交易技巧
          </p>
        </div>

        {/* Search and Filter */}
        <div style={{
          marginBottom: '40px',
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
                border: '2px solid var(--border)',
                borderRadius: '10px',
                outline: 'none',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            />
          </div>

          {/* Category Filter */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
          }}>
            {['全部', ...categories].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '20px',
                  border: '2px solid',
                  borderColor: selectedCategory === category ? 'var(--primary)' : 'var(--border)',
                  background: selectedCategory === category ? 'var(--primary-light)' : 'transparent',
                  color: selectedCategory === category ? 'var(--primary)' : 'var(--text-dark)',
                  fontWeight: selectedCategory === category ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontSize: '0.95rem',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <Card>
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>
                {searchQuery ? '没有找到相关文章' : '暂无文章'}
              </p>
            </div>
          </Card>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '30px',
          }}>
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <Card hover>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--primary)',
                    fontWeight: 600,
                    marginBottom: '10px',
                  }}>
                    {post.category}
                  </div>
                  <h2 style={{
                    fontSize: '1.5rem',
                    marginBottom: '15px',
                    color: 'var(--text-dark)',
                    lineHeight: 1.4,
                  }}>
                    {post.title}
                  </h2>
                  <p style={{
                    color: 'var(--text-light)',
                    marginBottom: '15px',
                    lineHeight: 1.6,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {post.excerpt}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '20px',
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
                              background: 'var(--bg-light)',
                              borderRadius: '12px',
                              color: 'var(--text-light)',
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
