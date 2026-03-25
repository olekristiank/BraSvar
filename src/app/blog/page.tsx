import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blogg | Bra Svar!',
  description: 'Artikler om KI, automatisering og smartere drift for norske småbedrifter.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{
      minHeight: '100vh',
      fontFamily: 'var(--font-outfit)',
      background: '#fff',
    }}>
      {/* Header */}
      <div style={{
        paddingTop: 'clamp(6rem, 12vw, 9rem)',
        paddingBottom: '3rem',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 100%)',
        padding: 'clamp(6rem, 12vw, 9rem) 2rem 3rem',
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.15rem', marginBottom: '2rem' }}>
          <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0f172a' }}>Bra</span>
          <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0f172a' }}>Svar<span style={{ color: '#ec4899' }}>!</span></span>
        </Link>
        <h1 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
          fontWeight: 800,
          color: '#0f172a',
          lineHeight: 1.15,
          marginBottom: '1rem',
        }}>
          Blogg
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          color: '#64748b',
          maxWidth: '550px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          Artikler om KI, automatisering og smartere drift for norske småbedrifter.
        </p>
      </div>

      {/* Posts grid */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 1.5rem 5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              textDecoration: 'none',
              display: 'block',
              padding: '1.75rem 2rem',
              borderRadius: '16px',
              border: '1px solid #f1f5f9',
              background: '#fff',
              transition: 'all 0.25s cubic-bezier(.4,0,.2,1)',
              boxShadow: '0 1px 3px rgba(0,0,0,.02)',
            }}
          >
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'baseline', marginBottom: '0.5rem' }}>
              <time style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500, whiteSpace: 'nowrap' }}>
                {new Date(post.date).toLocaleDateString('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
              <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>{post.readTime}</span>
            </div>
            <h2 style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: '#0f172a',
              lineHeight: 1.3,
              marginBottom: '0.4rem',
            }}>
              {post.title}
            </h2>
            <p style={{
              fontSize: '0.9rem',
              color: '#64748b',
              lineHeight: 1.5,
            }}>
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
