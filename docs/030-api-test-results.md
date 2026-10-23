# API 测试结果

运行方式：

```powershell
$env:OPENROUTER_API_KEY = '<从 resources 文件临时读取，不要写入文件>'
$env:OPENAI_MODEL = 'openrouter/free'
uv run python tools/test-openai-compatible.py
```

实测结果（2026-10-23）：

- Base URL：OpenRouter `/api/v1`（未记录 Key）
- Model：`openrouter/free`
- HTTP 状态：`200`
- 响应内容长度：`17`
- 结论：基础 OpenAI Chat Completions 兼容请求可用。

日志不记录 Key 和完整模型响应。扩展内仍需使用设置页保存自己的 API 配置。
