import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { siteContent as c } from "../content/site-content.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(__dirname, "..");
const version = "20260704-book-identity-v1";

const pages = [
  { key: "home", file: "index.html", depth: 0, render: renderHome },
  { key: "book", file: "book/index.html", depth: 1, render: renderBook },
  { key: "resources", file: "resources/index.html", depth: 1, render: renderResources },
  { key: "library", file: "library/index.html", depth: 1, render: renderLibrary },
  { key: "appendix", file: "appendix/index.html", depth: 1, render: renderAppendix },
  { key: "cases", file: "cases/index.html", depth: 1, render: renderCases },
  { key: "concepts", file: "concepts/index.html", depth: 1, render: renderConcepts },
];

const postPages = c.posts
  .filter((post) => post.body.length)
  .map((post) => ({
    key: "library",
    file: `posts/${post.slug}/index.html`,
    depth: 2,
    render: () => renderPost(post),
  }));

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function html(value) {
  return String(value ?? "");
}

function base(depth) {
  return depth === 0 ? "" : "../".repeat(depth);
}

function href(depth, target = "") {
  return `${base(depth)}${target}`;
}

function dual(value, tag = "span", attrs = "") {
  return `<${tag}${attrs}><span data-lang-panel="zh">${html(value.zh)}</span><span data-lang-panel="en">${html(value.en)}</span></${tag}>`;
}

function dualPlain(value) {
  return `<span data-lang-panel="zh">${html(value.zh)}</span><span data-lang-panel="en">${html(value.en)}</span>`;
}

function pageShell({ key, file, depth, title, description, main }) {
  const prefix = base(depth);
  const titleText =
    title.zh === c.title.zh && title.en === c.title.en
      ? "The Worker Investor / 工资之外"
      : `${title.zh} / ${title.en} | The Worker Investor`;
  const nav = c.nav
    .map((item) => {
      const active = item.key === key ? " is-active" : "";
      return `<a class="${active}" href="${href(depth, item.href)}">${dualPlain(item.label)}</a>`;
    })
    .join("");

  return `<!doctype html>
<html lang="zh-CN" data-lang="zh">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(titleText)}</title>
    <meta name="description" content="${esc(description.zh)}" data-description-zh="${esc(description.zh)}" data-description-en="${esc(description.en)}" />
    <meta property="og:title" content="${esc(c.title.en)}" />
    <meta property="og:description" content="${esc(c.description.en)}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${prefix}assets/twi-social-card.svg" />
    <link rel="icon" href="${prefix}assets/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="${prefix}styles.css?v=${version}" />
  </head>
  <body data-page="${key}">
    <div class="scroll-progress" aria-hidden="true"><span id="scroll-progress"></span></div>
    <a class="skip-link" href="#main">${dualPlain({ zh: "跳到正文", en: "Skip to content" })}</a>
    <header class="site-header">
      <a class="brand" href="${href(depth)}" aria-label="The Worker Investor">
        <span class="brand-mark">WI</span>
        <span>The Worker Investor</span>
      </a>
      <nav class="nav-links" aria-label="Main navigation">${nav}</nav>
      <div class="header-actions">
        <div class="language-toggle" aria-label="Language">
          <button class="is-active" type="button" data-lang-switch="zh" aria-pressed="true">中文</button>
          <button type="button" data-lang-switch="en" aria-pressed="false">EN</button>
        </div>
        <button class="theme-toggle" type="button" id="theme-toggle" aria-label="Toggle dark mode" aria-pressed="false">
          <span aria-hidden="true"></span>
        </button>
      </div>
    </header>
    <main id="main">${main}</main>
    <footer class="site-footer">
      <div>
        <strong>The Worker Investor</strong>
        ${dual({ zh: "书是主干，网站是长期研究库。", en: "The book is the trunk. The site is the long-running research library." }, "p")}
      </div>
      <nav aria-label="Footer navigation">${nav}</nav>
    </footer>
    <script src="${prefix}script.js?v=${version}"></script>
  </body>
</html>`;
}

function pageHero({ eyebrow, title, copy, actions = "" }) {
  return `<section class="page-hero">
    <div class="hero-kicker">
      <span>${dualPlain(eyebrow)}</span>
      <span>Wages -> Ownership -> Optionality</span>
    </div>
    <div class="page-hero-grid">
      <div>
        ${dual(title, "h1")}
        ${dual(copy, "p", ' class="hero-lede"')}
        ${actions}
      </div>
      ${systemCard()}
    </div>
  </section>`;
}

function systemCard() {
  return `<aside class="system-card" aria-label="Worker Investor operating system">
    <span>OPERATING SYSTEM</span>
    <strong>Worker -> Investor</strong>
    <ol>
      <li><b>01</b> Wages</li>
      <li><b>02</b> Allocation</li>
      <li><b>03</b> Assets</li>
      <li><b>04</b> Optionality</li>
    </ol>
  </aside>`;
}

function renderHome(page) {
  const main = `
    <section class="home-hero" aria-labelledby="hero-title">
      <div class="hero-kicker reveal">
        <span>${dualPlain(c.hero.eyebrow)}</span>
        <span>Wages -> Savings -> Skills -> Content -> Systems</span>
      </div>
      <div class="home-hero-grid">
        <div class="hero-copy reveal">
          ${dual(c.hero.title, "h1", ' id="hero-title"')}
          ${dual(c.hero.subtitle, "p", ' class="hero-lede"')}
          <p class="thesis-line">${c.thesis.zh}</p>
          <div class="hero-actions">
            <a class="button primary" href="book/">${dualPlain(c.hero.primary)}</a>
            <a class="button ghost" href="resources/">${dualPlain(c.hero.secondary)}</a>
          </div>
        </div>
        ${bookObject()}
      </div>
    </section>
    ${renderIdentitySection()}
    ${renderLayerSection()}
    ${renderResourcePreview(0)}
    ${renderFlowMap()}
    ${renderPrinciples()}
    ${renderLatestPosts(0)}
    ${renderSubscribe()}
  `;

  return pageShell({
    ...page,
    title: c.title,
    description: c.description,
    main,
  });
}

function bookObject() {
  return `<aside class="book-showcase reveal" aria-label="Interactive book preview">
    <div class="book-copy">
      <span>OPEN THE BOOK</span>
      ${dual({ zh: "先翻开这本还在形成的书。", en: "Open the book while it is still being made." }, "h2")}
      ${dual({ zh: "点击书本可以打开、翻页、合上。", en: "Click the book to open, turn, and close it." }, "p")}
    </div>
    <button class="book-object" type="button" data-book-state="0" aria-label="Open The Worker Investor book preview">
      <span class="book-shadow" aria-hidden="true"></span>
      <span class="book-page page-a">
        <b>Contents</b>
        <em>00 Preface</em>
        <em>01 Reality</em>
        <em>02 Mindset</em>
        <em>03 HCE</em>
        <em>04 Cases</em>
      </span>
      <span class="book-page page-b">
        <b>Human Capital ETF</b>
        <em>Core / Growth</em>
        <em>Distribution / Meta</em>
      </span>
      <span class="book-cover">
        <img src="assets/twi-cover-front.svg" alt="" loading="eager" decoding="async" />
      </span>
      <span class="book-spine">WI</span>
    </button>
  </aside>`;
}

function renderIdentitySection() {
  return `<section class="content-section" aria-labelledby="identity-title">
    <div class="section-heading reveal">
      ${dual({ zh: "Book identity system", en: "Book identity system" }, "p", ' class="eyebrow"')}
      ${dual({ zh: "高质量视觉不是包装，而是这本书的第一层信任。", en: "High-quality visual design is not packaging. It is the first layer of trust for the book." }, "h2", ' id="identity-title"')}
      ${dual({ zh: "The Worker Investor 需要同时像一本真实存在的书、一个持续更新的研究档案，以及一套能让读者行动的工具系统。", en: "The Worker Investor needs to feel like a real book, a living research archive, and a practical toolkit that helps readers act." }, "p")}
    </div>
    <div class="identity-strip">
      ${c.identitySignals
        .map(
          (item) => `<article class="identity-card reveal">
          <span>${dualPlain(item.label)}</span>
          ${dual(item.title, "h3")}
          ${dual(item.body, "p")}
        </article>`,
        )
        .join("")}
    </div>
  </section>`;
}

function renderLayerSection() {
  return `<section class="content-section" aria-labelledby="layers-title">
    <div class="section-heading reveal">
      ${dual({ zh: "Site architecture", en: "Site architecture" }, "p", ' class="eyebrow"')}
      ${dual({ zh: "这不是一页展示，而是一套可维护的出版系统。", en: "This is no longer a one-page showcase. It is a maintainable publishing system." }, "h2", ' id="layers-title"')}
      ${dual({ zh: "我把优秀作者网站的做法压缩成四层：书承载主干，附录承载复杂材料，文章承载新观察，后台保留未成熟素材。", en: "I compressed the patterns of strong author sites into four layers: the book carries the spine, the appendix carries complex material, posts carry fresh observations, and private notes keep immature material backstage." }, "p")}
    </div>
    <div class="library-board">
      ${c.publishingLayers
        .map(
          (layer, index) => `<article class="library-card reveal tone-${layer.key}">
          <span>${layer.label.en}</span>
          ${dual(layer.title, "h3")}
          ${dual(layer.body, "p")}
          <b>0${index + 1}</b>
        </article>`,
        )
        .join("")}
    </div>
    <div class="content-flow reveal">
      ${c.contentFlow.map((item) => `<span>${dualPlain(item)}</span>`).join("")}
    </div>
  </section>`;
}

function renderResourcePreview(depth) {
  return `<section class="content-section" aria-labelledby="resources-title">
    <div class="section-heading reveal">
      ${dual({ zh: "Practice toolkit", en: "Practice toolkit" }, "p", ' class="eyebrow"')}
      ${dual({ zh: "书不只提供观点，也要逐步提供行动材料。", en: "The book should not only provide ideas. It should gradually provide action materials." }, "h2", ' id="resources-title"')}
      ${dual({ zh: "第一批资源先以路线图形式公开：发薪日配置、HCE 自测、90 天计划、年度复盘、AI workflow 和阅读地图。", en: "The first resources are public as a roadmap: payday allocation, HCE self-assessment, a 90-day plan, annual review, AI workflows, and a reading map." }, "p")}
    </div>
    <div class="resource-grid compact">
      ${c.resources.slice(0, 3).map((item) => resourceCard(item)).join("")}
    </div>
    <div class="section-actions reveal">
      <a class="button primary" href="${href(depth, "resources/")}">${dualPlain({ zh: "查看完整工具系统", en: "Open the toolkit" })}</a>
    </div>
  </section>`;
}

function resourceCard(item) {
  return `<article class="resource-card reveal">
    <div class="resource-topline"><span>${item.n}</span><em>${dualPlain(item.type)}</em></div>
    ${dual(item.title, "h3")}
    ${dual(item.body, "p")}
    <b>${dualPlain(item.status)}</b>
  </article>`;
}

function renderFlowMap() {
  return `<section class="content-section" aria-labelledby="flow-title">
    <div class="section-heading reveal">
      ${dual({ zh: "Visual framework", en: "Visual framework" }, "p", ' class="eyebrow"')}
      ${dual({ zh: "把 Worker 到 Investor 的变化画成一张资产流转图。", en: "Draw the shift from Worker to Investor as an asset-flow system." }, "h2", ' id="flow-title"')}
    </div>
    <div class="framework-grid">
      <div class="level-stack reveal">
        <article><span>01</span>${dual({ zh: "看清工资现金流", en: "See wage cash flow clearly" }, "h3")}${dual({ zh: "先承认工资的重要性，再追踪它如何进入消费、储蓄、投资和学习。", en: "First acknowledge the importance of wages, then track how they enter spending, saving, investing, and learning." }, "p")}</article>
        <article><span>02</span>${dual({ zh: "设计 Human Capital ETF", en: "Design the Human Capital ETF" }, "h3")}${dual({ zh: "把健康、现金流、技能、AI、写作、网站和复盘系统放进同一张资产表。", en: "Put health, cash flow, skills, AI, writing, websites, and review systems onto one balance sheet." }, "p")}</article>
        <article><span>03</span>${dual({ zh: "让成果离开工时继续工作", en: "Let output work beyond hours" }, "h3")}${dual({ zh: "内容、技能、资本和声誉开始形成反馈后，未来不再只靠当天工时建造。", en: "When content, skills, capital, and reputation create feedback, the future is no longer built only through today's hours." }, "p")}</article>
      </div>
      <div class="system-map reveal">
        <div class="map-header"><span>Worker -> Investor map</span><strong>Cash flow to optionality</strong></div>
        <div class="flow-line"><span>Wages</span><span>Allocation</span><span>Assets</span><span>Optionality</span></div>
        <div class="map-matrix">
          <span class="box friction">Spending / tax / attention</span>
          <span class="box core">Core</span>
          <span class="box growth">Growth</span>
          <span class="box distribution">Distribution</span>
          <span class="box meta">Meta</span>
        </div>
      </div>
    </div>
  </section>`;
}

function renderPrinciples() {
  return `<section class="content-section" aria-labelledby="principles-title">
    <div class="section-heading reveal">
      ${dual({ zh: "Worker Investor principles", en: "Worker Investor principles" }, "p", ' class="eyebrow"')}
      ${dual({ zh: "四条原则给这个项目定边界。", en: "Four principles set the boundary for this project." }, "h2", ' id="principles-title"')}
    </div>
    <div class="principle-grid">
      ${c.principles
        .map(
          (item) => `<article class="principle-card is-${item.tone} reveal">
          <span>${item.n}</span>
          ${dual(item.title, "h3")}
          ${dual(item.body, "p")}
        </article>`,
        )
        .join("")}
    </div>
  </section>`;
}

function renderLatestPosts(depth) {
  return `<section class="content-section" aria-labelledby="latest-title">
    <div class="section-heading reveal">
      ${dual({ zh: "Latest dispatches", en: "Latest dispatches" }, "p", ' class="eyebrow"')}
      ${dual({ zh: "文章、案例和 build log 会从这里持续长出来。", en: "Articles, cases, and build logs will keep growing from here." }, "h2", ' id="latest-title"')}
    </div>
    <div class="post-grid">
      ${c.posts.map((post) => postCard(post, depth)).join("")}
    </div>
  </section>`;
}

function postCard(post, depth) {
  const canRead = post.body.length > 0;
  const url = canRead ? href(depth, `posts/${post.slug}/`) : href(depth, "library/");
  return `<article class="post-card reveal" data-post-type="${esc(post.type.en)}">
    <div class="post-meta"><span>${dualPlain(post.type)}</span><time>${post.date}</time></div>
    ${dual(post.title, "h3")}
    ${dual(post.summary, "p")}
    <a href="${url}">${canRead ? dualPlain({ zh: "阅读预览", en: "Read preview" }) : dualPlain({ zh: "查看计划", en: "View plan" })}</a>
  </article>`;
}

function renderResources(page) {
  const main = `
    ${pageHero({
      eyebrow: { zh: "Resource and toolkit", en: "Resource and toolkit" },
      title: { zh: "把读者从“读懂”带到“做出来”。", en: "Move the reader from understanding to doing." },
      copy: { zh: "The Worker Investor 的资源页会承载 worksheet、prompt pack、复盘模板、阅读路径和案例索引。它是书和 Human Capital ETF business 之间的桥。", en: "The resources page will carry worksheets, prompt packs, review templates, reading paths, and case indexes. It is the bridge between the book and the Human Capital ETF business." },
      actions: `<div class="hero-actions"><a class="button primary" href="../book/">${dualPlain({ zh: "回到书籍结构", en: "Back to the book map" })}</a><a class="button ghost" href="../appendix/">${dualPlain({ zh: "查看活附录", en: "Open appendix" })}</a></div>`,
    })}
    <section class="content-section" aria-labelledby="toolkit-title">
      <div class="section-heading reveal">
        ${dual({ zh: "Starter kit roadmap", en: "Starter kit roadmap" }, "p", ' class="eyebrow"')}
        ${dual({ zh: "Human Capital ETF Starter Kit 可以从这六个工具开始。", en: "The Human Capital ETF Starter Kit can begin with these six tools." }, "h2", ' id="toolkit-title"')}
      </div>
      <div class="resource-grid">
        ${c.resources.map((item) => resourceCard(item)).join("")}
      </div>
    </section>
    <section class="content-section two-column">
      <article class="protocol-card reveal">
        ${dual({ zh: "Practice loop", en: "Practice loop" }, "p", ' class="eyebrow"')}
        ${dual({ zh: "工具不追求复杂，先让配置被看见。", en: "The tools should not be complex. They should first make allocation visible." }, "h2")}
        <ol>
          <li>${dualPlain({ zh: "记录工资现金流。", en: "Record wage cash flow." })}</li>
          <li>${dualPlain({ zh: "分配 Core / Growth / Distribution / Meta。", en: "Allocate Core / Growth / Distribution / Meta." })}</li>
          <li>${dualPlain({ zh: "每周复盘一次最小行动。", en: "Review one minimum action each week." })}</li>
          <li>${dualPlain({ zh: "每季度再平衡一次方向。", en: "Rebalance direction each quarter." })}</li>
        </ol>
      </article>
      <aside class="trust-panel reveal">
        <span>Trust layer</span>
        ${c.trustSignals
          .map((item) => `<div>${dual(item.title, "strong")}${dual(item.body, "p")}</div>`)
          .join("")}
      </aside>
    </section>
  `;

  return pageShell({
    ...page,
    title: { zh: "工具与资源", en: "Resources" },
    description: { zh: "The Worker Investor 的 worksheet、模板、prompt pack 和实践工具路线图。", en: "Worksheets, templates, prompt packs, and practical tools for The Worker Investor." },
    main,
  });
}

function renderBook(page) {
  const main = `
    ${pageHero({
      eyebrow: { zh: "Book map", en: "Book map" },
      title: { zh: "书负责主干：从现实处境到 Human Capital ETF。", en: "The book carries the spine: from worker reality to Human Capital ETF." },
      copy: { zh: "目录先公开，正文慢慢成熟。这里不一次性倒出所有素材，而是让读者看到这本书的路径。", en: "The structure is public first, while chapters mature gradually. This page shows the path without dumping every raw note." },
      actions: `<div class="hero-actions"><a class="button primary" href="../resources/">${dualPlain({ zh: "看配套工具", en: "See resources" })}</a><a class="button ghost" href="../appendix/">${dualPlain({ zh: "看活附录", en: "Open appendix" })}</a></div>`,
    })}
    <section class="content-section">
      <div class="toc-rail">
        ${c.bookParts.map(bookPart).join("")}
      </div>
    </section>
    <section class="content-section two-column">
      <article class="reader-card reveal">
        ${dual({ zh: "Preface / excerpt", en: "Preface / excerpt" }, "p", ' class="eyebrow"')}
        ${dual({ zh: "工资之外，不是工作之外。", en: "Beyond wages is not beyond work." }, "h2")}
        ${dual({ zh: "我也还在工作系统里。工资给我安全感，也提醒我边界：如果未来只能继续靠同一份时间出售自己，我拥有的选择权就会很少。", en: "I am still inside the work system too. Wages give me safety, and also remind me of the boundary: if the future can only come from selling the same block of time, I own very little optionality." }, "p")}
        <blockquote>The Worker Investor is not someone who stops working. It is someone who stops treating work as the only place where the future can be built.</blockquote>
      </article>
      <aside class="hce-card reveal">
        <span>Human Capital ETF</span>
        ${c.hcePositions.map((item) => `<div><b>${item.key}</b>${dual(item.title, "strong")}${dual(item.body, "p")}</div>`).join("")}
      </aside>
    </section>
  `;

  return pageShell({
    ...page,
    title: { zh: "书籍结构", en: "Book map" },
    description: { zh: "The Worker Investor 的书籍目录、章节状态与试读。", en: "The Worker Investor book map, chapter status, and excerpt." },
    main,
  });
}

function bookPart(part) {
  return `<article class="toc-item reveal">
    <header><span>${part.code}</span>${dual(part.title, "h2")}<em>${dualPlain(part.status)}</em></header>
    <ol>
      ${part.items
        .map((item) => `<li><span>${item.label}</span>${dual(item.title, "b")}<em>${dualPlain(item.status)}</em></li>`)
        .join("")}
    </ol>
  </article>`;
}

function renderLibrary(page) {
  const main = `
    ${pageHero({
      eyebrow: { zh: "Research library", en: "Research library" },
      title: { zh: "长期文章不塞进首页，而是进入自己的库。", en: "Long-running posts should not crowd the homepage. They need their own library." },
      copy: { zh: "这里会承载数据笔记、案例拆解、读书卡片和 build log。每篇文章都可以再链接回书或附录。", en: "This section carries data notes, case studies, reading cards, and build logs. Each post can link back to the book or appendix." },
    })}
    <section class="content-section">
      <div class="filter-row" aria-label="Post filters">
        <button class="is-active" type="button" data-filter="all">All</button>
        <button type="button" data-filter="Data note">Data note</button>
        <button type="button" data-filter="Case study">Case study</button>
        <button type="button" data-filter="Build log">Build log</button>
      </div>
      <div class="post-grid post-grid-large">
        ${c.posts.map((post) => postCard(post, 1)).join("")}
      </div>
    </section>
    ${renderLayerSection()}
  `;

  return pageShell({
    ...page,
    title: { zh: "研究库", en: "Research library" },
    description: { zh: "The Worker Investor 的文章、数据笔记、案例和 build log。", en: "Articles, data notes, cases, and build logs for The Worker Investor." },
    main,
  });
}

function renderAppendix(page) {
  const main = `
    ${pageHero({
      eyebrow: { zh: "Living appendix", en: "Living appendix" },
      title: { zh: "书定版以后，讨论不会停止，只会换到更适合的位置。", en: "After the book is set, the discussion does not stop. It moves to a better place." },
      copy: { zh: "新增案例、图表、读者问题和更技术的分析，会挂回相关章节，让网站成为书的延伸。", en: "New cases, charts, reader questions, and more technical analysis will attach back to relevant chapters, making the site an extension of the book." },
    })}
    <section class="content-section">
      <div class="appendix-grid">
        ${c.appendixItems
          .map(
            (item) => `<article class="appendix-card reveal">
            <span>${item.n}</span>
            ${dual(item.title, "h3")}
            ${dual(item.body, "p")}
          </article>`,
          )
          .join("")}
      </div>
    </section>
    <section class="content-section">
      <div class="protocol-card reveal">
        ${dual({ zh: "更新协议", en: "Update protocol" }, "p", ' class="eyebrow"')}
        ${dual({ zh: "每次新增内容，都先判断它该放在哪里。", en: "Every new item must first answer where it belongs." }, "h2")}
        <ol>
          <li>${dualPlain({ zh: "能代表长期主张：进书。", en: "If it represents the long-term thesis: enter the book." })}</li>
          <li>${dualPlain({ zh: "太细、太技术、但有价值：进活附录。", en: "If it is detailed, technical, but useful: enter the living appendix." })}</li>
          <li>${dualPlain({ zh: "和当下世界变化有关：发成 post。", en: "If it responds to the changing world: publish it as a post." })}</li>
          <li>${dualPlain({ zh: "还没想清楚：留在私人草稿。", en: "If it is not clear yet: keep it private." })}</li>
        </ol>
      </div>
    </section>
  `;

  return pageShell({
    ...page,
    title: { zh: "活附录", en: "Living appendix" },
    description: { zh: "章节补充、图表数据、读者问题和案例索引。", en: "Chapter supplements, charts, reader questions, and case index." },
    main,
  });
}

function renderCases(page) {
  const main = `
    ${pageHero({
      eyebrow: { zh: "Transformation paths", en: "Transformation paths" },
      title: { zh: "案例不是崇拜成功，而是拆解路径。", en: "Cases are not success worship. They are path analysis." },
      copy: { zh: "我会观察一个人如何获得第二技能、第二表达渠道、第二资产来源，以及如何降低单一路径风险。", en: "I will study how a person adds a second skill, a second channel of expression, a second source of assets, and lowers single-path risk." },
    })}
    <section class="content-section">
      <div class="case-grid">
        ${c.cases
          .map(
            (item) => `<article class="case-card reveal">
            <div class="case-meta"><span>${item.name}</span><em>${dualPlain(item.status)}</em></div>
            <b>${dualPlain(item.lane)}</b>
            ${dual(item.title, "h3")}
            ${dual(item.body, "p")}
          </article>`,
          )
          .join("")}
      </div>
    </section>
    <section class="content-section">
      <div class="case-matrix reveal">
        <span>Worker - Level 1</span>
        <span>Skills - Level 2</span>
        <span>Distribution - Level 3</span>
        <strong>Optionality - Level 4</strong>
      </div>
    </section>
  `;

  return pageShell({
    ...page,
    title: { zh: "案例库", en: "Case studies" },
    description: { zh: "Worker to Investor 的人物与路径案例库。", en: "A case library for Worker to Investor transformation paths." },
    main,
  });
}

function renderConcepts(page) {
  const main = `
    ${pageHero({
      eyebrow: { zh: "Concept glossary", en: "Concept glossary" },
      title: { zh: "先把词定义清楚，写作才不会漂。", en: "Define the terms clearly so the writing does not drift." },
      copy: { zh: "这些不是花哨概念，而是整本书和网站会反复使用的工作语言。", en: "These are not decorative terms. They are the working language that the book and site will keep using." },
    })}
    <section class="content-section">
      <div class="concept-grid">
        ${c.concepts
          .map((item) => `<article class="concept-card reveal"><span>${item.term}</span>${dual(item.definition, "p")}</article>`)
          .join("")}
      </div>
    </section>
  `;

  return pageShell({
    ...page,
    title: { zh: "概念词典", en: "Concept glossary" },
    description: { zh: "The Worker Investor 的核心概念词典。", en: "Core concept glossary for The Worker Investor." },
    main,
  });
}

function renderPost(post) {
  const main = `
    <article class="article-page">
      <header class="article-header">
        <a class="back-link" href="../../library/">${dualPlain({ zh: "返回研究库", en: "Back to library" })}</a>
        <div class="post-meta"><span>${dualPlain(post.type)}</span><time>${post.date}</time></div>
        ${dual(post.title, "h1")}
        ${dual(post.summary, "p", ' class="hero-lede"')}
      </header>
      <div class="article-layout">
        <aside class="article-aside">
          <span>Field note</span>
          <p>Wages -> Allocation -> Assets -> Optionality</p>
        </aside>
        <div class="article-body">
          ${post.body.map((para) => dual(para, "p")).join("")}
          <figure class="cashflow-figure">
            <span>Payday</span><span>Living cost</span><span>Core</span><span>Growth</span><span>Distribution</span><strong>Optionality</strong>
          </figure>
        </div>
      </div>
    </article>
  `;

  return pageShell({
    key: "library",
    file: `posts/${post.slug}/index.html`,
    depth: 2,
    title: post.title,
    description: post.summary,
    main,
  });
}

function renderSubscribe() {
  return `<section class="subscribe-section" id="subscribe">
    <div class="subscribe-copy reveal">
      ${dual({ zh: "Waitlist", en: "Waitlist" }, "p", ' class="eyebrow"')}
      ${dual({ zh: "这本书还在写。先留下一个安静的位置。", en: "The book is still being written. Leave a quiet seat for now." }, "h2")}
      ${dual({ zh: "等第一批章节、公开片段和写作进度准备好，我会先发给等候名单里的读者。", en: "When early chapters, public fragments, and writing updates are ready, I will send them to early readers first." }, "p")}
    </div>
    <form class="subscribe-form reveal" id="subscribe-form" novalidate>
      <label for="email">Email</label>
      <div class="input-row">
        <input id="email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required />
        <button type="submit">${dualPlain({ zh: "加入", en: "Join" })}</button>
      </div>
      <p class="form-help" id="form-help" aria-live="polite">${dualPlain({ zh: "目前只做格式验证，后续接入 newsletter 服务。", en: "For now this only validates the email format. A newsletter service can be connected later." })}</p>
    </form>
  </section>`;
}

async function writePage(page) {
  const out = path.join(siteRoot, page.file);
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out, page.render(page), "utf8");
}

async function cleanGeneratedDirs() {
  for (const dir of ["book", "resources", "library", "appendix", "cases", "concepts", "posts"]) {
    await rm(path.join(siteRoot, dir), { recursive: true, force: true });
  }
}

await cleanGeneratedDirs();
for (const page of [...pages, ...postPages]) {
  await writePage(page);
}

console.log(`Generated ${pages.length + postPages.length} pages.`);
