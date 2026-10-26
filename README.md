# 个人作品站

用 Astro 搭的静态站，自带网页后台（`/admin`），用来展示和分发自己做的工具。

三类内容：**作品**（APP / 插件）、**收藏**（外链资源）、**文章**。

## 本地预览

```bash
npm install
npm run dev
```

打开 http://localhost:4321

> 需要 Node 22.23+ 或 24。本机已有 Node 24（`C:\Program Files\nodejs`）。

## 部署上线

全程免费，大约 15 分钟。

### 第 1 步：传到 GitHub

在 [github.com](https://github.com) 注册，新建一个空仓库（不要勾选 README），然后：

```bash
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

### 第 2 步：连接 Netlify

1. 打开 [netlify.com](https://www.netlify.com)，用 GitHub 账号登录
2. **Add new site → Import an existing project**，选 GitHub 和刚才的仓库
3. 构建配置会自动读取 `netlify.toml`，直接点 **Deploy**
4. 一分钟后得到 `随机名字.netlify.app`

### 第 3 步：打开网页后台

1. Netlify 站点页 → **Site configuration → Identity** → **Enable Identity**
2. 同一页 **Services → Git Gateway** → **Enable Git Gateway**
3. 回到 Identity，**Invite users** 填自己的邮箱
4. 邮箱里点邀请链接，设置密码（找不到就翻垃圾箱）
5. 访问 `你的网址/admin/` 登录

登录后能管理作品、收藏和文章，图片直接拖进去上传。

## 后台怎么用

### 添加一个作品

后台 → 作品 → New，填这些：

| 字段 | 说明 |
| --- | --- |
| 标题 / 网址标识 | 网址标识用英文，决定链接，例如 `autolod` |
| 一句话卖点 | 显示在封面下方，一行说清它是干嘛的 |
| 分类 | APP / UE5 插件 / AE 插件 / 其他，作品列表按这个筛选 |
| 封面图 | 横图，建议 1600×1000。不上传会自动用首字母渐变封面 |
| 演示视频 | 填 `.mp4` 直链，或 B 站 / YouTube 的嵌入地址 |
| 截图集 | 详情页底部的大图列表 |
| 下载 | 下载说明 + 地址 + 备注（如 `v2.1.0 · 18.4 MB · 免费`） |
| 功能列表 | 详情页的勾选清单 |
| 首页推荐 | 勾上会出现在首页 |

**下载地址**可以填网盘链接、GitHub Releases，或者把安装包直接放进 `public/downloads/`，地址写 `/downloads/文件名.zip`。

### 添加收藏

后台 → 收藏 → New，填标题、链接、简介即可。适合放常用的资源站、工具、参考文档。

## 改东西

| 想改什么 | 改哪里 |
| --- | --- |
| 名字、身份、首页大标题、简介、社交链接 | `src/site.config.ts` |
| 配色、字体、圆角 | `src/styles/global.css` 顶部的 `:root` |
| 导航菜单 | `src/layouts/Base.astro` |
| 作品卡片样式 | `src/styles/global.css` 里的 `.work-card` 相关 |

配色只有几个变量，改完整站跟着变：

```css
--bg: #08080b;      /* 背景 */
--ink: #f4f4f7;     /* 文字 */
--accent: #8b5cf6;  /* 强调色 1 */
--accent-2: #22d3ee;/* 强调色 2 */
```

## 图片和视频

- 图片统一放在 `public/uploads/`，后台会自动传到这里
- 单张建议压在 2MB 以内，太大会拖慢首屏
- 视频优先用外链（B 站 / YouTube），本地 mp4 只适合短片段
- 安装包放 `public/downloads/`，但超过 100MB 建议走网盘

## 以后换域名

买一个 `.com`（约 ¥70/年），然后在 Netlify 的 **Domain management** 里添加，按提示改 DNS。内容和后台都不用动。

顺便把 `astro.config.mjs` 里的 `site` 改成新域名。
