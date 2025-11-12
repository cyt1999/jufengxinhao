'use client';

import { useState } from 'react';
import questionsData from '@/content/assessment/zh/questions.json';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = questionsData.questions;
  const question = questions[currentQuestion];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    const dimensions: { [key: string]: number[] } = {
      risk: [],
      emotion: [],
      decision: [],
      discipline: [],
      stress: [],
    };

    questions.forEach((q, index) => {
      if (dimensions[q.dimension]) {
        dimensions[q.dimension].push(answers[index]);
      }
    });

    const scores: { [key: string]: number } = {};
    Object.keys(dimensions).forEach((dim) => {
      scores[dim] = dimensions[dim].reduce((a, b) => a + b, 0);
    });

    return scores;
  };

  if (showResult) {
    const scores = calculateResult();
    const dimensionNames: { [key: string]: string } = {
      risk: '风险承受能力',
      emotion: '情绪控制能力',
      decision: '决策能力',
      discipline: '纪律性',
      stress: '压力管理',
    };

    return (
      <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Card>
            <h1 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>
              测评结果
            </h1>
            <div style={{ marginBottom: '30px' }}>
              {Object.keys(scores).map((dim) => (
                <div key={dim} style={{ marginBottom: '20px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                  }}>
                    <span style={{ fontWeight: 600 }}>
                      {dimensionNames[dim]}
                    </span>
                    <span style={{ color: 'var(--primary)', fontWeight: 600 }}>
                      {scores[dim]} / 16
                    </span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '20px',
                    background: 'var(--bg-gray)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: `${(scores[dim] / 16) * 100}%`,
                      height: '100%',
                      background: 'var(--gradient-primary)',
                      transition: 'width 0.3s',
                    }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button
                variant="primary"
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers([]);
                  setShowResult(false);
                }}
              >
                重新测评
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>交易员心理测评</h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-light)',
          }}>
            第 {currentQuestion + 1} / {questions.length} 题
          </p>
          <div style={{
            width: '100%',
            height: '8px',
            background: 'var(--bg-gray)',
            borderRadius: '4px',
            marginTop: '20px',
            overflow: 'hidden',
          }}>
            <div style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              height: '100%',
              background: 'var(--gradient-primary)',
              transition: 'width 0.3s',
            }} />
          </div>
        </div>

        <Card>
          <div style={{
            fontSize: '0.9rem',
            color: 'var(--primary)',
            fontWeight: 600,
            marginBottom: '15px',
          }}>
            {question.category}
          </div>
          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '30px',
            lineHeight: 1.6,
          }}>
            {question.text}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.score)}
                style={{
                  padding: '15px 20px',
                  background: 'var(--bg-light)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontSize: '1rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--primary-50)';
                  e.currentTarget.style.borderColor = 'var(--primary-500)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-light)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                {option.text}
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

