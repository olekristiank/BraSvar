"use client";

import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
        justifyContent: 'flex-end',
        background: scrolled ? 'rgba(255,255,255,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px) saturate(1.8)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(1.8)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(226,232,240,0.6)' : '1px solid transparent',
        transition: 'all 0.35s cubic-bezier(.4,0,.2,1)',
        maxWidth: '100vw',
      }}
    >


      {/* Nav links */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
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
          Kom i gang
        </a>
      </nav>
    </header>
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
