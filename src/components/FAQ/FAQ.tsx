"use client";

import React, { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    q: 'Hvor raskt kan vi komme i gang?',
    a: 'De fleste bedrifter er i gang innen 3–5 virkedager. Vi trenger grunnleggende informasjon om bedriften din, bygger en prototype, tester sammen med deg — og så er AI-assistenten klar.',
  },
  {
    q: 'Hva skjer om AI-assistenten ikke kan svare?',
    a: 'Hvis assistenten møter et spørsmål den ikke kan besvare, kan vi sette opp viderekobling til en menneskelig operatør.',
  },
  {
    q: 'Kan assistenten håndtere booking og kalendere?',
    a: 'Ja, assistenten kobles til systemene dine — booking, kalendere, CRM, ordrebehandling og lagerstyring. Den sjekker ledige tider, booker avtaler, sjekker lagerstatus og sender bekreftelser. Helt automatisk.',
  },
  {
    q: 'Støtter dere andre språk enn norsk?',
    a: 'AI-assistenten snakker flytende og naturlig norsk, men kan også snakke engelsk. Vi legger til flere språk ved behov.',
  },
  {
    q: 'Er det bindingstid?',
    a: 'Nei, ingen bindingstid og ingen skjulte kostnader. Du kan oppgradere, nedgradere eller avslutte når som helst — med én e-post, ingen oppsigelsestid.',
  },
];

export default function FAQ() {
  return (
    <section
      className="w-full px-6 sm:px-8 lg:px-12 flex flex-col items-center relative z-20"
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 15%, #fff 100%)',
        borderTop: 'none',
      }}
    >
      <div className="w-full flex flex-col items-center" style={{ maxWidth: '700px' }}>
        <AnimateIn delay={0}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqs.map((faq, i) => (
            <AnimateIn key={i} delay={60 * i}>
              <FAQItem question={faq.q} answer={faq.a} />
            </AnimateIn>
          ))}
        </div>
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
          fontSize: '0.95rem',
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
          fontSize: '0.9rem',
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

/* ─── Scroll-Triggered Fade-In Animation ─── */
function AnimateIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.6s cubic-bezier(.4,0,.2,1) ${delay}ms, transform 0.6s cubic-bezier(.4,0,.2,1) ${delay}ms`,
        width: '100%',
      }}
    >
      {children}
    </div>
  );
}
