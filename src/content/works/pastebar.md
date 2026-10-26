---
title: PasteBar
tagline: 一个安静的剪贴板历史，随手就能翻到。
category: APP
cover: ''
video: ''
gallery: []
version: 0.9.1
platforms:
  - macOS
  - Windows
date: 2026-09-27
featured: true
draft: false
download:
  label: 桌面版安装包
  url: https://github.com/yourname/pastebar/releases
  note: v0.9.1 · 12.8 MB · 免费 · 无广告
links:
  - label: GitHub
    url: https://github.com/yourname/pastebar
features:
  - 保留最近 500 条复制记录
  - 全局快捷键唤起，不打断当前操作
  - 自动识别链接、代码、图片并分类
  - 数据只存在本地，不上传
---

复制、粘贴、再复制、再粘贴 —— 一天下来，剪贴板里塞满了找不回来的东西。

PasteBar 只是把历史记下来，需要的时候翻一下。

## 为什么做这个

用过几个剪贴板工具，要么塞了一堆用不上的功能，要么要登录账号、同步到云端。我只想要一个本地的、轻量的、不打扰人的东西。

所以自己写了一个。

## 关于隐私

所有数据保存在本地的一个 SQLite 文件里，没有任何联网行为。你可以自己查看、备份、删除。

密码管理器类的敏感内容会被自动跳过，不会记录。
