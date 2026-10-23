# 浏览器自动化测试

使用 Playwright 启动无头 Chromium，加载 `src/` 扩展，并真实调用 OpenRouter 免费模型，覆盖设置页、划词翻译和多段落沉浸式翻译。

```powershell
$env:OPENROUTER_API_KEY = '<本机 Key>'
node tools/browser-tests/run.mjs
```

脚本也会从 `resources/` 的 txt 文件读取 Key，Key 不会输出到终端。测试会产生真实免费模型请求，可能受 OpenRouter 免费模型请求频率限制影响。
