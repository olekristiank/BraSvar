import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `https://brasvar.no/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: 'https://brasvar.no',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://brasvar.no/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts,
    ...[
      'ai-sentralbord',
      'telefonsvarer-bedrift',
      'virtuell-resepsjonist',
      'hvordan-det-fungerer',
      'ofte-stilte-sporsmal',
    ].map(slug => ({
      url: `https://brasvar.no/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...[
      'frisor', 'klinikk', 'handverker', 'verksted', 'skjonnhet',
      'tannlege', 'legekontor', 'naprapat-osteopat', 'personlig-trener', 'optiker',
      'hudklinikk', 'velvaereklinikk', 'advokat', 'regnskapsforer', 'eiendomsmegler',
      'forsikring', 'konsulent', 'hundesalong', 'bilpleie', 'renhold',
      'fotterapeut', 'kiropraktor', 'veterinaer',
      'fysioterapeut', 'psykolog', 'elektriker', 'rorlegger', 'fotograf',
      'tatovor', 'maler', 'begravelsesbyraa', 'treningssenter', 'akupunktor',
      'entreprenor', 'arkitekt',
    ].map(slug => ({
      url: `https://brasvar.no/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];
}
