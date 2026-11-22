import { SITE_URL, description, education, jobs, me, skills } from '@/data/site';
import { bluexApps, labs, sites, work } from '@/data/work';

export const dynamic = 'force-static';

/** A plain text summary for AI assistants and answer engines (llmstxt.org). */
export function GET() {
  const lines = [
    `# ${me.name}`,
    '',
    `> ${description}`,
    '',
    `- Role: ${me.role}, ${me.location}`,
    `- Email: ${me.email}`,
    `- LinkedIn: ${me.links.linkedin}`,
    `- GitHub: ${me.links.github}`,
    `- Apps on Google Play: ${me.links.play}`,
    '',
    '## Experience',
    ...jobs.map((j) => `- ${j.role}, ${j.org} (${j.period}): ${j.text}`),
    '',
    '## Selected work',
    ...work.map((w) => `- [${w.name}](${SITE_URL}/work/${w.slug}) with ${w.org}: ${w.title} ${w.facts.map((f) => `${f.value} ${f.label.toLowerCase()}`).join(', ')}.`),
    '',
    '## Apps published as BlueX Software Solutions',
    ...bluexApps.map((a) => `- ${a.name}: ${a.text} ${a.play}`),
    '',
    '## Websites',
    ...sites.map((s) => `- ${s.name}: ${s.text} ${s.href}`),
    '',
    '## University and earlier projects',
    ...labs.map((l) => `- ${l.name}: ${l.text} (${l.stack})`),
    '',
    '## Education',
    ...education.map((e) => `- ${e.what}, ${e.school} (${e.period})`),
    '',
    '## Skills',
    ...skills.map((s) => `- ${s.group}: ${s.items.join(', ')}`),
    '',
    '## Pages',
    `- [Home](${SITE_URL}/)`,
    `- [Work](${SITE_URL}/work)`,
    `- [About](${SITE_URL}/about)`,
    `- [Certificates](${SITE_URL}/certifications)`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
