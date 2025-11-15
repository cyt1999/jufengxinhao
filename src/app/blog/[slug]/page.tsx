import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import SectionWithAnimation from '@/components/ui/SectionWithAnimation';
import CardWithAnimation from '@/components/ui/CardWithAnimation';
import { GeometricBackground } from '@/components/ui/BackgroundDecorations';
import Hero from '@/components/ui/Hero';
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
    <div>
      {/* Hero Section */}
      <Hero
        title={post.title}
        align="left"
        maxWidth="900px"
      >
        <Link
          href="/blog"
          className="blog-back-link"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(255, 255, 255, 0.85)',
            textDecoration: 'none',
            marginBottom: '30px',
            fontWeight: 500,
            transition: 'all 0.3s',
          }}
        >
          ← 返回博客列表
        </Link>
        <div style={{
          fontSize: '0.9rem',
          color: 'var(--primary-500)',
          fontWeight: 600,
          marginBottom: '15px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}>
          {post.category}
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          alignItems: 'center',
          color: 'rgba(255, 255, 255, 0.85)',
          marginBottom: '20px',
        }}>
          <div style={{ fontSize: '0.95rem' }}>
            <span style={{ fontWeight: 600 }}>作者：</span>
            {post.author}
          </div>
          <div style={{ fontSize: '0.95rem' }}>
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
            marginTop: '10px',
          }}>
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.85rem',
                  padding: '6px 12px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '15px',
                  color: '#FFFFFF',
                  fontWeight: 500,
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </Hero>

      {/* Article Content */}
      <SectionWithAnimation>
        <section className="section-padding" style={{ 
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <GeometricBackground variant="dots" intensity="subtle" />
          <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
            <CardWithAnimation delay={0}>
              <Card variant="bordered">
                {post.excerpt && (
                  <div style={{ marginBottom: '30px' }}>
                    <Card variant="gradient" gradient="primary">
                      <p style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: 'var(--text-dark)',
                        fontStyle: 'italic',
                        margin: 0,
                      }}>
                        {post.excerpt}
                      </p>
                    </Card>
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
            </CardWithAnimation>
          </div>
        </section>
      </SectionWithAnimation>
    </div>
  );
}

