'use client';

import trainingContent from '@/content/zh/training.json';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import SectionWithAnimation from '@/components/ui/SectionWithAnimation';
import CardWithAnimation from '@/components/ui/CardWithAnimation';
import { GeometricBackground, GlowEffect } from '@/components/ui/BackgroundDecorations';
import Hero from '@/components/ui/Hero';

export default function TrainingPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        badge="实战训练营"
        title={
          <>
            {trainingContent.hero.title1}
            <span 
              className="gradient-text-underline"
              style={{
                background: 'linear-gradient(to right, var(--primary-500), var(--secondary-500))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {trainingContent.hero.title2}
            </span>
          </>
        }
        subtitle={trainingContent.hero.subtitle}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '50px',
          flexWrap: 'wrap',
        }}>
          {trainingContent.hero.stats.map((stat, index) => (
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

      {/* Welcome Section */}
      <SectionWithAnimation>
        <section className="section-padding decorative-bg" style={{ 
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <GeometricBackground variant="dots" intensity="subtle" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <Card variant="glow" gradient="secondary" style={{
              background: 'var(--success-light)',
              border: '2px solid var(--success)',
            }}>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '20px',
              fontWeight: 700,
              color: 'var(--success-dark)',
            }}>
              {trainingContent.welcome.title}
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 2,
              color: 'var(--text-dark)',
              marginBottom: '20px',
            }}>
              {trainingContent.welcome.intro}
            </p>
            <div style={{
              padding: '15px 20px',
              background: 'var(--warning-light)',
              borderRadius: '10px',
              marginBottom: '20px',
              border: '2px solid var(--warning)',
            }}>
              <p style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--warning-dark)',
                marginBottom: '10px',
              }}>
                ⚠️ {trainingContent.welcome.warning}
              </p>
            </div>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 2,
              color: 'var(--text-dark)',
            }}>
              {trainingContent.welcome.description}
            </p>
            </Card>
          </div>
        </section>
      </SectionWithAnimation>

      {/* About Section */}
      <SectionWithAnimation>
        <section className="section-padding" style={{ 
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <GeometricBackground variant="circles" intensity="subtle" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}>
                {trainingContent.about.title}
              </h2>
            </div>
            <Card variant="gradient" gradient="primary" style={{ marginBottom: '30px' }}>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 2,
                color: 'var(--text-dark)',
                marginBottom: '20px',
              }}>
                {trainingContent.about.description1}
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 2,
                color: 'var(--text-dark)',
              }}>
                {trainingContent.about.description2}
              </p>
            </Card>
            
            {/* 时间线模块 - 优化UI */}
            <div style={{
              background: 'var(--bg-white)',
              borderRadius: '16px',
              padding: '40px',
              marginBottom: '30px',
              border: '2px solid var(--primary-500)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '200px',
                height: '200px',
                background: 'var(--gradient-primary)',
                opacity: 0.1,
                borderRadius: '50%',
                transform: 'translate(50%, -50%)',
              }} />
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '30px',
                fontWeight: 600,
                color: 'var(--primary-500)',
                textAlign: 'center',
              }}>
                {trainingContent.about.timeline}
              </h3>
              
              {/* 时间线流程 */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
                paddingLeft: '40px',
              }}>
                {/* 时间线 */}
                <div style={{
                  position: 'absolute',
                  left: '15px',
                  top: 0,
                  bottom: 0,
                  width: '3px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '2px',
                }} />
                
                {trainingContent.about.phases.map((phase, index) => (
                  <div key={index} style={{
                    position: 'relative',
                    paddingLeft: '30px',
                  }}>
                    {/* 时间点 */}
                    <div style={{
                      position: 'absolute',
                      left: '-25px',
                      top: '5px',
                      width: '20px',
                      height: '20px',
                      background: 'var(--gradient-primary)',
                      borderRadius: '50%',
                      border: '3px solid var(--bg-white)',
                      boxShadow: '0 0 0 3px var(--primary-500)',
                    }} />
                    
                    <CardWithAnimation delay={index * 100}>
                      <Card variant={index % 2 === 0 ? 'gradient' : 'glow'} gradient={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent'}>
                        <div style={{ padding: '20px' }}>
                          <h4 style={{
                            fontSize: '1.2rem',
                            marginBottom: '10px',
                            fontWeight: 600,
                            color: 'var(--primary-500)',
                          }}>
                            {phase.title}
                          </h4>
                          <p style={{ color: 'var(--text-light)' }}>
                            {phase.description}
                          </p>
                        </div>
                      </Card>
                    </CardWithAnimation>
                  </div>
                ))}
              </div>
              
              {/* 结果展示 */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gridAutoRows: '1fr',
                gap: '30px',
                marginTop: '40px',
                alignItems: 'stretch',
              }}>
                <CardWithAnimation delay={200} style={{ display: 'flex', height: '100%' }}>
                  <Card variant="bordered" style={{
                    background: 'var(--danger-light)',
                    border: '2px solid var(--danger)',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <h4 style={{
                      fontSize: '1.2rem',
                      marginBottom: '10px',
                      fontWeight: 600,
                      color: 'var(--danger-dark)',
                    }}>
                      {trainingContent.about.notfit.title}
                    </h4>
                    <p style={{ color: 'var(--danger-dark)', lineHeight: 1.8, flex: 1 }}>
                      {trainingContent.about.notfit.description}
                    </p>
                  </Card>
                </CardWithAnimation>
                <CardWithAnimation delay={300} style={{ display: 'flex', height: '100%' }}>
                  <Card variant="glow" gradient="secondary" style={{
                    background: 'var(--success-light)',
                    border: '2px solid var(--success)',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <h4 style={{
                      fontSize: '1.2rem',
                      marginBottom: '10px',
                      fontWeight: 600,
                      color: 'var(--success-dark)',
                    }}>
                      {trainingContent.about.fit.title}
                    </h4>
                    <p style={{ color: 'var(--success-dark)', lineHeight: 1.8, flex: 1 }}>
                      {trainingContent.about.fit.description}
                    </p>
                  </Card>
                </CardWithAnimation>
              </div>
            </div>
          </div>
        </section>
      </SectionWithAnimation>

      {/* Videos Section */}
      <SectionWithAnimation>
        <section className="section-padding" style={{ 
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <GeometricBackground variant="dots" intensity="subtle" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 700 }}>
                {trainingContent.videos.title}
              </h2>
              <p style={{
                color: 'var(--text-light)',
                maxWidth: '800px',
                margin: '0 auto',
                fontSize: '1.2rem',
              }}>
                {trainingContent.videos.description}
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gridAutoRows: '1fr',
              gap: '30px',
              alignItems: 'stretch',
            }}>
              {trainingContent.videos.videos.map((video, index) => (
                <CardWithAnimation key={index} delay={index * 100} style={{ display: 'flex', height: '100%' }}>
                  <Card hover variant={index % 2 === 0 ? 'glow' : 'gradient'} gradient={index % 2 === 0 ? 'primary' : 'secondary'} style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
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

      {/* Profile Section */}
      <SectionWithAnimation>
        <section className="section-padding" style={{ 
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <GeometricBackground variant="circles" intensity="subtle" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}>
                {trainingContent.profile.title}
              </h2>
            </div>

            {/* Unsuitable */}
            <CardWithAnimation delay={0}>
              <Card variant="bordered" style={{
                marginBottom: '40px',
                background: 'var(--danger-light)',
                border: '2px solid var(--danger)',
              }}>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 2,
              color: 'var(--danger-dark)',
            }}>
              {trainingContent.profile.unsuited}
              </p>
              </Card>
            </CardWithAnimation>

            {/* Income */}
            <CardWithAnimation delay={100}>
              <Card variant="gradient" gradient="primary" style={{ marginBottom: '40px' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '20px',
                  fontWeight: 600,
                  color: 'var(--primary-500)',
                }}>
                  {trainingContent.profile.income.title}
                </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 2,
              color: 'var(--text-dark)',
            }}>
              {trainingContent.profile.income.description}
                </p>
              </Card>
            </CardWithAnimation>

            {/* Basic & Time Requirements - 对称展示 */}
            <CardWithAnimation delay={200}>
              <Card variant="bordered" style={{
                background: 'var(--bg-white)',
                border: '2px solid var(--primary-500)',
                borderRadius: '16px',
                padding: 'clamp(20px, 4vw, 40px)',
                marginBottom: '40px',
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1px 1fr',
                  gap: 'clamp(20px, 4vw, 40px)',
                  alignItems: 'start',
                }}
                className="requirements-grid"
                >
                  {/* 基本条件 */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      marginBottom: '25px',
                      fontWeight: 600,
                      color: 'var(--primary-500)',
                      textAlign: 'center',
                      paddingBottom: '15px',
                      borderBottom: '2px solid var(--primary-500)',
                    }}>
                      {trainingContent.profile.basic.title}
                    </h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      minHeight: `${trainingContent.profile.basic.items.length * 50}px`,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                    }}>
                      {trainingContent.profile.basic.items.map((item, index) => (
                        <li key={index} style={{
                          padding: '15px 0',
                          borderBottom: index < trainingContent.profile.basic.items.length - 1 
                            ? '1px solid var(--border-light)' 
                            : 'none',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                        }}>
                          <span style={{ 
                            color: 'var(--primary-500)', 
                            fontSize: '1.2rem',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}>✓</span>
                          <span style={{ 
                            color: 'var(--text-dark)',
                            lineHeight: 1.6,
                            flex: 1,
                          }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 分隔线 */}
                  <div style={{
                    width: '1px',
                    background: 'linear-gradient(to bottom, transparent, var(--primary-500), transparent)',
                    height: '100%',
                    minHeight: '200px',
                  }} />

                  {/* 时间要求 */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      marginBottom: '25px',
                      fontWeight: 600,
                      color: 'var(--secondary-500)',
                      textAlign: 'center',
                      paddingBottom: '15px',
                      borderBottom: '2px solid var(--secondary-500)',
                    }}>
                      {trainingContent.profile.time.title}
                    </h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      minHeight: `${trainingContent.profile.basic.items.length * 50}px`,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                    }}>
                      {trainingContent.profile.time.items.map((item, index) => (
                        <li key={index} style={{
                          padding: '15px 0',
                          borderBottom: index < trainingContent.profile.time.items.length - 1 
                            ? '1px solid var(--border-light)' 
                            : 'none',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                        }}>
                          <span style={{ 
                            color: 'var(--secondary-500)', 
                            fontSize: '1.2rem',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}>⏰</span>
                          <span style={{ 
                            color: 'var(--text-dark)',
                            lineHeight: 1.6,
                            flex: 1,
                          }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </CardWithAnimation>
          </div>
        </section>
      </SectionWithAnimation>

      {/* Growth Plan Section */}
      <SectionWithAnimation>
        <section className="section-padding" style={{ 
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <GeometricBackground variant="grid" intensity="subtle" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}>
                {trainingContent.plan.title}
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {trainingContent.plan.phases.map((phase, index) => (
                <CardWithAnimation key={index} delay={index * 100}>
                  <Card hover variant={index % 3 === 0 ? 'gradient' : index % 3 === 1 ? 'glow' : 'bordered'} gradient={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'primary'}>
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
                    fontSize: '1.5rem',
                    fontWeight: 700,
                  }}>
                    {index + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '0.9rem',
                      color: 'var(--primary)',
                      fontWeight: 600,
                      marginBottom: '10px',
                    }}>
                      {phase.days}
                    </div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      marginBottom: '15px',
                      fontWeight: 600,
                    }}>
                      {phase.title}
                    </h3>
                    <p style={{
                      color: 'var(--text-light)',
                      marginBottom: '15px',
                      lineHeight: 1.8,
                    }}>
                      {phase.description}
                    </p>
                    {phase.requirement && (
                      <div style={{
                        padding: '12px',
                        background: 'var(--info-light)',
                        borderRadius: '8px',
                        marginBottom: '15px',
                      }}>
                        <p style={{
                          color: 'var(--info-dark)',
                          fontWeight: 600,
                        }}>
                          📋 {phase.requirement}
                        </p>
                      </div>
                    )}
                    {phase.weeks && (
                      <div style={{ marginBottom: '15px' }}>
                        {phase.weeks.map((week, weekIndex) => (
                          <div key={weekIndex} style={{
                            padding: '10px 0',
                            borderBottom: weekIndex < phase.weeks.length - 1 
                              ? '1px solid var(--border-light)' 
                              : 'none',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                          }}>
                            <span style={{ color: 'var(--primary)' }}>•</span>
                            <span style={{ color: 'var(--text-dark)' }}>{week}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {phase.items && (
                      <div style={{ marginBottom: '15px' }}>
                        {phase.items.map((item, itemIndex) => (
                          <div key={itemIndex} style={{
                            padding: '10px 0',
                            borderBottom: itemIndex < phase.items.length - 1 
                              ? '1px solid var(--border-light)' 
                              : 'none',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                          }}>
                            <span style={{ color: 'var(--primary)' }}>•</span>
                            <span style={{ color: 'var(--text-dark)' }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {phase.warning && (
                      <div style={{
                        padding: '12px',
                        background: 'var(--warning-light)',
                        borderRadius: '8px',
                        border: '1px solid var(--warning)',
                      }}>
                        <p style={{
                          color: 'var(--warning-dark)',
                          fontWeight: 600,
                        }}>
                          ⚠️ {phase.warning}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                  </Card>
                </CardWithAnimation>
              ))}
            </div>
          </div>
        </section>
      </SectionWithAnimation>

      {/* Rules Section */}
      <SectionWithAnimation>
        <section className="section-padding" style={{ 
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <GeometricBackground variant="waves" intensity="subtle" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}>
                {trainingContent.rules.title}
              </h2>
              <p style={{
                color: 'var(--text-light)',
                maxWidth: '900px',
                margin: '0 auto',
                fontSize: '1.2rem',
                lineHeight: 1.8,
              }}>
                {trainingContent.rules.description}
              </p>
            </div>
            {/* 交易规则红线和会议纪律红线 - 对称展示 */}
            <CardWithAnimation delay={0}>
              <Card variant="bordered" style={{
                background: 'var(--bg-white)',
                border: '2px solid var(--danger)',
                borderRadius: '16px',
                padding: 'clamp(20px, 4vw, 40px)',
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1px 1fr',
                  gap: 'clamp(20px, 4vw, 40px)',
                  alignItems: 'start',
                }}
                className="requirements-grid"
                >
                  {/* 交易规则红线 */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      marginBottom: '25px',
                      fontWeight: 600,
                      color: 'var(--danger)',
                      textAlign: 'center',
                      paddingBottom: '15px',
                      borderBottom: '2px solid var(--danger)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                    }}>
                      <span>🚫</span>
                      {trainingContent.rules.trading.title}
                    </h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      minHeight: `${Math.max(trainingContent.rules.trading.items.length, trainingContent.rules.meeting.items.length) * 50}px`,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                    }}>
                      {trainingContent.rules.trading.items.map((item, index) => (
                        <li key={index} style={{
                          padding: '15px 0',
                          borderBottom: index < trainingContent.rules.trading.items.length - 1 
                            ? '1px solid var(--border-light)' 
                            : 'none',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                        }}>
                          <span style={{ 
                            color: 'var(--danger)', 
                            fontSize: '1.2rem',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}>✗</span>
                          <span style={{ 
                            color: 'var(--text-dark)',
                            lineHeight: 1.6,
                            flex: 1,
                          }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 分隔线 */}
                  <div style={{
                    width: '1px',
                    background: 'linear-gradient(to bottom, transparent, var(--danger), transparent)',
                    height: '100%',
                    minHeight: '200px',
                    alignSelf: 'stretch',
                  }} />

                  {/* 会议纪律红线 */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      marginBottom: '25px',
                      fontWeight: 600,
                      color: 'var(--warning)',
                      textAlign: 'center',
                      paddingBottom: '15px',
                      borderBottom: '2px solid var(--warning)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                    }}>
                      <span>📋</span>
                      {trainingContent.rules.meeting.title}
                    </h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      minHeight: `${Math.max(trainingContent.rules.trading.items.length, trainingContent.rules.meeting.items.length) * 50}px`,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                    }}>
                      {trainingContent.rules.meeting.items.map((item, index) => (
                        <li key={index} style={{
                          padding: '15px 0',
                          borderBottom: index < trainingContent.rules.meeting.items.length - 1 
                            ? '1px solid var(--border-light)' 
                            : 'none',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                        }}>
                          <span style={{ 
                            color: 'var(--warning)', 
                            fontSize: '1.2rem',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}>✗</span>
                          <span style={{ 
                            color: 'var(--text-dark)',
                            lineHeight: 1.6,
                            flex: 1,
                          }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </CardWithAnimation>
          </div>
        </section>
      </SectionWithAnimation>

      {/* Final Section */}
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
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                marginBottom: '20px', 
                fontWeight: 700,
                color: 'white',
              }}>
                {trainingContent.final.title}
              </h2>
              <p style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--primary-500)',
                marginBottom: '40px',
              }}>
                {trainingContent.final.motto}
              </p>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '40px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}>
              {trainingContent.final.paragraphs.map((paragraph, index) => (
                <p key={index} style={{
                  fontSize: '1.1rem',
                  lineHeight: 2,
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '25px',
                }}>
                  {paragraph}
                </p>
              ))}
              <div style={{
                padding: '25px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                marginTop: '30px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}>
                <p style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: 'white',
                  lineHeight: 1.8,
                  textAlign: 'center',
                }}>
                  {trainingContent.final.highlight}
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWithAnimation>

      {/* CTA Section */}
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
                background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--secondary-50) 100%)',
                border: 'none',
                borderRadius: '20px',
                padding: '50px 40px',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                e.currentTarget.style.boxShadow = 'var(--shadow-2xl), 0 0 40px rgba(0, 201, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              >
                {/* 装饰性光晕 */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200%',
                  height: '200%',
                  background: `radial-gradient(circle, var(--primary-500) 0%, transparent 70%)`,
                  opacity: 0.05,
                  filter: 'blur(40px)',
                  pointerEvents: 'none',
                  transition: 'opacity 0.3s ease',
                }} />
                
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                  <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '20px',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                  }}>
                    {trainingContent.cta.title}
                  </h2>
                  <p style={{
                    fontSize: '1.2rem',
                    marginBottom: '40px',
                    color: 'var(--text-light)',
                    lineHeight: 1.8,
                  }}>
                    {trainingContent.cta.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    flexWrap: 'wrap',
                  }}>
                    {trainingContent.cta.actions.map((action, index) => (
                      <Link key={index} href={action.href} style={{ textDecoration: 'none' }}>
                        <Button 
                          variant={index === 0 ? 'primary' : 'outline'} 
                          size="lg"
                        >
                          {action.label}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </CardWithAnimation>
          </div>
        </section>
      </SectionWithAnimation>
    </div>
  );
}
