"use client";

import React from 'react';
import AnimateIn from '@/components/AnimateIn/AnimateIn';


// Ordered so wide(2)+normal(1) fill each row cleanly: row1=3, row2=3, row3=3
const categories: { title: string; items: string[] }[] = [
  {
    title: 'Timebestilling og kalender',
    items: ['Acuity', 'Anita', 'Athena', 'Avon', 'Cal.com', 'Cliniko', 'Dentally', 'DIPS', 'Dynamic', 'EasyPractice', 'Epic', 'Exact', 'Frenda', 'Google Calendar', 'J4', 'Kaddio', 'Konfidens', 'MakePlans', 'Metodika', 'Millennium', 'Muntra', 'Nextech', 'Opus', 'Outlook', 'Pasientsky', 'Physica', 'Pridok', 'Prorenata', 'Psykbase', 'Semble', 'Sensei', 'Solvit', 'Speare', 'TakeCare', 'Vena', 'WebDoc'],
  },
  {
    title: 'Regnskap & betaling',
    items: ['Tripletex', 'Fiken', 'Visma', 'Vipps', 'Stripe'],
  },
  {
    title: 'Brukerstøtte og CRM',
    items: ['Zendesk', 'Freshdesk', 'Jira', 'ServiceNow', 'SuperOffice', 'Lime', 'Zoho', 'Pureservice', 'HubSpot', 'Salesforce', 'Pipedrive'],
  },
  {
    title: 'Kommunikasjon',
    items: ['Microsoft Teams', 'Slack', 'Messenger', 'WhatsApp', 'SMS', 'E-post'],
  },
  {
    title: 'Autentisering og tilgang',
    items: ['BankID', 'SMS'],
  },
];

export default function Integrations() {
  return (
    <section
      id="integrasjoner"
      className="w-full flex flex-col items-center relative z-20"
      style={{
        paddingTop: '4rem',
        paddingBottom: '4rem',
        paddingLeft: 'clamp(2rem, 6vw, 3rem)',
        paddingRight: 'clamp(2rem, 6vw, 3rem)',
        background: 'linear-gradient(180deg, #fff1f2 0%, #fff 20%, #fff 80%, #fdf2f8 100%)',
      }}
    >
      <div className="w-full flex flex-col items-center" style={{ maxWidth: '1100px' }}>

        {/* Header */}
        <AnimateIn delay={0}>
          <div className="text-center px-4" style={{ marginBottom: '2rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: 'clamp(1.7rem, 5vw, 3rem)',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                color: '#0f172a',
              }}
            >
              Fungerer med systemene<br />du allerede <span style={{ color: '#ec4899' }}>bruker</span>
            </h2>
            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: '#64748b',
              lineHeight: 1.6,
              fontWeight: 450,
            }}>
              Bra Svar kan integreres med de fleste systemer.<br />Her er et utvalg.
            </p>
          </div>
        </AnimateIn>

        {/* Compact category list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '750px', margin: '0 auto' }}>
          {categories.map((cat, ci) => (
            <AnimateIn key={cat.title} delay={60 + ci * 40}>
              <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  color: '#0f172a',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}>
                  <span style={{ color: '#ec4899', fontSize: '0.7rem' }}>—</span>
                  {cat.title}
                </span>
                {cat.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '0.25rem 0.65rem',
                      background: 'rgba(253,242,248,0.6)',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: '#475569',
                      border: '1px solid rgba(236,72,153,0.1)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Note */}
        <AnimateIn delay={600}>
          <p className="text-center" style={{
            fontSize: '0.95rem',
            color: '#64748b',
            marginTop: '2rem',
          }}>
            Bruker du et system som ikke er listet? Vi kobler oss til det også.
          </p>
        </AnimateIn>

      </div>
    </section>
  );
}

