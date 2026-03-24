"use client";

import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-menu { display: none !important; }
        }
      `}} />
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '0.65rem 2rem' : '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(255,255,255,0.82)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px) saturate(1.8)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(1.8)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(226,232,240,0.6)' : '1px solid transparent',
          transition: 'all 0.35s cubic-bezier(.4,0,.2,1)',
          maxWidth: '100vw',
        }}
      >
        {/* Brand Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.15rem', textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: 'clamp(1.15rem, 3vw, 1.3rem)', color: '#0f172a', letterSpacing: '-0.03em' }}>
            Bra
          </span>
          <svg
            viewBox="0 0 100 100"
            style={{ height: 'clamp(1.2rem, 3.5vw, 1.45rem)', width: 'auto', margin: '0 0.15rem' }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect className="voice-wave" style={{'--v-scale': 1.8, '--v-dur': '1.0s', '--v-delay': '0.1s'} as React.CSSProperties} x="10" y="35" width="12" height="30" rx="6" fill="#f472b6" />
            <rect className="voice-wave" style={{'--v-scale': 1.3, '--v-dur': '1.2s', '--v-delay': '0.3s'} as React.CSSProperties} x="30" y="20" width="12" height="60" rx="6" fill="#ec4899" />
            <rect className="voice-wave" style={{'--v-scale': 0.6, '--v-dur': '0.9s', '--v-delay': '0.0s'} as React.CSSProperties} x="50" y="10" width="12" height="80" rx="6" fill="#db2777" />
            <rect className="voice-wave" style={{'--v-scale': 1.5, '--v-dur': '1.3s', '--v-delay': '0.4s'} as React.CSSProperties} x="70" y="25" width="12" height="50" rx="6" fill="#ec4899" />
          </svg>
          <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: 'clamp(1.15rem, 3vw, 1.3rem)', color: '#0f172a', letterSpacing: '-0.03em' }}>
            Svar<span style={{ color: '#ec4899' }}>!</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <NavLink href="#hvordan">Slik fungerer det</NavLink>
          <NavLink href="#priser">Priser</NavLink>
          <a
            href="#"
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#fff',
              background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
              padding: '0.55rem 1.4rem',
              borderRadius: '10px',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
              boxShadow: '0 2px 8px rgba(236,72,153,0.25)',
              letterSpacing: '0.01em',
            }}
          >
            Ta kontakt for en hyggelig prat!
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            width: 40,
            height: 40,
          }}
          aria-label="Meny"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: mobileOpen ? 0 : '5px', width: 20, position: 'relative' }}>
            <span style={{
              display: 'block', height: 2, background: '#0f172a', borderRadius: 2, width: '100%',
              transition: 'all 0.3s ease',
              transform: mobileOpen ? 'rotate(45deg) translateY(0)' : 'none',
              position: mobileOpen ? 'absolute' : 'relative', top: mobileOpen ? '50%' : 'auto',
            }} />
            <span style={{
              display: 'block', height: 2, background: '#0f172a', borderRadius: 2, width: '100%',
              transition: 'all 0.3s ease',
              opacity: mobileOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', height: 2, background: '#0f172a', borderRadius: 2, width: '100%',
              transition: 'all 0.3s ease',
              transform: mobileOpen ? 'rotate(-45deg) translateY(0)' : 'none',
              position: mobileOpen ? 'absolute' : 'relative', top: mobileOpen ? '50%' : 'auto',
            }} />
          </div>
        </button>
      </header>

      {/* Mobile menu */}
      <div
        className="nav-mobile-menu"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        <a href="#hvordan" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0f172a', textDecoration: 'none' }}>Slik fungerer det</a>
        <a href="#priser" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0f172a', textDecoration: 'none' }}>Priser</a>
        <a
          href="#"
          onClick={() => setMobileOpen(false)}
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: '#fff',
            background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
            padding: '0.85rem 2.5rem',
            borderRadius: '14px',
            textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(236,72,153,0.35)',
            marginTop: '0.5rem',
          }}
        >
          Gratis prøveversjon
        </a>
      </div>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      style={{
        fontSize: '0.88rem',
        fontWeight: 550,
        color: hovered ? '#0f172a' : '#64748b',
        textDecoration: 'none',
        transition: 'color 0.2s',
        letterSpacing: '0.01em',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}
