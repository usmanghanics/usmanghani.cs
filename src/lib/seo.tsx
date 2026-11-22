import { SITE_URL, description, me } from '@/data/site';

export const personId = `${SITE_URL}/#person`;
export const websiteId = `${SITE_URL}/#website`;

export const person = {
  '@type': 'Person',
  '@id': personId,
  name: me.name,
  alternateName: [me.handle, 'Usman Ghani CS'],
  url: `${SITE_URL}/`,
  image: `${SITE_URL}${me.photo}`,
  jobTitle: me.role,
  description,
  email: `mailto:${me.email}`,
  nationality: { '@type': 'Country', name: 'Pakistan' },
  homeLocation: { '@type': 'Country', name: 'Pakistan' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Namal University', url: 'https://namal.edu.pk/' },
  worksFor: [
    { '@type': 'Organization', name: 'Veloq', url: 'https://veloq.tech/' },
    { '@type': 'Organization', name: 'BizCare Software Solutions', url: 'https://bizcare.pk/' },
  ],
  knowsAbout: [
    'Android development',
    'iOS development',
    'Flutter',
    'Next.js',
    'React',
    'AI agents',
    'Retrieval-augmented generation',
    'FastAPI',
    'Supabase',
    'Search engine optimization',
  ],
  sameAs: [me.links.linkedin, me.links.github, me.links.githubOld, me.links.x, me.links.play],
};

export const website = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: `${SITE_URL}/`,
  name: 'Usman Ghani',
  description,
  inLanguage: 'en',
  publisher: { '@id': personId },
};

export const bluexOrg = {
  '@type': 'Organization',
  name: 'BlueX Software Solutions',
  url: me.links.bluex,
  founder: { '@id': personId },
  sameAs: [me.links.play],
};

export function crumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const graph = { '@context': 'https://schema.org', '@graph': Array.isArray(data) ? data : [data] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />;
}
