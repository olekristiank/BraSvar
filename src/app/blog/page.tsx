import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import { getAllPosts } from '@/lib/blog';
import BlogGrid from './BlogGrid';

export const metadata: Metadata = {
  title: 'Blogg om KI for småbedrifter | Bra Svar!',
  description: 'Praktiske artikler om KI-telefonassistenter, automatisering, GDPR og smartere drift for norske småbedrifter. Lær hvordan KI kan spare tid og øke omsetningen.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{
      minHeight: '100vh',
      fontFamily: 'var(--font-outfit)',
      background: '#fff',
    }}>
      <Navbar />

      {/* Header */}
      <div style={{
        paddingTop: 'clamp(6rem, 12vw, 9rem)',
        paddingBottom: '3rem',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #fdf2f8 0%, #fff 100%)',
        paddingLeft: '2rem',
        paddingRight: '2rem',
      }}>
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
          KI, automatisering og smartere drift for norske bedrifter.
        </p>
      </div>

      <BlogGrid posts={posts} />
    </main>
  );
}
