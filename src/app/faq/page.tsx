'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: '费用相关',
      questions: [
        {
          q: '谁出钱？（系统费用、培训费用）',
          a: '我们承担前期交易系统费用和培训费用，您无需担心成本问题。我们的目标是筛选同伴，而非售卖课程。',
        },
        {
          q: '是否有隐藏费用？',
          a: '没有隐藏费用。所有费用都会在申请时明确告知，我们承诺透明收费。',
        },
      ],
    },
    {
      category: '时间相关',
      questions: [
        {
          q: '训练营时长？',
          a: '标准流程为2周，优质学员可延长至45天。具体时长会根据个人情况调整。',
        },
        {
          q: '时间安排？',
          a: '训练营采用灵活的时间安排，可以根据您的实际情况进行调整。',
        },
      ],
    },
    {
      category: '通过率相关',
      questions: [
        {
          q: '通过率是多少？',
          a: '我们注重质量而非数量，通过率会根据申请者的实际情况而定。我们的目标是找到真正适合的同伴。',
        },
        {
          q: '筛选标准是什么？',
          a: '筛选标准包括技术能力、心理素质、团队协作能力等多个维度。我们会进行综合评估。',
        },
      ],
    },
    {
      category: '未来收益相关',
      questions: [
        {
          q: '成为合伙人后的收益？',
          a: '成为合伙人后，您将参与私募基金的筹建，并分享收益。具体收益分配机制会在成为合伙人时详细说明。',
        },
        {
          q: '收益分配机制？',
          a: '收益分配机制会根据个人贡献和团队表现进行公平分配，具体机制会在成为合伙人时详细说明。',
        },
      ],
    },
    {
      category: '团队运作模式相关',
      questions: [
        {
          q: '团队如何运作？',
          a: '团队采用协作模式，不同策略和风格相互支撑，共同应对市场变化。我们会定期进行团队会议和策略讨论。',
        },
        {
          q: '决策机制？',
          a: '决策采用民主集中制，重要决策会经过团队讨论和投票，确保决策的科学性和合理性。',
        },
      ],
    },
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>常见问题</h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-light)',
          }}>
            解答您关于飓风信号的疑问
          </p>
        </div>

        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              marginBottom: '20px',
              color: 'var(--primary)',
            }}>
              {category.category}
            </h2>
            {category.questions.map((faq, index) => {
              const globalIndex = categoryIndex * 2 + index;
              const isOpen = openIndex === globalIndex;

              return (
                <Card key={index} style={{ marginBottom: '15px' }}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: 0,
                    }}>
                      {faq.q}
                    </h3>
                    <span style={{
                      fontSize: '1.5rem',
                      color: 'var(--primary)',
                      transition: 'transform 0.3s',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}>
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{
                      marginTop: '15px',
                      paddingTop: '15px',
                      borderTop: '1px solid var(--border)',
                      color: 'var(--text-light)',
                      lineHeight: 1.8,
                    }}>
                      {faq.a}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

