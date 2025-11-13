'use client';

import homeContent from '@/content/zh/home.json';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import SectionWithAnimation from '@/components/ui/SectionWithAnimation';
import CardWithAnimation from '@/components/ui/CardWithAnimation';
import { GeometricBackground, GlowEffect, GradientOverlay } from '@/components/ui/BackgroundDecorations';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        paddingTop: 'calc(80px + clamp(120px, 15vw, 180px))',
        paddingBottom: 'clamp(60px, 10vw, 100px)',
        background: 'linear-gradient(135deg, #0A1929 0%, #1A2F4A 50%, #0F1B2E 100%)',
        position: 'relative',
        overflow: 'hidden',
        marginTop: 0,
      }}>
        {/* 背景装饰 - 深色主题适配 */}
        <GeometricBackground variant="grid" intensity="subtle" color="rgba(0, 201, 255, 0.1)" />
        <GlowEffect position="top-right" size={500} color="var(--primary-500)" intensity={0.4} />
        <GlowEffect position="bottom-left" size={400} color="var(--secondary-500)" intensity={0.3} />
        <GlowEffect position="center" size={600} color="var(--accent-500)" intensity={0.15} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content-wrapper" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'clamp(30px, 5vw, 50px)',
          }}>
            <div style={{ 
              flex: 1, 
              maxWidth: '700px',
              width: '100%',
            }}>
              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                marginBottom: '20px',
                lineHeight: 1.2,
                fontWeight: 800,
                color: '#FFFFFF',
                textShadow: '0 0 30px rgba(0, 201, 255, 0.3)',
              }}>
                {homeContent.hero.title}
          </h1>
              <h2 style={{
                fontSize: '1.5rem',
                marginBottom: '30px',
                color: 'var(--primary-200)',
                fontWeight: 600,
                textShadow: '0 2px 10px rgba(0, 201, 255, 0.2)',
              }}>
                {homeContent.hero.subtitle}
              </h2>
              <p style={{
                fontSize: '1.2rem',
                marginBottom: '40px',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.8,
              }}>
                {homeContent.hero.description}
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <Link href="/training">
                  <Button variant="primary" size="lg">
                    {homeContent.hero.cta.primary}
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  {homeContent.hero.cta.secondary}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <SectionWithAnimation>
        <section className="section-padding decorative-bg" style={{ 
          background: 'var(--bg-white)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <GeometricBackground variant="dots" intensity="subtle" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}>
              {homeContent.why.title}
            </h2>
            <p style={{
              color: 'var(--text-light)',
              maxWidth: '800px',
              margin: '0 auto',
              fontSize: '1.2rem',
              lineHeight: 1.8,
            }}>
              {homeContent.why.subtitle}
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
          }}>
            {homeContent.why.advantages.map((advantage, index) => (
              <CardWithAnimation key={index} delay={index * 100}>
                <Card hover variant={index === 0 ? 'glow' : index === 1 ? 'gradient' : 'default'}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'var(--gradient-primary)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 25px',
                      color: 'white',
                      fontSize: '32px',
                    }}>
                      {advantage.icon === 'target' && '🎯'}
                      {advantage.icon === 'rocket' && '🚀'}
                      {advantage.icon === 'money' && '💰'}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', fontWeight: 600 }}>
                      {advantage.title}
                    </h3>
                    <p style={{ color: 'var(--text-light)', lineHeight: 1.8 }}>
                      {advantage.description}
                    </p>
                  </div>
                </Card>
              </CardWithAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding" style={{ 
        background: 'var(--bg-light)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <GeometricBackground variant="grid" intensity="subtle" color="var(--primary-500)" />
        <GlowEffect position="center" size={500} intensity={0.1} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}>
              {homeContent.comparison.title}
            </h2>
            <p style={{
              color: 'var(--text-light)',
              maxWidth: '900px',
              margin: '0 auto',
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}>
              {homeContent.comparison.emphasis}
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px',
          }}>
            {/* 飓风信号 */}
            <Card variant="bordered" hover>
              <div style={{
                textAlign: 'center',
                marginBottom: '30px',
                paddingBottom: '20px',
                borderBottom: '2px solid var(--primary-500)',
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: 'var(--primary-500)',
                }}>
                  {homeContent.comparison.us.title}
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {homeContent.comparison.us.items.map((item, index) => (
                  <li key={index} style={{
                    padding: '15px 0',
                    borderBottom: index < homeContent.comparison.us.items.length - 1 ? '1px solid var(--border-light)' : 'none',
                    display: 'flex',
                    alignItems: 'flex-start',
                  }}>
                    <span style={{
                      color: 'var(--secondary-500)',
                      marginRight: '10px',
                      fontSize: '1.2rem',
                    }}>✓</span>
                    <span style={{ color: 'var(--text-dark)', lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* 传统培训机构 */}
            <Card>
              <div style={{
                textAlign: 'center',
                marginBottom: '30px',
                paddingBottom: '20px',
                borderBottom: '2px solid var(--text-muted)',
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                }}>
                  {homeContent.comparison.traditional.title}
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {homeContent.comparison.traditional.items.map((item, index) => (
                  <li key={index} style={{
                    padding: '15px 0',
                    borderBottom: index < homeContent.comparison.traditional.items.length - 1 ? '1px solid var(--border-light)' : 'none',
                    display: 'flex',
                    alignItems: 'flex-start',
                  }}>
                    <span style={{
                      color: 'var(--danger)',
                      marginRight: '10px',
                      fontSize: '1.2rem',
                    }}>✗</span>
                    <span style={{ color: 'var(--text-light)', lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Path Section */}
      <section className="section-padding" style={{ 
        background: 'var(--bg-white)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <GeometricBackground variant="circles" intensity="subtle" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 700 }}>
              {homeContent.careerPath.title}
            </h2>
            <p style={{
              color: 'var(--text-light)',
              maxWidth: '800px',
              margin: '0 auto',
              fontSize: '1.2rem',
            }}>
              {homeContent.careerPath.subtitle}
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
          }}>
            {homeContent.careerPath.stages.map((stage, index) => (
              <CardWithAnimation key={index} delay={index * 100}>
                <Card hover variant={index % 2 === 0 ? 'gradient' : 'glow'} gradient={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent'}>
                <div style={{
                  fontSize: '0.9rem',
                  color: 'var(--primary-500)',
                  fontWeight: 600,
                  marginBottom: '15px',
                }}>
                  {stage.days}
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', fontWeight: 600 }}>
                  {stage.title}
                </h3>
                <p style={{
                  color: 'var(--text-light)',
                  marginBottom: '15px',
                  lineHeight: 1.8,
                }}>
                  {stage.description}
                </p>
                {stage.warning && (
                  <div style={{
                    padding: '10px',
                    background: 'var(--warning-light)',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    color: 'var(--warning-dark)',
                  }}>
                    ⚠️ {stage.warning}
                  </div>
                )}
                {stage.tip && (
                  <div style={{
                    padding: '10px',
                    background: 'var(--info-light)',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    color: 'var(--info-dark)',
                  }}>
                    💡 {stage.tip}
                  </div>
                )}
                {stage.success && (
                  <div style={{
                    padding: '10px',
                    background: 'var(--success-light)',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    color: 'var(--success-dark)',
                  }}>
                    ✅ {stage.success}
                  </div>
                )}
                {stage.goal && (
                  <div style={{
                    padding: '10px',
                    background: 'var(--primary-50)',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    color: 'var(--primary-700)',
                  }}>
                    🎯 {stage.goal}
                  </div>
                )}
              </Card>
              </CardWithAnimation>
            ))}
          </div>
        </div>
      </section>
      </SectionWithAnimation>

      {/* Requirements Section */}
      <SectionWithAnimation delay={100}>
        <section className="section-padding" style={{ 
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
        <GeometricBackground variant="waves" intensity="subtle" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 700 }}>
              {homeContent.requirements.title}
            </h2>
            <p style={{
              color: 'var(--text-light)',
              maxWidth: '800px',
              margin: '0 auto',
              fontSize: '1.2rem',
            }}>
              {homeContent.requirements.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
            marginBottom: '40px',
          }}>
            {/* 人群画像 */}
            <Card variant="gradient" gradient="primary">
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', fontWeight: 600 }}>
                {homeContent.requirements.profile.title}
              </h3>
              {homeContent.requirements.profile.items.map((item, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                  <div style={{
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: 'var(--primary-500)',
                  }}>
                    {item.label}
                  </div>
                  <div style={{ color: 'var(--text-light)' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </Card>

            {/* 时间与环境 */}
            <Card variant="gradient" gradient="secondary">
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', fontWeight: 600 }}>
                {homeContent.requirements.time.title}
              </h3>
              {homeContent.requirements.time.items.map((item, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                  <div style={{
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: 'var(--primary-500)',
                  }}>
                    {item.label}
                  </div>
                  <div style={{ color: 'var(--text-light)' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </Card>

            {/* 在线时间 */}
            <Card variant="glow" hover>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', fontWeight: 600 }}>
                {homeContent.requirements.online.title}
              </h3>
              {homeContent.requirements.online.items.map((item, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                  <div style={{
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: 'var(--primary-500)',
                  }}>
                    {item.label}
                  </div>
                  <div style={{ color: 'var(--text-light)' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </Card>

            {/* 明确不适合的人群 */}
            <Card variant="bordered">
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '20px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span style={{ fontSize: '1.2rem' }}>⚠️</span>
                {homeContent.requirements.unsuitable.title}
              </h3>
              {homeContent.requirements.unsuitable.items.map((item, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    marginBottom: '8px',
                  }}>
                    <span style={{
                      fontSize: '1rem',
                      color: item.type === 'unsuitable' 
                        ? 'var(--danger)' 
                        : 'var(--success)',
                    }}>
                      {item.type === 'unsuitable' ? '✗' : '✓'}
                    </span>
                    <div style={{
                      fontWeight: 600,
                      color: item.type === 'unsuitable' 
                        ? 'var(--danger-dark)' 
                        : 'var(--success-dark)',
                    }}>
                      {item.label}
                    </div>
                  </div>
                  <p style={{
                    color: item.type === 'unsuitable' 
                      ? 'var(--danger-dark)' 
                      : 'var(--success-dark)',
                    lineHeight: 1.6,
                    marginLeft: '24px',
                    fontSize: '0.95rem',
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </Card>
          </div>

          {/* 重要提醒 */}
          <div style={{
            background: 'var(--warning-light)',
            border: '2px solid var(--warning)',
            borderRadius: '15px',
            padding: '30px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '20px',
              fontWeight: 700,
              color: 'var(--warning-dark)',
            }}>
              {homeContent.requirements.notice.title}
            </h3>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--danger)',
              marginBottom: '20px',
            }}>
              {homeContent.requirements.notice.once}
            </div>
            <p style={{
              color: 'var(--text-dark)',
              lineHeight: 1.8,
              marginBottom: '20px',
            }}>
              {homeContent.requirements.notice.description}
            </p>
            <p style={{
              color: 'var(--text-dark)',
              lineHeight: 1.8,
            }}>
              {homeContent.requirements.notice.philosophy}
            </p>
          </div>
        </div>
      </section>
      </SectionWithAnimation>

      {/* Video Section */}
      <SectionWithAnimation delay={200}>
        <section className="section-padding" style={{ 
          background: 'var(--bg-white)',
          position: 'relative',
          overflow: 'hidden',
        }}>
        <GeometricBackground variant="dots" intensity="subtle" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 700 }}>
              {homeContent.video.title}
            </h2>
            <p style={{
              color: 'var(--text-light)',
              maxWidth: '800px',
              margin: '0 auto',
              fontSize: '1.2rem',
            }}>
              {homeContent.video.subtitle}
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '30px',
          }}>
            {homeContent.video.videos.map((video, index) => (
              <CardWithAnimation key={index} delay={index * 100}>
                <Card hover variant="glow">
                <div style={{
                  height: '200px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '12px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  opacity: 0.3,
                }}>
                  ▶️
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px',
                }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>
                    {video.title}
                  </h3>
                  <span style={{
                    fontSize: '0.9rem',
                    color: 'var(--primary-500)',
                    fontWeight: 600,
                  }}>
                    {video.rating}
                  </span>
                </div>
                <p style={{
                  color: 'var(--text-light)',
                  lineHeight: 1.8,
                  marginBottom: '20px',
                }}>
                  {video.description}
                </p>
                <Button variant="secondary">
                  {video.cta}
                </Button>
              </Card>
              </CardWithAnimation>
            ))}
          </div>
        </div>
      </section>
      </SectionWithAnimation>

      {/* Showcase Section */}
      <section className="section-padding decorative-bg" style={{ 
        background: 'var(--bg-light)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <GeometricBackground variant="grid" intensity="subtle" />
        <GlowEffect position="top-left" size={400} intensity={0.15} />
        <GlowEffect position="bottom-right" size={300} color="var(--secondary-500)" intensity={0.1} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 700 }}>
              {homeContent.showcase.title}
            </h2>
          </div>

          {/* 收入范围展示 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '60px',
          }}>
            {homeContent.showcase.levels.map((level, index) => (
              <Card key={index} hover variant={index === 0 ? 'glow' : index === 1 ? 'gradient' : 'bordered'} gradient={index === 1 ? 'secondary' : 'primary'}>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    marginBottom: '20px',
                    fontWeight: 600,
                    color: 'var(--primary-500)',
                  }}>
                    {level.name}
                  </h3>
                  <div style={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    marginBottom: '8px',
                    background: 'var(--gradient-primary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    {level.incomeMin} - {level.incomeMax}
                  </div>
                  <div style={{
                    color: 'var(--text-light)',
                    fontSize: '1rem',
                  }}>
                    {level.incomeLabel}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* 收益曲线 */}
          <Card variant="glow" hover>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '30px',
              fontWeight: 600,
              textAlign: 'center',
            }}>
              {homeContent.showcase.chart.title}
            </h3>
            <div style={{
              position: 'relative',
              height: '300px',
              padding: '20px',
            }}>
              {/* Y轴标签 */}
              <div style={{
                position: 'absolute',
                left: '0',
                top: '0',
                bottom: '0',
                width: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingTop: '20px',
                paddingBottom: '20px',
              }}>
                {[30, 20, 10, 0].map((value) => (
                  <span key={value} style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-light)',
                    textAlign: 'right',
                  }}>
                    {value}%
                  </span>
                ))}
              </div>

              {/* 图表区域 */}
              <div style={{
                marginLeft: '60px',
                position: 'relative',
                height: '100%',
              }}>
                {/* 网格线 */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} style={{
                      width: '100%',
                      height: '1px',
                      background: 'var(--border)',
                    }} />
                  ))}
                </div>

                {/* SVG 连线 */}
                <svg style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  paddingBottom: '40px',
                  zIndex: 1,
                }}>
                  {homeContent.showcase.chart.data.map((point, index) => {
                    if (index === homeContent.showcase.chart.data.length - 1) return null;
                    const currentHeight = (point.return / 30) * 100;
                    const nextPoint = homeContent.showcase.chart.data[index + 1];
                    const nextHeight = (nextPoint.return / 30) * 100;
                    const pointWidth = 100 / homeContent.showcase.chart.data.length;
                    const x1 = (index + 0.5) * pointWidth + '%';
                    const y1 = (100 - currentHeight) + '%';
                    const x2 = (index + 1.5) * pointWidth + '%';
                    const y2 = (100 - nextHeight) + '%';
                    
                    return (
                      <line
                        key={index}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    );
                  })}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00C9FF" />
                      <stop offset="100%" stopColor="#00FFAA" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* 数据点和数值标签 */}
                <div style={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-around',
                  paddingBottom: '40px',
                  zIndex: 2,
                }}>
                  {homeContent.showcase.chart.data.map((point, index) => {
                    const height = (point.return / 30) * 100; // 30%为最大值
                    
                    return (
                      <div key={index} style={{
                        position: 'relative',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100%',
                      }}>
                        {/* 数据点 */}
                        <div style={{
                          position: 'absolute',
                          bottom: `${height}%`,
                          width: '14px',
                          height: '14px',
                          background: 'var(--primary-500)',
                          borderRadius: '50%',
                          border: '3px solid white',
                          boxShadow: '0 2px 8px rgba(0, 201, 255, 0.5)',
                          zIndex: 3,
                        }} />
                        
                        {/* 数值标签 */}
                        <div style={{
                          position: 'absolute',
                          bottom: `calc(${height}% + 25px)`,
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          color: 'var(--primary-500)',
                          whiteSpace: 'nowrap',
                          background: 'rgba(255, 255, 255, 0.9)',
                          padding: '4px 8px',
                          borderRadius: '6px',
                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        }}>
                          {point.return}%
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* X轴标签 */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: '10px',
                  paddingLeft: '60px',
                }}>
                  {homeContent.showcase.chart.data.map((point, index) => (
                    <div key={index} style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-light)',
                      textAlign: 'center',
                      flex: 1,
                    }}>
                      {point.month}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Platform Data Section */}
      <section className="section-padding" style={{ 
        background: 'var(--bg-white)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <GeometricBackground variant="circles" intensity="subtle" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '20px', 
              fontWeight: 700,
            }}>
              {homeContent.platformData.title}
            </h2>
            <p style={{
              color: 'var(--text-light)',
              maxWidth: '800px',
              margin: '0 auto',
              fontSize: '1.2rem',
            }}>
              {homeContent.platformData.subtitle}
            </p>
          </div>
          <div className="platform-data-grid">
            {homeContent.platformData.items.map((item, index) => (
              <Card key={index} hover variant={index % 4 === 0 ? 'glow' : index % 4 === 1 ? 'gradient' : index % 4 === 2 ? 'bordered' : 'default'} gradient={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent'}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    marginBottom: '15px',
                    background: 'var(--gradient-primary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    {item.value}
                  </div>
                  <div style={{
                    color: 'var(--text-light)',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                  }}>
                    {item.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{
        background: 'linear-gradient(135deg, #0A1929 0%, #1A2F4A 50%, #0F1B2E 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <GeometricBackground variant="grid" intensity="subtle" color="rgba(0, 201, 255, 0.15)" />
        <GlowEffect position="top-right" size={500} color="var(--primary-500)" intensity={0.4} />
        <GlowEffect position="bottom-left" size={400} color="var(--secondary-500)" intensity={0.3} />
        <GlowEffect position="center" size={600} color="var(--accent-500)" intensity={0.2} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '20px',
              fontWeight: 700,
            }}>
              {homeContent.cta.title}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '50px',
              opacity: 0.9,
            }}>
              {homeContent.cta.subtitle}
            </p>

            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              marginBottom: '40px',
              borderRadius: '15px',
              padding: '30px',
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '30px',
                fontWeight: 600,
              }}>
                {homeContent.cta.notice.title}
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '25px',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    marginBottom: '10px',
                  }}>
                    {homeContent.cta.notice.passrate.value}
                  </div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                    {homeContent.cta.notice.passrate.label}
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    marginBottom: '10px',
                  }}>
                    {homeContent.cta.notice.opportunity.value}
                  </div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                    {homeContent.cta.notice.opportunity.label}
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    marginBottom: '10px',
                  }}>
                    {homeContent.cta.notice.time.value}
                  </div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                    {homeContent.cta.notice.time.label}
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    marginBottom: '10px',
                  }}>
                    {homeContent.cta.notice.money.value}
                  </div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                    {homeContent.cta.notice.money.label}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'inline-block' }}>
              <Link href="/training" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '15px 40px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  background: 'white',
                  color: 'var(--primary-500)',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s',
                }}>
                  {homeContent.cta.button.primary}
                </button>
              </Link>
            </div>
            <p style={{
              marginTop: '20px',
              fontSize: '0.9rem',
              opacity: 0.8,
            }}>
              {homeContent.cta.button.note}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
