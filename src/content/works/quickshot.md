---
title: QuickShot
tagline: 截图自动按规则命名、归位，写文档时省一半时间。
category: APP
cover: ''
video: ''
gallery: []
version: 1.0.3
platforms:
  - macOS
date: 2026-08-14
featured: false
draft: false
download:
  label: macOS 安装包
  url: https://github.com/yourname/quickshot/releases
  note: v1.0.3 · 6.2 MB · 免费
links:
  - label: GitHub
    url: https://github.com/yourname/quickshot
features:
  - 按日期、项目、序号自动命名
  - 截图直接存进指定文件夹
  - 支持自定义命名模板
  - 截图后自动复制 Markdown 图片语法
---

写教程的时候，截图是最耗时的部分之一：截完要重命名、挪位置、再回去改文档里的路径。

QuickShot 把这套流程串成一步。

## 命名模板

支持简单的占位符，比如：

```
{project}/{date}-{seq}
```

截一张图，自动存成 `文档项目/2026-08-14-03.png`，同时把 `![](path)` 塞进剪贴板。

## 只支持 macOS

Windows 版的系统 API 差异比较大，暂时没做。如果需求多的话会补上。
