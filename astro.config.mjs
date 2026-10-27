import { defineConfig } from 'astro/config';

// 部署地址。换域名后改这一行即可（影响 RSS / sitemap / og:url 等绝对链接）。
// 例如 https://wss7per.netlify.app 或 https://your-domain.com
export default defineConfig({
  site: 'https://wss7per.netlify.app',
  // 鼠标悬停链接时预取目标页面，点击时几乎瞬开
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
