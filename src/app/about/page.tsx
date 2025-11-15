import aboutContent from '@/content/zh/about.json';
import Card from '@/components/ui/Card';
import Hero from '@/components/ui/Hero';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        badge="关于我们"
        title={aboutContent.hero.title}
        subtitle={aboutContent.hero.subtitle}
      />

      {/* Main Content */}
      <section className="section-padding" style={{ 
        background: 'var(--bg-light)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container">

        {/* Welcome Section */}
        <section style={{ marginBottom: '80px' }}>
          <Card>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '25px',
              fontWeight: 600,
              color: 'var(--primary)',
            }}>
              {aboutContent.welcome.title}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: 2,
              color: 'var(--text-dark)',
            }}>
              {aboutContent.welcome.content}
            </p>
          </Card>
        </section>

        {/* Vision Section */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}>
              {aboutContent.vision.title}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-light)',
              maxWidth: '800px',
              margin: '0 auto',
            }}>
              {aboutContent.vision.subtitle}
            </p>
          </div>
          <Card>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 2,
              color: 'var(--text-dark)',
            }}>
              {aboutContent.vision.description}
            </p>
          </Card>
        </section>

        {/* Training Section */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 700 }}>
              {aboutContent.training.title}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-light)',
            }}>
              {aboutContent.training.subtitle}
            </p>
          </div>
          <Card>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '30px',
              paddingBottom: '20px',
              borderBottom: '2px solid var(--border-light)',
            }}>
              <div style={{
                width: '60px',
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
                {aboutContent.training.duration}
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '5px', fontWeight: 600 }}>
                  {aboutContent.training.firstLesson.title}
                </h3>
                <p style={{ color: 'var(--text-light)' }}>
                  {aboutContent.training.firstLesson.description}
                </p>
              </div>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
            }}>
              {aboutContent.training.firstLesson.items.map((item, index) => (
                <div key={index} style={{
                  padding: '20px',
                  background: 'var(--bg-light)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: 'var(--primary)',
                    borderRadius: '50%',
                  }} />
                  <span style={{ color: 'var(--text-dark)', fontWeight: 500 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Career Path Section */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 700 }}>
              {aboutContent.careerPath.title}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-light)',
              maxWidth: '800px',
              margin: '0 auto',
            }}>
              {aboutContent.careerPath.subtitle}
            </p>
          </div>
          <Card style={{ marginBottom: '30px' }}>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 2,
              color: 'var(--text-dark)',
            }}>
              {aboutContent.careerPath.description}
            </p>
          </Card>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
          }}>
            {aboutContent.careerPath.paths.map((path, index) => (
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
                    {path.icon === 'team' && '👥'}
                    {path.icon === 'coach' && '🎓'}
                    {path.icon === 'supervisor' && '🛡️'}
                    {path.icon === 'business' && '💼'}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: 600 }}>
                    {path.name}
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: 1.6 }}>
                    {path.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Structure Section */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 700 }}>
              {aboutContent.teamStructure.title}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-light)',
              maxWidth: '800px',
              margin: '0 auto',
            }}>
              {aboutContent.teamStructure.subtitle}
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '30px',
          }}>
            <Card>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  marginBottom: '15px',
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {aboutContent.teamStructure.groups.count}
                </div>
                <div style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-light)',
                }}>
                  {aboutContent.teamStructure.groups.label}
                </div>
              </div>
            </Card>
            <Card>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  marginBottom: '15px',
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {aboutContent.teamStructure.members.count}
                </div>
                <div style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-light)',
                }}>
                  {aboutContent.teamStructure.members.label}
                </div>
              </div>
            </Card>
          </div>
          <Card>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 2,
              color: 'var(--text-dark)',
            }}>
              {aboutContent.teamStructure.description}
            </p>
          </Card>
        </section>

        {/* Risk Control Section */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 700 }}>
              {aboutContent.riskControl.title}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-light)',
              maxWidth: '800px',
              margin: '0 auto',
            }}>
              {aboutContent.riskControl.subtitle}
            </p>
          </div>
          <Card style={{ marginBottom: '30px' }}>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 2,
              color: 'var(--text-dark)',
            }}>
              {aboutContent.riskControl.description}
            </p>
          </Card>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
          }}>
            {aboutContent.riskControl.items.map((item, index) => (
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
                    {item.icon === 'shield' && '🛡️'}
                    {item.icon === 'ai' && '🤖'}
                    {item.icon === 'emotion' && '🧠'}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: 600 }}>
                    {item.name}
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Future Section */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 700 }}>
              {aboutContent.future.title}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-light)',
              maxWidth: '800px',
              margin: '0 auto',
            }}>
              {aboutContent.future.subtitle}
            </p>
          </div>
          <Card style={{ marginBottom: '30px' }}>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 2,
              color: 'var(--text-dark)',
            }}>
              {aboutContent.future.description}
            </p>
          </Card>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}>
            <Card>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '20px',
                fontWeight: 600,
                color: 'var(--primary)',
              }}>
                {aboutContent.future.current.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {aboutContent.future.current.items.map((item, index) => (
                  <li key={index} style={{
                    padding: '12px 0',
                    borderBottom: index < aboutContent.future.current.items.length - 1 
                      ? '1px solid var(--border-light)' 
                      : 'none',
                    display: 'flex',
                    alignItems: 'center',
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
                color: 'var(--secondary)',
              }}>
                {aboutContent.future.future.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {aboutContent.future.future.items.map((item, index) => (
                  <li key={index} style={{
                    padding: '12px 0',
                    borderBottom: index < aboutContent.future.future.items.length - 1 
                      ? '1px solid var(--border-light)' 
                      : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}>
                    <span style={{ color: 'var(--secondary)', fontSize: '1.2rem' }}>→</span>
                    <span style={{ color: 'var(--text-dark)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Assessment Section */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 700 }}>
              {aboutContent.assessment.title}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-light)',
              maxWidth: '800px',
              margin: '0 auto',
            }}>
              {aboutContent.assessment.subtitle}
            </p>
          </div>
          <Card style={{ marginBottom: '30px' }}>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 2,
              color: 'var(--text-dark)',
            }}>
              {aboutContent.assessment.description}
            </p>
          </Card>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}>
            <Card style={{
              background: 'var(--success-light)',
              border: '2px solid var(--success)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '15px',
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--success)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                }}>
                  ✓
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: 'var(--success-dark)',
                }}>
                  {aboutContent.assessment.passed.title}
                </h3>
              </div>
              <p style={{
                color: 'var(--success-dark)',
                lineHeight: 1.8,
              }}>
                {aboutContent.assessment.passed.description}
              </p>
            </Card>
            <Card style={{
              background: 'var(--info-light)',
              border: '2px solid var(--info)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '15px',
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--info)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                }}>
                  ℹ️
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: 'var(--info-dark)',
                }}>
                  {aboutContent.assessment.notPassed.title}
                </h3>
              </div>
              <p style={{
                color: 'var(--info-dark)',
                lineHeight: 1.8,
              }}>
                {aboutContent.assessment.notPassed.description}
              </p>
            </Card>
          </div>
        </section>
        </div>
      </section>
    </div>
  );
}
