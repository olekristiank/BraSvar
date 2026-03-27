"use client";

import React, { useState } from 'react';
import AnimateIn from '@/components/AnimateIn/AnimateIn';
import { useContactModal } from '@/components/ContactModal/ContactContext';

export default function HowItWorksPageContent() {
  const openContact = useContactModal();

  return (
    <>
      {/* ─── Hero ─── */}
      <div style={{
        paddingTop: 'clamp(7rem, 14vw, 10rem)',
        paddingBottom: 'clamp(2rem, 4vw, 3rem)',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 100%)',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(300px, 50vw, 600px)',
          height: 'clamp(300px, 50vw, 600px)',
          background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />

        <AnimateIn delay={0}>
          <p className="font-semibold uppercase" style={{
            fontSize: '0.7rem',
            letterSpacing: '0.18em',
            color: '#ec4899',
            marginBottom: '1rem',
          }}>
            Steg for steg
          </p>
        </AnimateIn>

        <AnimateIn delay={80}>
          <h1 className="font-extrabold tracking-tight" style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            lineHeight: 1.1,
            color: '#0f172a',
            marginBottom: '1.25rem',
          }}>
            Slik fungerer{' '}
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#ec4899',
            }}>det</span>
          </h1>
        </AnimateIn>

        <AnimateIn delay={160}>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: '#64748b',
            maxWidth: '540px',
            margin: '0 auto',
            lineHeight: 1.65,
            fontWeight: 450,
          }}>
            Bra Svar sørger for at du ikke mister kunder når du ikke kan ta telefonen.
            Her er hvordan det fungerer i praksis.
          </p>
        </AnimateIn>
      </div>

      {/* ─── Section: Hva skjer når noen ringer? ─── */}
      <div style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: '0 clamp(1.5rem, 4vw, 3rem)',
        paddingTop: '2rem',
        paddingBottom: '3rem',
      }}>
        <AnimateIn delay={0}>
          <h2 style={{
            fontFamily: 'var(--font-outfit)',
            fontWeight: 800,
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            color: '#0f172a',
            marginBottom: '2.5rem',
            textAlign: 'center',
          }}>
            Hva skjer når noen ringer?
          </h2>
        </AnimateIn>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            {
              num: '1',
              title: 'Kunden ringer',
              desc: 'Telefonen din ringer som vanlig — enten direkte eller via viderekobling.',
            },
            {
              num: '2',
              title: 'Bra Svar svarer',
              desc: 'Innen ett sekund får kunden svar.',
              bullets: [
                'Presenterer seg profesjonelt',
                'Stiller relevante spørsmål',
                'Tilpasser seg det kunden sier',
              ],
            },
            {
              num: '3',
              title: 'Samtalen håndteres',
              desc: 'Basert på behovet til kunden kan Bra Svar:',
              bullets: [
                'Svare på vanlige spørsmål',
                'Finne riktig tjeneste',
                'Forstå hva kunden ønsker',
              ],
            },
            {
              num: '4',
              title: 'Handling',
              desc: 'Bra Svar gjør noe med henvendelsen:',
              bullets: [
                'Booker time i kalenderen din',
                'Sender informasjon',
                'Eller setter over til deg',
              ],
            },
          ].map((step, i) => (
            <AnimateIn key={i} delay={i * 80}>
              <div style={{
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
              }}>
                {/* Number */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: i === 3
                    ? 'linear-gradient(135deg, #ec4899, #db2777)'
                    : 'linear-gradient(135deg, rgba(253,242,248,0.8), rgba(255,241,242,0.8))',
                  border: i === 3 ? 'none' : '1px solid rgba(236,72,153,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '1.3rem',
                    color: i === 3 ? '#fff' : '#ec4899',
                    fontWeight: 400,
                  }}>
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    color: '#0f172a',
                    marginBottom: '0.35rem',
                    lineHeight: 1.3,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#64748b',
                    lineHeight: 1.65,
                    fontWeight: 450,
                  }}>
                    {step.desc}
                  </p>
                  {step.bullets && (
                    <ul style={{
                      marginTop: '0.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.3rem',
                    }}>
                      {step.bullets.map((b) => (
                        <li key={b} style={{
                          fontSize: '0.9rem',
                          color: '#475569',
                          lineHeight: 1.5,
                          fontWeight: 450,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                        }}>
                          <span style={{ color: '#ec4899', fontSize: '0.5rem' }}>●</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* ─── Section: Eksempel på en samtale ─── */}
      <div style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
        paddingRight: 'clamp(1.5rem, 4vw, 3rem)',
      }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <AnimateIn delay={0}>
            <h2 style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
              color: '#0f172a',
              marginBottom: '2rem',
              textAlign: 'center',
            }}>
              Eksempel på en samtale
            </h2>
          </AnimateIn>

          <AnimateIn delay={100}>
            <div style={{
              background: '#fff',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)',
              border: '1px solid #f1f5f9',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <ChatBubble who="customer">Hei, jeg vil gjerne bestille time</ChatBubble>
              <ChatBubble who="ai">Hei! Hva gjelder det?</ChatBubble>
              <ChatBubble who="customer">Massasje</ChatBubble>
              <ChatBubble who="ai">Da finner jeg en ledig time til deg. Passer det i morgen?</ChatBubble>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* ─── Section: Når svarer Bra Svar? ─── */}
      <div style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: 'clamp(1.5rem, 4vw, 3rem)',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
      }}>
        <AnimateIn delay={0}>
          <h2 style={{
            fontFamily: 'var(--font-outfit)',
            fontWeight: 800,
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            color: '#0f172a',
            marginBottom: '1rem',
            textAlign: 'center',
          }}>
            Når svarer Bra Svar?
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#64748b',
            textAlign: 'center',
            marginBottom: '2rem',
            fontWeight: 450,
          }}>
            Du bestemmer selv:
          </p>
        </AnimateIn>

        <div className="flex flex-col sm:flex-row" style={{ gap: '1rem', justifyContent: 'center' }}>
          {[
            { label: 'Hele døgnet', sub: '24/7' },
            { label: 'Utenfor åpningstid', sub: 'Kveld & helg' },
            { label: 'Ved ubesvarte anrop', sub: 'Etter X ring' },
          ].map((opt, i) => (
            <AnimateIn key={opt.label} delay={80 + i * 80}>
              <div style={{
                flex: 1,
                textAlign: 'center',
                padding: '1.5rem 1.25rem',
                borderRadius: '16px',
                border: '1px solid #f1f5f9',
                background: '#fff',
                transition: 'all 0.3s ease',
              }}>
                <p style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#0f172a',
                  marginBottom: '0.25rem',
                }}>
                  {opt.label}
                </p>
                <p style={{
                  fontSize: '0.82rem',
                  color: '#94a3b8',
                  fontWeight: 500,
                }}>
                  {opt.sub}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* ─── Section: Hva trenger du å gjøre? ─── */}
      <div style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
        paddingRight: 'clamp(1.5rem, 4vw, 3rem)',
      }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <AnimateIn delay={0}>
            <h2 style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
              color: '#0f172a',
              marginBottom: '2rem',
              textAlign: 'center',
            }}>
              Hva trenger du å gjøre?
            </h2>
          </AnimateIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { num: '1', title: 'Fortell oss om bedriften din', desc: 'Vi setter opp hvordan telefonen din skal besvares.' },
              { num: '2', title: 'Test løsningen', desc: 'Du får prøve og gi tilbakemelding.' },
              { num: '3', title: 'Koble til', desc: 'Viderekoble nummeret ditt — så er du i gang.' },
            ].map((step, i) => (
              <AnimateIn key={i} delay={80 + i * 80}>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center',
                  padding: '1.25rem 1.5rem',
                  background: '#fff',
                  borderRadius: '16px',
                  border: '1px solid #f1f5f9',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '1.5rem',
                    color: '#ec4899',
                    flexShrink: 0,
                    width: '2rem',
                    textAlign: 'center',
                  }}>
                    {step.num}
                  </span>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: '#0f172a',
                      marginBottom: '0.15rem',
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 450 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Section: Resultatet ─── */}
      <div style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: 'clamp(1.5rem, 4vw, 3rem)',
        paddingTop: '3.5rem',
        paddingBottom: '2rem',
      }}>
        <AnimateIn delay={0}>
          <h2 style={{
            fontFamily: 'var(--font-outfit)',
            fontWeight: 800,
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            color: '#0f172a',
            marginBottom: '2rem',
            textAlign: 'center',
          }}>
            Resultatet
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: '1rem' }}>
          {[
            'Ingen ubesvarte anrop',
            'Flere bookinger',
            'Mindre avbrytelser',
            'Bedre kundeopplevelse',
          ].map((item, i) => (
            <AnimateIn key={item} delay={60 + i * 60}>
              <div style={{
                textAlign: 'center',
                padding: '1.25rem 1rem',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(253,242,248,0.5), rgba(255,241,242,0.5))',
                border: '1px solid rgba(236,72,153,0.08)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  color: '#0f172a',
                  lineHeight: 1.4,
                }}>
                  {item}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* ─── Bottom CTA ─── */}
      <AnimateIn delay={200}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '3rem clamp(1.5rem, 4vw, 3rem)',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-outfit)',
            fontWeight: 800,
            fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
            color: '#0f172a',
            marginBottom: '1.5rem',
            lineHeight: 1.2,
          }}>
            Få flere kunder uten å ta telefonen selv
          </h2>
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
            Prøv Bra Svar gratis!
          </HoverButton>
        </div>
      </AnimateIn>
    </>
  );
}

/* ─── Chat bubble ─── */
function ChatBubble({ who, children }: { who: 'customer' | 'ai'; children: React.ReactNode }) {
  const isCustomer = who === 'customer';
  return (
    <div style={{
      display: 'flex',
      justifyContent: isCustomer ? 'flex-end' : 'flex-start',
    }}>
      <div style={{
        maxWidth: '80%',
        padding: '0.75rem 1.1rem',
        borderRadius: isCustomer ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
        background: isCustomer
          ? 'linear-gradient(135deg, #ec4899, #db2777)'
          : '#f1f5f9',
        color: isCustomer ? '#fff' : '#334155',
        fontSize: '0.9rem',
        fontWeight: 500,
        lineHeight: 1.5,
      }}>
        {children}
      </div>
    </div>
  );
}

/* ─── Hover Button ─── */
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
      style={{ ...baseStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}
