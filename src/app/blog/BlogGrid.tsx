"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import type { BlogPost } from '@/lib/blog';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [shuffled, setShuffled] = useState(posts);

  useEffect(() => {
    setShuffled(shuffle(posts));
  }, [posts]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr; }
        }
        .blog-card {
          transition: all 0.3s cubic-bezier(.4,0,.2,1);
          border: 1px solid #f1f5f9;
          overflow: hidden;
        }
        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px -5px rgba(236,72,153,.1), 0 20px 40px -10px rgba(0,0,0,.05);
          border-color: #fce7f3;
        }
      `}} />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 1.5rem 5rem',
      }}>
        <div className="blog-grid">
          {shuffled.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                background: '#fff',
                boxShadow: '0 1px 3px rgba(0,0,0,.02), 0 4px 12px rgba(0,0,0,.03)',
              }}
            >
              {/* Cover image */}
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                overflow: 'hidden',
                borderRadius: '20px 20px 0 0',
              }}>
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem 1.75rem 1.75rem' }}>
                <h2 style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  lineHeight: 1.3,
                  marginBottom: '0.5rem',
                }}>
                  {post.title}
                </h2>
                <p style={{
                  fontSize: '0.88rem',
                  color: '#64748b',
                  lineHeight: 1.55,
                }}>
                  {post.description}
                </p>
                <span style={{
                  display: 'inline-block',
                  marginTop: '0.75rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#db2777',
                }}>
                  Les mer &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
