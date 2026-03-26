"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useContactModal } from '@/components/ContactModal/ContactContext';

export default function HowItWorks() {
  const openContact = useContactModal();
  return (
    <section
      id="hvordan"
      className="w-full px-6 sm:px-8 lg:px-12 flex flex-col items-center relative z-20 overflow-hidden"
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        background: '#f8fafc',
      }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent 20%, #e2e8f0 50%, transparent 80%)' }} />

      <div className="w-full flex flex-col items-center relative z-10" style={{ maxWidth: '1100px' }}>

        {/* Header */}
        <AnimateIn delay={0}>
          <div className="text-center px-4" style={{ marginBottom: '3rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                color: '#0f172a',
              }}
            >
              Slik kommer du i <span style={{ color: '#ec4899' }}>gang</span>
            </h2>
          </div>
        </AnimateIn>



        {/* Steps */}
        <div className="w-full relative z-10 mx-auto">

          <div className="w-full flex flex-col lg:flex-row items-stretch relative z-10" style={{ gap: '2rem' }}>
          {[
            {
              num: '1',
              title: 'Vi lærer bedriften din å kjenne',
              desc: 'Fortell oss om tjenestene dine, spørsmål du ofte får, kontakten mellom deg og dine kunder, og hvordan du vil at kundene skal møtes. Vi bygger assistenten for deg, helt uten kostnad for deg.',
              icon: '1',
            },
            {
              num: '2',
              title: 'Test og juster',
              desc: 'Du får raskt en første versjon på et eget telefonnummer. Prøv den, og gi tilbakemelding. Vi finjusterer til du er fornøyd.',
              icon: '2',
            },
            {
              num: '3',
              title: 'Koble til',
              desc: 'Videresend ditt eksisterende nummer, og assistenten tar over. Du velger selv: utenom åpningstid, ved ubesvarte anrop, eller 24/7. Kundene dine får alltid svar — og du har full oversikt gjennom rapporter og innsikt i kontrollpanelet.',
              icon: '3',
            },
          ].map((step, i) => (
            <AnimateIn key={i} delay={100 + i * 150} style={{ flex: 1, display: 'flex' }}>
              <div
                className="group relative"
                style={{
                  flex: 1,
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '2.5rem 2.5rem',
                  border: '1px solid #f1f5f9',
                  borderTop: '2px solid transparent',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  transition: 'all 0.4s cubic-bezier(.4,0,.2,1)',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,.01), 0 20px 40px -10px rgba(0,0,0,.03)',
                  cursor: 'default',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(236,72,153,.15), 0 25px 50px -12px rgba(236,72,153,.1)';
                  e.currentTarget.style.borderColor = '#fbcfe8';
                  e.currentTarget.style.borderTopColor = '#ec4899';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,.01), 0 20px 40px -10px rgba(0,0,0,.03)';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                  e.currentTarget.style.borderTopColor = 'transparent';
                }}
              >
                {/* Decorative background glow on hover */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-100 to-rose-50 rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" style={{ transform: 'translate(20%, -20%)' }}></div>

                <div className="relative z-10" style={{ marginBottom: '0.5rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '3.5rem',
                    lineHeight: 1,
                    color: '#ec4899',
                    display: 'block',
                    transition: 'transform 0.3s ease',
                  }} className="group-hover:scale-110">
                    {step.icon}
                  </span>
                  <div style={{
                    width: '2rem',
                    height: '2px',
                    background: 'linear-gradient(90deg, #ec4899, transparent)',
                    marginTop: '0.35rem',
                    transition: 'width 0.3s ease',
                  }} className="group-hover:!w-12" />
                </div>

                {/* Title */}
                <h3 className="relative z-10" style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 800,
                  fontSize: '1.35rem',
                  color: '#0f172a',
                  lineHeight: 1.2,
                  marginTop: '0.5rem',
                }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className="relative z-10" style={{
                  fontSize: '0.95rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  fontWeight: 450,
                  flex: 1,
                }}>
                  {step.desc}
                </p>
              </div>
            </AnimateIn>
          ))}
          </div>
        </div>

        {/* CTA */}
        <AnimateIn delay={550}>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <HoverButton
              onClick={openContact}
              baseStyle={{
                fontWeight: 700, padding: '1rem 2.5rem', borderRadius: '14px',
                fontSize: '1rem', background: 'linear-gradient(135deg, #ec4899, #e11d48)',
                color: '#fff', border: 'none', cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(236,72,153,.3)',
                transition: 'all 0.25s cubic-bezier(.4,0,.2,1)',
              }}
              hoverStyle={{
                boxShadow: '0 12px 32px rgba(236,72,153,.45)',
                transform: 'translateY(-2px)', filter: 'brightness(1.08)',
              }}
            >
              Start med en prat!
            </HoverButton>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ─── Interactive Hover Button ─── */
function HoverButton({
  children, baseStyle, hoverStyle, onClick,
}: {
  children: React.ReactNode;
  baseStyle: React.CSSProperties; hoverStyle: React.CSSProperties;
  onClick?: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      style={{ ...baseStyle, transition: 'all 0.25s cubic-bezier(.4,0,.2,1)', ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}

/* ─── Scroll-Triggered Fade-In Animation ─── */
function AnimateIn({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s cubic-bezier(.2,0.8,.2,1) ${delay}ms, transform 0.8s cubic-bezier(.2,0.8,.2,1) ${delay}ms`,
        width: '100%',
      }}
    >
      {children}
    </div>
  );
}
