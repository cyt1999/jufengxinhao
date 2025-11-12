'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import faqContent from '@/content/zh/faq.json';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (categoryKey: string, questionIndex: number) => {
    const key = `${categoryKey}-${questionIndex}`;
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(key)) {
      newOpenItems.delete(key);
    } else {
      newOpenItems.add(key);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 700 }}>
            {faqContent.title}
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-light)',
          }}>
            {faqContent.subtitle}
          </p>
        </div>

        {faqContent.categories.map((category) => (
          <div key={category.key} style={{ marginBottom: '50px' }}>
            <h2 style={{
              fontSize: '1.8rem',
              marginBottom: '25px',
              color: 'var(--primary)',
              fontWeight: 600,
            }}>
              {category.name}
            </h2>
            {category.questions.map((faq, index) => {
              const key = `${category.key}-${index}`;
              const isOpen = openItems.has(key);

              return (
                <Card key={index} style={{ marginBottom: '15px' }}>
                  <button
                    onClick={() => toggleItem(category.key, index)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: 0,
                    }}
                  >
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: 0,
                      color: 'var(--text-dark)',
                      flex: 1,
                      paddingRight: '20px',
                    }}>
                      {faq.question}
                    </h3>
                    <span style={{
                      fontSize: '1.2rem',
                      color: 'var(--primary)',
                      transition: 'transform 0.3s',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      flexShrink: 0,
                    }}>
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{
                      marginTop: '20px',
                      paddingTop: '20px',
                      borderTop: '1px solid var(--border)',
                      color: 'var(--text-dark)',
                      lineHeight: 1.8,
                    }}
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
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
