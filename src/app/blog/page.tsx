import Card from '@/components/ui/Card';
import Link from 'next/link';

export default function BlogPage() {
  // 模拟博客文章数据
  const posts = [
    {
      id: 1,
      title: '如何制定有效的交易策略',
      excerpt: '交易策略是成功交易的基础，本文将介绍如何制定有效的交易策略...',
      date: '2024-01-15',
      category: '交易策略',
    },
    {
      id: 2,
      title: '风险管理的重要性',
      excerpt: '风险管理是交易中最重要的环节之一，本文将深入探讨风险管理的要点...',
      date: '2024-01-10',
      category: '风险管理',
    },
    {
      id: 3,
      title: '情绪控制在交易中的作用',
      excerpt: '情绪控制是长期盈利的关键，本文将分享如何控制交易情绪...',
      date: '2024-01-05',
      category: '心理分析',
    },
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>博客</h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-light)',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            分享交易心得、市场分析和交易技巧
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '30px',
        }}>
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
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
                }}>
                  {post.title}
                </h2>
                <p style={{
                  color: 'var(--text-light)',
                  marginBottom: '15px',
                  lineHeight: 1.6,
                }}>
                  {post.excerpt}
                </p>
                <div style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                }}>
                  {post.date}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

