"use client";

import React, { useState, useEffect, useRef } from 'react';
import AnimateIn from '@/components/AnimateIn/AnimateIn';
import { useContactModal } from '@/components/ContactModal/ContactContext';
import type { FAQCategory } from '@/lib/faqs';

export default function FAQPageContent({ categories }: { categories: FAQCategory[] }) {
  const openContact = useContactModal();

  let globalIndex = 0;

  return (
    <>
      {/* Hero header */}
      <div style={{
        paddingTop: 'clamp(7rem, 14vw, 10rem)',
        paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 100%)',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(300px, 50vw, 600px)',
          height: 'clamp(300px, 50vw, 600px)',
          background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />

        <AnimateIn delay={0}>
          <p
            className="font-semibold uppercase"
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              color: '#ec4899',
              marginBottom: '1rem',
            }}
          >
            Svar på alt du lurer på
          </p>
        </AnimateIn>

        <AnimateIn delay={80}>
          <h1
            className="font-extrabold tracking-tight"
            style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              lineHeight: 1.1,
              color: '#0f172a',
              marginBottom: '1.25rem',
            }}
          >
            Ofte stilte{' '}
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#ec4899',
            }}>
              spørsmål
            </span>
          </h1>
        </AnimateIn>

        <AnimateIn delay={160}>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: '#64748b',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.65,
            fontWeight: 450,
          }}>
            Alt du trenger å vite om Bra Svar – fra oppstart og priser til personvern og integrasjoner.
          </p>
        </AnimateIn>
      </div>

      {/* FAQ categories */}
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '0 clamp(1.5rem, 4vw, 3rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
      }}>
        {categories.map((cat, ci) => {
          const catStartIndex = globalIndex;
          globalIndex += cat.faqs.length;

          return (
            <div key={cat.title} style={{ marginBottom: ci < categories.length - 1 ? '2.5rem' : 0 }}>
              {/* Category header */}
              <AnimateIn delay={ci * 60}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.25rem',
                  paddingTop: ci > 0 ? '0.5rem' : 0,
                }}>
                  <span style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '1.2rem',
                    borderRadius: '2px',
                    background: 'linear-gradient(180deg, #ec4899, #f472b6)',
                    flexShrink: 0,
                  }} />
                  <h2 style={{
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    color: '#0f172a',
                    letterSpacing: '-0.01em',
                  }}>
                    {cat.title}
                  </h2>
                </div>
              </AnimateIn>

              {/* FAQ items in category */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {cat.faqs.map((faq, fi) => (
                  <AnimateIn key={faq.q} delay={ci * 60 + fi * 40 + 40}>
                    <FAQItem
                      question={faq.q}
                      answer={faq.a}
                      index={catStartIndex + fi}
                    />
                  </AnimateIn>
                ))}
              </div>
            </div>
          );
        })}

        {/* Bottom CTA */}
        <AnimateIn delay={categories.length * 60 + 200}>
          <div style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '2.5rem 2rem',
            background: 'linear-gradient(135deg, rgba(253,242,248,0.5) 0%, rgba(255,241,242,0.5) 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(236,72,153,0.1)',
          }}>
            <p style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 700,
              fontSize: '1.2rem',
              color: '#0f172a',
              marginBottom: '0.5rem',
            }}>
              Fant du ikke svaret ditt?
            </p>
            <p style={{
              fontSize: '0.95rem',
              color: '#64748b',
              marginBottom: '1.5rem',
              fontWeight: 450,
            }}>
              Vi svarer gjerne på spørsmål – helt uforpliktende.
            </p>
            <button
              onClick={openContact}
              style={{
                fontWeight: 700,
                padding: '0.85rem 2.25rem',
                borderRadius: '14px',
                fontSize: '0.95rem',
                background: 'linear-gradient(135deg, #ec4899, #e11d48)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(236,72,153,.3)',
                transition: 'all 0.25s cubic-bezier(.4,0,.2,1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(236,72,153,.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(236,72,153,.3)';
              }}
            >
              Ta kontakt for en hyggelig prat!
            </button>
          </div>
        </AnimateIn>
      </div>
    </>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <div style={{
      borderBottom: '1px solid #f1f5f9',
      overflow: 'hidden',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.35rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
          transition: 'padding-left 0.2s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = '0.5rem'; }}
        onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = '0'; }}
      >
        <span style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.75rem',
          flex: 1,
        }}>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: '#ec4899',
            opacity: 0.5,
            flexShrink: 0,
            minWidth: '1.5rem',
            textAlign: 'right',
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span style={{
            fontSize: '1rem',
            fontWeight: 600,
            color: '#1e293b',
            lineHeight: 1.4,
          }}>
            {question}
          </span>
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={open ? '#ec4899' : '#94a3b8'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            width: 18,
            height: 18,
            flexShrink: 0,
            transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), stroke 0.3s',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? `${height}px` : '0px',
          transition: 'max-height 0.35s cubic-bezier(.4,0,.2,1), opacity 0.25s',
          opacity: open ? 1 : 0,
          overflow: 'hidden',
        }}
      >
        <p style={{
          fontSize: '0.95rem',
          color: '#64748b',
          lineHeight: 1.75,
          paddingBottom: '1.35rem',
          paddingLeft: '2.25rem',
          fontWeight: 450,
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
}
