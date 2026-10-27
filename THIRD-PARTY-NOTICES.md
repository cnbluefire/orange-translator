# Third-Party Notices

橙竟是翻译（Orange Translator）包含或参考了以下第三方软件与数据。各第三方部分继续适用其原有许可证和版权声明，不因本项目原创代码使用 MIT License 而改变。

## PDF.js

- Project: PDF.js
- Source: <https://github.com/mozilla/pdf.js>
- Copyright: Mozilla Foundation and PDF.js contributors
- License: Apache License 2.0
- Included under: `src/pdf-viewer/`

PDF.js Viewer 文件内保留了原始 Apache-2.0 许可头。Apache License 2.0 全文：
<https://www.apache.org/licenses/LICENSE-2.0>

## Adobe CMap Resources

- Copyright: Adobe Systems Incorporated
- License: BSD-style redistribution license included with the resources
- Included under: `src/pdf-viewer/web/cmaps/`

完整许可原文位于：

```text
src/pdf-viewer/web/cmaps/LICENSE
```

## Immersive Translate site-rule data

- Product/project: Immersive Translate
- Website: <https://immersivetranslate.com/>
- Reference repository: <https://github.com/immersive-translate/immersive-translate>
- Included compatibility data: `src/site-rules-data.js`

`src/site-rules-data.js` 是从本地研究用的沉浸式翻译发行包中提取的站点适配规则数据，用于兼容网站正文选择和排除逻辑。沉浸式翻译当前发行项目明确说明其产品并非开源软件。因此：

- 该规则数据不纳入本项目 MIT License 的授权范围；
- 该规则数据的版权及其他权利归其原权利人所有；
- 本项目不声称拥有该规则数据；
- 在公开分发前，发布者应确认拥有复制和再分发该数据的必要权利，或将其替换为独立编写/具有明确许可的规则。

## Saladict reference implementation

- Project: Saladict / 沙拉查词
- Website: <https://saladict.crimx.com/>
- Repository: <https://github.com/crimx/ext-saladict>

开发过程中参考了沙拉查词的交互和 PDF.js 集成方式。研究用解包内容位于被 Git 忽略的 `temp/reference/`，不会进入仓库或发布包。发布代码中的 PDF.js 文件仍按 PDF.js 自身的 Apache-2.0 许可证分发。

## Other bundled notices

部分第三方生成文件可能在源文件头部或文件内部包含额外的版权及许可声明。这些声明是本文件的补充，应予保留。
