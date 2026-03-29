"use client";

import React, { useEffect, useState } from 'react';
import { useContactModal } from '@/components/ContactModal/ContactContext';

const industries = [
  { href: '/en/accountant', label: 'Accountant' },
  { href: '/en/acupuncturist', label: 'Acupuncturist' },
  { href: '/en/architect', label: 'Architect' },
  { href: '/en/beauty', label: 'Beauty Salon' },
  { href: '/en/car-detailing', label: 'Car Detailing' },
  { href: '/en/chiropractor', label: 'Chiropractor' },
  { href: '/en/cleaning', label: 'Cleaning' },
  { href: '/en/clinic', label: 'Clinic' },
  { href: '/en/consultant', label: 'Consultant' },
  { href: '/en/contractor', label: 'Contractor' },
  { href: '/en/dentist', label: 'Dentist' },
  { href: '/en/dog-grooming', label: 'Dog Grooming' },
  { href: '/en/electrician', label: 'Electrician' },
  { href: '/en/funeral-home', label: 'Funeral Home' },
  { href: '/en/gym', label: 'Gym' },
  { href: '/en/hairdresser', label: 'Hairdresser' },
  { href: '/en/insurance', label: 'Insurance' },
  { href: '/en/lawyer', label: 'Lawyer' },
  { href: '/en/medical-office', label: 'Medical Office' },
  { href: '/en/naprapat', label: 'Naprapat' },
  { href: '/en/optician', label: 'Optician' },
  { href: '/en/painter', label: 'Painter' },
  { href: '/en/personal-trainer', label: 'Personal Trainer' },
  { href: '/en/photographer', label: 'Photographer' },
  { href: '/en/physiotherapist', label: 'Physiotherapist' },
  { href: '/en/plumber', label: 'Plumber' },
  { href: '/en/podiatrist', label: 'Podiatrist' },
  { href: '/en/psychologist', label: 'Psychologist' },
  { href: '/en/real-estate', label: 'Real Estate' },
  { href: '/en/skin-clinic', label: 'Skin Clinic' },
  { href: '/en/tattoo-artist', label: 'Tattoo Artist' },
  { href: '/en/tradesperson', label: 'Tradesperson' },
  { href: '/en/veterinarian', label: 'Veterinarian' },
  { href: '/en/wellness-clinic', label: 'Wellness Clinic' },
  { href: '/en/workshop', label: 'Workshop' },
];

export default function NavbarEN() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bransjOpen, setBransjOpen] = useState(false);
  const openContact = useContactModal();

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
        <a href="/en" style={{ display: 'flex', alignItems: 'center', gap: '0.15rem', textDecoration: 'none' }}>
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
          <NavLink href="/en/#how-it-works">How it works</NavLink>
          <NavLink href="/en/#pricing">Pricing</NavLink>
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setBransjOpen(true)}
            onMouseLeave={() => setBransjOpen(false)}
          >
            <button style={{
              fontSize: '0.88rem', fontWeight: 550, color: bransjOpen ? '#0f172a' : '#64748b',
              background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.01em',
              display: 'flex', alignItems: 'center', gap: '0.3rem', padding: 0,
              transition: 'color 0.2s',
            }}>
              Industries
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12, transition: 'transform 0.2s', transform: bransjOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {bransjOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                paddingTop: '0.5rem', zIndex: 50,
              }}>
                <div style={{
                  background: '#fff', borderRadius: '14px', border: '1px solid #f1f5f9',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)', padding: '0.75rem 0',
                  display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0', minWidth: '480px',
                }}>
                  {industries.map((ind) => (
                    <a key={ind.href} href={ind.href} style={{
                      display: 'block', padding: '0.45rem 1.25rem', fontSize: '0.82rem',
                      fontWeight: 500, color: '#334155', textDecoration: 'none',
                      transition: 'background 0.15s, color 0.15s',
                      borderRadius: '6px', margin: '0 0.35rem',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#fdf2f8'; e.currentTarget.style.color = '#db2777'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#334155'; }}
                    >
                      {ind.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink href="/blog">Blog</NavLink>
          <button
            onClick={openContact}
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#fff',
              background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
              padding: '0.55rem 1.4rem',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
              boxShadow: '0 2px 8px rgba(236,72,153,0.25)',
              letterSpacing: '0.01em',
            }}
          >
            Get in touch
          </button>
          <a href="/" style={{
            fontSize: '0.78rem',
            fontWeight: 600,
            color: '#94a3b8',
            textDecoration: 'none',
            padding: '0.3rem 0.5rem',
            borderRadius: '6px',
            border: '1px solid #e2e8f0',
            transition: 'color 0.2s, border-color 0.2s',
          }}>
            NO
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
          aria-label="Menu"
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
        <a href="/en/#how-it-works" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0f172a', textDecoration: 'none' }}>How it works</a>
        <a href="/en/#pricing" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0f172a', textDecoration: 'none' }}>Pricing</a>
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setBransjOpen(!bransjOpen)}
            style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0f172a', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            Industries
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14, transition: 'transform 0.2s', transform: bransjOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {bransjOpen && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem 0.8rem', justifyContent: 'center', marginTop: '0.75rem', maxWidth: '320px' }}>
              {industries.map((ind) => (
                <a key={ind.href} href={ind.href} onClick={() => setMobileOpen(false)} style={{ fontSize: '0.85rem', fontWeight: 500, color: '#64748b', textDecoration: 'none' }}>
                  {ind.label}
                </a>
              ))}
            </div>
          )}
        </div>
        <a href="/blog" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0f172a', textDecoration: 'none' }}>Blog</a>
        <button
          onClick={() => { setMobileOpen(false); openContact(); }}
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: '#fff',
            background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
            padding: '0.85rem 2.5rem',
            borderRadius: '14px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(236,72,153,0.35)',
            marginTop: '0.5rem',
          }}
        >
          Get in touch
        </button>
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
