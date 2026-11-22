// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver and others) that
// the site's pages changed. Run after a deploy: node tools/indexnow.mjs
import { readdirSync } from 'node:fs';

const site = process.env.SITE ?? 'https://usmanghani.vercel.app';
const key = readdirSync(new URL('../public/', import.meta.url)).find((f) => /^[0-9a-f]{32}\.txt$/.test(f))?.replace('.txt', '');
if (!key) throw new Error('No IndexNow key file in public/');
const xml = await (await fetch(`${site}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(site).host, key, keyLocation: `${site}/${key}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} for ${urlList.length} pages`);
