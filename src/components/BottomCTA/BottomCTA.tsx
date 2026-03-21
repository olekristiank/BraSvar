"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function BottomCTA() {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const [btnHover, setBtnHover] = useState(false);

  return (
    <section
      ref={ref}
      className="w-full px-6 sm:px-8 lg:px-12 flex flex-col items-center relative z-20"
      style={{
        paddingTop: '4rem',
        paddingBottom: '5rem',
        background: 'linear-gradient(180deg, #fff 0%, #fdf2f8 50%, #fce7f3 100%)',
      }}
    >
      <div
        style={{
          maxWidth: '640px',
          textAlign: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.8s cubic-bezier(.16,1,.3,1)',
        }}
      >
        <h2
          className="font-extrabold tracking-tight"
          style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
            lineHeight: 1.15,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Klar til å aldri gå glipp av en kunde?
        </h2>
        <p className="font-medium" style={{
          fontSize: '1.05rem',
          color: '#64748b',
          lineHeight: 1.7,
          marginBottom: '2rem',
        }}>
          Start gratis i dag — ingen binding, ingen kredittkort.
        </p>
        <a
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2.5rem',
            fontWeight: 700,
            fontSize: '0.95rem',
            color: '#fff',
            background: btnHover
              ? 'linear-gradient(135deg, #db2777 0%, #be185d 100%)'
              : 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
            borderRadius: '14px',
            textDecoration: 'none',
            transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
            boxShadow: btnHover
              ? '0 8px 30px rgba(236,72,153,0.45)'
              : '0 4px 20px rgba(236,72,153,0.3)',
            transform: btnHover ? 'translateY(-2px)' : 'none',
            letterSpacing: '0.02em',
          }}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
        >
          Kom i gang nå
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  );
}
