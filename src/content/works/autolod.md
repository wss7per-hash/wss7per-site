---
title: AutoLOD
tagline: 一键生成 LOD 链，不用再手动减面。
category: UE5 插件
cover: ''
video: ''
gallery: []
version: 2.1.0
platforms:
  - Windows
  - macOS
date: 2026-10-18
featured: true
draft: false
download:
  label: Windows 安装包
  url: https://github.com/yourname/autolod/releases
  note: v2.1.0 · 18.4 MB · 免费
links:
  - label: 使用文档
    url: https://github.com/yourname/autolod#readme
  - label: GitHub
    url: https://github.com/yourname/autolod
features:
  - 自动识别静态网格，生成 4 级 LOD 链
  - 支持整个文件夹批量处理
  - 保留材质槽和 UV，不破坏原资产
  - 生成结果可一键回滚
---

做场景的时候最烦的就是给每个模型手动减面。一个中等规模的关卡，光 LOD 就能耗掉半天。

AutoLOD 把这件事压到一次点击。

## 它是怎么工作的

选中网格或者整个文件夹，插件会先分析面数分布，再按比例生成四级 LOD。默认参数对大多数场景都够用，想细调也可以展开高级面板。

减面用的是引擎自带的简化器，但加了一层保护：材质槽和 UV 会被完整保留，不会出现减面后贴图错位的情况。

## 一点说明

批量处理会直接修改源资产，第一次用建议先备份，或者勾上「生成副本」选项。

生成的 LOD 会以 `_LOD0`、`_LOD1` 这样的后缀命名，方便在内容浏览器里筛选。
