"use client";

import React, { useState, useEffect, useRef } from 'react';
import AnimateIn from '@/components/AnimateIn/AnimateIn';
import { faqs } from '@/lib/faqs';

export default function FAQ() {
  // Pick 3 random FAQs on mount (client-side only to avoid hydration mismatch)
  const [randomFaqs, setRandomFaqs] = useState(faqs.slice(0, 3));

  useEffect(() => {
    const shuffled = [...faqs].sort(() => Math.random() - 0.5);
    setRandomFaqs(shuffled.slice(0, 3));
  }, []);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section
      className="w-full flex flex-col items-center relative z-20"
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        paddingLeft: 'clamp(2rem, 6vw, 3rem)',
        paddingRight: 'clamp(2rem, 6vw, 3rem)',
        background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 15%, #fff 100%)',
        borderTop: 'none',
      }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="w-full flex flex-col items-center" style={{ maxWidth: '700px' }}>
        <AnimateIn delay={0}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <p className="font-semibold uppercase" style={{ fontSize: '0.7rem', letterSpacing: '0.18em', color: '#ec4899', marginBottom: '0.75rem' }}>
              Ofte stilte spørsmål
            </p>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                lineHeight: 1.15,
                background: 'linear-gradient(135deg, #0f172a 0%, #334155 50%, #475569 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Har du spørsmål?
            </h2>
          </div>
        </AnimateIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', width: '100%' }} suppressHydrationWarning>
          {randomFaqs.map((faq, i) => (
            <AnimateIn key={faq.q} delay={60 * i}>
              <FAQItem question={faq.q} answer={faq.a} />
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={240}>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <a
              href="/ofte-stilte-sporsmal"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#ec4899',
                textDecoration: 'none',
                transition: 'gap 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.gap = '0.7rem'; }}
              onMouseLeave={(e) => { e.currentTarget.style.gap = '0.4rem'; }}
            >
              Se alle spørsmål og svar
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <div
      style={{
        borderBottom: '1px solid #f1f5f9',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 0',
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
          fontSize: '1rem',
          fontWeight: 600,
          color: '#1e293b',
          lineHeight: 1.4,
        }}>
          {question}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            width: 18,
            height: 18,
            flexShrink: 0,
            transition: 'transform 0.3s cubic-bezier(.4,0,.2,1)',
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
          fontSize: '1rem',
          color: '#64748b',
          lineHeight: 1.7,
          paddingBottom: '1.25rem',
          fontWeight: 450,
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
}
