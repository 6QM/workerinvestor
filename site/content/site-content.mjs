export const siteContent = {
  title: {
    zh: "The Worker Investor / 工资之外",
    en: "The Worker Investor / Beyond Wages",
  },
  description: {
    zh: "一个写给普通 worker 的长期书籍与研究项目：把工资、技能、内容、系统和资本逐步转化为未来选择权。",
    en: "A long-term book and research project for ordinary workers: turning wages, skills, content, systems, and capital into future optionality.",
  },
  nav: [
    { key: "home", href: "", label: { zh: "首页", en: "Home" } },
    { key: "book", href: "book/", label: { zh: "书", en: "Book" } },
    { key: "resources", href: "resources/", label: { zh: "工具", en: "Resources" } },
    { key: "library", href: "library/", label: { zh: "研究库", en: "Library" } },
    { key: "appendix", href: "appendix/", label: { zh: "活附录", en: "Appendix" } },
    { key: "cases", href: "cases/", label: { zh: "案例", en: "Cases" } },
    { key: "concepts", href: "concepts/", label: { zh: "概念", en: "Concepts" } },
  ],
  hero: {
    eyebrow: {
      zh: "Book first. Research always.",
      en: "Book first. Research always.",
    },
    title: {
      zh: "工资之外，<br>不是工作之外。",
      en: "Beyond wages<br>is not beyond work.",
    },
    subtitle: {
      zh: "我正在把 The Worker Investor 做成一个有实体书感、资源系统和长期更新能力的现代非虚构项目：工资结算劳动，资产保存劳动。",
      en: "I am building The Worker Investor as a modern nonfiction project with a real book object, a practice system, and a long-running archive: wages settle labor, assets preserve labor.",
    },
    primary: { zh: "进入书籍结构", en: "Open the book map" },
    secondary: { zh: "打开工具系统", en: "Explore resources" },
  },
  thesis: {
    zh: "Worker gets cash flow. Investor converts cash flow into ownership, optionality, and future time.",
    en: "Worker gets cash flow. Investor converts cash flow into ownership, optionality, and future time.",
  },
  publishingLayers: [
    {
      key: "book",
      label: { zh: "Canonical Book", en: "Canonical Book" },
      title: { zh: "稳定判断进入书。", en: "Stable judgment enters the book." },
      body: {
        zh: "能经得住几年、代表核心主线的内容，才进入正式章节。书要克制、清晰、可反复读。",
        en: "Only ideas that can hold up for years and carry the main argument enter formal chapters. The book should stay restrained, clear, and rereadable.",
      },
    },
    {
      key: "appendix",
      label: { zh: "Living Appendix", en: "Living Appendix" },
      title: { zh: "复杂材料放进活附录。", en: "Complex material belongs in the living appendix." },
      body: {
        zh: "图表、模型、术语解释、章节补充、勘误和版本更新，可以持续扩展，不挤压正文。",
        en: "Charts, models, glossary notes, chapter supplements, corrections, and version notes can keep expanding without crowding the manuscript.",
      },
    },
    {
      key: "notes",
      label: { zh: "Field Notes", en: "Field Notes" },
      title: { zh: "新想法先发成 post。", en: "New ideas begin as posts." },
      body: {
        zh: "案例、数据、读书笔记、AI 观察和作者实验，先作为公开笔记积累时间戳和搜索入口。",
        en: "Cases, data, reading notes, AI observations, and personal experiments can first become public notes with timestamps and search surface.",
      },
    },
    {
      key: "private",
      label: { zh: "Private Draft", en: "Private Draft" },
      title: { zh: "还没想清楚的留在后台。", en: "Unclear thoughts stay backstage." },
      body: {
        zh: "原始素材、未成熟判断和私人复盘，不急着公开。网站只承载已经能帮助读者的版本。",
        en: "Raw notes, immature judgment, and private reviews do not need to be public. The site carries the version that can help a reader.",
      },
    },
  ],
  contentFlow: [
    { zh: "素材", en: "Raw material" },
    { zh: "公开笔记", en: "Public note" },
    { zh: "活附录", en: "Living appendix" },
    { zh: "章节", en: "Chapter" },
    { zh: "长期资产", en: "Long-term asset" },
  ],
  identitySignals: [
    {
      label: { zh: "Book object", en: "Book object" },
      title: { zh: "先让这本书像真实存在。", en: "First make the book feel real." },
      body: {
        zh: "封面、书脊、目录、样章和版本记录，会让读者意识到这不是临时生成页，而是一个认真出版物。",
        en: "Cover, spine, contents, sample pages, and version notes tell readers this is not a temporary generated page, but a serious publishing object.",
      },
    },
    {
      label: { zh: "Practice system", en: "Practice system" },
      title: { zh: "读完以后要能行动。", en: "Reading should lead to action." },
      body: {
        zh: "发薪日配置表、HCE 自测、90 天路线图和年度复盘，会把观点转成可执行系统。",
        en: "Payday sheets, HCE self-assessment, a 90-day plan, and annual review templates turn ideas into a practical system.",
      },
    },
    {
      label: { zh: "Living archive", en: "Living archive" },
      title: { zh: "书定版以后，网站继续生长。", en: "After the book is fixed, the site keeps growing." },
      body: {
        zh: "新案例、数据图表、AI workflow、勘误和补充分析，会进入研究库和活附录。",
        en: "New cases, data diagrams, AI workflows, corrections, and analysis continue in the library and living appendix.",
      },
    },
  ],
  principles: [
    {
      n: "01",
      tone: "blue",
      title: { zh: "工资是入口，不是终点。", en: "Wages are the entrance, not the destination." },
      body: {
        zh: "工资先让人活下来，然后才有机会被转化为本金、技能、内容和系统。",
        en: "Wages keep a person alive first. Then they can become principal, skills, content, and systems.",
      },
    },
    {
      n: "02",
      tone: "paper",
      title: { zh: "Exchange 必要，但有边界。", en: "Exchange is necessary, but bounded." },
      body: {
        zh: "用时间交换工资是起点；问题在于未来是否仍然只能继续交换。",
        en: "Trading time for wages is a starting point. The question is whether the future can be built beyond that trade.",
      },
    },
    {
      n: "03",
      tone: "green",
      title: { zh: "Ownership 是第二身份。", en: "Ownership is a second identity." },
      body: {
        zh: "Investor 不是炒股的人，而是把资源变成未来资产的人。",
        en: "An investor is not merely someone who trades stocks. It is someone who turns resources into future assets.",
      },
    },
    {
      n: "04",
      tone: "gold",
      title: { zh: "Human Capital 也需要配置。", en: "Human capital also needs allocation." },
      body: {
        zh: "健康、职业主线、AI、写作、网站和复盘系统，都属于人的资产表。",
        en: "Health, career line, AI, writing, websites, and review systems all belong on the human balance sheet.",
      },
    },
  ],
  bookParts: [
    {
      code: "00",
      status: { zh: "Drafted", en: "Drafted" },
      title: { zh: "Preface / 前言", en: "Preface" },
      items: [
        {
          label: "Preface",
          title: {
            zh: "工资之外，不是工作之外，而是单一路径之外",
            en: "Beyond wages is not beyond work, but beyond a single path",
          },
          status: { zh: "Ready", en: "Ready" },
        },
      ],
    },
    {
      code: "01",
      status: { zh: "Writing", en: "Writing" },
      title: { zh: "Part I - Worker 的现实处境", en: "Part I - The reality of the worker" },
      items: [
        {
          label: "Ch01",
          title: { zh: "我为什么开始思考 Worker Investor", en: "Why I started thinking about the Worker Investor" },
          status: { zh: "Drafted", en: "Drafted" },
        },
        {
          label: "Ch02",
          title: { zh: "工资给了安全感，也暴露了边界", en: "Wages give safety, and also reveal a boundary" },
          status: { zh: "Planned", en: "Planned" },
        },
        {
          label: "Ch03",
          title: { zh: "卖时间、KPI 与现代 worker 的困境", en: "Selling time, KPI, and the modern worker problem" },
          status: { zh: "Planned", en: "Planned" },
        },
      ],
    },
    {
      code: "02",
      status: { zh: "Mapping", en: "Mapping" },
      title: { zh: "Part II - Worker Investor Mindset", en: "Part II - Worker Investor Mindset" },
      items: [
        {
          label: "Ch04",
          title: { zh: "把工资看成燃料，而不是全部收入", en: "Wages as fuel, not the whole income story" },
          status: { zh: "Planned", en: "Planned" },
        },
        {
          label: "Ch05",
          title: { zh: "真假市场：你到底在和谁交易", en: "Real and fake markets: who are you actually trading with?" },
          status: { zh: "Planned", en: "Planned" },
        },
        {
          label: "Ch06",
          title: { zh: "ETF 底层逻辑：拒绝单点押注", en: "The ETF logic: refusing the single-point bet" },
          status: { zh: "Planned", en: "Planned" },
        },
      ],
    },
    {
      code: "03",
      status: { zh: "Core Theory", en: "Core Theory" },
      title: { zh: "Part III - Human Capital ETF", en: "Part III - Human Capital ETF" },
      items: [
        {
          label: "Core",
          title: { zh: "健康、现金流、职业能力与长期底仓", en: "Health, cash flow, career ability, and the long-term base" },
          status: { zh: "Planned", en: "Planned" },
        },
        {
          label: "Growth",
          title: { zh: "技能、AI、阅读、写作与新能力", en: "Skills, AI, reading, writing, and new capability" },
          status: { zh: "Planned", en: "Planned" },
        },
        {
          label: "Distribution",
          title: { zh: "把经验转化为内容资产", en: "Turning experience into content assets" },
          status: { zh: "Planned", en: "Planned" },
        },
        {
          label: "Meta",
          title: { zh: "时间分配、风险管理与再平衡", en: "Time allocation, risk management, and rebalancing" },
          status: { zh: "Planned", en: "Planned" },
        },
      ],
    },
    {
      code: "04",
      status: { zh: "Researching", en: "Researching" },
      title: { zh: "Part IV - Transformation Paths", en: "Part IV - Transformation Paths" },
      items: [
        {
          label: "Case",
          title: { zh: "Buffett：判断力与时间的长期复利", en: "Buffett: judgment and the long compounding of time" },
          status: { zh: "Research", en: "Research" },
        },
        {
          label: "Case",
          title: { zh: "Musk：工程、资本与叙事的高风险组合", en: "Musk: engineering, capital, and narrative as a high-risk portfolio" },
          status: { zh: "Research", en: "Research" },
        },
        {
          label: "Case",
          title: { zh: "Naval：代码、媒体与杠杆化判断", en: "Naval: code, media, and leveraged judgment" },
          status: { zh: "Research", en: "Research" },
        },
      ],
    },
  ],
  hcePositions: [
    {
      key: "Core",
      title: { zh: "生存和复利的底仓", en: "The base for survival and compounding" },
      body: { zh: "健康、现金流、职业主线、工程能力和底层学习能力。", en: "Health, cash flow, career line, engineering ability, and foundational learning." },
    },
    {
      key: "Growth",
      title: { zh: "面向未来的新能力", en: "New abilities aimed at the future" },
      body: { zh: "AI、代码、英语、阅读、写作，以及能够放大主业的新技能。", en: "AI, code, English, reading, writing, and skills that amplify the core work." },
    },
    {
      key: "Distribution",
      title: { zh: "把私人经验变成公开资产", en: "Turn private experience into public assets" },
      body: { zh: "文章、网站、视频、newsletter、作品集和可以被市场发现的表达。", en: "Articles, websites, videos, newsletters, portfolios, and output that can be discovered by the market." },
    },
    {
      key: "Meta",
      title: { zh: "再平衡系统", en: "The rebalancing system" },
      body: { zh: "时间分配、风险控制、复盘、注意力管理和长期方向。", en: "Time allocation, risk control, review, attention management, and long-term direction." },
    },
  ],
  resources: [
    {
      n: "01",
      type: { zh: "Sheet", en: "Sheet" },
      title: { zh: "Payday Allocation Sheet", en: "Payday Allocation Sheet" },
      body: {
        zh: "把每次工资拆成生活成本、Core、Growth、Distribution、Meta 和金融资产，让现金流被看见。",
        en: "Split every paycheck into living costs, Core, Growth, Distribution, Meta, and financial assets so cash flow becomes visible.",
      },
      status: { zh: "Planned", en: "Planned" },
    },
    {
      n: "02",
      type: { zh: "Assessment", en: "Assessment" },
      title: { zh: "Human Capital ETF Self-Assessment", en: "Human Capital ETF Self-Assessment" },
      body: {
        zh: "诊断 Core / Growth / Distribution / Meta 的当前权重，找出最脆弱的单点风险。",
        en: "Diagnose the current weight of Core / Growth / Distribution / Meta and identify the weakest single-point risk.",
      },
      status: { zh: "Planned", en: "Planned" },
    },
    {
      n: "03",
      type: { zh: "Plan", en: "Plan" },
      title: { zh: "90-Day Worker Investor Plan", en: "90-Day Worker Investor Plan" },
      body: {
        zh: "用 90 天建立一个最小可用系统：现金流记录、技能投入、公开输出和每周复盘。",
        en: "Use 90 days to build a minimum viable system: cash-flow tracking, skill investment, public output, and weekly review.",
      },
      status: { zh: "Planned", en: "Planned" },
    },
    {
      n: "04",
      type: { zh: "Report", en: "Report" },
      title: { zh: "Annual Human Capital Report", en: "Annual Human Capital Report" },
      body: {
        zh: "把一年里的健康、职业、技能、内容、资本和选择权做成一份个人年度报告。",
        en: "Turn health, career, skills, content, capital, and optionality into a personal annual report.",
      },
      status: { zh: "Concept", en: "Concept" },
    },
    {
      n: "05",
      type: { zh: "Prompt pack", en: "Prompt pack" },
      title: { zh: "AI Native Worker Workflow Pack", en: "AI Native Worker Workflow Pack" },
      body: {
        zh: "把 AI 用在阅读、写作、代码、复盘和个人资产系统，而不是只把它当作效率玩具。",
        en: "Use AI for reading, writing, code, review, and personal asset systems instead of treating it as a productivity toy.",
      },
      status: { zh: "Concept", en: "Concept" },
    },
    {
      n: "06",
      type: { zh: "Map", en: "Map" },
      title: { zh: "Worker Investor Reading Map", en: "Worker Investor Reading Map" },
      body: {
        zh: "整理关于工资、资本、AI、写作、职业和长期主义的阅读路径，作为书的外部索引。",
        en: "A reading path across wages, capital, AI, writing, career, and long-term thinking as an external index for the book.",
      },
      status: { zh: "Open", en: "Open" },
    },
  ],
  trustSignals: [
    {
      title: { zh: "作者页面", en: "Author page" },
      body: { zh: "说明我是谁，为什么从 worker 的位置写这本书。", en: "Explain who I am and why I am writing this from inside the worker condition." },
    },
    {
      title: { zh: "写作进度", en: "Writing progress" },
      body: { zh: "公开章节状态，让读者看到项目不是一次性生成。", en: "Show chapter status so readers can see this is not a one-off generated page." },
    },
    {
      title: { zh: "版本记录", en: "Version history" },
      body: { zh: "记录重要更新、勘误和结构调整。", en: "Record meaningful updates, corrections, and structural changes." },
    },
    {
      title: { zh: "参考资料", en: "References" },
      body: { zh: "把关键来源挂回章节、附录和案例。", en: "Attach important sources back to chapters, appendices, and cases." },
    },
  ],
  posts: [
    {
      slug: "wage-cashflow",
      type: { zh: "Data note", en: "Data note" },
      status: { zh: "Draft / preview", en: "Draft / preview" },
      date: "2026-07-04",
      title: { zh: "工资现金流如何进入资产系统", en: "How wage cash flow enters an asset system" },
      summary: {
        zh: "把发薪日画成一张流量图：生活成本、学习投入、金融资产和内容系统分别吃掉了多少现金流。",
        en: "A payday flow chart: living cost, learning, financial assets, and content systems each take a share of cash flow.",
      },
      body: [
        {
          zh: "工资不是羞耻，也不是终局。它是第一个可配置的现金流。真正的问题不是今天是否还需要工资，而是每一次发薪以后，有多少比例被消费掉，有多少比例变成了未来仍然能工作的东西。",
          en: "Wages are neither shameful nor final. They are the first cash flow that can be allocated. The real question is not whether I still need wages today, but what share of each payday becomes something that can keep working in the future.",
        },
        {
          zh: "我会把它拆成四个出口：生活成本保护 Core，学习和工具扩大 Growth，公开表达进入 Distribution，复盘和风险控制进入 Meta。这个分配不需要一开始完美，但需要被看见。",
          en: "I split it into four exits: living costs protect Core, learning and tools expand Growth, public output enters Distribution, and review plus risk control enters Meta. The allocation does not need to be perfect at first, but it needs to be visible.",
        },
        {
          zh: "这就是这个网站存在的原因之一：把原本散落在账单、笔记、项目和阅读里的东西，变成一个可以被复盘、被搜索、被继续建设的系统。",
          en: "That is one reason this site exists: to turn what is scattered across bills, notes, projects, and reading into a system that can be reviewed, searched, and continued.",
        },
      ],
    },
    {
      slug: "single-path-risk",
      type: { zh: "Case study", en: "Case study" },
      status: { zh: "Researching", en: "Researching" },
      date: "2026-07-04",
      title: { zh: "一个 worker 如何降低单一路径风险", en: "How a worker lowers single-path risk" },
      summary: {
        zh: "不是神化成功故事，而是追踪一个人如何增加第二技能、第二表达渠道和第二资产来源。",
        en: "Not worshiping a success story, but tracing how someone adds a second skill, channel of expression, and source of assets.",
      },
      body: [],
    },
    {
      slug: "digital-estate-build-log",
      type: { zh: "Build log", en: "Build log" },
      status: { zh: "Open", en: "Open" },
      date: "2026-07-04",
      title: { zh: "把个人网站做成 Digital Estate", en: "Turning a personal website into digital estate" },
      summary: {
        zh: "这个网站本身就是 Distribution：它把思想、目录、案例和长期搜索流量装进一个可维护系统。",
        en: "This site itself is Distribution: it puts ideas, contents, cases, and long-term search traffic into a maintainable system.",
      },
      body: [],
    },
    {
      slug: "book-identity-system",
      type: { zh: "Build log", en: "Build log" },
      status: { zh: "Open", en: "Open" },
      date: "2026-07-04",
      title: { zh: "为什么 The Worker Investor 需要实体书感", en: "Why The Worker Investor needs a physical book feel" },
      summary: {
        zh: "视觉不是装饰，而是第一层信任：封面、书脊、内页系统和资源页共同证明这是一个长期思想项目。",
        en: "Visual design is not decoration. Cover, spine, interior system, and resources together prove this is a long-term thought project.",
      },
      body: [],
    },
  ],
  appendixItems: [
    {
      n: "01",
      title: { zh: "章节补充", en: "Chapter supplements" },
      body: { zh: "每个 Part 后面保留补充阅读、未收录案例、概念延展和版本说明。", en: "Each Part can keep further reading, unused cases, concept extensions, and version notes." },
    },
    {
      n: "02",
      title: { zh: "图表与数据", en: "Charts and data" },
      body: { zh: "把工资现金流、Human Capital ETF、内容资产和风险敞口做成可复用图表。", en: "Wage cash flow, Human Capital ETF, content assets, and risk exposure can become reusable diagrams." },
    },
    {
      n: "03",
      title: { zh: "读者问题", en: "Reader questions" },
      body: { zh: "把高频问题整理成 FAQ，也让真实 worker 的困惑反过来校准这套框架。", en: "Frequently asked questions can become a living FAQ, and real worker confusion can recalibrate the framework." },
    },
    {
      n: "04",
      title: { zh: "案例索引", en: "Case index" },
      body: { zh: "把人物、行业、路径和关键转折点做成索引，方便以后持续添加。", en: "People, industries, paths, and turning points can become an index that keeps accepting new entries." },
    },
  ],
  cases: [
    {
      name: "Buffett",
      lane: { zh: "Judgment", en: "Judgment" },
      status: { zh: "Research", en: "Research" },
      title: { zh: "判断力与时间的长期复利", en: "Judgment and the long compounding of time" },
      body: { zh: "重点不是模仿投资结果，而是观察阅读、等待、资本配置和声誉如何形成长期优势。", en: "The point is not to mimic investment outcomes, but to observe how reading, waiting, capital allocation, and reputation form long-term advantage." },
    },
    {
      name: "Musk",
      lane: { zh: "Engineering", en: "Engineering" },
      status: { zh: "Research", en: "Research" },
      title: { zh: "工程、资本与叙事的高风险组合", en: "Engineering, capital, and narrative as a high-risk portfolio" },
      body: { zh: "适合作为反脆弱和集中风险的双面案例：巨大杠杆背后也有巨大波动。", en: "A two-sided case for antifragility and concentration risk: enormous leverage also creates enormous volatility." },
    },
    {
      name: "Naval",
      lane: { zh: "Leverage", en: "Leverage" },
      status: { zh: "Research", en: "Research" },
      title: { zh: "代码、媒体与杠杆化判断", en: "Code, media, and leveraged judgment" },
      body: { zh: "用代码和媒体把判断力从一次性劳动里释放出来，是 Distribution 的重要案例。", en: "Using code and media to release judgment from one-off labor makes a strong Distribution case." },
    },
  ],
  concepts: [
    {
      term: "Worker",
      definition: { zh: "依赖工资和组织系统生活的人。这里不是身份贬低，而是现实起点。", en: "A person who lives through wages and organizational systems. This is not an insult; it is the starting condition." },
    },
    {
      term: "Investor",
      definition: { zh: "把资源转化为未来资产的人，不只是买卖股票的人。", en: "Someone who turns resources into future assets, not merely someone who trades stocks." },
    },
    {
      term: "Ownership",
      definition: { zh: "对资产、系统、判断、内容和未来选择权拥有一部分控制。", en: "Partial control over assets, systems, judgment, content, and future optionality." },
    },
    {
      term: "Optionality",
      definition: { zh: "未来不被单一路径锁死的能力。它可能来自现金、技能、声誉、健康、内容和关系。", en: "The ability not to be locked into a single future path. It can come from cash, skills, reputation, health, content, and relationships." },
    },
    {
      term: "Human Capital ETF",
      definition: { zh: "把自己看成一个需要配置、复盘和再平衡的长期组合。", en: "A way to treat the self as a long-term portfolio that needs allocation, review, and rebalancing." },
    },
    {
      term: "Distribution",
      definition: { zh: "把私人经验变成可被发现、分享、引用和持续工作的公开资产。", en: "Turning private experience into public assets that can be discovered, shared, cited, and keep working." },
    },
  ],
};
