import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import { getPost, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Bra Svar!`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://brasvar.no/blog/${post.slug}`,
    },
  };
}

function renderMarkdown(md: string) {
  const lines = md.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line === '---') {
      elements.push(<hr key={i} style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '2.5rem 0' }} />);
      i++;
      continue;
    }

    if (line.startsWith('### ')) {
      elements.push(<h3 key={i} style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginTop: '2rem', marginBottom: '0.75rem' }}>{renderInline(line.slice(4))}</h3>);
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginTop: '2.5rem', marginBottom: '0.75rem', fontFamily: 'var(--font-outfit)' }}>{renderInline(line.slice(3))}</h2>);
      i++;
      continue;
    }

    if (line.startsWith('| ')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      elements.push(renderTable(tableLines, elements.length));
      continue;
    }

    if (line.startsWith('- ') || line.startsWith('* ')) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${elements.length}`} style={{ paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {items.map((item, j) => <li key={j} style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.7 }}>{renderInline(item)}</li>)}
        </ul>
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ''));
        i++;
      }
      elements.push(
        <ol key={`ol-${elements.length}`} style={{ paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {items.map((item, j) => <li key={j} style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.7 }}>{renderInline(item)}</li>)}
        </ol>
      );
      continue;
    }

    if (line.trim() === '') {
      i++;
      continue;
    }

    elements.push(<p key={i} style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.8, margin: '0.75rem 0' }}>{renderInline(line)}</p>);
    i++;
  }

  return elements;
}

function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\))/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      parts.push(<strong key={match.index} style={{ fontWeight: 700, color: '#0f172a' }}>{match[2]}</strong>);
    } else if (match[3]) {
      parts.push(<em key={match.index}>{match[3]}</em>);
    } else if (match[4] && match[5]) {
      parts.push(<Link key={match.index} href={match[5]} style={{ color: '#db2777', textDecoration: 'underline', textDecorationColor: 'rgba(219,39,119,0.3)', textUnderlineOffset: '2px' }}>{match[4]}</Link>);
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

function renderTable(lines: string[], key: number) {
  const rows = lines.filter(l => !l.match(/^\|[\s-:|]+\|$/));
  const header = rows[0]?.split('|').filter(c => c.trim()).map(c => c.trim());
  const body = rows.slice(1).map(r => r.split('|').filter(c => c.trim()).map(c => c.trim()));

  return (
    <div key={key} style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
        {header && (
          <thead>
            <tr>
              {header.map((h, i) => <th key={i} style={{ textAlign: 'left', padding: '0.6rem 1rem', borderBottom: '2px solid #e2e8f0', fontWeight: 700, color: '#0f172a' }}>{h}</th>)}
            </tr>
          </thead>
        )}
        <tbody>
          {body.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => <td key={j} style={{ padding: '0.6rem 1rem', borderBottom: '1px solid #f1f5f9', color: '#475569' }}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Bra Svar', url: 'https://brasvar.no' },
    publisher: { '@type': 'Organization', name: 'Bra Svar', url: 'https://brasvar.no' },
    mainEntityOfPage: `https://brasvar.no/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{
        minHeight: '100vh',
        fontFamily: 'var(--font-outfit)',
        background: '#fff',
      }}>
        <Navbar />

        {/* Article */}
        <article style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: 'clamp(6rem, 12vw, 8rem) 1.5rem 4rem',
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
              <time style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 500 }}>
                {new Date(post.date).toLocaleDateString('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
              <span style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>{post.readTime}</span>
            </div>
            <h1 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}>
              {post.title}
            </h1>
          </div>

          <div>
            {renderMarkdown(post.content)}
          </div>

          {/* Footer nav */}
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link href="/blog" style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#db2777',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}>
              &larr; Alle artikler
            </Link>
            <Link href="/" style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#fff',
              background: 'linear-gradient(135deg, #ec4899, #db2777)',
              padding: '0.6rem 1.5rem',
              borderRadius: '10px',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(236,72,153,0.25)',
            }}>
              Prøv Bra Svar
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
