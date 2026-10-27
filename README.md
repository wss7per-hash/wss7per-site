# 个人作品站

用 Astro 搭的静态站，自带网页后台（`/admin`），用来展示和分发自己做的工具。

三类内容：**作品**（APP / 插件）、**收藏**（外链资源）、**文章**。

目前站里有五个真实作品：囤囤鼠 Stash、SoundVault、UE 特效库、AE / PR 降级器、落字成音。

## 本地预览

```bash
npm install
npm run dev
```

打开 http://localhost:4321

> 需要 Node 22.23+ 或 24。本机已有 Node 24（`C:\Program Files\nodejs`）。

---

## 后台在哪？为什么现在打不开？

地址是 **`你的网址/admin/`**，页脚右下角也有「管理后台」入口。

**它现在打不开，不是因为没做，而是因为「谁能登录」这件事由托管平台负责。** 本地跑的时候没有登录服务，所以只会看到登录框，登录会失败。

上线并开启 Netlify Identity + Git Gateway 之后（见「部署上线」第 3 步），它就能正常工作：

- 登录后可以新建 / 编辑作品、收藏、文章
- 图片直接拖进编辑器上传
- 点 Publish 后自动提交到 GitHub，触发重新构建，一两分钟后线上更新

**在那之前，新增作品用下面「方式二」。**

---

## 新增作品

### 方式一：用后台（上线后）

访问 `你的网址/admin/` → 作品 → New，按表单填。

### 方式二：复制模板（现在就能用）

1. 打开 `templates/work-template.md`
2. 整个复制一份，改名为作品的英文名，例如 `my-tool.md`
3. 放进 `src/content/works/` 目录
4. 按文件里的注释填内容（每一行都有说明）
5. 跑一次 `npm run dev` 看效果，或者直接推送到 GitHub 等自动部署

文件名会成为网址：`my-tool.md` → `/works/my-tool/`

**两个容易踩的坑：**

- 纯数字的版本号必须加引号：`version: "1.0"`，不然 YAML 会当成小数，构建会报错
- `featured: true` 只设一个 —— 它会占据首页最大那块推荐位

### 字段速查

| 字段 | 说明 |
| --- | --- |
| 标题 / 网址标识 | 网址标识用英文，决定链接 |
| 一句话卖点 | 显示在卡片和标题下方 |
| 详细介绍 | 两三句话，详情页标题下方 + 搜索引擎摘要 |
| 分类 | APP / UE5 插件 / AE 插件 / 其他，作品列表按这个筛选 |
| 角标 | 封面左上角，例如 `公开内测` |
| 封面图 | 横图，建议 1600×1000 |
| 应用图标 | 手机 App 用，显示在标题左侧 |
| 竖屏截图 | 手机 App 用，最多三张，会自动成为卡片封面 |
| 强调色 | 可选，例如 `#a78bfa`，决定详情页光晕颜色 |
| 关键数字 | 三组「数字 + 说明」，显示在详情页截图下方 |
| 功能列表 | 格式 `名称 —— 说明`，详情页渲染成卡片网格 |
| 首页推荐要点 | 两三条短句，显示在首页主推位 |
| 演示视频 | `.mp4` 直链，或 B 站 / YouTube 嵌入地址 |

**手机 App 的推荐填法**：封面图留空，填应用图标 + 竖屏截图。卡片会自动变成三张截图并排的样子，比一张横图更像应用商店。

**下载地址**可以填网盘链接、GitHub Releases，或者把安装包直接放进 `public/downloads/`，地址写 `/downloads/文件名.zip`。

---

## 部署上线

全程免费。代码已经在 GitHub 上了：<https://github.com/wss7per-hash/wss7per-site>

### 第 1 步：连接 Netlify

直接点这个链接，会带着仓库跳到 Netlify 的导入页：

<https://app.netlify.com/start/deploy?repository=https://github.com/wss7per-hash/wss7per-site>

1. 用 **GitHub 账号**登录（不是邮箱注册）
2. 授权 Netlify 读取仓库
3. 构建配置会自动读 `netlify.toml`，不要改，直接 **Deploy**
4. 一分钟后得到 `随机名字.netlify.app`

### 第 2 步：改成好记的地址

**Site configuration → Change site name**，填 `wss7per`，网址就变成
`https://wss7per.netlify.app`。

（如果这个名字被占用，换一个，然后告诉我，我改 `astro.config.mjs` 里的 `site`。）

### 第 3 步：打开网页后台

1. **Site configuration → Identity** → **Enable Identity**
2. 同一页 **Services → Git Gateway** → **Enable Git Gateway**
3. 回到 Identity，**Invite users** 填自己的邮箱
4. 邮箱里点邀请链接，设置密码（找不到就翻垃圾箱）
5. 访问 `你的网址/admin/` 登录

做完这步，后台就真正可用了 —— 以后加作品、改文案都不用碰代码。

---

## 改东西

| 想改什么 | 改哪里 |
| --- | --- |
| 名字、身份、首页大标题、简介、社交链接 | `src/site.config.ts` |
| 配色、字体、间距 | `src/styles/global.css` 顶部的 `:root` |
| 导航菜单 | `src/layouts/Base.astro` |
| 首页作品长条 | `src/components/WorkRow.astro` |
| 作品详情页结构 | `src/pages/works/[...slug].astro` |
| 正文排版 | `src/styles/global.css` 里的 `.prose` 相关 |

配色只有五个变量，改完整站跟着变：

```css
--paper: #ffffff;  /* 底色 */
--ink:   #0a0a0a;  /* 标题与正文 */
--ink-2: #5c5c5c;  /* 次要文字 */
--line:  #dcdcdc;  /* 分隔细线 */
--red:   #e23d28;  /* 唯一强调色 */
```

这一版刻意不用圆角、不用阴影、不用渐变 —— 层次全靠字号对比和 1px 细线。
所以换色最有效：把 `--red` 换成别的颜色，整站气质立刻变。

## 图片和视频

- 图片统一放在 `public/uploads/`，后台会自动传到这里
- 单张建议压在 2MB 以内，太大会拖慢首屏
- 视频优先用外链（B 站 / YouTube），本地 mp4 只适合短片段
- 安装包放 `public/downloads/`，但超过 100MB 建议走网盘

## 以后换域名

买一个 `.com`（约 ¥70/年），然后在 Netlify 的 **Domain management** 里添加，按提示改 DNS。内容和后台都不用动。

顺便把 `astro.config.mjs` 里的 `site` 改成新域名。
