---
title: AE / PR 降级器
tagline: 不装 AE 和 PR，也能把工程降到旧版本。
summary: 把 .aep / .aepx / .ffx / .prproj 降到旧版本，纯浏览器本地完成。给还在用老版本 AE 的甲方发工程时，这是最省事的一条路。
category: AE 插件
cover: /uploads/downgrader/cover.png
accent: '#818cf8'
badge: 网页版
platforms:
  - 浏览器
date: 2026-09-10
featured: false
draft: false
stats:
  - value: "0"
    label: 需要安装的软件
  - value: 本地
    label: 文件处理位置
  - value: 4 种
    label: 支持的格式
download:
  label: 打开在线版
  url: https://wss7per-hash.github.io/ae-pr-downgrader/
  note: 纯前端 · 断网可用 · 文件不会上传
links:
  - label: 本地版单文件
    url: https://github.com/wss7per-hash/ae-pr-downgrader/blob/main/AEP-Downgrader.html
  - label: 命令行版
    url: https://github.com/wss7per-hash/ae-pr-downgrader/blob/main/aep_cli.py
  - label: GitHub 仓库
    url: https://github.com/wss7per-hash/ae-pr-downgrader
features:
  - 网页版零安装 —— 双击 HTML 或打开在线版，拖文件进去就能转换，不需要装 AE / PR / Python。
  - 自动识别 —— 按扩展名分派 AE 或 PR 路径，自动读出源版本，只列出比它低的目标版本。
  - 批量与目录 —— 支持多选文件、整个文件夹（含子目录），结果可打包成 ZIP 下载。
  - 工程体检 —— 不打开工程软件，启发式扫出第三方插件、字体、素材路径和表达式，提前发现协作风险。
  - 发包清单 —— 生成依赖清单 Markdown，或直接把工程 + 素材 + 清单组装成交付文件夹。
  - 两个版本同算法 —— 网页版和 Python 版共用一套逻辑，已验证逐字节输出一致。
---

## 甲方还在用 AE 2020

这是做外包最常见的一道坎：你这边是 AE 2025，对方的机器只能开 2020。

官方的办法是「用旧版本重新做一遍」，或者装一个旧版本 AE 专门用来另存。前者不现实，后者要占几十 G。

而工程文件里的版本信息，其实只是几个字节。

## 改的是哪几个字节

`.aep` 是 RIFX 容器，版本信息藏在两处：`svap` 块和 `head` 块，加上一个格式字节。降级就是把这些数字改小，**默认只改 5 个字节**，别的内容一个不动。

`.prproj` 更简单 —— 它是 gzip 压缩的 XML，版本就是 `<Project Version="N">` 里的那个数字。

因为改动极小，所以可以放心地「改完还能正常打开」。工具在转换前会做校验，网页版的「体检」面板能直接看到要改的是哪几个字节、哪一行 XML。

## 别把 AE 和 PR 混在一批

两者的版本号**互不通用**：AE 是 11.x–26.x 的 major 版本，PR 是 26–45 的工程格式号，同一个「2024」在两边的数字完全不同。

所以命令行里混放会各走各的路径，网页版检测到混合会直接禁用转换，提示你分开处理。

## 文件不出本机

网页版是纯前端实现，没有任何上传逻辑 —— 工程文件在你浏览器的内存里被改完，然后直接下载回来。断网也能用。

即便如此，涉及工程文件时我还是建议用本地版：少一次网络往返，也少一层心理负担。

## 降级只是第一步

真正发给协作方时，麻烦的往往不是版本，而是**对方没有你的插件、字体和素材**。

所以顺带做了两件事：`manifest` 生成一份依赖清单（Markdown 或 JSON），`package` 直接把工程 + 本机能找到的素材 + 清单组装成一个交付文件夹。
