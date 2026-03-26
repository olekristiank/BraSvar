"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { getAllPosts, type BlogPost } from '@/lib/blog';

function shufflePick(arr: BlogPost[], count: number): BlogPost[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export default function BlogPreview() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setPosts(shufflePick(getAllPosts(), 3));
  }, []);

  return (
    <section
      className="w-full px-6 sm:px-8 lg:px-12 flex flex-col items-center relative z-20"
      style={{
        paddingTop: '4rem',
        paddingBottom: '4rem',
        background: '#fff',
      }}
    >
      <div className="w-full flex flex-col items-center" style={{ maxWidth: '1100px' }}>

        <AnimateIn delay={0}>
          <div className="text-center px-4" style={{ marginBottom: '2rem' }}>
            <h2
              className="font-extrabold tracking-tight"
              style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: 1.15,
                marginBottom: '1rem',
                color: '#0f172a',
              }}
            >
              Fra <span style={{ color: '#ec4899' }}>bloggen</span>
            </h2>
            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: '#64748b',
              lineHeight: 1.6,
              fontWeight: 450,
            }}>
              Innsikt om KI, automatisering og smartere drift.
            </p>
          </div>
        </AnimateIn>

        <div
          className="w-full"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {posts.map((post, i) => (
            <AnimateIn key={post.slug} delay={80 + i * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="group relative"
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2rem 2rem',
                  borderRadius: '24px',
                  border: '1px solid #f1f5f9',
                  borderTop: '2px solid transparent',
                  background: '#fff',
                  height: '100%',
                  transition: 'all 0.4s cubic-bezier(.4,0,.2,1)',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,.01), 0 20px 40px -10px rgba(0,0,0,.03)',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(236,72,153,.15), 0 25px 50px -12px rgba(236,72,153,.1)';
                  e.currentTarget.style.borderColor = '#fbcfe8';
                  e.currentTarget.style.borderTopColor = '#ec4899';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,.01), 0 20px 40px -10px rgba(0,0,0,.03)';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                  e.currentTarget.style.borderTopColor = 'transparent';
                }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-100 to-rose-50 rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" style={{ transform: 'translate(20%, -20%)' }} />
                <h3 className="relative z-10" style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  color: '#0f172a',
                  lineHeight: 1.3,
                  marginBottom: '0.75rem',
                }}>
                  {post.title}
                </h3>
                <p className="relative z-10" style={{
                  fontSize: '0.9rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  fontWeight: 450,
                  flex: 1,
                }}>
                  {post.description}
                </p>
                <span style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#db2777',
                  marginTop: '0.75rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}>
                  Les mer &rarr;
                </span>
              </Link>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={400}>
          <div className="text-center" style={{ marginTop: '1.5rem' }}>
            <Link href="/blog" style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#64748b',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}>
              Se alle artikler &rarr;
            </Link>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}

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
