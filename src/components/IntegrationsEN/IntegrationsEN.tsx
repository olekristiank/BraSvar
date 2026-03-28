"use client";

import React, { useState, useRef, useEffect } from 'react';
import AnimateIn from '@/components/AnimateIn/AnimateIn';

const categories: { title: string; items: string[] }[] = [
  {
    title: 'Scheduling and calendar',
    items: ['Acuity', 'Anita', 'Athena', 'Avon', 'Cal.com', 'Cliniko', 'Dentally', 'DIPS', 'Dynamic', 'EasyPractice', 'Epic', 'Exact', 'Frenda', 'Google Calendar', 'J4', 'Kaddio', 'Konfidens', 'MakePlans', 'Metodika', 'Millennium', 'Muntra', 'Nextech', 'Opus', 'Outlook', 'Pasientsky', 'Physica', 'Pridok', 'Prorenata', 'Psykbase', 'Semble', 'Sensei', 'Solvit', 'Speare', 'TakeCare', 'Vena', 'WebDoc'],
  },
  {
    title: 'Accounting and payments',
    items: ['Tripletex', 'Fiken', 'Visma', 'Vipps', 'Stripe'],
  },
  {
    title: 'Support and CRM',
    items: ['Zendesk', 'Freshdesk', 'Jira', 'ServiceNow', 'SuperOffice', 'Lime', 'Zoho', 'Pureservice', 'HubSpot', 'Salesforce', 'Pipedrive'],
  },
  {
    title: 'Communication',
    items: ['Microsoft Teams', 'Slack', 'Messenger', 'WhatsApp', 'SMS', 'Email'],
  },
  {
    title: 'Authentication and access',
    items: ['BankID', 'SMS'],
  },
];

export default function IntegrationsEN() {
  return (
    <section
      id="integrations"
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
              Works with the systems<br />you already <span style={{ color: '#ec4899' }}>use</span>
            </h2>
            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: '#64748b',
              lineHeight: 1.6,
              fontWeight: 450,
            }}>
              Bra Svar integrates with most systems.<br />Here is a selection.
            </p>
          </div>
        </AnimateIn>

        {/* Expandable category list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', maxWidth: '750px', margin: '0 auto' }}>
          {categories.map((cat, ci) => (
            <AnimateIn key={cat.title} delay={60 + ci * 40}>
              <CategoryRow title={cat.title} items={cat.items} />
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
            Using a system not listed? We connect to that too.
          </p>
        </AnimateIn>

      </div>
    </section>
  );
}

function CategoryRow({ title, items }: { title: string; items: string[] }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const previewCount = Math.min(8, items.length);
  const previewItems = items.slice(0, previewCount);
  const hasMore = items.length > previewCount;

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <div
      style={{
        borderLeft: '2px solid',
        borderLeftColor: open ? '#ec4899' : 'rgba(236,72,153,0.2)',
        background: open ? 'rgba(253,242,248,0.25)' : 'transparent',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => hasMore && setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '0.7rem 1rem',
          background: 'none',
          border: 'none',
          cursor: hasMore ? 'pointer' : 'default',
          gap: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flex: 1, minWidth: 0 }}>
          <span style={{
            fontFamily: 'var(--font-outfit)',
            fontWeight: 700,
            fontSize: '0.9rem',
            color: '#0f172a',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            {title}
          </span>
          {!open && (
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              overflow: 'hidden',
              flexWrap: 'wrap',
            }}>
              {previewItems.map((item, i) => (
                <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  {i > 0 && <span style={{ color: '#cbd5e1', fontSize: '0.7rem' }}>·</span>}
                  <span style={{ fontSize: '0.8rem', fontWeight: 450, color: '#64748b', whiteSpace: 'nowrap' }}>{item}</span>
                </span>
              ))}
              {hasMore && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', whiteSpace: 'nowrap' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 450, color: '#64748b' }}>..</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ec4899' }}>more</span>
                </span>
              )}
            </span>
          )}
          {open && hasMore && (
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#db2777', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              Hide
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 11, height: 11, transform: 'rotate(180deg)' }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          )}
        </div>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: open ? `${height}px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.35rem',
          padding: '0 1rem 0.75rem',
        }}>
          {items.map((item) => (
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
      </div>
    </div>
  );
}
