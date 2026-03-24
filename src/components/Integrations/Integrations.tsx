"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useContactModal } from '@/components/ContactModal/ContactContext';

interface Integration {
  name: string;
  icon: string;
}

interface Category {
  title: string;
  icon: string;
  items: Integration[];
}

const categories: Category[] = [
  {
    title: 'Autentisering',
    icon: '🔐',
    items: [
      { name: 'SMS', icon: '💬' },
      { name: 'BankID', icon: '🏦' },
    ],
  },
  {
    title: 'Kalendere',
    icon: '📅',
    items: [
      { name: 'Outlook', icon: '📧' },
      { name: 'Google Calendar', icon: '📆' },
    ],
  },
  {
    title: 'Timebok & booking',
    icon: '📋',
    items: [
      { name: 'Pasientsky', icon: '🏥' },
      { name: 'Makeplans', icon: '🗓️' },
      { name: 'Cal.com', icon: '📅' },
      { name: 'Opus', icon: '⚕️' },
      { name: 'Anita', icon: '💊' },
      { name: 'Pridok', icon: '🩺' },
      { name: 'DIPS', icon: '🏥' },
      { name: 'Muntra', icon: '🦷' },
    ],
  },
  {
    title: 'Betaling',
    icon: '💳',
    items: [
      { name: 'Vipps', icon: '📱' },
      { name: 'Stripe', icon: '💳' },
    ],
  },
  {
    title: 'Meldinger',
    icon: '✉️',
    items: [
      { name: 'Messenger', icon: '💬' },
      { name: 'WhatsApp', icon: '📲' },
      { name: 'SMS', icon: '📩' },
      { name: 'E-post', icon: '📧' },
    ],
  },
  {
    title: 'CRM',
    icon: '👥',
    items: [
      { name: 'HubSpot', icon: '🟠' },
      { name: 'Salesforce', icon: '☁️' },
      { name: 'Pipedrive', icon: '📊' },
    ],
  },
  {
    title: 'Regnskap',
    icon: '📒',
    items: [
      { name: 'Tripletex', icon: '📗' },
      { name: 'Fiken', icon: '📘' },
      { name: 'Visma', icon: '📕' },
    ],
  },
  {
    title: 'Kommunikasjon',
    icon: '💬',
    items: [
      { name: 'Microsoft Teams', icon: '🟣' },
      { name: 'Slack', icon: '🟡' },
    ],
  },
];

export default function Integrations() {
  const openContact = useContactModal();

  return (
    <section
      id="integrasjoner"
      className="w-full px-6 sm:px-8 lg:px-12 flex flex-col items-center relative z-20"
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        background: '#fff',
      }}
    >
      <div className="w-full flex flex-col items-center" style={{ maxWidth: '1100px' }}>

        {/* Header */}
        <AnimateIn delay={0}>
          <div className="text-center px-4" style={{ marginBottom: '1rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
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
              Fungerer med systemene du allerede <span style={{ color: '#ec4899' }}>bruker</span>
            </h2>
            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: '#64748b',
              lineHeight: 1.6,
              fontWeight: 450,
            }}>
              Bra Svar kobler seg sømløst til dine eksisterende verktøy. Her er et utvalg — vi kan integrere med de fleste systemer.
            </p>
          </div>
        </AnimateIn>

        {/* Category grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.25rem',
            width: '100%',
            marginTop: '2rem',
          }}
        >
          {categories.map((cat, ci) => (
            <AnimateIn key={cat.title} delay={80 + ci * 60}>
              <div
                style={{
                  background: '#f8fafc',
                  borderRadius: '18px',
                  padding: '1.5rem',
                  border: '1px solid #f1f5f9',
                  height: '100%',
                  transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(236,72,153,.08)';
                  e.currentTarget.style.borderColor = '#fce7f3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                }}
              >
                {/* Category header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>{cat.icon}</span>
                  <h3 style={{
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: '#0f172a',
                    letterSpacing: '-0.01em',
                  }}>
                    {cat.title}
                  </h3>
                </div>

                {/* Items */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {cat.items.map((item) => (
                    <span
                      key={item.name}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        padding: '0.3rem 0.7rem',
                        background: '#fff',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        color: '#334155',
                        border: '1px solid #e2e8f0',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Note + CTA */}
        <AnimateIn delay={600}>
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <p style={{
              fontSize: '0.95rem',
              color: '#94a3b8',
              marginBottom: '1.5rem',
              fontStyle: 'italic',
            }}>
              Finner du ikke systemet ditt? Ingen grunn til bekymring — vi kan integrere med de fleste løsninger.
            </p>
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
              Ta kontakt for en hyggelig prat!
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
        transition: `opacity 0.7s cubic-bezier(.2,0.8,.2,1) ${delay}ms, transform 0.7s cubic-bezier(.2,0.8,.2,1) ${delay}ms`,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
}
