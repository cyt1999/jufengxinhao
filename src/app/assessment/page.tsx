'use client';

import { useState } from 'react';
import questionsData from '@/content/assessment/zh/questions.json';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import SectionWithAnimation from '@/components/ui/SectionWithAnimation';
import CardWithAnimation from '@/components/ui/CardWithAnimation';
import { GeometricBackground } from '@/components/ui/BackgroundDecorations';

type PageState = 'intro' | 'testing' | 'result';

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [pageState, setPageState] = useState<PageState>('intro');

  const questions = questionsData.questions;
  const question = questions[currentQuestion];

  const dimensionInfo = [
    { key: 'risk', letter: 'R', name: '风险承受能力', color: 'var(--primary-500)' },
    { key: 'emotion', letter: 'E', name: '情绪控制能力', color: 'var(--secondary-500)' },
    { key: 'decision', letter: 'D', name: '决策能力', color: 'var(--accent-500)' },
    { key: 'discipline', letter: 'D', name: '纪律性', color: 'var(--primary-500)' },
    { key: 'stress', letter: 'S', name: '压力管理', color: 'var(--secondary-500)' },
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setPageState('result');
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
    const maxScores: { [key: string]: number } = {};
    Object.keys(dimensions).forEach((dim) => {
      scores[dim] = dimensions[dim].reduce((a, b) => a + b, 0);
      maxScores[dim] = dimensions[dim].length * 4; // 假设每题最高4分
    });

    // 计算综合得分（百分制）
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    const totalMaxScore = Object.values(maxScores).reduce((a, b) => a + b, 0);
    const overallScore = Math.round((totalScore / totalMaxScore) * 100);

    return { scores, maxScores, overallScore };
  };

  const getScoreLevel = (score: number) => {
    if (score >= 80) return { level: '优秀', color: 'var(--secondary-500)', advice: '您的交易心理素质非常优秀，具备了成为优秀交易员的基础条件。继续保持并持续提升。' };
    if (score >= 60) return { level: '良好', color: 'var(--primary-500)', advice: '您的交易心理素质良好，但仍有提升空间。建议通过系统学习和实践来进一步提升。' };
    if (score >= 40) return { level: '一般', color: '#FFB84D', advice: '您的交易心理素质一般，需要重点关注和提升。建议在进行实盘交易前，先系统学习交易心理学。' };
    return { level: '需要提升', color: '#FF6B6B', advice: '您的交易心理素质还有很大的提升空间。建议在进行实盘交易前，先系统学习交易心理学，并通过模拟交易来锻炼心理素质。' };
  };

  // 结果页面
  if (pageState === 'result') {
    const { scores, maxScores, overallScore } = calculateResult();
    const scoreLevel = getScoreLevel(overallScore);

    // 圆环进度条组件
    const CircularProgress = ({ percentage, score, size = 120, strokeWidth = 8, color = 'var(--primary-500)' }: { percentage: number; score: number; size?: number; strokeWidth?: number; color?: string }) => {
      const radius = (size - strokeWidth) / 2;
      const circumference = radius * 2 * Math.PI;
      const offset = circumference - (percentage / 100) * circumference;

      return (
        <div style={{ position: 'relative', width: size, height: size }}>
          <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
            {/* 背景圆环 */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="var(--bg-gray)"
              strokeWidth={strokeWidth}
            />
            {/* 进度圆环 */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{
                transition: 'stroke-dashoffset 0.8s ease-out',
              }}
            />
          </svg>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}>
            <div style={{
              fontSize: '1.8rem',
              fontWeight: 800,
              color: 'var(--text-dark)',
              lineHeight: 1,
            }}>
              {score}
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: 'var(--text-light)',
              marginTop: '4px',
            }}>
              综合得分
            </div>
          </div>
        </div>
      );
    };

    return (
      <div style={{ paddingTop: '100px' }}>
        {/* Results Section */}
        <SectionWithAnimation>
          <section style={{ 
            padding: '40px 0',
            background: 'var(--bg-light)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <GeometricBackground variant="dots" intensity="subtle" />
            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}>
              {/* Title */}
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                  color: 'var(--text-dark)',
                }}>
                  测试完成
                </h1>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-light)',
                }}>
                  您的交易心理素质评估报告
                </p>
              </div>

              {/* Overall Score Card */}
              <CardWithAnimation delay={0}>
                <Card variant="bordered" style={{ marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '30px',
                    padding: '30px 20px',
                  }}>
                    {/* Left: Circular Progress */}
                    <div style={{ flexShrink: 0 }}>
                      <CircularProgress 
                        percentage={overallScore}
                        score={overallScore}
                        size={120} 
                        strokeWidth={10}
                        color={scoreLevel.color}
                      />
                    </div>

                    {/* Right: Evaluation */}
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: scoreLevel.color,
                        marginBottom: '12px',
                      }}>
                        {scoreLevel.level}
                      </div>
                      <p style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-dark)',
                        lineHeight: 1.6,
                        margin: 0,
                      }}>
                        {scoreLevel.advice}
                      </p>
                    </div>
                  </div>
                </Card>
              </CardWithAnimation>

              {/* Dimension Scores Card */}
              <CardWithAnimation delay={100}>
                <Card variant="bordered" style={{ marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    marginBottom: '25px',
                    textAlign: 'center',
                    color: 'var(--text-dark)',
                    paddingTop: '20px',
                  }}>
                    各维度得分
                  </h3>
                  <div style={{ padding: '0 20px 20px' }}>
                    {dimensionInfo.map((dim) => {
                      const score = scores[dim.key] || 0;
                      const maxScore = maxScores[dim.key] || 16;
                      const percentage = (score / maxScore) * 100;

                      return (
                        <div key={dim.key} style={{ marginBottom: '18px' }}>
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '8px',
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <div style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: dim.color,
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                              }}>
                                {dim.letter}
                              </div>
                              <span style={{ 
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                color: 'var(--text-dark)',
                              }}>
                                {dim.name}
                              </span>
                            </div>
                            <span style={{ 
                              color: dim.color, 
                              fontWeight: 700,
                              fontSize: '1rem',
                            }}>
                              {score}分
                            </span>
                          </div>
                          <div style={{
                            width: '100%',
                            height: '18px',
                            background: 'var(--bg-gray)',
                            borderRadius: '9px',
                            overflow: 'hidden',
                            position: 'relative',
                          }}>
                            <div style={{
                              width: `${percentage}%`,
                              height: '100%',
                              background: `linear-gradient(90deg, ${dim.color}, ${dim.color}dd)`,
                              transition: 'width 0.8s ease-out',
                              borderRadius: '9px',
                            }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </CardWithAnimation>

              {/* Improvement Suggestions Card */}
              <CardWithAnimation delay={200}>
                <Card variant="bordered" style={{ marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    marginBottom: '25px',
                    textAlign: 'center',
                    color: 'var(--text-dark)',
                    paddingTop: '20px',
                  }}>
                    改进建议
                  </h3>
                  <div style={{ padding: '0 20px 20px' }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '15px',
                    }}>
                      <div style={{
                        padding: '18px',
                        background: 'var(--bg-light)',
                        borderRadius: '10px',
                        border: '2px solid var(--primary-500)40',
                      }}>
                        <div style={{
                          fontSize: '1.6rem',
                          marginBottom: '10px',
                        }}>
                          📚
                        </div>
                        <div style={{
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          marginBottom: '6px',
                          color: 'var(--text-dark)',
                        }}>
                          系统学习
                        </div>
                        <div style={{
                          fontSize: '0.85rem',
                          color: 'var(--text-light)',
                          lineHeight: 1.6,
                        }}>
                          深入学习交易心理学和行为金融学，理解交易中的心理陷阱和认知偏差。
                        </div>
                      </div>

                      <div style={{
                        padding: '18px',
                        background: 'var(--bg-light)',
                        borderRadius: '10px',
                        border: '2px solid var(--secondary-500)40',
                      }}>
                        <div style={{
                          fontSize: '1.6rem',
                          marginBottom: '10px',
                        }}>
                          📝
                        </div>
                        <div style={{
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          marginBottom: '6px',
                          color: 'var(--text-dark)',
                        }}>
                          记录交易日志
                        </div>
                        <div style={{
                          fontSize: '0.85rem',
                          color: 'var(--text-light)',
                          lineHeight: 1.6,
                        }}>
                          详细记录每笔交易的心理状态、决策过程和结果，定期回顾总结。
                        </div>
                      </div>

                      <div style={{
                        padding: '18px',
                        background: 'var(--bg-light)',
                        borderRadius: '10px',
                        border: '2px solid var(--accent-500)40',
                      }}>
                        <div style={{
                          fontSize: '1.6rem',
                          marginBottom: '10px',
                        }}>
                          🎯
                        </div>
                        <div style={{
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          marginBottom: '6px',
                          color: 'var(--text-dark)',
                        }}>
                          模拟训练
                        </div>
                        <div style={{
                          fontSize: '0.85rem',
                          color: 'var(--text-light)',
                          lineHeight: 1.6,
                        }}>
                          通过模拟交易来锻炼决策能力和情绪控制，在无风险环境中提升技能。
                        </div>
                      </div>

                      <div style={{
                        padding: '18px',
                        background: 'var(--bg-light)',
                        borderRadius: '10px',
                        border: '2px solid var(--primary-500)40',
                      }}>
                        <div style={{
                          fontSize: '1.6rem',
                          marginBottom: '10px',
                        }}>
                          🧘
                        </div>
                        <div style={{
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          marginBottom: '6px',
                          color: 'var(--text-dark)',
                        }}>
                          冥想练习
                        </div>
                        <div style={{
                          fontSize: '0.85rem',
                          color: 'var(--text-light)',
                          lineHeight: 1.6,
                        }}>
                          每天进行10-15分钟的冥想，提升专注力和情绪管理能力。
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </CardWithAnimation>

              {/* Retest Button */}
              <CardWithAnimation delay={300}>
                <div style={{ textAlign: 'center' }}>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      setCurrentQuestion(0);
                      setAnswers([]);
                      setPageState('intro');
                    }}
                  >
                    重新测试
                  </Button>
                </div>
              </CardWithAnimation>
            </div>
          </section>
        </SectionWithAnimation>
      </div>
    );
  }

  // 测试中页面
  if (pageState === 'testing') {
    return (
      <div style={{ paddingTop: '100px' }}>
        {/* Question Section */}
        <SectionWithAnimation>
          <section style={{ 
            padding: '40px 0',
            background: 'var(--bg-light)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <GeometricBackground variant="dots" intensity="subtle" />
            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
              {/* Title and Progress */}
              <div style={{ marginBottom: '25px' }}>
                <h1 style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  marginBottom: '15px',
                  color: 'var(--text-dark)',
                }}>
                  交易员心理测试
                </h1>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px',
                }}>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--primary-500)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    {question.category}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-light)',
                  }}>
                    第 {currentQuestion + 1} / {questions.length} 题
                  </div>
                </div>
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: 'var(--bg-gray)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    height: '100%',
                    background: 'var(--gradient-primary)',
                    transition: 'width 0.5s ease-out',
                    borderRadius: '4px',
                  }} />
                </div>
              </div>

              <CardWithAnimation>
                <Card variant="bordered">
                  <h2 style={{
                    fontSize: '1.5rem',
                    marginBottom: '30px',
                    lineHeight: 1.6,
                    color: 'var(--text-dark)',
                  }}>
                    {question.text}
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {question.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option.score)}
                        style={{
                          padding: '18px 20px',
                          background: 'var(--bg-light)',
                          border: '2px solid var(--border)',
                          borderRadius: '10px',
                          textAlign: 'left',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          fontSize: '1rem',
                          color: 'var(--text-dark)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--primary-50)';
                          e.currentTarget.style.borderColor = 'var(--primary-500)';
                          e.currentTarget.style.transform = 'translateX(5px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'var(--bg-light)';
                          e.currentTarget.style.borderColor = 'var(--border)';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                </Card>
              </CardWithAnimation>
            </div>
          </section>
        </SectionWithAnimation>
      </div>
    );
  }

  // 介绍页面（一页展示所有信息）
  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Test Info Section */}
      <SectionWithAnimation>
        <section style={{ 
          padding: '40px 0',
          background: 'var(--bg-light)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <GeometricBackground variant="circles" intensity="subtle" />
          <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}>
            {/* All Content in One Card */}
            <CardWithAnimation delay={0}>
              <Card variant="bordered" style={{ maxWidth: '600px', margin: '0 auto' }}>
                {/* Title */}
                <div style={{ textAlign: 'center', marginBottom: '30px', paddingTop: '20px' }}>
                  <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    marginBottom: '10px',
                    color: 'var(--text-dark)',
                  }}>
                    交易员心理测试
                  </h1>
                  <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-light)',
                  }}>
                    全面评估您的交易心理素质
                  </p>
                </div>

                {/* Test Info - Horizontal Layout */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '30px',
                  padding: '20px',
                  borderBottom: '1px solid var(--border)',
                  marginBottom: '20px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>⏱️</span>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '4px' }}>
                        测试时长
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                        约 5-8 分钟
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>📝</span>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '4px' }}>
                        题目数量
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                        {questions.length} 道题目
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>📊</span>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '4px' }}>
                        评估维度
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                        5 个核心维度
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dimensions - Two Column Layout */}
                <div style={{ padding: '0 20px 20px', borderBottom: '1px solid var(--border)', marginBottom: '20px' }}>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: '15px',
                    textAlign: 'center',
                    color: 'var(--text-dark)',
                  }}>
                    测试维度包括：
                  </div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '15px',
                  }}>
                    {dimensionInfo.map((dim) => (
                      <div
                        key={dim.key}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '12px 18px',
                          background: 'var(--bg-light)',
                          borderRadius: '25px',
                          border: `2px solid ${dim.color}40`,
                        }}
                      >
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: dim.color,
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '1rem',
                          flexShrink: 0,
                        }}>
                          {dim.letter}
                        </div>
                        <div style={{
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          color: 'var(--text-dark)',
                        }}>
                          {dim.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Start Button */}
                <div style={{ textAlign: 'center', paddingBottom: '20px' }}>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setPageState('testing')}
                  >
                    开始测试
                  </Button>
                  <p style={{
                    marginTop: '20px',
                    fontSize: '0.95rem',
                    color: 'var(--text-light)',
                    fontStyle: 'italic',
                  }}>
                    请根据您的真实感受作答，没有对错之分
                  </p>
                </div>
              </Card>
            </CardWithAnimation>
          </div>
        </section>
      </SectionWithAnimation>
    </div>
  );
}
