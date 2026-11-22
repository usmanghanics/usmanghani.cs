import { SITE_URL, achievements, description, education, jobs, me, stack } from '@/data/site';
import { apps, bizcarePk, web } from '@/data/work';

export const dynamic = 'force-static';

/** A plain text summary for AI assistants and answer engines (llmstxt.org). */
export function GET() {
  const lines = [
    `# ${me.name}`,
    '',
    `> ${description}`,
    '',
    `- Role: ${me.role} at Veloq, ${me.location}`,
    `- Email: ${me.email}`,
    `- LinkedIn: ${me.links.linkedin}`,
    `- GitHub: ${me.links.github}`,
    '',
    '## Apps',
    ...apps.map((a) => `- [${a.name}](${SITE_URL}/work/${a.slug}): ${a.tagline} ${a.client}, built at ${a.builtAt}. ${a.stats.map((s) => `${s.value} ${s.label.toLowerCase()}`).join(', ')}.`),
    '',
    '## Web platforms',
    `- ${bizcarePk.name}: ${bizcarePk.text} ${bizcarePk.href}`,
    ...web.map((w) => `- ${w.name} (${w.org}): ${w.text} ${w.href}`),
    '',
    '## Experience',
    ...jobs.map((j) => `- ${j.role}, ${j.org} (${j.period}). ${j.points.join(' ')}`),
    '',
    '## Achievements',
    ...achievements.map((a) => `- ${a.rank}, ${a.event}: ${a.title}, ${a.org}, ${a.date}. ${a.text}`),
    '',
    '## Education',
    ...education.map((e) => `- ${e.degree}, ${e.school}, ${e.place} (${e.period})`),
    '',
    `## Tools\n${stack.map((s) => s.name).join(', ')}`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
