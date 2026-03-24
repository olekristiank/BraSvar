"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';

interface Clip {
  label: string;
  src: string;
}

const clips: Clip[] = [
  { label: 'Håndtverkeren', src: '/audio/handtverkeren.mp3' },
  { label: 'Frisøren', src: '/audio/frisoren.mp3' },
  { label: 'Spa og velvære', src: '/audio/spa-og-velvare.mp3' },
  { label: 'Advokaten', src: '/audio/advokaten.mp3' },
];

interface AudioModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AudioModal({ open, onClose }: AudioModalProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) window.scrollTo(0, parseInt(scrollY || '0') * -1);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setActiveIndex(null);
      setPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      setError(null);
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [open]);

  const playClip = useCallback((index: number) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    if (activeIndex === index && playing) {
      setPlaying(false);
      return;
    }

    if (activeIndex === index && !playing) {
      audioRef.current?.play();
      setPlaying(true);
      return;
    }

    const audio = new Audio(clips[index].src);
    audioRef.current = audio;
    setActiveIndex(index);
    setCurrentTime(0);
    setDuration(0);
    setPlaying(true);
    setError(null);

    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
    audio.addEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
    audio.addEventListener('ended', () => { setPlaying(false); setCurrentTime(0); });
    audio.addEventListener('error', () => { setPlaying(false); setError(index); });
    audio.play().catch(() => { setPlaying(false); setError(index); });
  }, [activeIndex, playing]);

  const seek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !progressRef.current || duration === 0) return;
    const rect = progressRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audioRef.current.currentTime = ratio * duration;
    setCurrentTime(audioRef.current.currentTime);
  }, [duration]);

  const skipBy = useCallback((seconds: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + seconds));
    setCurrentTime(audioRef.current.currentTime);
  }, [duration]);

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
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
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        padding: '1rem',
        animation: 'audioFadeIn 0.2s ease',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes audioFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes audioSlideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: '20px',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          maxWidth: '480px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          animation: 'audioSlideUp 0.3s cubic-bezier(.16,1,.3,1)',
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
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h3 style={{
          fontFamily: 'var(--font-outfit)',
          fontWeight: 700,
          fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
          color: '#0f172a',
          marginBottom: '0.5rem',
          paddingRight: '2rem',
        }}>
          Hør en samtale
        </h3>
        <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.25rem', lineHeight: 1.5 }}>
          Lytt til eksempler på hvordan Bra Svar håndterer ulike bransjer.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {clips.map((clip, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={clip.src}
                style={{
                  borderRadius: '14px',
                  border: isActive ? '1.5px solid rgba(236,72,153,0.3)' : '1.5px solid #e2e8f0',
                  background: isActive ? 'rgba(253,242,248,0.5)' : '#fff',
                  padding: '0.85rem 1rem',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {/* Play/Pause button */}
                  <button
                    onClick={() => playClip(i)}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      border: 'none',
                      cursor: 'pointer',
                      background: isActive && playing
                        ? 'linear-gradient(135deg, #db2777, #be185d)'
                        : 'linear-gradient(135deg, #ec4899, #db2777)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 8px rgba(236,72,153,0.3)',
                    }}
                  >
                    {isActive && playing ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="6,3 20,12 6,21" />
                      </svg>
                    )}
                  </button>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span style={{
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 600,
                      fontSize: '0.92rem',
                      color: '#0f172a',
                    }}>
                      {clip.label}
                    </span>

                    {isActive && error === i && (
                      <p style={{ marginTop: '0.4rem', fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.4 }}>
                        Denne samtalen er ikke tilgjengelig ennå. Kom tilbake snart!
                      </p>
                    )}

                    {isActive && error !== i && (
                      <div style={{ marginTop: '0.5rem' }}>
                        {/* Scrub controls */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <button onClick={() => skipBy(-10)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', color: '#64748b', fontSize: '0.7rem', fontWeight: 600 }}>
                            -10s
                          </button>

                          {/* Progress bar */}
                          <div
                            ref={progressRef}
                            onClick={seek}
                            style={{
                              flex: 1,
                              height: 6,
                              borderRadius: 3,
                              background: '#e2e8f0',
                              cursor: 'pointer',
                              position: 'relative',
                            }}
                          >
                            <div style={{
                              width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%',
                              height: '100%',
                              borderRadius: 3,
                              background: 'linear-gradient(90deg, #ec4899, #db2777)',
                              transition: 'width 0.1s linear',
                            }} />
                            {duration > 0 && (
                              <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: `${(currentTime / duration) * 100}%`,
                                transform: 'translate(-50%, -50%)',
                                width: 14,
                                height: 14,
                                borderRadius: '50%',
                                background: '#db2777',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                              }} />
                            )}
                          </div>

                          <button onClick={() => skipBy(10)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', color: '#64748b', fontSize: '0.7rem', fontWeight: 600 }}>
                            +10s
                          </button>
                        </div>

                        {/* Time display */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                          <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontVariantNumeric: 'tabular-nums' }}>
                            {formatTime(currentTime)}
                          </span>
                          <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontVariantNumeric: 'tabular-nums' }}>
                            {duration > 0 ? formatTime(duration) : '--:--'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
