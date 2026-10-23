# 项目注意事项

- 可发布代码全部放在 `src/`；探索产物放在 `temp/`，文档放在 `docs/`。
- 不提交 `resources/`、`temp/`、API Key、`.env` 或测试日志。
- API Key 只通过扩展本地 `chrome.storage.local` 保存。
- 翻译请求必须支持超时、取消、429 退避，并校验批量 JSON 的 ID。
- 不实现浮窗固定、历史、笔记本、截图翻译等非目标功能。
- PDF 翻译必须手动触发；禁止自动接管、重定向或修改 Chrome 默认 PDF 查看器行为。
- **必须** 将crx中内置的key复制到当前项目中