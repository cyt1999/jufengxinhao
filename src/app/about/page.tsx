export default function AboutPage() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: '30px' }}>关于我们</h1>
        
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>我们的故事</h2>
          <div style={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            color: 'var(--text-light)',
          }}>
            <p style={{ marginBottom: '20px' }}>
              我曾深信交易是顶尖高手的孤独游戏，直到我在市场中亲身经历了"孤狼"的局限与风险。
              我意识到，单一的策略与风格，在瞬息万变的全球市场中无比脆弱。
            </p>
            <p style={{ marginBottom: '20px' }}>
              真正的未来，属于能够协同作战的"联合舰队"。不同的策略、不同的风格，
              不是为了内耗，而是为了在面对市场巨浪时，能相互支撑，对冲风险。
            </p>
            <p style={{ marginBottom: '20px' }}>
              于是，我创立了「飓风信号」。这不是又一个交易教学机构，而是一个未来私募基金的"预备队"和"造船厂"。
              我们投入交易系统和教练时间，不是为了售卖课程，而是为了一个最纯粹的目的：
              在真实的交易环境中，筛选出那些能与我们一起远航的同伴。
            </p>
            <p>
              在这里，我们不仅教你如何精进"弈"的技艺，更会带你体验如何通过团队达到"游"的境界。
              这是一场始于交易、但远超交易的共同事业。
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>我们的愿景</h2>
          <div style={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            color: 'var(--text-light)',
          }}>
            <p style={{ marginBottom: '20px' }}>
              我们的目标是在两年内建立私募基金，打造一个专业的交易团队。
            </p>
            <p>
              我们致力于培养优秀的交易员，通过实战训练和团队协作，
              最终形成一个能够稳定盈利、风险可控的交易团队。
            </p>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>团队路径</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
          }}>
            {[
              { name: '交易员', desc: '基础交易技能，参与实战训练' },
              { name: '监理', desc: '管理小团队，负责风险控制' },
              { name: '团队领导', desc: '领导交易团队，制定策略' },
              { name: '合伙人', desc: '参与私募基金筹建，分享收益' },
            ].map((stage, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--bg-white)',
                  borderRadius: '15px',
                  padding: '30px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '15px',
                  color: 'var(--primary)',
                }}>
                  {index + 1}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
                  {stage.name}
                </h3>
                <p style={{ color: 'var(--text-light)' }}>
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

