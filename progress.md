# Progress

> Last local sync: 2026-07-05  
> Current source of truth: Notion database `The Worker Investor /《工资之外》`

## 当前阶段

v0.2 本地结构同步。

本地仓库已经从旧版 30 章写作系统，调整为 Notion 当前的主线结构：Preface、Part I、Part II、Part III、Part IV、Conclusion。

这次同步只处理结构、状态和本地文件骨架，不覆盖已有正文。

## 已完成

- [x] 确认 Notion 中的核心项目页和章节数据库。
- [x] 确认 Notion 数据库为当前 source of truth。
- [x] 将 `outline.md` 从旧 30 章结构收束为当前主线结构。
- [x] 保留本地已有 `manuscript/00-preface.md` 和 `manuscript/01-why-i-started-thinking-worker-investor.md`。
- [x] 为 Notion 已存在但本地缺失的章节建立 manuscript stub。
- [x] 在进度表中区分 Notion 状态、本地状态和正文迁移状态。
- [x] 归档本地旧版 Ch01 到 `manuscript/archive/01-why-i-started-thinking-worker-investor-v0.1-local.md`。

## 下一步

- [ ] 确认 Notion 中 Preface、Ch06、Ch07、Ch09-Ch14、Conclusion 的 `Status / Word count / 文稿类别`。
- [ ] 清理 Notion 中可能重复的 `Ch04 从工厂钟声到日历、KPI 和 AI (1)`。
- [ ] 将 Ch01 Notion 重构稿迁移到本地；当前 Notion 工具返回内容中间被压缩，需使用 Notion Markdown 导出或块级完整读取后再覆盖主稿。
- [ ] 将 Ch08 的厚研究底稿整理成本地章节草稿。
- [ ] 按优先级迁移 Ch03/Ch04 的已有素材。
- [ ] 决定 GitHub 发布策略：Notion 继续做写作中枢，GitHub 做公开版本；或 GitHub 成为最终手稿主仓。

## 章节进度

| 章节 | Notion 状态 | 本地文件 | 本地状态 | 下一步 |
| --- | --- | --- | --- | --- |
| Preface | 待确认 | `manuscript/00-preface.md` | 已有本地草稿 | 对齐 Notion 版序章 |
| Ch01 起点：我为什么开始思考 Worker Investor（重构稿） | Done, 约 15000 字 | `manuscript/01-why-i-started-thinking-worker-investor.md` | 旧版草稿已归档，主稿暂未覆盖 | 等完整导出后迁移 Notion 重构稿 |
| Ch02 工资的安全感，也有它的边界 | Not started | `manuscript/02-salary-security-boundary.md` | stub | 从 Notion 提纲开始写 |
| Ch03 现代 worker 的困境：我们卖的不只是时间 | Not started | `manuscript/03-modern-worker-sells-more-than-time.md` | stub，Notion 有素材 | 整理 Notion 素材成章纲 |
| Ch04 从工厂钟声到日历、KPI 和 AI | Not started | `manuscript/04-factory-bell-calendar-kpi-ai.md` | stub，Notion 有素材 | 先处理重复页，再迁移 |
| Ch05 现金流与本金：把工资看成燃料，而不是身份 | Not started | `manuscript/05-salary-as-fuel-not-identity.md` | stub | 扩写提纲 |
| Ch06 真假市场：黄金电子盘、赌场与概率素养 | 待确认 | `manuscript/06-fake-markets-casino-probability.md` | stub | 确认 Notion 状态和证据链 |
| Ch07 所有权与周期：股票如何诞生，又如何疯狂 | 待确认 | `manuscript/07-ownership-and-cycles.md` | stub | 确认 Notion 状态和材料完整度 |
| Ch08 金融底仓：ETF 与 Worker Investor 的长期胜率 | Not started | `manuscript/08-etf-financial-core.md` | stub，Notion 有厚研究底稿 | 迁移并压缩为章节草稿 |
| Ch09 投资不只是钱：Worker 的资产栈 | 待确认 | `manuscript/09-worker-asset-stack.md` | stub | 确认 Notion 状态 |
| Ch10 Core：worker 的本金首先是健康和职业主线 | 待确认 | `manuscript/10-core-health-and-career.md` | stub | 确认 Notion 状态 |
| Ch11 Growth：技能、AI 与未来现金流 | 待确认 | `manuscript/11-growth-ai-and-future-cashflow.md` | stub | 确认 Notion 状态 |
| Ch12 Distribution：内容资产、表达和可见性 | 待确认 | `manuscript/12-distribution-content-assets.md` | stub | 确认 Notion 状态 |
| Ch13 Meta：复盘、思考和再平衡 | 待确认 | `manuscript/13-meta-review-and-rebalancing.md` | stub | 确认 Notion 状态 |
| Ch14 案例研究：沃伦·巴菲特 | 待确认 | `manuscript/14-buffett-case-study.md` | stub | 确认是否为正文主章或案例附录 |
| Conclusion: 成为Worker Investor | 待确认 | `manuscript/99-conclusion-becoming-worker-investor.md` | stub | 确认 Notion 状态 |

## 迁移优先级

1. Ch01：Notion 已 Done，是最适合先进入 GitHub 的完整正文。
2. Ch08：Notion 有厚研究底稿，但需要压缩、重排和去研究报告腔。
3. Ch03/Ch04：Notion 已有大量材料，适合整理成 Part I 的核心论证。
4. Ch02/Ch05：作为工资和现金流的桥，决定前半本书的可读性。
5. Ch09-Ch13：作为 Human Capital ETF 主体，适合在前两部分口吻稳定后迁移。

## 当前风险

- 本地正文仍明显落后于 Notion。
- Ch01 Notion 页面较长，当前工具返回内容会压缩中间段落；不能用不完整抓取结果覆盖主稿。
- Notion 中部分页面 `Status = Not started`，但内容并不空；不能只按 Status 判断进度。
- Ch04 存在疑似重复页，需要先确认，否则容易迁移错版本。
- Ch08 研究材料很厚，迁移时需要降密度，避免像研究报告。
- GitHub 发布前需要先决定是否公开 Notion 链接；公开仓库里最好保留标题和状态，不直接暴露私有 Notion URL。
