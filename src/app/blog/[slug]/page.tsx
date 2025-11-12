import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import './styles.css';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: '文章未找到',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Back Button */}
        <Link
          href="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--primary)',
            textDecoration: 'none',
            marginBottom: '30px',
            fontWeight: 500,
          }}
        >
          ← 返回博客列表
        </Link>

        {/* Article */}
        <Card>
          {/* Header */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{
              fontSize: '0.9rem',
              color: 'var(--primary)',
              fontWeight: 600,
              marginBottom: '15px',
            }}>
              {post.category}
            </div>
            <h1 style={{
              fontSize: '2.5rem',
              marginBottom: '20px',
              fontWeight: 700,
              lineHeight: 1.3,
            }}>
              {post.title}
            </h1>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              alignItems: 'center',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--border-light)',
            }}>
              <div style={{
                fontSize: '0.95rem',
                color: 'var(--text-light)',
              }}>
                <span style={{ fontWeight: 600 }}>作者：</span>
                {post.author}
              </div>
              <div style={{
                fontSize: '0.95rem',
                color: 'var(--text-light)',
              }}>
                <span style={{ fontWeight: 600 }}>日期：</span>
                {new Date(post.date).toLocaleDateString('zh-CN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
            {post.tags.length > 0 && (
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginTop: '20px',
              }}>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.85rem',
                      padding: '6px 12px',
                      background: 'var(--primary-50)',
                      borderRadius: '15px',
                      color: 'var(--primary-500)',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Excerpt */}
          {post.excerpt && (
            <div style={{
              padding: '20px',
              background: 'var(--bg-light)',
              borderRadius: '10px',
              marginBottom: '30px',
              borderLeft: '4px solid var(--primary-500)',
            }}>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'var(--text-dark)',
                fontStyle: 'italic',
                margin: 0,
              }}>
                {post.excerpt}
              </p>
            </div>
          )}

          {/* Content */}
          <div
            className="blog-content"
            style={{
              fontSize: '1.1rem',
              lineHeight: 2,
              color: 'var(--text-dark)',
            }}
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
          />
        </Card>
      </div>
    </div>
  );
}

