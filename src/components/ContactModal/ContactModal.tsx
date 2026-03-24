"use client";

import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

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
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(4px)',
        padding: '1rem',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: '20px',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
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
              Vi tar kontakt så snart som mulig.
            </p>
          </div>
        ) : (
          <>
            <h3 style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 700,
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              color: '#0f172a',
              marginBottom: '0.75rem',
              paddingRight: '2rem',
            }}>
              Ta kontakt
            </h3>

            <p style={{
              fontSize: '0.92rem',
              color: '#475569',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
            }}>
              Ring oss på{' '}
              <a href="tel:+4764006264" style={{ color: '#db2777', fontWeight: 600, textDecoration: 'none' }}>
                64 00 62 64
              </a>
              , der kan du både teste ut Bra Svar og legge igjen dine opplysninger om du vil. Eller — fyll ut nedenfor, så tar vi kontakt!
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <Field label="Fornavn" name="fornavn" value={form.fornavn} onChange={handleChange} required />
                <Field label="Etternavn" name="etternavn" value={form.etternavn} onChange={handleChange} required />
              </div>
              <Field label="Firmanavn" name="firma" value={form.firma} onChange={handleChange} required />
              <Field label="E-postadresse" name="epost" type="email" value={form.epost} onChange={handleChange} required />
              <Field label="Nettsted" name="nettsted" type="url" value={form.nettsted} onChange={handleChange} placeholder="https://" required />
              <Field label="Telefonnummer" name="telefon" type="tel" value={form.telefon} onChange={handleChange} required />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                  Beskjed <span style={{ fontWeight: 400, color: '#94a3b8' }}>(valgfritt)</span>
                </label>
                <textarea
                  name="beskjed"
                  value={form.beskjed}
                  onChange={handleChange}
                  rows={3}
                  style={{
                    padding: '0.65rem 0.85rem',
                    borderRadius: '10px',
                    border: '1.5px solid #e2e8f0',
                    fontSize: '0.92rem',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = '#ec4899'}
                  onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <button
                type="submit"
                style={{
                  marginTop: '0.5rem',
                  padding: '0.9rem',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: '#fff',
                  background: 'linear-gradient(135deg, #ec4899, #db2777)',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(236,72,153,0.35)',
                  transition: 'all 0.25s cubic-bezier(.4,0,.2,1)',
                }}
              >
                Send
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, type = 'text', required = false, placeholder }: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        style={{
          padding: '0.65rem 0.85rem',
          borderRadius: '10px',
          border: '1.5px solid #e2e8f0',
          fontSize: '0.92rem',
          fontFamily: 'inherit',
          outline: 'none',
          transition: 'border-color 0.2s',
        }}
        onFocus={e => e.target.style.borderColor = '#ec4899'}
        onBlur={e => e.target.style.borderColor = '#e2e8f0'}
      />
    </div>
  );
}
