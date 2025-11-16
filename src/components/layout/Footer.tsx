export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-dark)',
      color: 'white',
      padding: '70px 0 30px',
      marginTop: '100px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
        }}>
          <div>
            <h3 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>飓风信号</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '20px' }}>
              专业交易信号平台，结合AI技术与金融分析，为您提供精准的市场洞察。
            </p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>产品</h3>
            <ul style={{ listStyle: 'none' }}>
              {['交易信号', '市场分析', '交易策略', 'API接入'].map((item) => (
                <li key={item} style={{ marginBottom: '10px' }}>
                  <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>资源</h3>
            <ul style={{ listStyle: 'none' }}>
              {['帮助中心', '博客', '教程', '社区'].map((item) => (
                <li key={item} style={{ marginBottom: '10px' }}>
                  <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>公司</h3>
            <ul style={{ listStyle: 'none' }}>
              {['联系我们', '隐私政策', '服务条款'].map((item) => (
                <li key={item} style={{ marginBottom: '10px' }}>
                  <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div style={{
          textAlign: 'center',
          paddingTop: '30px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: '0.9rem',
        }}>
          <p>&copy; 2024 飓风信号交易平台. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}

