import donateContent from '@/content/zh/donate.json';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function DonatePage() {
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
              background: 'var(--primary-50)',
              color: 'var(--primary)',
              padding: '6px 15px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '20px',
            }}>
              {donateContent.hero.badge}
            </div>
            <h1 style={{
              fontSize: '3.5rem',
              marginBottom: '20px',
              fontWeight: 800,
            }}>
              {donateContent.hero.title1}
              <span style={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {donateContent.hero.title2}
              </span>
            </h1>
            <p style={{
              fontSize: '1.3rem',
              color: 'var(--text-light)',
              marginBottom: '40px',
            }}>
              {donateContent.hero.description}
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '50px',
              flexWrap: 'wrap',
            }}>
              {donateContent.hero.stats.map((stat, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    marginBottom: '10px',
                    background: 'var(--gradient-primary)',
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

      {/* Donation Amount Section */}
      <section className="section-padding" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <Card style={{
            background: 'var(--warning-light)',
            border: '2px solid var(--warning)',
          }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{
                display: 'inline-block',
                background: 'var(--warning)',
                color: 'white',
                padding: '6px 15px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 600,
                marginBottom: '15px',
              }}>
                {donateContent.amount.badge}
              </div>
              <div style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--warning-dark)',
                marginBottom: '10px',
              }}>
                ⚠️ {donateContent.amount.warning}
              </div>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '30px',
              textAlign: 'center',
            }}>
              <div>
                <div style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-light)',
                  marginBottom: '10px',
                }}>
                  {donateContent.amount.start}
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--warning-dark)',
                }}>
                  $XXX
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-light)',
                  marginBottom: '10px',
                }}>
                  {donateContent.amount.daily}
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--warning-dark)',
                }}>
                  $5/天
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-light)',
                  marginBottom: '10px',
                }}>
                  {donateContent.amount.payment}
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--warning-dark)',
                }}>
                  {donateContent.amount.crypto}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}>
            {donateContent.benefits.items.map((item, index) => (
              <Card key={index} hover>
                <div style={{ textAlign: 'center' }}>
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
                  }}>
                    {index === 0 && '🎓'}
                    {index === 1 && '👨‍🏫'}
                    {index === 2 && '🏆'}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: 1.8 }}>
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="section-padding" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '30px',
          }}>
            {donateContent.rewards.items.map((item, index) => (
              <Card key={index} style={{
                background: 'var(--success-light)',
                border: '2px solid var(--success)',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                }}>
                  <div style={{
                    minWidth: '60px',
                    height: '60px',
                    background: 'var(--success)',
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
                      color: 'var(--success-dark)',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: 'var(--success-dark)',
                      lineHeight: 1.8,
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Donate Section */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
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

          <div style={{ marginBottom: '50px' }}>
            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: '40px',
              textAlign: 'center',
              color: 'var(--primary)',
              fontWeight: 600,
            }}>
              {donateContent.how.flowTitle}
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
            }}>
              {donateContent.how.steps.map((step, index) => (
                <Card key={index} hover>
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
              ))}
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
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
              <Button variant="secondary" size="lg">
                {donateContent.how.cta.email}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="section-padding" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <Card style={{
            background: 'var(--info-light)',
            border: '2px solid var(--info)',
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: '30px',
              fontWeight: 600,
              color: 'var(--info-dark)',
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
                    ? '1px solid var(--border-light)' 
                    : 'none',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}>
                  <span style={{
                    color: 'var(--info)',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                  }}>•</span>
                  <span style={{
                    color: 'var(--info-dark)',
                    lineHeight: 1.8,
                  }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}
