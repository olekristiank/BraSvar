"use client";

import React from 'react';
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
  lang?: 'no' | 'en';
}

const t = {
  no: {
    aiPhone: 'AI telefonsvarer for',
    tryFree: 'Prøv Bra Svar gratis',
    call: 'Ring 64 00 62 64',
    typicalSituation: 'Typisk situasjon',
    whatHappens: 'Hva skjer når du ikke svarer?',
    lostCustomer: 'Hver ubesvarte samtale kan være en tapt kunde.',
    solution: 'Bra Svar tar telefonen for deg',
    whatHandled: 'Hva kan håndteres?',
    howItWorks: 'Slik fungerer det',
    steps: [
      { num: '1', title: 'Kunden ringer', desc: 'Telefonen din ringer som vanlig.' },
      { num: '2', title: 'Bra Svar svarer', desc: 'Assistenten tar samtalen innen et sekund.' },
      { num: '3', title: 'Samtalen håndteres', desc: 'Kunden får svar, informasjon eller hjelp videre.' },
      { num: '4', title: 'Handling skjer', desc: 'Time bookes, beskjed sendes, eller samtalen settes over til deg.' },
    ],
    seeHow: 'Se hvordan det fungerer i detalj',
    whyWorks: 'Hvorfor dette fungerer for',
    example: 'Eksempel',
    getMore: 'Få flere kunder uten å ta telefonen selv',
    freeToTry: 'Gratis å prøve. Ingen binding.',
    switchboardText: 'AI-sentralbord',
    switchboardLink: '/ai-sentralbord',
    howItWorksLink: '/hvordan-det-fungerer',
    solutionSuffix: 'som svarer med en gang, får kundene dine hjelp uten at du trenger å løfte røret.',
  },
  en: {
    aiPhone: 'AI phone answering for',
    tryFree: 'Try Bra Svar for free',
    call: 'Call +47 64 00 62 64',
    typicalSituation: 'Typical situation',
    whatHappens: 'What happens when you don\'t answer?',
    lostCustomer: 'Every missed call could be a lost customer.',
    solution: 'Bra Svar answers the phone for you',
    whatHandled: 'What can be handled?',
    howItWorks: 'How it works',
    steps: [
      { num: '1', title: 'Customer calls', desc: 'Your phone rings as usual.' },
      { num: '2', title: 'Bra Svar answers', desc: 'The assistant picks up within a second.' },
      { num: '3', title: 'Call is handled', desc: 'The customer gets answers, information or help.' },
      { num: '4', title: 'Action is taken', desc: 'Appointment booked, message sent, or call forwarded to you.' },
    ],
    seeHow: 'See how it works in detail',
    whyWorks: 'Why this works for',
    example: 'Example',
    getMore: 'Get more customers without answering the phone yourself',
    freeToTry: 'Free to try. No commitment.',
    switchboardText: 'AI switchboard',
    switchboardLink: '/en/ai-switchboard',
    howItWorksLink: '/en/how-it-works',
    solutionSuffix: 'that answers immediately, your customers get help without you lifting the phone.',
  },
};

export default function IndustryPage({ data }: { data: IndustryPageData }) {
  const openContact = useContactModal();
  const lang = data.lang || 'no';
  const s = t[lang];

  return (
    <main style={{ minHeight: '100vh', fontFamily: 'var(--font-outfit)', background: '#fff' }}>
      <Navbar />

      {/* Hero */}
      <div style={{
        paddingTop: 'clamp(7rem, 14vw, 10rem)', paddingBottom: '3rem', textAlign: 'center',
        background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 100%)',
        paddingLeft: 'clamp(1.5rem, 4vw, 3rem)', paddingRight: 'clamp(1.5rem, 4vw, 3rem)',
      }}>
        <AnimateIn delay={0}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ec4899', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>
            {s.aiPhone} {data.industry.toLowerCase()}
          </p>
        </AnimateIn>
        <AnimateIn delay={80}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '1.25rem', maxWidth: '750px', marginLeft: 'auto', marginRight: 'auto' }}>
            {s.aiPhone} <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: '#ec4899' }}>{data.industry.toLowerCase()}</span>
          </h1>
        </AnimateIn>
        <AnimateIn delay={160}>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#64748b', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.65 }}>
            {data.intro}
          </p>
        </AnimateIn>
        <AnimateIn delay={240}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={openContact} style={{ display: 'inline-flex', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem', color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)', borderRadius: '12px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 14px rgba(236,72,153,0.3)' }}>
              {s.tryFree}
            </button>
            <a href="tel:+4764006264" style={{ display: 'inline-flex', padding: '0.9rem 2rem', fontWeight: 700, fontSize: '0.95rem', color: '#db2777', background: '#fff', border: '1.5px solid rgba(236,72,153,0.3)', borderRadius: '12px', textDecoration: 'none' }}>
              {s.call}
            </a>
          </div>
        </AnimateIn>
      </div>

      <Section><AnimateIn delay={0}>
        <SectionH2>{s.typicalSituation}</SectionH2>
        <Paragraph>{data.situation}</Paragraph>
        <BulletList items={data.situationBullets} dot />
      </AnimateIn></Section>

      <Section bg><AnimateIn delay={0}>
        <SectionH2>{s.whatHappens}</SectionH2>
        <Paragraph>{data.consequence}</Paragraph>
        <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginTop: '1.25rem', textAlign: 'center' }}>{s.lostCustomer}</p>
      </AnimateIn></Section>

      <Section><AnimateIn delay={0}>
        <SectionH2>{s.solution}</SectionH2>
        <Paragraph>
          {data.solutionIntro}{' '}
          {lang === 'no' ? 'Med et ' : 'With an '}
          <Link href={s.switchboardLink} style={{ color: '#db2777', textDecoration: 'underline', textDecorationColor: 'rgba(219,39,119,0.3)', textUnderlineOffset: '2px' }}>{s.switchboardText}</Link>
          {' '}{s.solutionSuffix}
        </Paragraph>
      </AnimateIn></Section>

      <Section bg><AnimateIn delay={0}>
        <SectionH2>{s.whatHandled}</SectionH2>
        <BulletList items={data.handles} />
      </AnimateIn></Section>

      <Section><AnimateIn delay={0}>
        <SectionH2>{s.howItWorks}</SectionH2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {s.steps.map((step) => (
            <div key={step.num} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.5rem', color: '#ec4899', flexShrink: 0, width: '2rem', textAlign: 'center' }}>{step.num}</span>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#0f172a', marginBottom: '0.15rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
          <Link href={s.howItWorksLink} style={{ color: '#db2777', fontWeight: 600, textDecoration: 'none' }}>{s.seeHow} →</Link>
        </p>
      </AnimateIn></Section>

      <Section bg><AnimateIn delay={0}>
        <SectionH2>{s.whyWorks} {data.industry.toLowerCase()}</SectionH2>
        <Paragraph>{data.benefitsIntro}</Paragraph>
        <BulletList items={data.benefits} />
      </AnimateIn></Section>

      <Section><AnimateIn delay={0}>
        <SectionH2>{s.example}</SectionH2>
        <div style={{ background: '#fff', borderRadius: '20px', padding: 'clamp(1.5rem, 3vw, 2rem)', boxShadow: '0 4px 24px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '500px', margin: '0 auto' }}>
          {data.chat.map((line, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: line.who === 'customer' ? 'flex-end' : 'flex-start' }}>
              <div style={{ maxWidth: '80%', padding: '0.65rem 1rem', borderRadius: line.who === 'customer' ? '14px 14px 4px 14px' : '14px 14px 14px 4px', background: line.who === 'customer' ? 'linear-gradient(135deg, #ec4899, #db2777)' : '#f1f5f9', color: line.who === 'customer' ? '#fff' : '#334155', fontSize: '0.88rem', fontWeight: 500, lineHeight: 1.5 }}>
                {line.text}
              </div>
            </div>
          ))}
        </div>
      </AnimateIn></Section>

      <div style={{ textAlign: 'center', padding: '3.5rem clamp(1.5rem, 4vw, 3rem) 5rem', background: 'linear-gradient(180deg, #fff 0%, #fdf2f8 100%)' }}>
        <AnimateIn delay={0}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>{s.getMore}</h2>
          <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>{s.freeToTry}</p>
          <button onClick={openContact} style={{ display: 'inline-flex', padding: '1rem 2.5rem', fontWeight: 700, fontSize: '1rem', color: '#fff', background: 'linear-gradient(135deg, #db2777, #be185d)', borderRadius: '14px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 14px rgba(236,72,153,0.3)' }}>
            {s.tryFree}
          </button>
        </AnimateIn>
      </div>
    </main>
  );
}

function Section({ children, bg }: { children: React.ReactNode; bg?: boolean }) {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2.5rem clamp(1.5rem, 4vw, 3rem)', ...(bg ? { background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)' } : {}) }}>
      {children}
    </div>
  );
}

function SectionH2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#0f172a', marginBottom: '1rem', lineHeight: 1.2 }}>{children}</h2>;
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, fontWeight: 450 }}>{children}</p>;
}

function BulletList({ items, dot }: { items: string[]; dot?: boolean }) {
  return (
    <ul style={{ display: 'flex', flexDirection: 'column', gap: dot ? '0.5rem' : '0.6rem', marginTop: '1rem', listStyle: 'none', padding: 0 }}>
      {items.map((item) => (
        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: dot ? '0.6rem' : '0.75rem', fontSize: '0.95rem', color: '#334155', lineHeight: 1.6 }}>
          {dot ? (
            <span style={{ color: '#ec4899', marginTop: '0.3rem', flexShrink: 0 }}>●</span>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12" /></svg>
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}
