# 橙竟是翻译（Orange Translator）

[![Microsoft Edge Add-ons](https://img.shields.io/badge/Microsoft%20Edge-获取扩展-0078D7?logo=microsoftedge&logoColor=white)](https://microsoftedge.microsoft.com/addons/detail/ekodakiiajjeaklellnlnahnhfaeabjn)

一款 Chrome/Edge Manifest V3 翻译扩展，提供划词翻译、文本翻译、双语网页翻译和内置 PDF.js 阅读器。

## 功能

- 选中文字后，在选区附近显示橙子图标，悬停即可翻译。
- 保留原文的双语网页翻译，支持滚动懒加载、动态 DOM、iframe 和一键退出。
- 可选双指、三指或四指轻触，在触屏设备上快速切换沉浸式翻译；该功能默认关闭。
- 内置多种译文样式及实时双语预览。
- 内置 PDF.js 阅读器，保留 PDF 原始排版并支持在 Text Layer 中划词翻译。
- 默认使用无需 Key 的 Microsoft 翻译，失败时可回退到 Google 翻译。
- 支持 OpenAI 兼容接口、Azure Translator 和 Google Cloud Translation。
- 支持简体中文、英文及跟随浏览器语言。
- 翻译缓存只保存在本地；API Key 只保存在 `chrome.storage.local`。

## 本地安装

1. 打开 `chrome://extensions` 或 `edge://extensions`。
2. 开启“开发者模式”。
3. 点击“加载已解压的扩展”。
4. 选择本仓库的 `src/` 目录。

修改扩展文件后，需要在扩展管理页重新加载扩展，并刷新已打开的网页。

## 使用

### 划词翻译

在网页或内置 PDF 阅读器中选中文字。橙子图标出现后，将鼠标悬停在图标上即可打开翻译浮窗。

### 网页双语翻译

点击扩展弹窗中的“沉浸式翻译”，或使用页面右键菜单中的“翻译当前页面”。扩展只处理当前视口及下方一屏，并在滚动停止后继续处理新内容。

### PDF

在 PDF 页面打开扩展弹窗并点击“手动翻译 PDF”，当前 URL 会传给内置 PDF.js 阅读器。也可以打开空白阅读器后选择或拖入本地 PDF。扩展不会接管、重定向或修改浏览器默认 PDF 查看器。

### 翻译服务

设置页可选择：

- Microsoft 翻译（无需 Key）
- Google 翻译（无需 Key）
- OpenAI 兼容接口
- Azure Translator
- Google Cloud Translation

自行填写的密钥不会自动保存，只有点击对应的“保存 Key”按钮后才写入本地存储。

## 构建发布包

在 Windows PowerShell 中运行：

```powershell
.\build\build-extension.ps1
```

或者：

```powershell
npm --prefix tools run build
```

脚本读取 `src/manifest.json` 的版本号，并生成：

```text
build/orange-translator-<version>.zip
```

ZIP 文件不会进入 Git，`build/build-extension.ps1` 会进入版本控制。

## 测试

安装 `tools/` 下的依赖后运行：

```powershell
npm --prefix tools run test:browser
```

浏览器测试会访问外部翻译服务；免费模型可能因服务商限流返回 `429`。

## 隐私说明

- 不收集浏览历史。
- 只有用户主动要求翻译的文本会发送给所选翻译服务。
- API Key 和翻译缓存保存在扩展本地存储中。
- 可以在设置页清除翻译缓存。
- 各翻译服务如何处理请求内容，受对应服务商的隐私政策约束。

完整政策见 [`PRIVACY.md`](PRIVACY.md)。

## 第三方软件与数据

项目包含 PDF.js、Adobe CMaps，以及来源于参考扩展的兼容数据。详情和适用许可见 [`THIRD-PARTY-NOTICES.md`](THIRD-PARTY-NOTICES.md)。

## 许可证

本项目原创代码使用 [MIT License](LICENSE)。第三方组件和数据不因本项目采用 MIT 而改变其原有许可或版权状态。
