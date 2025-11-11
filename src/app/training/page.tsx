import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function TrainingPage() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>实战训练营</h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-light)',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            我们承担前期交易系统费用，教练一对一陪跑，在真实交易环境中筛选同伴
          </p>
        </div>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>核心价值</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}>
            {[
              {
                title: '我们承担系统费用',
                desc: '前期交易系统费用由我们承担，您无需担心成本问题',
              },
              {
                title: '教练一对一陪跑',
                desc: '专业教练全程指导，帮助您快速提升交易技能',
              },
              {
                title: '真实交易环境',
                desc: '在真实的市场环境中进行交易，积累实战经验',
              },
              {
                title: '筛选同伴，非售卖课程',
                desc: '我们的目标是筛选出能与我们一起远航的同伴',
              },
            ].map((item, index) => (
              <Card key={index} hover>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-light)' }}>
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>流程说明</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
          }}>
            {[
              { stage: '第一阶段', title: '基础培训', desc: '学习交易基础知识' },
              { stage: '第二阶段', title: '实战演练', desc: '在真实环境中进行交易' },
              { stage: '第三阶段', title: '考核评估', desc: '综合评估交易能力' },
            ].map((item, index) => (
              <Card key={index}>
                <div style={{
                  fontSize: '0.9rem',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  marginBottom: '10px',
                }}>
                  {item.stage}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-light)' }}>
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
          <div style={{
            marginTop: '30px',
            padding: '20px',
            background: 'var(--primary-light)',
            borderRadius: '10px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
              <strong>标准流程：2周</strong> | <strong>优质学员：可延长至45天</strong>
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>申请方式</h2>
          <Card>
            <div style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '15px' }}>
                <strong>1. 投递简历</strong>：将简历发送至指定邮箱
              </p>
              <p style={{ marginBottom: '15px' }}>
                <strong>2. 初步筛选</strong>：我们会对简历进行初步筛选
              </p>
              <p style={{ marginBottom: '15px' }}>
                <strong>3. 面试评估</strong>：通过筛选的候选人将进行面试
              </p>
              <p>
                <strong>4. 进入训练营</strong>：通过面试后即可进入训练营
              </p>
            </div>
            <div style={{ marginTop: '30px' }}>
              <Button variant="primary" size="lg">
                立即申请
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}

