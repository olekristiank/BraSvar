"use client";

import React from 'react';
import AnimateIn from '@/components/AnimateIn/AnimateIn';

const steps = [
  {
    num: '1',
    title: 'Kunden ringer',
    desc: 'Telefonen din ringer som vanlig. Kunden merker ingen forskjell.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    num: '2',
    title: 'Bra Svar svarer',
    desc: 'Assistenten svarer umiddelbart, stiller spørsmål og finner ut hva kunden trenger.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: '3',
    title: 'Kunden får hjelp',
    desc: 'Bra Svar kan booke time, svare på spørsmål, eller sette samtalen over til deg.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];

export default function HowItWorksPreview() {
  return (
    <section
      className="w-full px-6 sm:px-8 lg:px-12 flex flex-col items-center relative z-20"
      style={{
        paddingTop: '4.5rem',
        paddingBottom: '4.5rem',
        background: '#fff',
      }}
    >
      <div className="w-full flex flex-col items-center" style={{ maxWidth: '1100px' }}>

        {/* Header */}
        <AnimateIn delay={0}>
          <div className="text-center px-4" style={{ marginBottom: '1rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: 1.15,
                marginBottom: '1rem',
                color: '#0f172a',
              }}
            >
              Slik fungerer <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#ec4899' }}>det</span>
            </h2>
            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: '#64748b',
              lineHeight: 1.6,
              fontWeight: 450,
            }}>
              Når noen ringer deg, svarer Bra Svar med en gang — og hjelper kunden videre.
            </p>
          </div>
        </AnimateIn>

        {/* 3-step flow */}
        <div
          className="w-full flex flex-col lg:flex-row items-stretch"
          style={{ gap: '0', marginTop: '2rem', maxWidth: '900px' }}
        >
          {steps.map((step, i) => (
            <AnimateIn key={i} delay={100 + i * 120} style={{ flex: 1, display: 'flex' }}>
              <div style={{ display: 'flex', flex: 1, alignItems: 'stretch' }}>
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '1.75rem 1.5rem',
                    position: 'relative',
                  }}
                >
                  {/* Step number badge */}
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(253,242,248,0.8), rgba(255,241,242,0.8))',
                    border: '1px solid rgba(236,72,153,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}>
                    {step.icon}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: '#0f172a',
                    marginBottom: '0.5rem',
                    lineHeight: 1.3,
                  }}>
                    {step.title}
                  </h3>

                  <p style={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    lineHeight: 1.6,
                    fontWeight: 450,
                  }}>
                    {step.desc}
                  </p>
                </div>

                {/* Connector arrow (not on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex" style={{
                    alignItems: 'center',
                    padding: '0 0.25rem',
                    color: '#cbd5e1',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* CTA link */}
        <AnimateIn delay={500}>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <a
              href="/hvordan-det-fungerer"
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
              Se hvordan det fungerer
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
