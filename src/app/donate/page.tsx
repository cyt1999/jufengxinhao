import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function DonatePage() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>捐赠</h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-light)',
          }}>
            感谢您对飓风信号的支持
          </p>
        </div>

        <Card>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>捐赠说明</h2>
          <div style={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            color: 'var(--text-light)',
            marginBottom: '30px',
          }}>
            <p style={{ marginBottom: '15px' }}>
              您的捐赠将用于支持飓风信号平台的运营和发展，帮助我们更好地服务交易员社区。
            </p>
            <p>
              我们承诺所有捐赠资金将用于平台建设和社区服务，确保资金使用的透明和合理。
            </p>
          </div>

          <div style={{
            padding: '30px',
            background: 'var(--bg-light)',
            borderRadius: '10px',
            marginBottom: '30px',
          }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>支付方式</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: 'var(--primary-light)',
                  borderRadius: '10px',
                  margin: '0 auto 15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                }}>
                  💰
                </div>
                <p style={{ fontWeight: 600 }}>微信支付</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  扫描二维码支付
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: 'var(--secondary-light)',
                  borderRadius: '10px',
                  margin: '0 auto 15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                }}>
                  💳
                </div>
                <p style={{ fontWeight: 600 }}>支付宝</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  扫描二维码支付
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: 'var(--accent-light)',
                  borderRadius: '10px',
                  margin: '0 auto 15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                }}>
                  🏦
                </div>
                <p style={{ fontWeight: 600 }}>银行转账</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  联系客服获取账户信息
                </p>
              </div>
            </div>
          </div>

          <div style={{
            padding: '20px',
            background: 'var(--primary-light)',
            borderRadius: '10px',
            marginBottom: '30px',
          }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>支付流程</h3>
            <ol style={{
              paddingLeft: '20px',
              lineHeight: 2,
              color: 'var(--text-dark)',
            }}>
              <li>选择支付方式</li>
              <li>完成支付</li>
              <li>提交支付凭证（截图或转账记录）</li>
              <li>我们会在24小时内确认并感谢您的支持</li>
            </ol>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Button variant="primary" size="lg">
              提交支付凭证
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

