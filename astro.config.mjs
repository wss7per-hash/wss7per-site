import { defineConfig } from 'astro/config';

// 部署后把 site 改成你的真实地址，例如：
//   https://yourname.pages.dev
//   https://yourname.com
export default defineConfig({
  site: 'https://example.com',
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
});
