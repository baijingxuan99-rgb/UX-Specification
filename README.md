# UX-Specification

竖屏手游UX交互规范、测试用例库及原型验收工作台

## 使用
原始 Excel 的 82 条用例及使用说明完整导入 data.js（26 / 28 / 28）。打开 index.html 即可运行，无依赖。
- 总览：用例覆盖、已判定通过率、核心 P0 未通过数和 S0/S1 待处理数。
- L1/L2/L3：搜索、筛选、原型链接、验收结果和备注；不适用须填原因。
- 玩家测试记录：主持人记录实际行为，支持 CSV 导出。
- 问题与复测：新增、编辑、删除、分级，复测通过才允许关闭。
- 备份：JSON 导出和恢复。数据仅保存在本浏览器 localStorage，非多人共享数据库；请使用匿名玩家编号，勿录入敏感数据。


## Netlify 独立部署
在 Netlify 团队 Projects 新增项目，关联 `baijingxuan99-rgb/UX-Specification`，选择 `main` 分支。仓库根目录即发布目录，`netlify.toml` 已配置，无需构建。

## 文档
- [UX测试规范](docs/UX测试规范.md)
- [82条测试用例](docs/UX测试用例.md)

## 测试说明
本工具用于人工执行 UX 用例，不会自动连接或操作 Figma 原型，也不代表已经完成实机验证。当前仓库为公开仓库，请勿提交敏感测试数据。

## 美术视觉审查 V1.1
独立页面 `visual.html`：上传截图、本地像素诊断、四级框选、灰度/模糊/显著性视图、双图对照、18项规范自查与报告导出。详见 [美术视觉审查](docs/美术视觉审查.md)。不上传截图，不调用 AI API。

- [美术使用手册 V1.1](docs/美术使用手册.md) · [网页阅读版](https://baijingxuan99-rgb.github.io/UX-Specification/visual-guide.html)
