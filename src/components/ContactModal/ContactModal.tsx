"use client";

import React, { useState, useEffect } from 'react';
import { useScrollLock } from '@/hooks/useScrollLock';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [form, setForm] = useState({
    fornavn: '',
    etternavn: '',
    firma: '',
    epost: '',
    nettsted: '',
    telefon: '',
    beskjed: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useScrollLock(open);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send form data to backend
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        padding: '1rem',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes phonePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(236,72,153,0.3); }
          50% { box-shadow: 0 0 0 10px rgba(236,72,153,0); }
        }
      `}} />
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: '20px',
          padding: 'clamp(1.25rem, 3vw, 2rem)',
          maxWidth: '520px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          animation: 'slideUp 0.3s cubic-bezier(.16,1,.3,1)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Lukk"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.25rem',
            color: '#94a3b8',
            transition: 'color 0.2s',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
            <h3 style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '1.4rem', color: '#0f172a', marginBottom: '0.5rem' }}>
              Takk for din henvendelse!
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Vi tar kontakt innen én virkedag.
            </p>
          </div>
        ) : (
          <>
            {/* Heading */}
            <h3 style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 700,
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              color: '#0f172a',
              marginBottom: '1.25rem',
              paddingRight: '2rem',
            }}>
              Prøv Bra Svar
            </h3>

            {/* Path 1: Call */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(253,242,248,0.7) 0%, rgba(255,241,242,0.7) 100%)',
              borderRadius: '14px',
              padding: '1.25rem 1.25rem',
              border: '1px solid rgba(236,72,153,0.12)',
              textAlign: 'center',
            }}>
              <p style={{
                fontSize: '0.92rem',
                color: '#475569',
                lineHeight: 1.6,
                marginBottom: '0.85rem',
              }}>
                Ring og opplev assistenten selv — med én gang.
              </p>
              <a
                href="tel:+4764006264"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.7rem 1.25rem',
                  background: 'linear-gradient(135deg, #ec4899, #db2777)',
                  color: '#fff',
                  borderRadius: '11px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '0.02em',
                  boxShadow: '0 4px 14px rgba(236,72,153,0.3)',
                  transition: 'all 0.25s cubic-bezier(.4,0,.2,1)',
                  animation: 'phonePulse 2.5s ease-in-out infinite',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                64 00 62 64
              </a>
            </div>

            {/* Divider: eller */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              margin: '1.25rem 0',
            }}>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #e2e8f0)' }} />
              <span style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#94a3b8',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                flexShrink: 0,
              }}>
                eller
              </span>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #e2e8f0, transparent)' }} />
            </div>

            {/* Path 2: Form */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(253,242,248,0.5) 0%, rgba(255,241,242,0.5) 100%)',
              borderRadius: '14px',
              padding: '1.25rem 1.25rem',
              border: '1px solid rgba(236,72,153,0.08)',
            }}>
              <p style={{
                fontSize: '0.88rem',
                color: '#475569',
                lineHeight: 1.6,
                marginBottom: '1rem',
                textAlign: 'center',
              }}>
                Fyll ut skjemaet, så setter vi opp en assistent tilpasset din bedrift — <strong style={{ color: '#0f172a' }}>helt gratis</strong>.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  <Field name="fornavn" value={form.fornavn} onChange={handleChange} required placeholder="Fornavn" />
                  <Field name="etternavn" value={form.etternavn} onChange={handleChange} required placeholder="Etternavn" />
                </div>
                <Field name="firma" value={form.firma} onChange={handleChange} required placeholder="Firmanavn" />
                <Field name="epost" type="email" value={form.epost} onChange={handleChange} required placeholder="E-postadresse" />
                <Field name="nettsted" type="url" value={form.nettsted} onChange={handleChange} placeholder="Nettsted (https://)" />
                <Field name="telefon" type="tel" value={form.telefon} onChange={handleChange} required placeholder="Telefonnummer" />
                <textarea
                  name="beskjed"
                  value={form.beskjed}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Beskjed (valgfritt)"
                  style={{
                    padding: '0.6rem 0.85rem',
                    borderRadius: '10px',
                    border: '1.5px solid #e2e8f0',
                    fontSize: '0.88rem',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    background: '#fff',
                  }}
                  onFocus={e => e.target.style.borderColor = '#ec4899'}
                  onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                />

                <button
                  type="submit"
                  style={{
                    marginTop: '0.25rem',
                    padding: '0.8rem',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    color: '#fff',
                    background: 'linear-gradient(135deg, #ec4899, #db2777)',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(236,72,153,0.35)',
                    transition: 'all 0.25s cubic-bezier(.4,0,.2,1)',
                    width: 'fit-content',
                    minWidth: '160px',
                    alignSelf: 'center',
                  }}
                >
                  Send
                </button>

              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Field({ name, value, onChange, type = 'text', required = false, placeholder }: {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      style={{
        padding: '0.6rem 0.85rem',
        borderRadius: '10px',
        border: '1.5px solid #e2e8f0',
        fontSize: '0.88rem',
        fontFamily: 'inherit',
        outline: 'none',
        transition: 'border-color 0.2s',
        background: '#fff',
      }}
      onFocus={e => e.target.style.borderColor = '#ec4899'}
      onBlur={e => e.target.style.borderColor = '#e2e8f0'}
    />
  );
}
