---
title: 这个网站是怎么搭的
date: 2026-10-20
description: 零成本、可后台编辑、域名随时能换——整套方案的说明。
---

这个网站跑在 **Astro** 上，托管是免费的，后台在 `/admin`。

## 三个部分

| 部分 | 用了什么 | 花钱吗 |
| --- | --- | --- |
| 建站框架 | Astro | 免费 |
| 托管 | Netlify / Cloudflare Pages | 免费 |
| 网页后台 | Decap CMS | 免费 |

域名是唯一可能需要花钱的地方。前期用平台送的子域名就够，等内容稳定了再买个 `.com` 换上去，其他什么都不用动。

## 内容存在哪

每篇文章就是 `src/content/posts/` 下的一个 `.md` 文件：

```md
---
title: 标题
date: 2026-10-20
description: 一句话摘要
---

正文写在这里，支持 Markdown。
```

通过 `/admin` 后台写文章，本质上就是在网页上编辑这些文件——你不需要碰任何代码。

## 想改样式

打开 `src/styles/global.css`，最上面那段是配色：

```css
:root {
  --bg: #fbfaf7;
  --ink: #17150f;
  --accent: #b45309;
}
```

改这三个值，整站的观感就变了。
