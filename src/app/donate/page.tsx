'use client';

import { useMemo } from 'react';
import donateContent from '@/content/zh/donate.json';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Hero from '@/components/ui/Hero';
import Link from 'next/link';
import SectionWithAnimation from '@/components/ui/SectionWithAnimation';
import CardWithAnimation from '@/components/ui/CardWithAnimation';
import { GeometricBackground, GlowEffect } from '@/components/ui/BackgroundDecorations';

export default function DonatePage() {
  // 计算当前捐赠金额
  const currentAmount = useMemo(() => {
    const startDate = new Date('2025-10-01');
    startDate.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startAmount = 999;
    const dailyIncrease = 5;
    
    // 如果还没到起始日期，返回起始金额
    if (today < startDate) {
      return startAmount;
    }
    
    // 计算天数差
    const diffTime = today.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    return startAmount + (diffDays * dailyIncrease);
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <Hero
        badge="全球试用会员"
        title={
          <>
            {donateContent.hero.title1}
            <span style={{
              background: 'linear-gradient(to right, var(--primary-500), var(--secondary-500))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {donateContent.hero.title2}
            </span>
          </>
        }
        subtitle={donateContent.hero.description}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '50px',
          flexWrap: 'wrap',
        }}>
          {donateContent.hero.stats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: 700,
                marginBottom: '10px',
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {stat.value}
              </div>
              <div style={{
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: '1.1rem',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Hero>

      {/* Donation Amount Section */}
      <SectionWithAnimation>
        <section className="section-padding" style={{ 
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <GeometricBackground variant="dots" intensity="subtle" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <CardWithAnimation delay={0}>
              <div style={{
                background: '#0A1929',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: 'var(--shadow-xl)',
              }}>
                <div>
                  <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <div style={{
                      display: 'inline-block',
                      background: 'rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(10px)',
                      color: 'white',
                      padding: '8px 20px',
                      borderRadius: '25px',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      marginBottom: '25px',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                    }}>
                      {donateContent.amount.badge}
                    </div>
                    <div style={{
                      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                      fontWeight: 800,
                      color: 'white',
                      marginBottom: '12px',
                      lineHeight: 1.2,
                      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    }}>
                      ${currentAmount.toLocaleString()}
                    </div>
                    <div style={{
                      fontSize: '1.1rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      marginBottom: '25px',
                      fontWeight: 500,
                    }}>
                      USDT/USDC
                    </div>
                    <div style={{
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.85)',
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      padding: '10px 20px',
                      borderRadius: '12px',
                      display: 'inline-block',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}>
                      ⚠️ {donateContent.amount.warning}
                    </div>
                  </div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '25px',
                    textAlign: 'center',
                    marginTop: '35px',
                    paddingTop: '35px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                  }}>
                    <div>
                      <div style={{
                        fontSize: '0.85rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        marginBottom: '10px',
                        fontWeight: 500,
                      }}>
                        {donateContent.amount.start}
                      </div>
                      <div style={{
                        fontSize: '1.6rem',
                        fontWeight: 700,
                        color: 'white',
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                      }}>
                        $999
                      </div>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.85rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        marginBottom: '10px',
                        fontWeight: 500,
                      }}>
                        {donateContent.amount.daily}
                      </div>
                      <div style={{
                        fontSize: '1.6rem',
                        fontWeight: 700,
                        color: 'white',
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                      }}>
                        $5/天
                      </div>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.85rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        marginBottom: '10px',
                        fontWeight: 500,
                      }}>
                        {donateContent.amount.payment}
                      </div>
                      <div style={{
                        fontSize: '1.6rem',
                        fontWeight: 700,
                        color: 'white',
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                      }}>
                        {donateContent.amount.crypto}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardWithAnimation>
            
            {/* Donation Address Card */}
            <CardWithAnimation delay={100}>
              <div style={{
                background: 'var(--bg-white)',
                marginTop: '30px',
                padding: '30px',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-md)',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    marginBottom: '8px',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                  }}>
                    捐赠地址
                  </h3>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-light)',
                    marginBottom: '20px',
                  }}>
                    USDT / USDC 钱包地址
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                    wordBreak: 'break-all',
                    fontFamily: 'monospace',
                    background: 'var(--bg-gray)',
                    padding: '15px 20px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-medium)',
                    width: 'calc(100% - 40px)',
                    margin: '0 auto',
                    textAlign: 'center',
                  }}>
                    USDT TRC20: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </div>
                </div>
              </div>
            </CardWithAnimation>
          </div>
        </section>
      </SectionWithAnimation>

      {/* Benefits Section */}
      <SectionWithAnimation>
        <section className="section-padding" style={{ 
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <GeometricBackground variant="circles" intensity="subtle" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <CardWithAnimation delay={0}>
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}>
                  {donateContent.benefits.title}
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-light)',
                  maxWidth: '800px',
                  margin: '0 auto',
                }}>
                  {donateContent.benefits.description}
                </p>
              </div>
            </CardWithAnimation>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gridAutoRows: '1fr',
              gap: '30px',
            }}>
              {donateContent.benefits.items.map((item, index) => (
                <CardWithAnimation key={index} delay={index * 100}>
                  <Card variant="glow" hover style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'var(--gradient-primary)',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: 'white',
                    fontSize: '28px',
                    flexShrink: 0,
                  }}>
                    {index === 0 && '🎓'}
                    {index === 1 && '👨‍🏫'}
                    {index === 2 && '🏆'}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: 1.8, flex: 1 }}>
                    {item.description}
                  </p>
                </div>
                  </Card>
                </CardWithAnimation>
              ))}
            </div>
          </div>
        </section>
      </SectionWithAnimation>

      {/* Rewards Section */}
      <SectionWithAnimation>
        <section className="section-padding" style={{ 
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <GeometricBackground variant="grid" intensity="subtle" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <CardWithAnimation delay={0}>
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}>
                  {donateContent.rewards.title}
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-light)',
                  maxWidth: '800px',
                  margin: '0 auto',
                }}>
                  {donateContent.rewards.description}
                </p>
              </div>
            </CardWithAnimation>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gridAutoRows: '1fr',
              gap: '30px',
            }}>
              {donateContent.rewards.items.map((item, index) => (
                <CardWithAnimation key={index} delay={index * 100}>
                  <Card variant="gradient" hover style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                }}>
                  <div style={{
                    minWidth: '60px',
                    height: '60px',
                    background: 'var(--gradient-primary)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '28px',
                  }}>
                    {index === 0 && '⭐'}
                    {index === 1 && '💰'}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      marginBottom: '15px',
                      fontWeight: 600,
                      color: 'var(--text-dark)',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: 'var(--text-light)',
                      lineHeight: 1.8,
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
                  </Card>
                </CardWithAnimation>
              ))}
            </div>
          </div>
        </section>
      </SectionWithAnimation>

      {/* How to Donate Section */}
      <SectionWithAnimation>
        <section className="section-padding" style={{ 
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <GeometricBackground variant="dots" intensity="subtle" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <CardWithAnimation delay={0}>
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}>
                  {donateContent.how.title}
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-light)',
                  maxWidth: '800px',
                  margin: '0 auto',
                }}>
                  {donateContent.how.description}
                </p>
              </div>
            </CardWithAnimation>

            <CardWithAnimation delay={100}>
              <div style={{ marginBottom: '50px' }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  marginBottom: '40px',
                  textAlign: 'center',
                  color: 'var(--primary-500)',
                  fontWeight: 600,
                }}>
                  {donateContent.how.flowTitle}
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gridAutoRows: '1fr',
                  gap: '30px',
                }}>
                  {donateContent.how.steps.map((step, index) => (
                    <CardWithAnimation key={index} delay={index * 100}>
                      <Card variant="gradient" hover style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'var(--gradient-primary)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '20px',
                  }}>
                    {index + 1}
                  </div>
                  <h4 style={{
                    fontSize: '1.2rem',
                    marginBottom: '15px',
                    fontWeight: 600,
                  }}>
                    {step.title}
                  </h4>
                  <p style={{
                    color: 'var(--text-light)',
                    lineHeight: 1.8,
                  }}>
                    {step.description}
                  </p>
                      </Card>
                    </CardWithAnimation>
                  ))}
                </div>
              </div>
            </CardWithAnimation>

            <CardWithAnimation delay={300}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                flexWrap: 'wrap',
                marginTop: '20px',
              }}>
                <Link href="/assessment" style={{ textDecoration: 'none' }}>
                  <Button variant="primary" size="lg">
                    {donateContent.how.cta.test}
                  </Button>
                </Link>
                <a
                  href={`mailto:x.stark.dylan@gmail.com?subject=申请成为试用会员&body=您好，我想申请成为90天试用会员。`}
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="outline" size="lg">
                    {donateContent.how.cta.email}
                  </Button>
                </a>
              </div>
            </CardWithAnimation>
          </div>
        </section>
      </SectionWithAnimation>

      {/* Notice Section */}
      <SectionWithAnimation>
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
            <CardWithAnimation delay={0}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px',
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  marginBottom: '30px',
                  fontWeight: 600,
                  color: 'white',
                  textAlign: 'center',
                }}>
                  {donateContent.notice.title}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                }}>
                  {donateContent.notice.items.map((item, index) => (
                    <li key={index} style={{
                      padding: '15px 0',
                      borderBottom: index < donateContent.notice.items.length - 1 
                        ? '1px solid rgba(255, 255, 255, 0.2)' 
                        : 'none',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}>
                      <span style={{
                        color: 'var(--primary-500)',
                        fontSize: '1.2rem',
                        flexShrink: 0,
                      }}>•</span>
                      <span style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: 1.8,
                      }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardWithAnimation>
          </div>
        </section>
      </SectionWithAnimation>
    </div>
  );
}
