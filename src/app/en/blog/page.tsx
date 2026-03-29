import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import NavbarEN from '@/components/NavbarEN/NavbarEN';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog: AI and automation for businesses | Bra Svar!',
  description: 'Articles about AI, automation and smarter operations for Norwegian small businesses. Tips, guides and insights to help you grow.',
};

export default function BlogPageEN() {
  const posts = getAllPosts();

  return (
    <main style={{ minHeight: '100vh', fontFamily: 'var(--font-outfit)', background: '#fff' }}>
      <NavbarEN />

      <div style={{
        paddingTop: 'clamp(6rem, 12vw, 9rem)',
        paddingBottom: '3rem',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 100%)',
        paddingLeft: '2rem',
        paddingRight: '2rem',
      }}>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '1rem' }}>
          Blog
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#64748b', maxWidth: '550px', margin: '0 auto', lineHeight: 1.6 }}>
          AI, automation and smarter operations for Norwegian businesses.
        </p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {posts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{
              textDecoration: 'none', display: 'flex', flexDirection: 'column',
              borderRadius: '20px', background: '#fff', border: '1px solid #f1f5f9',
              boxShadow: '0 1px 3px rgba(0,0,0,.02), 0 4px 12px rgba(0,0,0,.03)',
              overflow: 'hidden', transition: 'all 0.3s ease',
            }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden' }}>
                <Image src={post.cover} alt={post.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} priority={index < 4} />
              </div>
              <div style={{ padding: '1.5rem 1.75rem 1.75rem' }}>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.3, marginBottom: '0.5rem' }}>{post.title}</h2>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55 }}>{post.description}</p>
                <span style={{ display: 'inline-block', marginTop: '0.75rem', fontSize: '0.82rem', fontWeight: 600, color: '#db2777' }}>Read more &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
