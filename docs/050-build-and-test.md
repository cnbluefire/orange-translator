# 构建与测试

## 浏览器自动化测试

首次使用需要安装 Playwright Chromium：

```powershell
npm --prefix tools install
npx playwright install chromium
```

运行真实免费模型测试：

```powershell
$env:OPENROUTER_API_KEY = '<本机 Key>'
npm --prefix tools run test:browser
```

测试覆盖设置页连接测试、划词翻译和多段正文沉浸式翻译。测试使用自动关闭的 headed Chromium，避免 Chrome 扩展在无头模式下无法启动 Service Worker。测试会真实请求 OpenRouter 免费模型。

最近一次结果：

```text
PASS options: API connection
PASS selection translation
PASS immersive translation: 4 translated blocks
```
