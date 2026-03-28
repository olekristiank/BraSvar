import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'How it works | Bra Svar!',
  description: 'See how Bra Svar answers the phone, talks to your customers and books appointments automatically. Simple, effective and available around the clock.',
  openGraph: {
    title: 'How it works | Bra Svar!',
    description: 'See how Bra Svar answers the phone, talks to your customers and books appointments automatically.',
    url: 'https://brasvar.no/en/how-it-works',
    images: [{ url: '/opengraph-image.svg', width: 1200, height: 630 }],
  },
};

const steps = [
  {
    num: '1',
    title: 'Customer calls',
    desc: 'Your phone rings as usual, either directly or via call forwarding.',
  },
  {
    num: '2',
    title: 'Bra Svar answers',
    desc: 'Within one second the customer gets a response.',
    bullets: [
      'Introduces itself professionally',
      'Asks relevant questions',
      'Adapts to what the customer says',
    ],
  },
  {
    num: '3',
    title: 'The conversation is handled',
    desc: 'Based on the customer\'s needs, Bra Svar can:',
    bullets: [
      'Answer common questions',
      'Find the right service',
      'Understand what the customer wants',
    ],
  },
  {
    num: '4',
    title: 'Action',
    desc: 'Bra Svar acts on the enquiry:',
    bullets: [
      'Books an appointment in your calendar',
      'Sends information',
      'Or transfers to you',
    ],
  },
];

const chatMessages = [
  { who: 'customer' as const, text: 'Hi, I would like to book an appointment' },
  { who: 'ai' as const, text: 'Hello! Welcome to Clinic Central. What kind of treatment would you like?' },
  { who: 'customer' as const, text: 'Massage' },
  { who: 'ai' as const, text: 'Great! I see we have availability on Thursday at 2 PM or Friday at 10 AM. Which works best for you?' },
  { who: 'customer' as const, text: 'Thursday works' },
  { who: 'ai' as const, text: 'I have booked you in for Thursday at 2:00 PM. You will get a confirmation by SMS. Welcome!' },
];

export default function HowItWorksPage() {
  return (
    <main style={{ minHeight: '100vh', fontFamily: 'var(--font-outfit)', background: '#fff' }}>
      <Navbar />

      {/* Hero */}
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

        <p style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.18em',
          color: '#ec4899',
          marginBottom: '1rem',
          textTransform: 'uppercase',
        }}>
          Step by step
        </p>

        <h1 style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          color: '#0f172a',
          marginBottom: '1.25rem',
        }}>
          From call to booked in{' '}
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#ec4899',
          }}>30 seconds</span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          color: '#64748b',
          maxWidth: '540px',
          margin: '0 auto',
          lineHeight: 1.65,
          fontWeight: 450,
        }}>
          Bra Svar makes sure you do not lose customers when you cannot answer the phone.
          Here is how it works in practice.
        </p>
      </div>

      {/* What happens when someone calls? */}
      <div style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: '0 clamp(1.5rem, 4vw, 3rem)',
        paddingTop: '2rem',
        paddingBottom: '3rem',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-outfit)',
          fontWeight: 800,
          fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
          color: '#0f172a',
          marginBottom: '2.5rem',
          textAlign: 'center',
        }}>
          What happens when someone calls?
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'flex-start',
            }}>
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
                        listStyle: 'none',
                      }}>
                        <span style={{ color: '#ec4899', fontSize: '0.5rem' }}>&#x25CF;</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat example */}
      <div style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
        paddingRight: 'clamp(1.5rem, 4vw, 3rem)',
      }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-outfit)',
            fontWeight: 800,
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            color: '#0f172a',
            marginBottom: '2rem',
            textAlign: 'center',
          }}>
            Example conversation
          </h2>

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
            {chatMessages.map((msg, i) => {
              const isCustomer = msg.who === 'customer';
              return (
                <div key={i} style={{ display: 'flex', justifyContent: isCustomer ? 'flex-end' : 'flex-start' }}>
                  <div style={{
                    maxWidth: '80%',
                    padding: '0.75rem 1.1rem',
                    borderRadius: isCustomer ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                    background: isCustomer ? 'linear-gradient(135deg, #ec4899, #db2777)' : '#f1f5f9',
                    color: isCustomer ? '#fff' : '#334155',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    lineHeight: 1.5,
                  }}>
                    {msg.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* When does Bra Svar answer? */}
      <div style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: 'clamp(1.5rem, 4vw, 3rem)',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-outfit)',
          fontWeight: 800,
          fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
          color: '#0f172a',
          marginBottom: '1rem',
          textAlign: 'center',
        }}>
          When does Bra Svar answer?
        </h2>
        <p style={{
          fontSize: '1rem',
          color: '#64748b',
          textAlign: 'center',
          marginBottom: '2rem',
          fontWeight: 450,
        }}>
          You decide:
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'Around the clock', sub: '24/7' },
            { label: 'Outside business hours', sub: 'Evenings and weekends' },
            { label: 'On unanswered calls', sub: 'After X rings' },
          ].map((opt) => (
            <div key={opt.label} style={{
              flex: 1,
              textAlign: 'center',
              padding: '1.5rem 1.25rem',
              borderRadius: '16px',
              border: '1px solid #f1f5f9',
              background: '#fff',
              minWidth: '180px',
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
          ))}
        </div>
      </div>

      {/* What do you need to do? */}
      <div style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
        paddingRight: 'clamp(1.5rem, 4vw, 3rem)',
      }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-outfit)',
            fontWeight: 800,
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            color: '#0f172a',
            marginBottom: '2rem',
            textAlign: 'center',
          }}>
            What do you need to do?
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { num: '1', title: 'Tell us about your business', desc: 'We set up how your phone should be answered.' },
              { num: '2', title: 'Test the solution', desc: 'You get to try it out and give feedback.' },
              { num: '3', title: 'Connect', desc: 'Forward your number and you are up and running.' },
            ].map((step) => (
              <div key={step.num} style={{
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
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: 'clamp(1.5rem, 4vw, 3rem)',
        paddingTop: '3.5rem',
        paddingBottom: '2rem',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-outfit)',
          fontWeight: 800,
          fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
          color: '#0f172a',
          marginBottom: '2rem',
          textAlign: 'center',
        }}>
          The result
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
          {[
            '0 lost customers after closing time',
            'Appointments that book themselves',
            'Fewer interruptions in your workday',
            'Happy customers from the first ring',
          ].map((item) => (
            <div key={item} style={{
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
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
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
          Get more customers without answering the phone yourself
        </h2>
        <Link href="/en/contact" style={{
          display: 'inline-flex',
          fontWeight: 700,
          padding: '1rem 2.5rem',
          borderRadius: '14px',
          fontSize: '1rem',
          background: 'linear-gradient(135deg, #ec4899, #e11d48)',
          color: '#fff',
          textDecoration: 'none',
          boxShadow: '0 8px 24px rgba(236,72,153,.3)',
        }}>
          Try Bra Svar for free
        </Link>
      </div>
    </main>
  );
}
