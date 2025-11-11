import homeContent from '@/content/zh/home.json';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        padding: '180px 0 100px',
        background: 'var(--gradient-hero)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '50px',
          }}>
            <div style={{ flex: 1, maxWidth: '600px' }}>
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
                {homeContent.hero.badge}
              </div>
              <h1 style={{
                fontSize: '3.2rem',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}>
                {homeContent.hero.title}
                <span style={{
                  background: 'var(--gradient-accent)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {homeContent.hero.titleHighlight}
                </span>
                {homeContent.hero.title2}
                <span style={{
                  background: 'var(--gradient-accent)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {homeContent.hero.title2Highlight}
                </span>
              </h1>
              <p style={{
                fontSize: '1.2rem',
                marginBottom: '40px',
                color: 'var(--text-light)',
              }}>
                {homeContent.hero.description}
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Button variant="primary" size="lg">
                  {homeContent.hero.cta.primary}
                </Button>
                <Button variant="secondary" size="lg">
                  {homeContent.hero.cta.secondary}
                </Button>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '300px',
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                padding: '25px',
                transform: 'rotate(5deg)',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}>
                  <div style={{ fontWeight: 700, fontSize: '1.2rem' }}>BTC/USDT</div>
                  <div style={{ color: 'var(--success)', fontWeight: 600 }}>+2.34%</div>
                </div>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  marginBottom: '15px',
                }}>
                  $41,250.75
                </div>
                <div style={{
                  height: '100px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  opacity: 0.3,
                }} />
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'var(--primary-light)',
                  padding: '8px 15px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--primary)',
                }}>
                  ⚡ 强烈买入信号
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '100px 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
              {homeContent.features.title}
            </h2>
            <p style={{
              color: 'var(--text-light)',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: '1.1rem',
            }}>
              {homeContent.features.description}
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}>
            {homeContent.features.items.map((feature, index) => (
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
                    {feature.icon === 'brain' && '🧠'}
                    {feature.icon === 'bolt' && '⚡'}
                    {feature.icon === 'chart-pie' && '📊'}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--text-light)' }}>
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: '100px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '50px',
          }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
                {homeContent.story.title}
              </h2>
              <h3 style={{
                fontSize: '1.5rem',
                color: 'var(--primary)',
                marginBottom: '20px',
              }}>
                {homeContent.story.subtitle}
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-light)',
                lineHeight: 1.8,
                marginBottom: '30px',
              }}>
                {homeContent.story.summary}
              </p>
              <Link href="/about">
                <Button variant="primary">
                  {homeContent.story.cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Career Path Section */}
      <section style={{ padding: '100px 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
              {homeContent.careerPath.title}
            </h2>
            <p style={{
              color: 'var(--text-light)',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: '1.1rem',
            }}>
              {homeContent.careerPath.description}
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
          }}>
            {homeContent.careerPath.stages.map((stage, index) => (
              <Card key={index} hover>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2rem',
                    marginBottom: '15px',
                  }}>
                    {index + 1}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
                    {stage.name}
                  </h3>
                  <p style={{
                    color: 'var(--text-light)',
                    marginBottom: '15px',
                  }}>
                    {stage.description}
                  </p>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--primary)',
                    fontWeight: 600,
                  }}>
                    周期: {stage.duration}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
              {homeContent.stats.title}
            </h2>
            <p style={{
              color: 'var(--text-light)',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: '1.1rem',
            }}>
              {homeContent.stats.description}
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
          }}>
            {homeContent.stats.items.map((stat, index) => (
              <Card key={index}>
                <div style={{ textAlign: 'center' }}>
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
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
