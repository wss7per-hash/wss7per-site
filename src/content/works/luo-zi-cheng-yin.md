---
title: 落字成音
tagline: 在 AE 里输入文字，一键变成语音和字幕图层。
summary: 一个 AE 面板脚本。写完文案，选个音色，点一下 —— 音频图层和带样式的文字图层就自动出现在时间线上，不用再开剪辑软件配音。
category: AE 插件
accent: '#f472b6'
badge: v1.8
version: "1.8"
platforms:
  - Windows
  - AE 2025
date: 2026-07-15
featured: false
draft: false
stats:
  - value: 27+
    label: 中文音色
  - value: 4 种
    label: 语音引擎
  - value: "0"
    label: 需要安装的依赖
download:
  label: 下载脚本包（ZIP）
  url: https://github.com/wss7per-hash/luo-zi-cheng-yin/archive/refs/heads/main.zip
  note: v1.8 · 解压后放进 AE 的 ScriptUI Panels 目录
links:
  - label: 使用手册
    url: https://github.com/wss7per-hash/luo-zi-cheng-yin/blob/main/%E8%90%BD%E5%AD%97%E6%88%90%E9%9F%B3_%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C.html
  - label: GitHub 仓库
    url: https://github.com/wss7per-hash/luo-zi-cheng-yin
features:
  - 多引擎 TTS —— Edge TTS（免费免密钥）、腾讯云、火山引擎（剪映同款）、Windows 本地离线，面板内一键切换。
  - 27+ 中文音色 —— 普通话、方言、港澳台、英日韩，带「御姐」「搞笑」「方言」这类标签，选中即可试听。
  - 自动建图层 —— 生成音频图层（带波形）+ TEXT 文字图层，字体、字号、颜色、对齐都按你设的来。
  - 智能命名与归类 —— 输出名默认取文案前 12 字，音频自动落进工程的 audio 文件夹。
  - 零安装 —— 合成程序打包成 exe 内置在脚本包里，换电脑不用装 Python、不用 pip。
  - 自定义输出目录 —— 默认避开被 OneDrive 重定向的 Documents，可一键改到任意位置。
---

## 配音这一步，本来不该这么麻烦

做 AE 项目时，文案经常要先「念出来」才知道节奏对不对。

传统流程是：打开剪辑软件或在线 TTS 网站 → 输入文字 → 生成 → 下载 → 拖回 AE → 对齐 → 再建文字图层。一段 20 秒的旁白，来回能折腾十分钟。

落字成音把这一整条链路压进一个面板：**输入文字，点生成，图层自己出现**。

## 为什么内置了 27 个音色

配音最难的不是「有没有声音」，而是「这个声音对不对」。

所以音色列表不是一堆编号，而是带标签的：`晓晓【女声】【成熟】`、`云希【男声】【活泼】`。选中之后可以点「试听」，用当前音色把文字前 20 字念一遍，不合适马上换。

Edge TTS 是默认引擎，免费、不需要密钥，质量对草稿完全够用。要更正式的声音，可以在面板里填腾讯云或火山引擎的密钥 —— 火山那套就是剪映用的音色。

## 换电脑不用配环境

这是我最在意的一点。

Python 脚本类的 AE 工具，换一台机器就要装 Python、装依赖、配路径，很多人卡在这一步就放弃了。

所以合成程序被 PyInstaller 打包成了 `tts_helper.exe`，连同依赖一起塞进脚本包里。整个文件夹拷到目标机的 `ScriptUI Panels` 目录，打开 AE 就能用。

## 两个已知的坑

**面板不热重载**。改完 `.jsx` 要关掉面板（×）再从「窗口」重新打开，不然跑的还是旧逻辑。这是 ScriptUI 的机制，绕不过去。

**AE 只扫描根目录**。`落字成音.jsx` 必须放在 `ScriptUI Panels` 根目录下，放进子文件夹里就不会出现在「窗口」菜单中。

## 还没做的

音色克隆还在规划里 —— 上传一段参考音频，用那个声音念新文字。本地 F5-TTS 和云端 CosyVoice 两条路都想试，但目前没实现。
