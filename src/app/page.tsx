'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import homeContent from '@/content/zh/home.json';
import testimonialsData from '@/content/zh/testimonials.json';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import SectionWithAnimation from '@/components/ui/SectionWithAnimation';
import CardWithAnimation from '@/components/ui/CardWithAnimation';
import { GeometricBackground, GlowEffect, GradientOverlay } from '@/components/ui/BackgroundDecorations';
import { FloatingElements } from '@/components/ui/FloatingElements';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import InterviewDialog from '@/components/ui/InterviewDialog';

export default function Home() {
  const [earningsImages, setEarningsImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInterviewDialogOpen, setIsInterviewDialogOpen] = useState(false);

  useEffect(() => {
    // 动态加载学员收益截图
    fetch('/api/student-earnings')
      .then(res => res.json())
      .then(data => {
        if (data.images && Array.isArray(data.images)) {
          setEarningsImages(data.images);
        }
      })
      .catch(err => {
        console.error('Failed to load earnings images:', err);
      });
  }, []);

  useEffect(() => {
    // 自动轮播：每5秒切换一次
    if (earningsImages.length <= 3) return; // 如果图片少于等于3张，不需要轮播
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // 计算下一个索引，确保循环显示
        const nextIndex = prevIndex + 3;
        return nextIndex >= earningsImages.length ? 0 : nextIndex;
      });
    }, 5000); // 5秒切换一次

    return () => clearInterval(interval);
  }, [earningsImages.length]);


  // 获取当前要显示的3张图片
  const getCurrentImages = () => {
    if (earningsImages.length === 0) return [];
    if (earningsImages.length <= 3) return earningsImages;
    
    const images = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % earningsImages.length;
      images.push(earningsImages[index]);
    }
    return images;
  };
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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* 背景装饰 - 深色主题适配 */}
        <GeometricBackground variant="grid" intensity="subtle" color="rgba(0, 201, 255, 0.1)" />
        <GlowEffect position="top-right" size={500} color="var(--primary-500)" intensity={0.4} />
        <GlowEffect position="bottom-left" size={400} color="var(--secondary-500)" intensity={0.3} />
        <GlowEffect position="center" size={600} color="var(--accent-500)" intensity={0.15} />
        
        {/* 浮动元素 */}
        <FloatingElements />
        
        {/* 渐变叠加层 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 201, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 212, 170, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(108, 99, 255, 0.05) 0%, transparent 50%)
          `,
          opacity: 0.7,
          zIndex: 0,
          pointerEvents: 'none',
        }} />
        
        <div className="home-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="hero-content-wrapper" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
          }}>
            <div style={{ 
              maxWidth: '900px',
              width: '100%',
              marginBottom: '60px',
            }}>
              {/* Hero徽章 */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(0, 201, 255, 0.15)',
                color: 'var(--primary-500)',
                padding: '6px 18px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '20px',
                animation: 'fadeInUp 1s ease-out',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 201, 255, 0.3)',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
              }}>
                <span style={{
                  marginRight: '6px',
                  fontSize: '0.95rem',
                }}>⚡</span>
                职业交易员培训
              </div>
              
              <h1 style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                marginBottom: '30px',
                lineHeight: 1.15,
                fontWeight: 800,
                color: '#FFFFFF',
                textShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                animation: 'fadeInUp 1s ease-out 0.2s both',
                letterSpacing: '-0.5px',
              }}>
                让交易更
                <span 
                  className="gradient-text-underline"
                  style={{
                    background: 'linear-gradient(to right, var(--primary-500), var(--secondary-500))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  简单
                </span>
                ，让收益更
                <span 
                  className="gradient-text-underline"
                  style={{
                    background: 'linear-gradient(to right, var(--primary-500), var(--secondary-500))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  稳定
                </span>
              </h1>
              
              <p style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                marginBottom: '50px',
                color: 'rgba(255, 255, 255, 0.85)',
                animation: 'fadeInUp 1s ease-out 0.5s both',
                maxWidth: '750px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: 1.7,
                fontWeight: 400,
              }}>
                {homeContent.hero.description}
              </p>
              
              <div style={{ 
                display: 'flex', 
                gap: '20px', 
                flexWrap: 'wrap',
                justifyContent: 'center',
                animation: 'fadeInUp 1s ease-out 0.8s both',
              }}>
                <Link href="/training" style={{ textDecoration: 'none' }}>
                  <Button variant="primary" size="lg" className="shake-button">
                    {homeContent.hero.cta.primary}
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  {homeContent.hero.cta.secondary}
                </Button>
              </div>
            </div>
            
            {/* 数据统计展示 */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '60px',
              marginTop: '40px',
              marginBottom: '60px',
              animation: 'fadeInUp 1s ease-out 1.1s both',
              flexWrap: 'wrap',
            }}>
              <div style={{
                textAlign: 'center',
                position: 'relative',
                padding: '0 20px',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  zIndex: -1,
                  transition: 'all 0.3s',
                }} />
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: '8px',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {homeContent.platformData.items[0].value}
                </div>
                <div style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                }}>
                  {homeContent.platformData.items[0].label}
                </div>
              </div>
              
              <div style={{
                textAlign: 'center',
                position: 'relative',
                padding: '0 20px',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  zIndex: -1,
                  transition: 'all 0.3s',
                }} />
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: '8px',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {homeContent.platformData.items[1].value}
                </div>
                <div style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                }}>
                  {homeContent.platformData.items[1].label}
                </div>
              </div>
              
              <div style={{
                textAlign: 'center',
                position: 'relative',
                padding: '0 20px',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  zIndex: -1,
                  transition: 'all 0.3s',
                }} />
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: '8px',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {homeContent.platformData.items[2].value}
                </div>
                <div style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                }}>
                  {homeContent.platformData.items[2].label}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 滚动指示器 */}
        <ScrollIndicator />
      </section>

      {/* Why Choose Section */}
      <SectionWithAnimation>
        <section className="section-padding decorative-bg" style={{ 
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <GeometricBackground variant="dots" intensity="subtle" />
          <div className="home-container" style={{ position: 'relative', zIndex: 1 }}>
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
            gridAutoRows: '1fr',
            gap: '30px',
            alignItems: 'stretch',
          }}>
            {homeContent.why.advantages.map((advantage, index) => (
              <CardWithAnimation key={index} delay={index * 100} style={{ display: 'flex', height: '100%' }}>
                <Card hover variant="gradient" gradient="primary" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column' }}>
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
        <div className="home-container" style={{ position: 'relative', zIndex: 1 }}>
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
            <Card variant="default" hover>
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
            <Card hover>
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
        background: 'var(--bg-light)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <GeometricBackground variant="circles" intensity="subtle" />
        <div className="home-container" style={{ position: 'relative', zIndex: 1 }}>
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
            gridAutoRows: '1fr',
            gap: '30px',
            alignItems: 'stretch',
          }}>
            {homeContent.careerPath.stages.map((stage, index) => (
              <CardWithAnimation key={index} delay={index * 100} style={{ display: 'flex', height: '100%' }}>
                <Card hover variant={index % 2 === 0 ? 'gradient' : 'glow'} gradient={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent'} style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
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
        <div className="home-container" style={{ position: 'relative', zIndex: 1 }}>
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
            <Card variant="gradient" gradient="primary" hover>
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
            <Card variant="gradient" gradient="secondary" hover>
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
            <Card variant="gradient" gradient="secondary" hover>
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
            <Card variant="gradient" gradient="primary" hover>
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
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
        <GeometricBackground variant="dots" intensity="subtle" />
        <div className="home-container" style={{ position: 'relative', zIndex: 1 }}>
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
            gridAutoRows: '1fr',
            gap: '30px',
            alignItems: 'stretch',
          }}>
            {homeContent.video.videos.map((video, index) => (
              <CardWithAnimation key={index} delay={index * 100} style={{ display: 'flex', height: '100%' }}>
                <Card hover variant="glow" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
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
                  flex: 1,
                }}>
                  {video.description}
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <Button variant="secondary">
                    {video.cta}
                  </Button>
                </div>
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
        <div className="home-container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 700 }}>
              {homeContent.showcase.title}
            </h2>
          </div>

          {/* 收入范围展示 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gridAutoRows: '1fr',
            gap: '30px',
            marginBottom: '60px',
            alignItems: 'stretch',
          }}>
            {homeContent.showcase.levels.map((level, index) => (
              <Card key={index} hover variant="glow" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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

          {/* 学员收益截图 */}
          {earningsImages.length > 0 && (
            <Card variant="glow">
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '30px',
              fontWeight: 600,
              textAlign: 'center',
            }}>
                {homeContent.showcase.screenshots.title}
            </h3>
              <div 
                className="earnings-grid"
                style={{
              padding: '20px',
                }}
              >
                {getCurrentImages().map((image, index) => (
                  <div
                    key={`${currentIndex}-${index}`}
                    style={{
                position: 'relative',
                      width: '100%',
                      aspectRatio: '16/9',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      animation: 'fadeIn 0.5s ease-in',
                    }}
                  >
                    <Image
                      src={image}
                      alt={`学员收益截图 ${currentIndex + index + 1}`}
                      fill
                      style={{
                        objectFit: 'cover',
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  ))}
                </div>
              {/* 指示器 */}
              {earningsImages.length > 3 && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '20px',
                }}>
                  {Array.from({ length: Math.ceil(earningsImages.length / 3) }).map((_, index) => {
                    const pageIndex = index * 3;
                    const isActive = Math.floor(currentIndex / 3) === index;
                    return (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(pageIndex)}
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          border: 'none',
                          background: isActive ? 'var(--primary-500)' : 'var(--border)',
                          cursor: 'pointer',
                          transition: 'background 0.3s ease',
                          padding: 0,
                        }}
                        aria-label={`切换到第 ${index + 1} 页`}
                      />
                    );
                  })}
                </div>
              )}
              {homeContent.showcase.screenshots.note && (
                <p style={{
                      textAlign: 'center',
                  color: 'var(--text-light)',
                  fontSize: '0.9rem',
                  marginTop: '20px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border)',
                    }}>
                  {homeContent.showcase.screenshots.note}
                </p>
              )}
          </Card>
          )}
        </div>
      </section>

      {/* Platform Data Section */}
      <section className="section-padding" style={{ 
        background: 'var(--bg-light)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <GeometricBackground variant="circles" intensity="subtle" />
        <div className="home-container" style={{ position: 'relative', zIndex: 1 }}>
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
              <Card key={index} hover variant="glow" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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

      {/* Testimonials Section */}
      <SectionWithAnimation delay={200}>
        <section className="section-padding" style={{ 
          background: 'var(--bg-white)',
          position: 'relative',
          overflow: 'hidden',
        }}>
        <GeometricBackground variant="dots" intensity="subtle" />
        <div className="home-container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 700 }}>
              {homeContent.testimonials.title}
            </h2>
            <p style={{
              color: 'var(--text-light)',
              maxWidth: '800px',
              margin: '0 auto',
              fontSize: '1.2rem',
            }}>
              {homeContent.testimonials.subtitle}
            </p>
          </div>

          {/* Testimonials Scrolling Banner */}
          {testimonialsData.testimonials.length > 0 && (
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
            }}>
              <div className="testimonials-scroll-container">
                <div className="testimonials-scroll-track">
                  {/* 第一组卡片 */}
                  {testimonialsData.testimonials.map((testimonial, index) => (
                    <div
                      key={`first-${index}`}
                      className="testimonial-card-wrapper"
                    >
                      <Card hover style={{
                        padding: '0',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: '300px',
                        maxWidth: '300px',
                        background: 'white',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                        border: '1px solid var(--border)',
                      }}>
                        {/* 顶部装饰条 */}
                        <div style={{
                          height: '4px',
                          background: 'var(--gradient-primary)',
                          width: '100%',
                        }} />
                        
                        <div style={{
                          padding: '24px',
                          display: 'flex',
                          flexDirection: 'column',
                          flex: 1,
                        }}>
                          {/* 头部信息 */}
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            marginBottom: '20px',
                          }}>
                            {/* 头像圆圈 */}
                            <div style={{
                              width: '56px',
                              height: '56px',
                              borderRadius: '50%',
                              background: 'var(--gradient-primary)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '1.5rem',
                              fontWeight: 700,
                              color: 'white',
                              flexShrink: 0,
                            }}>
                              {testimonial.name.charAt(0)}
                            </div>
                            
                            <div style={{ flex: 1 }}>
                              <h3 style={{
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                marginBottom: '4px',
                                color: 'var(--text-dark)',
                              }}>
                                {testimonial.name}
                              </h3>
                              <div style={{
                                display: 'inline-block',
                                padding: '4px 12px',
                                borderRadius: '12px',
                                background: 'var(--primary-50)',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                color: 'var(--primary-700)',
                              }}>
                                {testimonial.role}
                              </div>
                            </div>
                          </div>
                          
                          {/* Star Rating */}
                          <div style={{
                            display: 'flex',
                            gap: '4px',
                            marginBottom: '16px',
                            alignItems: 'center',
                          }}>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span
                                key={i}
                                style={{
                                  color: i < testimonial.rating ? '#FFD700' : '#E2E8F0',
                                  fontSize: '1.1rem',
                                }}
                              >
                                ★
                              </span>
                            ))}
                            <span style={{
                              marginLeft: '8px',
                              fontSize: '0.85rem',
                              color: 'var(--text-light)',
                            }}>
                              {testimonial.date}
                            </span>
                          </div>

                          {/* Content */}
                          <div style={{
                            position: 'relative',
                            flex: 1,
                          }}>
                            <div style={{
                              position: 'absolute',
                              top: '-8px',
                              left: '-8px',
                              fontSize: '3rem',
                              color: 'var(--primary-50)',
                              lineHeight: 1,
                              fontFamily: 'serif',
                            }}>
                              "
                            </div>
                            <p style={{
                              color: 'var(--text-medium)',
                              lineHeight: 1.8,
                              fontSize: '0.95rem',
                              position: 'relative',
                              zIndex: 1,
                            }}>
                              {testimonial.content}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                  {/* 第二组卡片（用于无缝循环） */}
                  {testimonialsData.testimonials.map((testimonial, index) => (
                    <div
                      key={`second-${index}`}
                      className="testimonial-card-wrapper"
                    >
                      <Card hover style={{
                        padding: '0',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: '300px',
                        maxWidth: '300px',
                        background: 'white',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                        border: '1px solid var(--border)',
                      }}>
                        {/* 顶部装饰条 */}
                        <div style={{
                          height: '4px',
                          background: 'var(--gradient-primary)',
                          width: '100%',
                        }} />
                        
                        <div style={{
                          padding: '24px',
                          display: 'flex',
                          flexDirection: 'column',
                          flex: 1,
                        }}>
                          {/* 头部信息 */}
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            marginBottom: '20px',
                          }}>
                            {/* 头像圆圈 */}
                            <div style={{
                              width: '56px',
                              height: '56px',
                              borderRadius: '50%',
                              background: 'var(--gradient-primary)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '1.5rem',
                              fontWeight: 700,
                              color: 'white',
                              flexShrink: 0,
                            }}>
                              {testimonial.name.charAt(0)}
                            </div>
                            
                            <div style={{ flex: 1 }}>
                              <h3 style={{
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                marginBottom: '4px',
                                color: 'var(--text-dark)',
                              }}>
                                {testimonial.name}
                              </h3>
                              <div style={{
                                display: 'inline-block',
                                padding: '4px 12px',
                                borderRadius: '12px',
                                background: 'var(--primary-50)',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                color: 'var(--primary-700)',
                              }}>
                                {testimonial.role}
                              </div>
                            </div>
                          </div>
                          
                          {/* Star Rating */}
                          <div style={{
                            display: 'flex',
                            gap: '4px',
                            marginBottom: '16px',
                            alignItems: 'center',
                          }}>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span
                                key={i}
                                style={{
                                  color: i < testimonial.rating ? '#FFD700' : '#E2E8F0',
                                  fontSize: '1.1rem',
                                }}
                              >
                                ★
                              </span>
                            ))}
                            <span style={{
                              marginLeft: '8px',
                              fontSize: '0.85rem',
                              color: 'var(--text-light)',
                            }}>
                              {testimonial.date}
                            </span>
                          </div>

                          {/* Content */}
                          <div style={{
                            position: 'relative',
                            flex: 1,
                          }}>
                            <div style={{
                              position: 'absolute',
                              top: '-8px',
                              left: '-8px',
                              fontSize: '3rem',
                              color: 'var(--primary-50)',
                              lineHeight: 1,
                              fontFamily: 'serif',
                            }}>
                              "
                            </div>
                            <p style={{
                              color: 'var(--text-medium)',
                              lineHeight: 1.8,
                              fontSize: '0.95rem',
                              position: 'relative',
                              zIndex: 1,
                            }}>
                              {testimonial.content}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      </SectionWithAnimation>

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
        <div className="home-container" style={{ position: 'relative', zIndex: 1 }}>
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
              <div 
                className="notice-grid"
                style={{
                display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '30px',
                }}
              >
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
              <button 
                className="shake-button"
                onClick={() => setIsInterviewDialogOpen(true)}
                style={{
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
                }}
              >
                {homeContent.cta.button.primary}
              </button>
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

      {/* 预约面试对话框 */}
      <InterviewDialog 
        isOpen={isInterviewDialogOpen} 
        onClose={() => setIsInterviewDialogOpen(false)} 
      />
    </div>
  );
}
