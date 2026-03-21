"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function HowItWorks() {
  return (
    <section
      id="hvordan"
      className="w-full px-6 sm:px-8 lg:px-12 flex flex-col items-center relative z-20 overflow-hidden"
      style={{
        paddingTop: '7rem',
        paddingBottom: '8rem',
        background: '#f8fafc',
      }}
    >
      {/* Decorative Background Auras */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100/40 rounded-full mix-blend-multiply blur-[80px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full mix-blend-multiply blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

      <div className="w-full flex flex-col items-center relative z-10" style={{ maxWidth: '1100px' }}>

        {/* Header */}
        <AnimateIn delay={0}>
          <div className="text-center px-4" style={{ marginBottom: '5rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-pink-100 bg-white text-pink-500 font-bold text-[0.7rem] tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              Slik fungerer det
            </div>
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
              Oppsett på under <span style={{ color: '#ec4899' }}>5 minutter</span>
            </h2>
            <p className="text-slate-500 font-medium" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
              Ingen koding. Ingen kompliserte integrasjoner. Bare tre enkle steg til din egen AI-telefonassistent.
            </p>
          </div>
        </AnimateIn>



        {/* CSS for animated line */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slideRight {
            0% { transform: translateX(-150px); }
            100% { transform: translateX(1000px); }
          }
        `}} />

        {/* Steps */}
        <div className="w-full relative z-10 mx-auto">
          {/* Connective Line (placed inside relative wrapper so top: 68px aligns with icons) */}
          <div className="hidden lg:block absolute left-[16%] right-[16%] h-[2px] z-0 pointer-events-none" style={{ top: '68px' }}>
             <div className="w-full h-full relative overflow-hidden flex items-center">
                <div className="absolute inset-0 border-t-2 border-dashed border-slate-200"></div>
                <div className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent" 
                     style={{ width: '150px', animation: 'slideRight 3s linear infinite' }} />
             </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row items-stretch relative z-10" style={{ gap: '2rem' }}>
          {[
            {
              num: '1',
              title: 'Konfigurer assistenten',
              desc: 'Legg inn din bedriftsinformasjon, åpningstider og last opp dokumenter til kunnskapsbasen. Assistenten lærer umiddelbart alt om din bedrift.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              ),
            },
            {
              num: '2',
              title: 'Koble til telefonen',
              desc: 'Du får tildelt et unikt telefonnummer. Videresend ditt eksisterende nummer, eller bruk det nye nummeret direkte i din markedsføring.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              ),
            },
            {
              num: '3',
              title: 'Helt ferdig!',
              desc: 'Klokken 16:00 går du hjem for dagen, men AI-assistenten fortsetter å svare kunder, booke møter og samle inn data i bakgrunnen.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              ),
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

                <div className="flex items-center justify-between mb-2 relative z-10">
                  {/* Icon circle */}
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #ec4899, #f43f5e)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 16px -4px rgba(236,72,153,.4)',
                    transition: 'transform 0.3s ease',
                  }} className="group-hover:scale-110">
                    {step.icon}
                  </div>
                  
                  {/* Step Pill */}
                  <div style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    color: '#64748b',
                    padding: '4px 12px',
                    borderRadius: '99px',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}>
                    Steg {step.num}
                  </div>
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
      </div>
    </section>
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
