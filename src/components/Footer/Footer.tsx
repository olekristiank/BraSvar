"use client";

import React from 'react';

export default function Footer({ lang = 'no' }: { lang?: 'no' | 'en' }) {
  const isEn = lang === 'en';

  const sections = isEn ? [
    {
      title: 'Solutions',
      links: [
        { href: '/en/ai-switchboard', label: 'AI Switchboard' },
        { href: '/en/phone-answering-service', label: 'Phone Answering' },
        { href: '/en/virtual-receptionist', label: 'Virtual Receptionist' },
        { href: '/en/how-it-works', label: 'How It Works' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { href: '/blog', label: 'Blog' },
        { href: '/en/faq', label: 'FAQ' },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '/en/privacy', label: 'Privacy' },
        { href: '/en/about', label: 'About' },
        { href: '/en/contact', label: 'Contact' },
      ],
    },
  ] : [
    {
      title: 'Løsninger',
      links: [
        { href: '/ai-sentralbord', label: 'AI sentralbord' },
        { href: '/telefonsvarer-bedrift', label: 'Telefonsvarer for bedrift' },
        { href: '/virtuell-resepsjonist', label: 'Virtuell resepsjonist for bedrift' },
        { href: '/hvordan-det-fungerer', label: 'Slik fungerer det' },
      ],
    },
    {
      title: 'Ressurser',
      links: [
        { href: '/blog', label: 'Blogg' },
        { href: '/ofte-stilte-sporsmal', label: 'Ofte stilte spørsmål' },
      ],
    },
    {
      title: 'Om oss',
      links: [
        { href: '/personvern', label: 'Personvern' },
        { href: '/om-oss', label: 'Om oss' },
        { href: '/kontakt', label: 'Kontakt' },
      ],
    },
  ];

  return (
    <footer style={{
      width: '100%',
      padding: '2.5rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      backgroundColor: '#0f172a',
      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>
          Bra Svar<span style={{ color: '#ec4899' }}>!</span>
        </span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', marginBottom: '1.5rem' }}>
        {sections.map((section) => (
          <div key={section.title}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
              {section.title}
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {section.links.map((link) => (
                <a key={link.href} href={link.href} style={{ fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.65)', textDecoration: 'none', transition: 'color 0.2s', padding: '0.35rem 0', display: 'inline-block' }}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <div style={{ width: '100%', maxWidth: '600px', height: '1px', background: 'rgba(255,255,255,0.06)', margin: '0 auto 1rem' }} />
      <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)', fontWeight: 500, textAlign: 'center' }}>
        &copy; 2026 by Klevstrand Innovasjon
      </p>
    </footer>
  );
}
