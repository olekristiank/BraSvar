"use client";

import React, { useEffect, useRef, useState } from 'react';

const allImages: { src: string; alt: string }[] = [
  { src: '/images/personas/plumber.jpg', alt: 'Rørlegger på jobb' },
  { src: '/images/personas/roofer.jpg', alt: 'Taktekker på tak' },
  { src: '/images/personas/therapist.jpg', alt: 'Terapeut i konsultasjon' },
  { src: '/images/personas/dentist.jpg', alt: 'Tannlege med pasient' },
  { src: '/images/personas/hairdresser.jpg', alt: 'Frisør med kunde' },
  { src: '/images/personas/mechanic.jpg', alt: 'Bilmekaniker i verksted' },
  { src: '/images/personas/lawyer.jpg', alt: 'Advokat på kontor' },
  { src: '/images/personas/warehouse.jpg', alt: 'Lagerarbeider' },
];

function shuffleAndPick<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export default function Recognition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [counterDone, setCounterDone] = useState(false);
  const targetCount = 17;

  // Use first 3 as initial SSR value, then shuffle on client
  const [selectedImages, setSelectedImages] = useState(allImages.slice(0, 3));

  useEffect(() => {
    setSelectedImages(shuffleAndPick(allImages, 3));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -15% 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const counterDelay = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= targetCount) {
          clearInterval(interval);
          setCounterDone(true);
        }
      }, 120);
      return () => clearInterval(interval);
    }, 1200);
    return () => clearTimeout(counterDelay);
  }, [isVisible]);

  return (
    <section
      className="w-full px-6 sm:px-8 lg:px-12 flex flex-col items-center relative z-20"
      style={{
        paddingTop: '2rem',
        paddingBottom: '4rem',
        background: '#fff',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          .poster-triptych { aspect-ratio: 3 / 4 !important; }
          .poster-panel-side { display: none !important; }
          .poster-panel-center { flex: 1 !important; }
          .poster-divider { display: none !important; }
        }
      `}} />

      <div
        ref={sectionRef}
        className="w-full relative"
        style={{
          maxWidth: '1100px',
          borderRadius: '24px',
          overflow: 'hidden',
          background: '#000',
        }}
      >
        {/* Triptych panels */}
        <div
          className="poster-triptych flex w-full relative"
          style={{ aspectRatio: '16 / 9' }}
          suppressHydrationWarning
        >
          {selectedImages.map((img, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <div
                  className="poster-divider"
                  style={{
                    width: '3px',
                    background: '#fff',
                    zIndex: 3,
                    flexShrink: 0,
                  }}
                />
              )}

              <div
                className={i === 1 ? 'poster-panel-center' : 'poster-panel-side'}
                style={{
                  flex: 1,
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: isVisible ? 1 : 0.35,
                  transform: isVisible ? 'scale(1)' : 'scale(1.05)',
                  transition: `opacity 0.7s cubic-bezier(.4,0,.2,1) ${300 + i * 300}ms, transform 0.8s cubic-bezier(.4,0,.2,1) ${300 + i * 300}ms`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="eager"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Dark gradient overlay + vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.82) 100%)',
            pointerEvents: 'none',
            zIndex: 4,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            boxShadow: 'inset 0 0 100px 40px rgba(0,0,0,0.3)',
            pointerEvents: 'none',
            zIndex: 4,
          }}
        />

        {/* Counter + text overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            zIndex: 5,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.15rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 900,
                fontSize: 'clamp(4rem, 12vw, 8rem)',
                lineHeight: 1,
                color: '#fff',
                letterSpacing: '-0.04em',
                textShadow: '0 4px 30px rgba(0,0,0,.5)',
                opacity: isVisible && count > 0
                  ? count <= 10 ? 1 : Math.max(0, 1 - (count - 10) / 7)
                  : 0,
                transition: 'opacity 0.4s ease',
              }}
            >
              {count}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-outfit)',
                fontWeight: 600,
                fontSize: 'clamp(0.9rem, 2.5vw, 1.3rem)',
                color: 'rgba(255,255,255,0.8)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                textShadow: '0 2px 10px rgba(0,0,0,.4)',
                opacity: isVisible && count > 0 ? 1 : 0,
                transition: 'opacity 0.4s ease',
              }}
            >
              Tapte anrop?
            </span>
          </div>

          <h2
            className="font-extrabold tracking-tight"
            style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: 'clamp(1.6rem, 4.5vw, 2.75rem)',
              lineHeight: 1.15,
              color: '#fff',
              textAlign: 'center',
              textShadow: '0 2px 20px rgba(0,0,0,.4)',
              marginTop: '0.75rem',
              opacity: counterDone ? 1 : 0,
              transform: counterDone ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s cubic-bezier(.4,0,.2,1) 300ms, transform 0.6s cubic-bezier(.4,0,.2,1) 300ms',
            }}
          >
            Ikke mist flere kunder.
          </h2>
        </div>
      </div>
    </section>
  );
}
