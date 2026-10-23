# 橙竟是翻译隐私政策 / Orange Translator Privacy Policy

**生效日期 / Effective date: 2026-10-24**

橙竟是翻译（英文名：Orange Translator，以下简称“本扩展”）重视用户隐私。本政策说明本扩展会处理哪些数据、处理这些数据的目的、数据会被发送到哪里，以及用户如何管理或删除数据。

Orange Translator (the “Extension”) respects your privacy. This policy explains what data the Extension processes, why it is processed, where it may be sent, and how you can manage or delete it.

## 1. 单一用途 / Single purpose

本扩展的单一用途是根据用户的主动操作提供翻译功能，包括：

- 翻译用户选中的网页或 PDF 文本；
- 翻译用户在扩展弹窗中输入的文本；
- 翻译用户主动要求处理的当前网页正文，并在原文旁显示译文；
- 在扩展内置的 PDF.js 阅读器中打开用户指定的 PDF，并支持划词翻译。

The Extension’s single purpose is to provide translation features initiated by the user, including:

- translating text selected on a webpage or in a PDF;
- translating text entered in the Extension popup;
- translating webpage content that the user explicitly asks the Extension to process and displaying translations alongside the source text; and
- opening a user-selected PDF in the bundled PDF.js viewer and enabling selection translation.

## 2. 本扩展处理的数据 / Data processed by the Extension

### 2.1 待翻译文本 / Text submitted for translation

只有在用户主动发起翻译时，本扩展才会处理相应文本。这些文本可能包括：

- 用户选中的文字；
- 用户在快速翻译输入框中输入的文字；
- 用户主动启动网页双语翻译后，当前视口及滚动过程中进入处理范围的网页正文；
- 用户在内置 PDF 阅读器中选中的可复制文本。

The Extension processes text only when the user initiates a translation. This may include selected text, text entered in the quick-translation box, webpage content brought into scope after the user starts bilingual webpage translation, and selectable text from a PDF opened in the bundled viewer.

### 2.2 翻译服务配置和身份验证信息 / Translation configuration and authentication information

如果用户配置 OpenAI 兼容接口、Azure Translator 或 Google Cloud Translation，本扩展会在浏览器本地处理以下信息：

- API Key；
- API Base URL 或 Endpoint；
- 模型名称；
- Azure Region；
- 所选源语言和目标语言。

If the user configures an OpenAI-compatible service, Azure Translator, or Google Cloud Translation, the Extension locally processes API keys, API base URLs or endpoints, model names, Azure regions, and selected source and target languages.

### 2.3 本地设置和翻译缓存 / Local settings and translation cache

本扩展使用 `chrome.storage.local` 保存：

- 界面和翻译设置；
- 用户明确点击保存按钮后保存的 API Key；
- 翻译结果缓存。

缓存键可能包含所选服务、模型或端点、源语言、目标语言和原文。缓存仅保存在用户设备上，最多保留 1000 条，超过 30 天的条目会失效。用户可以在设置页清除翻译缓存。

The Extension uses `chrome.storage.local` to store interface and translation settings, API keys only after the user explicitly clicks the relevant save button, and a local translation cache. Cache identity may include the selected service, model or endpoint, source and target languages, and source text. The cache remains on the user’s device, is limited to 1,000 entries, and entries expire after 30 days. Users can clear it from the settings page.

### 2.4 PDF 地址 / PDF URLs

当用户在 PDF 页面主动点击“手动翻译 PDF”时，本扩展会把当前标签页 URL 传递给扩展内置的 PDF.js 阅读器，以便由浏览器加载该 PDF。本扩展不会把 PDF URL 发送给扩展开发者，也不会自动接管或重定向浏览器的默认 PDF 查看器。

When the user explicitly selects “Translate PDF manually” while viewing a PDF, the Extension passes the current tab URL to its bundled PDF.js viewer so the browser can load the document. The Extension does not send the PDF URL to the Extension developer and does not automatically replace or redirect the browser’s default PDF viewer.

## 3. 数据发送到哪里 / Where data is sent

为了返回翻译结果，待翻译文本会通过网络发送给用户选择的翻译服务。根据用户设置，服务可能包括：

- Microsoft 翻译；
- Google 翻译；
- 用户配置的 OpenAI 兼容接口；
- Azure Translator；
- Google Cloud Translation。

默认的 Microsoft 免 Key翻译不可用时，本扩展可能尝试使用 Google 翻译完成同一请求。使用自定义服务时，API Key 只会发送给用户配置并选择的相应服务端点。

To produce a translation, source text is sent over the network to the translation service selected by the user. Depending on the user’s settings, this may be Microsoft Translate, Google Translate, a user-configured OpenAI-compatible endpoint, Azure Translator, or Google Cloud Translation.

If the default keyless Microsoft translation service is unavailable, the Extension may attempt the same request with Google Translate. When a custom service is used, its API key is sent only to the corresponding endpoint configured and selected by the user.

第三方翻译服务如何处理、保留或使用请求内容，受该服务自身的条款和隐私政策约束。用户应在使用服务前阅读相应政策。

How a third-party translation provider processes, retains, or uses request content is governed by that provider’s own terms and privacy policy. Users should review the applicable provider policy before using the service.

## 4. 开发者不会收集的数据 / Data not collected by the developer

本扩展开发者不运营用于接收扩展数据的服务器，也不会接收或收集：

- 浏览历史或标签页列表；
- 用户的 API Key；
- 本地翻译缓存；
- 用户的翻译文本或翻译结果；
- 姓名、电子邮件地址、住址或电话号码；
- 精确位置信息；
- 支付、财务、健康或政府身份信息；
- 广告标识符、设备指纹或用于跨站跟踪的数据。

The Extension developer does not operate a server that receives Extension data and does not receive or collect browsing history, tab lists, API keys, local translation caches, translation text or results, personal contact details, precise location, payment or financial data, health data, government identifiers, advertising identifiers, device fingerprints, or cross-site tracking data.

本扩展不包含开发者遥测、广告、用户行为分析或数据经纪功能。

The Extension does not include developer telemetry, advertising, behavioral analytics, or data-broker functionality.

## 5. 数据用途限制 / Limits on data use

本扩展处理的数据仅用于提供用户主动请求的翻译功能和维护本地缓存。本扩展及其开发者不会：

- 出售或出租用户数据；
- 将用户数据用于广告或个性化广告；
- 将用户数据用于信用评估、贷款或保险资格判断；
- 将用户数据用于与翻译功能无关的目的；
- 将用户数据转让给数据经纪商。

Data processed by the Extension is used only to provide translation requested by the user and to maintain the local cache. The Extension and its developer do not sell or rent user data, use it for advertising or personalized advertising, use it for creditworthiness, lending, or insurance eligibility, use it for purposes unrelated to translation, or transfer it to data brokers.

## 6. 权限用途 / Use of permissions

- **storage**：保存本地设置、用户明确保存的 API Key 和翻译缓存。
- **contextMenus**：提供“翻译选中文本”和“翻译当前页面”入口。
- **tabs**：获取用户主动操作时的当前标签页、发送翻译命令，以及打开设置页和内置 PDF 阅读器。
- **webNavigation**：获取同一标签页的 frame 列表，使用户发起的网页翻译操作可以同步到 iframe。
- **主机权限 (`<all_urls>`)**：在用户访问的网页中提供划词和双语翻译，并向用户选择的翻译服务或自定义端点发送翻译请求。

These permissions are used only to provide the Extension’s translation functionality. They are not used to build a browsing history or track users across websites.

## 7. 远程代码 / Remote code

本扩展不加载或执行远程 JavaScript、WebAssembly 或其他可执行代码。所有可执行代码，包括 PDF.js，均包含在扩展安装包中。翻译服务返回的文本或 JSON 仅作为数据处理，不作为代码执行。

The Extension does not load or execute remote JavaScript, WebAssembly, or other executable code. All executable code, including PDF.js, is bundled with the Extension. Text or JSON returned by translation services is treated only as data and is not executed as code.

## 8. 数据安全 / Data security

本扩展对支持的网络翻译请求使用 HTTPS，但用户配置的自定义端点由用户自行决定。本扩展不会把 API Key 写入源代码、公开文档或开发者服务器。用户应妥善保管 API Key，并只配置可信端点。

The Extension uses HTTPS for supported network translation requests, although the security of a custom endpoint is determined by the endpoint configured by the user. API keys are not embedded in source code, public documentation, or sent to a developer-operated server. Users should protect their API keys and configure only trusted endpoints.

## 9. 用户控制与数据删除 / User controls and deletion

用户可以：

- 在设置页清除翻译缓存；
- 清空已保存的 API Key 后再次点击对应保存按钮；
- 修改或重置扩展设置；
- 通过浏览器扩展管理页面清除扩展存储；
- 卸载扩展，以删除扩展保存在浏览器配置中的本地数据。

Users may clear the translation cache in Settings, clear and save API key fields, change or reset settings, clear Extension storage through browser controls, or uninstall the Extension to remove locally stored Extension data from the browser profile.

第三方翻译服务已收到的数据应根据该服务的隐私政策和用户与该服务之间的账户设置进行管理。

Data already received by a third-party translation provider must be managed according to that provider’s privacy policy and the user’s account settings with that provider.

## 10. 儿童隐私 / Children’s privacy

本扩展不以儿童为目标，也不会故意收集儿童的个人信息。

The Extension is not directed at children and does not knowingly collect personal information from children.

## 11. 政策变更 / Changes to this policy

如果本扩展的数据处理方式发生实质变化，本政策将相应更新，并修改顶部的生效日期。更新后的政策将在本项目的公开仓库中提供。

If the Extension’s data practices materially change, this policy will be updated and the effective date above will be revised. The updated policy will be made available in the project’s public repository.

## 12. 联系方式 / Contact

如对本隐私政策有疑问，请通过本项目公开 GitHub 仓库的 Issues 页面联系维护者。

For privacy questions, please contact the maintainers through the Issues page of the project’s public GitHub repository.
