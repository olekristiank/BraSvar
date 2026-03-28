"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import AnimateIn from '@/components/AnimateIn/AnimateIn';
import { useContactModal } from '@/components/ContactModal/ContactContext';

export interface ChatLine {
  who: 'customer' | 'ai';
  text: string;
}

export interface IndustryPageData {
  industry: string;
  intro: string;
  situation: string;
  situationBullets: string[];
  consequence: string;
  solutionIntro: string;
  handles: string[];
  benefits: string[];
  benefitsIntro: string;
  chat: ChatLine[];
}

export default function IndustryPage({ data }: { data: IndustryPageData }) {
  const openContact = useContactModal();

  return (
    <main style={{ minHeight: '100vh', fontFamily: 'var(--font-outfit)', background: '#fff' }}>
      <Navbar />

      {/* Hero */}
      <div style={{
        paddingTop: 'clamp(7rem, 14vw, 10rem)',
        paddingBottom: '3rem',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 100%)',
        paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
        paddingRight: 'clamp(1.5rem, 4vw, 3rem)',
      }}>
        <AnimateIn delay={0}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ec4899', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>
            For {data.industry.toLowerCase()}
          </p>
        </AnimateIn>
        <AnimateIn delay={80}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 800,
            color: '#0f172a',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            maxWidth: '750px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            AI telefonsvarer for <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#ec4899' }}>{data.industry.toLowerCase()}</span>
          </h1>
        </AnimateIn>
        <AnimateIn delay={160}>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: 1.65,
          }}>
            {data.intro}
          </p>
        </AnimateIn>
        <AnimateIn delay={240}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={openContact} style={{
              display: 'inline-flex', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem',
              color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)',
              borderRadius: '12px', border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(236,72,153,0.3)',
            }}>
              Prøv Bra Svar gratis
            </button>
            <a href="tel:+4764006264" style={{
              display: 'inline-flex', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem',
              color: '#db2777', background: '#fff', border: '1.5px solid rgba(236,72,153,0.3)',
              borderRadius: '12px', textDecoration: 'none',
            }}>
              Ring 64 00 62 64
            </a>
          </div>
        </AnimateIn>
      </div>

      {/* Problem / Situation */}
      <Section>
        <AnimateIn delay={0}>
          <SectionH2>Typisk situasjon</SectionH2>
          <Paragraph>{data.situation}</Paragraph>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem', listStyle: 'none', padding: 0 }}>
            {data.situationBullets.map((b) => (
              <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.95rem', color: '#334155', lineHeight: 1.6 }}>
                <span style={{ color: '#ec4899', marginTop: '0.3rem', flexShrink: 0 }}>●</span>
                {b}
              </li>
            ))}
          </ul>
        </AnimateIn>
      </Section>

      {/* Consequence */}
      <Section bg>
        <AnimateIn delay={0}>
          <SectionH2>Hva skjer når du ikke svarer?</SectionH2>
          <Paragraph>{data.consequence}</Paragraph>
          <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginTop: '1.25rem', textAlign: 'center' }}>
            Hver ubesvarte samtale kan være en tapt kunde.
          </p>
        </AnimateIn>
      </Section>

      {/* Solution */}
      <Section>
        <AnimateIn delay={0}>
          <SectionH2>Bra Svar tar telefonen for deg</SectionH2>
          <Paragraph>
            {data.solutionIntro} Med et <Link href="/ai-sentralbord" style={{ color: '#db2777', textDecoration: 'underline', textDecorationColor: 'rgba(219,39,119,0.3)', textUnderlineOffset: '2px' }}>AI-sentralbord</Link> som svarer med en gang, får kundene dine hjelp uten at du trenger å løfte røret.
          </Paragraph>
        </AnimateIn>
      </Section>

      {/* What it handles */}
      <Section bg>
        <AnimateIn delay={0}>
          <SectionH2>Hva kan håndteres?</SectionH2>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyle: 'none', padding: 0 }}>
            {data.handles.map((h) => (
              <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: '#334155', lineHeight: 1.6 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12" /></svg>
                {h}
              </li>
            ))}
          </ul>
        </AnimateIn>
      </Section>

      {/* How it works */}
      <Section>
        <AnimateIn delay={0}>
          <SectionH2>Slik fungerer det</SectionH2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { num: '1', title: 'Kunden ringer', desc: 'Telefonen din ringer som vanlig.' },
              { num: '2', title: 'Bra Svar svarer', desc: 'Assistenten tar samtalen innen et sekund.' },
              { num: '3', title: 'Samtalen håndteres', desc: 'Kunden får svar, informasjon eller hjelp videre.' },
              { num: '4', title: 'Handling skjer', desc: 'Time bookes, beskjed sendes, eller samtalen settes over til deg.' },
            ].map((step) => (
              <div key={step.num} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.5rem',
                  color: '#ec4899', flexShrink: 0, width: '2rem', textAlign: 'center',
                }}>{step.num}</span>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#0f172a', marginBottom: '0.15rem' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
            <Link href="/hvordan-det-fungerer" style={{ color: '#db2777', fontWeight: 600, textDecoration: 'none' }}>
              Se hvordan det fungerer i detalj →
            </Link>
          </p>
        </AnimateIn>
      </Section>

      {/* Benefits */}
      <Section bg>
        <AnimateIn delay={0}>
          <SectionH2>Hvorfor dette fungerer for {data.industry.toLowerCase()}</SectionH2>
          <Paragraph>{data.benefitsIntro}</Paragraph>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem', listStyle: 'none', padding: 0 }}>
            {data.benefits.map((b) => (
              <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: '#334155', lineHeight: 1.6 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12" /></svg>
                {b}
              </li>
            ))}
          </ul>
        </AnimateIn>
      </Section>

      {/* Chat example */}
      <Section>
        <AnimateIn delay={0}>
          <SectionH2>Eksempel</SectionH2>
          <div style={{
            background: '#fff', borderRadius: '20px', padding: 'clamp(1.5rem, 3vw, 2rem)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)',
            border: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: '0.75rem',
            maxWidth: '500px', margin: '0 auto',
          }}>
            {data.chat.map((line, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: line.who === 'customer' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '80%', padding: '0.65rem 1rem',
                  borderRadius: line.who === 'customer' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                  background: line.who === 'customer' ? 'linear-gradient(135deg, #ec4899, #db2777)' : '#f1f5f9',
                  color: line.who === 'customer' ? '#fff' : '#334155',
                  fontSize: '0.88rem', fontWeight: 500, lineHeight: 1.5,
                }}>
                  {line.text}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </Section>

      {/* CTA */}
      <div style={{
        textAlign: 'center',
        padding: '3.5rem clamp(1.5rem, 4vw, 3rem) 5rem',
        background: 'linear-gradient(180deg, #fff 0%, #fdf2f8 100%)',
      }}>
        <AnimateIn delay={0}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
            Få flere kunder uten å ta telefonen selv
          </h2>
          <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Gratis å prøve. Ingen binding.</p>
          <button onClick={openContact} style={{
            display: 'inline-flex', padding: '1rem 2.5rem', fontWeight: 700, fontSize: '1rem',
            color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)',
            borderRadius: '14px', border: 'none', cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(236,72,153,0.3)',
          }}>
            Prøv Bra Svar gratis
          </button>
        </AnimateIn>
      </div>
    </main>
  );
}

function Section({ children, bg }: { children: React.ReactNode; bg?: boolean }) {
  return (
    <div style={{
      maxWidth: '700px', margin: '0 auto',
      padding: `2.5rem clamp(1.5rem, 4vw, 3rem)`,
      ...(bg ? { background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)' } : {}),
    }}>
      {children}
    </div>
  );
}

function SectionH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-outfit)', fontWeight: 800,
      fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#0f172a',
      marginBottom: '1rem', lineHeight: 1.2,
    }}>
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, fontWeight: 450 }}>
      {children}
    </p>
  );
}
