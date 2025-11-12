import trainingContent from '@/content/zh/training.json';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export default function TrainingPage() {
  return (
    <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
      {/* Hero Section */}
      <section style={{
        padding: 'clamp(120px, 15vw, 150px) 0 clamp(60px, 10vw, 100px)',
        background: 'var(--gradient-hero)',
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-block',
              background: 'var(--primary-light)',
              color: 'var(--primary)',
              padding: '6px 15px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '20px',
            }}>
              {trainingContent.hero.badge}
            </div>
            <h1 style={{
              fontSize: '3.5rem',
              marginBottom: '20px',
              fontWeight: 800,
            }}>
              {trainingContent.hero.title1}
              <span style={{
                background: 'var(--gradient-accent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {trainingContent.hero.title2}
              </span>
            </h1>
            <p style={{
              fontSize: '1.3rem',
              color: 'var(--text-light)',
              marginBottom: '40px',
            }}>
              {trainingContent.hero.subtitle}
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '50px',
              flexWrap: 'wrap',
            }}>
              {trainingContent.hero.stats.map((stat, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    marginBottom: '10px',
                    background: 'var(--gradient-accent)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    color: 'var(--text-light)',
                    fontSize: '1.1rem',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <Card style={{
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

      {/* About Section */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}>
              {trainingContent.about.title}
            </h2>
          </div>
          <Card style={{ marginBottom: '30px' }}>
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
          <Card>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '20px',
              fontWeight: 600,
              color: 'var(--primary)',
            }}>
              {trainingContent.about.timeline}
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              marginBottom: '30px',
            }}>
              {trainingContent.about.phases.map((phase, index) => (
                <div key={index} style={{
                  padding: '20px',
                  background: 'var(--bg-light)',
                  borderRadius: '10px',
                }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    marginBottom: '10px',
                    fontWeight: 600,
                    color: 'var(--primary)',
                  }}>
                    {phase.title}
                  </h4>
                  <p style={{ color: 'var(--text-light)' }}>
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
            }}>
              <div style={{
                padding: '20px',
                background: 'var(--danger-light)',
                borderRadius: '10px',
                border: '2px solid var(--danger)',
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  marginBottom: '10px',
                  fontWeight: 600,
                  color: 'var(--danger-dark)',
                }}>
                  {trainingContent.about.notfit.title}
                </h4>
                <p style={{ color: 'var(--danger-dark)' }}>
                  {trainingContent.about.notfit.description}
                </p>
              </div>
              <div style={{
                padding: '20px',
                background: 'var(--success-light)',
                borderRadius: '10px',
                border: '2px solid var(--success)',
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  marginBottom: '10px',
                  fontWeight: 600,
                  color: 'var(--success-dark)',
                }}>
                  {trainingContent.about.fit.title}
                </h4>
                <p style={{ color: 'var(--success-dark)' }}>
                  {trainingContent.about.fit.description}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Videos Section */}
      <section className="section-padding" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
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
            gap: '30px',
          }}>
            {trainingContent.videos.videos.map((video, index) => (
              <Card key={index} hover>
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
                    color: 'var(--primary)',
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
            ))}
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}>
              {trainingContent.profile.title}
            </h2>
          </div>

          {/* Unsuitable */}
          <Card style={{
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

          {/* Income */}
          <Card style={{ marginBottom: '40px' }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '20px',
              fontWeight: 600,
              color: 'var(--primary)',
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

          {/* Basic & Time Requirements */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
            marginBottom: '40px',
          }}>
            <Card>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '20px',
                fontWeight: 600,
              }}>
                {trainingContent.profile.basic.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {trainingContent.profile.basic.items.map((item, index) => (
                  <li key={index} style={{
                    padding: '12px 0',
                    borderBottom: index < trainingContent.profile.basic.items.length - 1 
                      ? '1px solid var(--border-light)' 
                      : 'none',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}>
                    <span style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>✓</span>
                    <span style={{ color: 'var(--text-dark)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '20px',
                fontWeight: 600,
              }}>
                {trainingContent.profile.time.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {trainingContent.profile.time.items.map((item, index) => (
                  <li key={index} style={{
                    padding: '12px 0',
                    borderBottom: index < trainingContent.profile.time.items.length - 1 
                      ? '1px solid var(--border-light)' 
                      : 'none',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}>
                    <span style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>⏰</span>
                    <span style={{ color: 'var(--text-dark)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth Plan Section */}
      <section className="section-padding" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}>
              {trainingContent.plan.title}
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {trainingContent.plan.phases.map((phase, index) => (
              <Card key={index} hover>
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
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '30px',
          }}>
            <Card style={{
              border: '2px solid var(--danger)',
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '25px',
                fontWeight: 600,
                color: 'var(--danger-dark)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span>🚫</span>
                {trainingContent.rules.trading.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
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
                    }}>✗</span>
                    <span style={{ color: 'var(--text-dark)', lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card style={{
              border: '2px solid var(--warning)',
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '25px',
                fontWeight: 600,
                color: 'var(--warning-dark)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span>📋</span>
                {trainingContent.rules.meeting.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
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
                    }}>✗</span>
                    <span style={{ color: 'var(--text-dark)', lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="section-padding" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}>
              {trainingContent.final.title}
            </h2>
            <p style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--primary)',
              marginBottom: '40px',
            }}>
              {trainingContent.final.motto}
            </p>
          </div>
          <Card>
            {trainingContent.final.paragraphs.map((paragraph, index) => (
              <p key={index} style={{
                fontSize: '1.1rem',
                lineHeight: 2,
                color: 'var(--text-dark)',
                marginBottom: '25px',
              }}>
                {paragraph}
              </p>
            ))}
            <div style={{
              padding: '25px',
              background: 'var(--primary-light)',
              borderRadius: '12px',
              marginTop: '30px',
              border: '2px solid var(--primary)',
            }}>
              <p style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--primary-dark)',
                lineHeight: 1.8,
                textAlign: 'center',
              }}>
                {trainingContent.final.highlight}
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: 'clamp(60px, 10vw, 100px) 0',
        background: 'var(--gradient-primary)',
        color: 'white',
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '20px',
              fontWeight: 700,
            }}>
              {trainingContent.cta.title}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '40px',
              opacity: 0.9,
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
                  <button style={{
                    padding: '15px 40px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    background: 'white',
                    color: 'var(--primary)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s',
                  }}>
                    {action.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
