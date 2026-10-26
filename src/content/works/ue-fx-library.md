---
title: UE 特效库
tagline: 把散在多个项目里的特效，收进一个能搜的库。
summary: 一个不用打开 Unreal 编辑器就能用的特效资产管理器 —— 扫描项目里的 Niagara / Cascade 特效，生成缩略图、打标签、体检、打包迁移。
category: UE5 插件
icon: /uploads/fxlib/logo.png
accent: '#60a5fa'
badge: v1.0
version: "1.0"
platforms:
  - Windows
date: 2026-09-10
featured: false
draft: false
stats:
  - value: 2.8 MB
    label: 安装包
  - value: 离线
    label: 浏览与检索
  - value: UE 5.3+
    label: 渲染缩略图时需要
download:
  label: 下载 Windows 版
  url: https://github.com/wss7per-hash/unreal-engine-fx-library/releases/download/v1/FXLibraryClient_v1.0.exe
  note: v1.0 · 2.8 MB · Windows 10/11 · 免费
links:
  - label: 使用手册
    url: https://github.com/wss7per-hash/unreal-engine-fx-library/blob/main/FXLibraryClient_%E8%BD%AF%E4%BB%B6%E4%BB%8B%E7%BB%8D%E4%B8%8E%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C.html
  - label: 设计文档
    url: https://github.com/wss7per-hash/unreal-engine-fx-library/blob/main/UE5%E7%89%B9%E6%95%88%E5%BA%93%E7%AE%A1%E7%90%86%E8%BD%AF%E4%BB%B6_%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A3.md
  - label: GitHub 仓库
    url: https://github.com/wss7per-hash/unreal-engine-fx-library
features:
  - 扫描索引 —— 递归扫描项目，列出全部 Niagara / Cascade 特效，建立本地 SQLite 索引。
  - 三档缩略图 —— 先读 `.uasset` 内嵌图，没有就用占位图，仍不行可手动指定；需要真实渲染时才调引擎。
  - 搜索与筛选 —— 按名称搜索，按类型、来源、评分、标签过滤，多条件排序。
  - 标签·收藏·评分·备注 —— 资产元数据全部本地持久化，不动原项目。
  - 打包迁移 —— 连同递归依赖导出成自包含 `.fxpack`，导入时按原路径还原，内部引用不失效。
  - 资产体检 —— 扫出缺失依赖、重复资产和孤立资产，给一份健康报告。
  - 回收站与安全围栏 —— 软删除可还原；引用模式下永远不会碰到原项目文件。
---

## 特效资产的老问题

做 UE 项目久了，特效会散在各个项目里。这个项目有一套爆炸，那个项目有一套烟雾，想做新场景时只能凭记忆去翻。

Unreal 自己的内容浏览器只在**当前项目**里有效，跨项目的资产复用基本靠手动 Migrate —— 一个个点，还容易漏依赖。

这个工具把「跨项目」这件事抽出来单独做：所有项目都指向同一个库，库里有缩略图、标签和评分。

## 关键是：不开引擎也能用

扫描、缩略图、标签、检索、导入导出 —— 这些日常操作**完全不需要启动 UE**。

缩略图走三档降级：先直接读 `.uasset` 里内嵌的缩略图（纯 Python 解析二进制），读不到就用 Pillow 生成一张带名字的占位图，再不行可以手动指定一张。只有你确实想要「真实渲染的画面」时，它才会无头启动一次 `UnrealEditor.exe`，跑完脚本就退出。

这样做的代价是要配一次引擎路径，收益是每天打开它都不用等引擎加载。

## 迁移时最容易踩的坑

直接把 `.uasset` 拷到别的项目，贴图和材质引用会断。所以导出格式做成了 `.fxpack`：本质是一个 zip，里面是 100% 标准的 `.uasset` 加上一份 manifest，**递归依赖全部打进去**。

导入时按原 package 路径放回，引擎看到的还是原生资产，没有引入任何新格式。

## 关于「安全」

删除是软删除，进回收站还能还原。

更重要的是那条路径围栏：在引用模式下，程序永远不会对原项目目录做写操作。清理只作用于库里的副本。
