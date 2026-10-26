---
title: SoundVault
tagline: 本地 AI 音效库 —— 让每个音效都能被搜到。
summary: 把散落在硬盘各处的音效集中起来，用大模型给每个音效写出使用场景、形象描述和拟声词。从此按「金币叮当」「扫射哒哒哒」就能搜到它，而不是靠文件名。
category: APP
icon: /uploads/soundvault/icon.png
accent: '#34d399'
badge: v0.1.2
version: 0.1.2
platforms:
  - Windows
date: 2026-07-20
featured: false
draft: false
stats:
  - value: 95 MB
    label: 安装包
  - value: 本地
    label: 数据与密钥
  - value: 免费
    label: 使用
download:
  label: 下载 Windows 安装包
  url: https://github.com/wss7per-hash/SoundVault/releases/download/v1.1/SoundVault.0.1.2.exe
  note: v0.1.2 · 95 MB · Windows · 免费
links:
  - label: 使用手册
    url: https://github.com/wss7per-hash/SoundVault/blob/main/manual.html
  - label: GitHub 仓库
    url: https://github.com/wss7per-hash/SoundVault
features:
  - 音效库管理 —— 导入本地音频目录，自动扫描文件、读取时长，建立本地 SQLite 索引。
  - AI 语义分析 —— 大模型为每个音效写出形象描述、使用场景、关键词和拟声词，自动打 3–6 个标签。
  - 标签与智能文件夹 —— 左侧标签树点一下就过滤；智能文件夹按条件自动归集，不用手动整理。
  - 内置播放与波形 —— 悬停试听，波形可点击定位，支持进度拖动。
  - 本地 DSP —— 裁剪、WAV↔MP3 转换、变速不变调（0.25x–4x）、首尾无缝循环，全部离线完成。
  - AI 生成音效 —— 按文字提示词生成全新音效并自动入库，生成前会先确认费用。
  - 声波小精灵 —— 一个常驻桌面的透明小精灵，会跟着音效「呼吸」，可点击拖动。
---

## 音效库的麻烦，从来不是「找不到文件」

做片子的人都有一堆音效：买的包、下载的素材、自己录的。它们散在十几个文件夹里，文件名还常常是 `impact_04_final_v2.wav`。

于是你明知道硬盘里有那个「关门声」，却只能一个个点开听。

真正的问题是：**音效的检索维度不是文件名，而是感觉**。你想要的是「闷闷的、有点重的、像铁门关上」，而文件名只写着 `door_03`。

## 让 AI 把音效「翻译成人话」

导入之后，SoundVault 会调用大模型，给每个音效生成四样东西：

- **形象描述** —— 用日常语言和比喻说清它听起来像什么
- **使用场景** —— 游戏、视频、UI 里分别什么时候用得上
- **关联关键词** —— 方便后续检索
- **拟声词** —— 「金币 → 叮当」「扫射 → 哒哒哒」「水流 → 哗啦啦」

这四样东西存进本地数据库，就成了可以搜的字段。你输入「叮当」，它能把金币、钥匙、铃铛一起翻出来。

## 该有的功能都有，而且不用联网

除 AI 分析之外的部分完全不依赖网络：波形显示、裁剪截取、格式转换、变速不变调、首尾无缝循环，全部在本地用 DSP 完成。

播放器用的是自研波形 —— ffmpeg 抽峰值，SVG 渲染，通过私有 `sv://` 协议读本地文件，拖动进度条很跟手。

## 数据在你手里

音效文件会被**复制**进本地库目录，原文件不动。数据库是本地 SQLite，AI 的 API Key 只存在本机的用户目录里。

换机器或重装前，记得备份 `soundvault.db` 和 `library/` 目录。

## 一点说明

AI 分析需要你自己配置服务商 —— 内置 OpenAI、DeepSeek、Anthropic、Gemini、Ollama 等预设，也支持任何 OpenAI 兼容网关。填 Endpoint 和 Key 就能用，分析失败不会写入假数据，可以重试。

「AI 生成音效」走的是 Fal.ai / ElevenLabs，**按次计费**，所以每次生成前都会先确认。
