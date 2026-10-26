# 个人网站

用 Astro 搭的静态站，自带网页后台（`/admin`），可以托管在任何免费平台上。

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

先在 [github.com](https://github.com) 注册账号，然后新建一个空仓库（不要勾选 README），名字随意，比如 `my-site`。

在这个文件夹里执行：

```bash
git init
git add .
git commit -m "初始化个人网站"
git branch -M main
git remote add origin https://github.com/你的用户名/my-site.git
git push -u origin main
```

### 第 2 步：连接 Netlify

1. 打开 [netlify.com](https://www.netlify.com)，用 GitHub 账号登录
2. 点 **Add new site → Import an existing project**
3. 选择 GitHub，授权后选中刚才的仓库
4. 构建设置会自动读取 `netlify.toml`，直接点 **Deploy**
5. 等 1 分钟左右，你会得到一个 `随机名字.netlify.app` 的网址

这个网址现在就能访问了，而且每次 `git push` 都会自动重新部署。

### 第 3 步：打开网页后台

后台需要先开启登录功能：

1. 在 Netlify 站点页进入 **Site configuration → Identity**
2. 点 **Enable Identity**
3. 在同一页找到 **Services → Git Gateway**，点 **Enable Git Gateway**
4. 回到 Identity 页面，点 **Invite users**，填你自己的邮箱
5. 去邮箱点邀请链接，设置一个密码

然后访问 `你的网址/admin/`，用刚才的邮箱密码登录，就能看到文章编辑界面了。

> 邀请邮件可能进垃圾箱，找不到就去垃圾邮件里翻一下。

### 后台能做什么

- 新建 / 编辑 / 删除文章
- 上传图片（自动存到 `public/uploads/`）
- 写 Markdown，实时预览

保存后会自动提交到 GitHub，Netlify 自动重新构建，一两分钟后网站上就更新了。

## 日常修改

| 想改什么 | 改哪里 |
| --- | --- |
| 名字、简介、关于页、社交链接 | `src/site.config.ts` |
| 配色、字体、间距 | `src/styles/global.css` 顶部的 `:root` |
| 写文章 | `/admin` 后台，或直接新建 `src/content/posts/*.md` |
| 导航菜单 | `src/layouts/Base.astro` |

`src/site.config.ts` 是整站的开关，改完名字所有页面的标题、页脚、关于页会一起变。

## 以后换域名

等网站跑顺了，可以去买一个 `.com`（约 ¥70/年，Namecheap、Cloudflare Registrar 都可以），然后：

1. Netlify 站点 → **Domain management → Add a domain**
2. 按提示把域名的 DNS 指过去（Netlify 会给你现成的记录）
3. 顺便把 `astro.config.mjs` 里的 `site` 改成新域名

内容和后台都不用动，换域名是无痛的。

## 说明

- 站点是纯静态的，没有数据库，加载快、不容易挂、也没有流量费用
- 图片直接放进 `public/uploads/`，单张建议控制在 2MB 以内
- 如果以后想换 Cloudflare Pages 托管，站点本身不用改，但后台需要额外配置 OAuth
