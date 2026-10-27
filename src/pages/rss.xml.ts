import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../site.config';

const esc = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ site }) => {
  const origin = site ?? new URL('https://wss7per.netlify.app');

  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  const items = posts
    .map((post) => {
      const url = new URL(`/blog/${post.id}/`, origin).href;
      return `    <item>
      <title>${esc(post.data.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <description>${esc(post.data.description)}</description>
    </item>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(SITE.title)}</title>
    <link>${origin.href}</link>
    <description>${esc(SITE.intro)}</description>
    <language>zh-CN</language>
${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
