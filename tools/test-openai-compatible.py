"""最小 API 连通性测试。Key 只从环境变量读取，不输出完整响应。"""
import json
import os
import sys
import urllib.request

base = os.getenv("OPENAI_BASE_URL", "https://api.openai.com/v1").rstrip("/")
key = os.getenv("OPENROUTER_API_KEY") or os.getenv("OPENAI_API_KEY")
model = os.getenv("OPENAI_MODEL", "gpt-5.6-luna")
if not key:
    raise SystemExit("请设置 OPENROUTER_API_KEY 或 OPENAI_API_KEY")
data = {
    "model": model,
    "messages": [{"role": "user", "content": 'Return JSON only: {"ok":true}'}],
    "response_format": {"type": "json_object"},
}
request = urllib.request.Request(
    base + "/chat/completions",
    json.dumps(data).encode(),
    {"Content-Type": "application/json", "Authorization": "Bearer " + key},
)
try:
    with urllib.request.urlopen(request, timeout=45) as response:
        body = json.load(response)
        content = body["choices"][0]["message"]["content"]
        print(f"OK status={response.status} model={model} content_length={len(content)}")
except Exception as error:
    print(f"FAILED type={type(error).__name__} message={str(error)[:200]}")
    sys.exit(1)
