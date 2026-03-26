"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useContactModal } from '@/components/ContactModal/ContactContext';

export default function Pricing() {
  const openContact = useContactModal();
  return (
    <section
      id="priser"
      className="w-full px-6 sm:px-8 lg:px-12 flex flex-col items-center relative z-20"
      style={{
        paddingTop: '5rem',
        paddingBottom: '6rem',
        background: 'linear-gradient(180deg, #f8fafc 0%, #fdf2f8 50%, #fff1f2 100%)',
      }}
    >
      {/* Soft top divider */}
      <div
        className="absolute top-0 left-0 w-full"
        style={{
          height: '80px',
          background: 'linear-gradient(180deg, rgba(248,250,252,0) 0%, rgba(248,250,252,1) 100%)',
          transform: 'translateY(-80px)',
          pointerEvents: 'none',
        }}
      />

      <div className="w-full flex flex-col items-center" style={{ maxWidth: '1200px' }}>

        {/* Header */}
        <AnimateIn delay={0}>
          <div className="text-center px-4" style={{ marginBottom: '3.5rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Aldri stengt.
              </span>
              <span style={{
                display: 'block',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 400,
                background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Aldri syk. Aldri på ferie.
              </span>
            </h2>
            <div className="flex flex-wrap justify-center" style={{ gap: '0.5rem 1.5rem' }}>
              {['Ingen bindingstid', 'Gratis oppstart', 'Norsk support'].map((item) => (
                <span key={item} className="font-medium" style={{ fontSize: '0.85rem', color: '#64748b' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Cards — 3 columns */}
        <div
          className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch w-full"
          style={{ gap: '1.5rem', maxWidth: '1100px' }}
        >

          {/* ── Mini Card ── */}
          <AnimateIn delay={80}>
            <HoverCard className="flex flex-col w-full" baseStyle={{
              maxWidth: '360px', margin: '0 auto',
              background: '#fff',
              borderRadius: '24px',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: '#e2e8f0',
              borderTopWidth: '3px',
              borderTopColor: '#e2e8f0',
              boxShadow: '0 1px 3px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.04)',
              padding: '2.25rem',
              height: '100%',
            }} hoverStyle={{
              boxShadow: '0 1px 3px rgba(0,0,0,.04), 0 16px 40px rgba(0,0,0,.08)',
              transform: 'translateY(-3px)',
              borderColor: '#cbd5e1',
              borderTopColor: '#ec4899',
            }}>
              <p className="font-semibold uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: '#94a3b8', marginBottom: '0.75rem' }}>Startpakke</p>
              <h3 className="font-bold text-slate-900" style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>Mini</h3>
              <p className="text-slate-500" style={{ fontSize: '0.88rem', marginBottom: '1.75rem', lineHeight: 1.55, fontWeight: 450 }}>
                For bedrifter med lavt samtalevolum og enkle behov.
              </p>

              {/* Price */}
              <div style={{ marginBottom: '1.75rem', paddingBottom: '1.75rem', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{
                  marginBottom: '0.75rem',
                  background: 'linear-gradient(135deg, #ec4899, #db2777)',
                  color: '#fff',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  padding: '6px 0',
                  marginLeft: '35px',
                  marginRight: '35px',
                  borderRadius: '8px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  boxShadow: '0 2px 10px rgba(236,72,153,0.25)',
                }}>
                  Introduksjonstilbud!
                </div>
                <div className="flex items-baseline">
                  <span className="font-extrabold text-slate-900" style={{ fontSize: '2.5rem', letterSpacing: '-0.03em', lineHeight: 1 }}>1 490</span>
                  <span className="font-bold text-slate-900" style={{ fontSize: '1.25rem', marginLeft: '2px' }}>,-</span>
                  <span className="text-slate-400 font-medium" style={{ fontSize: '0.9rem', marginLeft: '0.5rem' }}>/ mnd</span>
                </div>
              </div>

              {/* Features */}
              <ul className="flex-1 flex flex-col" style={{ gap: '1rem', marginBottom: '2rem' }}>
                <Feature color="green">500 minutter</Feature>
                <Feature color="green">Timebestilling mot én kalender</Feature>
                <Feature color="green">Liten kunnskapsbase</Feature>
                <Feature color="green">Kan sette over til deg</Feature>
                <Feature color="green">Snakker norsk!</Feature>
              </ul>

            </HoverCard>
          </AnimateIn>

          {/* ── Basis Card (Most Popular) ── */}
          <AnimateIn delay={160}>
            <HoverCard className="flex flex-col w-full relative" baseStyle={{
              maxWidth: '360px', margin: '0 auto',
              background: 'linear-gradient(165deg, #0f172a 0%, #1e293b 100%)',
              borderRadius: '24px',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: '#334155',
              boxShadow: '0 25px 60px -12px rgba(0,0,0,.25), 0 0 0 1px rgba(255,255,255,.03) inset, 0 0 80px rgba(236,72,153,.06)',
              padding: '2.25rem',
              height: '100%',
            }} hoverStyle={{
              boxShadow: '0 30px 70px -12px rgba(0,0,0,.35), 0 0 0 1px rgba(255,255,255,.06) inset, 0 0 60px rgba(236,72,153,.12)',
              transform: 'translateY(-5px)',
              borderColor: '#475569',
            }}>
              {/* Badge */}
              <div className="absolute whitespace-nowrap" style={{ top: '-14px', left: '50%', transform: 'translateX(-50%)' }}>
                <span
                  className="font-extrabold uppercase"
                  style={{
                    fontSize: '0.6rem', letterSpacing: '0.18em',
                    background: 'linear-gradient(135deg, #ec4899, #f43f5e)',
                    color: '#fff', padding: '6px 18px', borderRadius: '9999px',
                    boxShadow: '0 4px 14px rgba(236,72,153,.35), 0 0 0 4px #0f172a',
                    display: 'inline-block',
                  }}
                >
                  Mest Populær
                </span>
              </div>

              <p className="font-semibold uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(148,163,184,.7)', marginBottom: '0.75rem', paddingTop: '0.5rem' }}>Anbefalt</p>
              <h3 className="font-bold text-white" style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>Basis</h3>
              <p className="font-medium" style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '1.75rem', lineHeight: 1.55, fontWeight: 450 }}>
                For bedrifter som aldri vil gå glipp av et anrop.
              </p>

              {/* Price */}
              <div style={{ marginBottom: '1.75rem', paddingBottom: '1.75rem', borderBottom: '1px solid rgba(71,85,105,.4)' }}>
                <div style={{
                  marginBottom: '0.75rem',
                  background: 'linear-gradient(135deg, #f472b6, #ec4899)',
                  color: '#fff',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  padding: '6px 0',
                  marginLeft: '35px',
                  marginRight: '35px',
                  borderRadius: '8px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  boxShadow: '0 2px 10px rgba(236,72,153,0.3)',
                }}>
                  Introduksjonstilbud!
                </div>
                <div className="flex items-baseline">
                  <span
                    className="font-extrabold"
                    style={{
                      fontSize: '2.5rem', letterSpacing: '-0.03em', lineHeight: 1,
                      background: 'linear-gradient(135deg, #f472b6, #fb7185)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}
                  >
                    2 990
                  </span>
                  <span className="font-bold" style={{ fontSize: '1.25rem', marginLeft: '2px', color: '#f472b6' }}>,-</span>
                  <span className="font-medium" style={{ fontSize: '0.9rem', marginLeft: '0.5rem', color: '#64748b' }}>/ mnd</span>
                </div>
              </div>

              {/* Features */}
              <ul className="flex-1 flex flex-col" style={{ gap: '1rem', marginBottom: '2rem' }}>
                <Feature color="pink">1 000 minutter</Feature>
                <Feature color="pink">Timebestilling mot flere kalendere</Feature>
                <Feature color="pink">Stor kunnskapsbase</Feature>
                <Feature color="pink">Kan sette over til flere telefonkøer</Feature>
                <Feature color="pink">Kan snakke norsk og engelsk</Feature>
                <Feature color="pink">2 samtidige samtaler</Feature>
                <Feature color="pink">Avansert samtaleflyt</Feature>
                <Feature color="pink">Enkel integrasjon mot fagsystemer</Feature>
                <Feature color="pink">Chat-modul på nettside</Feature>
                <Feature color="pink">Sende SMS</Feature>
              </ul>

            </HoverCard>
          </AnimateIn>

          {/* ── Pro Card ── */}
          <AnimateIn delay={240}>
            <HoverCard className="flex flex-col w-full" baseStyle={{
              maxWidth: '360px', margin: '0 auto',
              background: '#fff',
              borderRadius: '24px',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: '#e2e8f0',
              boxShadow: '0 1px 3px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.04)',
              padding: '2.25rem',
              height: '100%',
            }} hoverStyle={{
              boxShadow: '0 1px 3px rgba(0,0,0,.04), 0 16px 40px rgba(0,0,0,.08)',
              transform: 'translateY(-3px)',
              borderColor: '#cbd5e1',
            }}>
              <p className="font-semibold uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: '#94a3b8', marginBottom: '0.75rem' }}>Spesielle behov</p>
              <h3 className="font-bold text-slate-900" style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>Pro</h3>
              <p className="text-slate-500" style={{ fontSize: '0.88rem', marginBottom: '1.75rem', lineHeight: 1.55, fontWeight: 450 }}>
                For deg som trenger noe helt eget — med skreddersydde integrasjoner og en fast kontaktperson.
              </p>

              {/* Price */}
              <div style={{ marginBottom: '1.75rem', paddingBottom: '1.75rem', borderBottom: '1px solid #f1f5f9' }} className="flex items-center">
                <span
                  className="font-extrabold text-slate-900"
                  style={{ fontSize: '2.5rem', letterSpacing: '-0.03em', lineHeight: 1 }}
                >
                  Spør oss
                </span>
              </div>

              {/* Features */}
              <ul className="flex-1 flex flex-col" style={{ gap: '1rem', marginBottom: '2rem' }}>
                <Feature color="green">Ubegrenset med ringeminutter</Feature>
                <Feature color="green">Avanserte integrasjoner</Feature>
                <Feature color="green">Kan ringe utgående samtaler for direktesalg, kundeundersøkelser m.m.</Feature>
              </ul>

            </HoverCard>
          </AnimateIn>

        </div>

        {/* CTA under packages */}
        <AnimateIn delay={320}>
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
              Ta kontakt så hjelper vi deg!
            </HoverButton>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}

/* ─── Shared Feature List Item ─── */
function Feature({ children, color }: { children: React.ReactNode; color: 'green' | 'pink' }) {
  const styles = color === 'green'
    ? { bg: '#f0fdf4', border: 'rgba(187,247,208,.6)', icon: '#16a34a', text: '#334155' }
    : { bg: 'rgba(236,72,153,.1)', border: 'rgba(236,72,153,.2)', icon: '#f472b6', text: '#cbd5e1' };

  return (
    <li className="flex items-start" style={{ gap: '0.75rem' }}>
      <div
        className="rounded-full flex-shrink-0"
        style={{
          marginTop: '1px', background: styles.bg,
          border: `1px solid ${styles.border}`, padding: '4px',
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke={styles.icon} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span className="font-medium" style={{ fontSize: '0.9rem', lineHeight: 1.4, color: styles.text }}>{children}</span>
    </li>
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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s cubic-bezier(.4,0,.2,1) ${delay}ms, transform 0.7s cubic-bezier(.4,0,.2,1) ${delay}ms`,
        width: '100%',
      }}
    >
      {children}
    </div>
  );
}

/* ─── Interactive Hover Card ─── */
function HoverCard({
  children, className = '', baseStyle, hoverStyle,
}: {
  children: React.ReactNode; className?: string;
  baseStyle: React.CSSProperties; hoverStyle: React.CSSProperties;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={className}
      style={{ ...baseStyle, transition: 'all 0.3s cubic-bezier(.4,0,.2,1)', ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
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
