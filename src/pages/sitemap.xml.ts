import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const esc = (s: string) => s.replace(/&/g, '&amp;');

export const GET: APIRoute = async ({ site }) => {
  const origin = site ?? new URL('https://wss7per.netlify.app');

  const works = await getCollection('works', ({ data }) => !data.draft);
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  const urls: { loc: string; lastmod?: string; priority: string }[] = [
    { loc: '/', priority: '1.0' },
    { loc: '/works/', priority: '0.9' },
    ...works.map((w) => ({
      loc: `/works/${w.id}/`,
      lastmod: w.data.date.toISOString(),
      priority: '0.8',
    })),
    { loc: '/collection/', priority: '0.5' },
    { loc: '/blog/', priority: '0.7' },
    ...posts.map((p) => ({
      loc: `/blog/${p.id}/`,
      lastmod: p.data.date.toISOString(),
      priority: '0.6',
    })),
    { loc: '/about/', priority: '0.6' },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${esc(new URL(u.loc, origin).href)}</loc>${
      u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''
    }
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
