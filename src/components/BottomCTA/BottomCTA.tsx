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
      className="w-full px-6 sm:px-8 lg:px-12 flex flex-col items-center relative z-20 overflow-hidden"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        background: 'linear-gradient(180deg, #fff 0%, #0f172a 100%)',
        backgroundImage: `linear-gradient(180deg, #fff 0%, #0f172a 100%), url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        backgroundBlendMode: 'normal',
      }}
    >
      {/* Decorative glow */}
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(236,72,153,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div
        style={{
          maxWidth: '640px',
          textAlign: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.8s cubic-bezier(.16,1,.3,1)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h2
          className="font-extrabold tracking-tight"
          style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
            lineHeight: 1.15,
            marginBottom: '1rem',
            color: '#fff',
          }}
        >
          Klar til å aldri gå glipp av en <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400 }}>kunde?</span>
        </h2>
        <p className="font-medium" style={{
          fontSize: '1.05rem',
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
        }}>
          Vi setter opp alt for deg. Ingen binding. Ingen kredittkort.
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
            color: '#0f172a',
            background: btnHover
              ? '#fff'
              : 'rgba(255,255,255,0.95)',
            borderRadius: '14px',
            textDecoration: 'none',
            transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
            boxShadow: btnHover
              ? '0 8px 30px rgba(255,255,255,0.25)'
              : '0 4px 20px rgba(255,255,255,0.15)',
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
