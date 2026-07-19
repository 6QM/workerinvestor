const root = document.documentElement;
const form = document.querySelector("#subscribe-form");
const email = document.querySelector("#email");
const help = document.querySelector("#form-help");
const themeToggle = document.querySelector("#theme-toggle");
const scrollProgress = document.querySelector("#scroll-progress");
const accordion = document.querySelector("[data-accordion]");
const readerCard = document.querySelector("#reader-card");
const pageNavLinks = [...document.querySelectorAll(".nav-links a[href^='#']")];
const readerTocLinks = [...document.querySelectorAll(".reader-toc a")];
const revealItems = [...document.querySelectorAll(".reveal")];
const heroBook = document.querySelector("#hero-book");
const bookProgress = document.querySelector("#book-page-status");
const bookPrev = document.querySelector("[data-book-prev]");
const bookNext = document.querySelector("[data-book-next]");
const bookToggle = document.querySelector("[data-book-toggle]");
const langButtons = [...document.querySelectorAll("[data-lang-switch]")];
const translatableItems = [...document.querySelectorAll("[data-i18n]")];
const ariaTranslatableItems = [...document.querySelectorAll("[data-i18n-aria-label]")];
const defaultText = Object.fromEntries(
  translatableItems.map((item) => [
    item.dataset.i18n,
    item.dataset.i18nMode === "html" ? item.innerHTML : item.textContent,
  ]),
);
const defaultAria = Object.fromEntries(
  ariaTranslatableItems.map((item) => [item.dataset.i18nAriaLabel, item.getAttribute("aria-label") || ""]),
);
const bookPageLabels = {
  zh: ["封面 00 / 03", "扉页 01 / 03", "目录 02 / 03", "作者札记 03 / 03"],
  en: ["Cover 00 / 03", "Title 01 / 03", "Contents 02 / 03", "Author note 03 / 03"],
};
const translations = {
  zh: {
    ...defaultText,
    ...defaultAria,
    documentTitle: "The Worker Investor / 工资之外",
    documentDescription:
      "《The Worker Investor / 工资之外》是刘乔迈写给普通 worker 的长期转型之书，关于工资、技能、人力资本、资产系统和未来选择权。",
    bookToggleOpen: "打开书本",
    bookToggleClose: "合上书本",
    bookAriaPrefix: "The Worker Investor 可翻页书本，当前为",
    formError: "请先输入一个有效的 Email 地址。",
    formSuccess: "邮箱格式正确。当前不会保存地址；等候名单正式开放后会接收章节更新。",
  },
  en: {
    skipLink: "Skip to content",
    brandAria: "The Worker Investor home",
    navThesis: "Thesis",
    navFramework: "Framework",
    navAuthor: "Author",
    navNotes: "Path",
    navContents: "Contents",
    navHce: "HCE",
    navRead: "Read",
    languageAria: "Language switcher",
    themeAria: "Toggle dark mode",
    heroKickerLeft: "Book in Progress / Reader Preview",
    heroKickerRight: "Wages -> Ownership -> Optionality",
    heroEyebrow: "A book for ordinary workers inside real constraints",
    heroTitle: "Beyond Wages<br /><span>The Worker Investor</span>",
    heroLede:
      "This book records how a worker still inside the system can turn wages, skills, content, and systems into future optionality.",
    heroThesisLabel: "Core thesis",
    heroThesisCopy:
      "Worker gets cash flow. Investor turns cash flow into ownership, optionality, and future time.",
    heroPrimary: "Read the thesis",
    heroSecondary: "Meet the author",
    bookKicker: "01 / Reader preview",
    bookHeading: "Open a book written for ordinary workers.",
    bookCopy:
      "Click or swipe to turn pages. The full contents, progress, and excerpt are below.",
    bookTitleKicker: "book in progress",
    bookTitleNote: "Not a manual. Not a promise. A map.",
    bookContentsKicker: "contents",
    bookContentsTitle: "Contents",
    bookJourneyKicker: "author note",
    bookJourneyTitle: "Why I write",
    bookAuthorNoteOne: "Qiaomai Liu / working engineer",
    bookAuthorNoteTwo: "How today's labor can be preserved for the future",
    bookAuthorNoteThree: "Wages, skills, content, and review systems",
    bookAuthorNoteFour: "Do not mythologize quitting; do not mythologize staying",
    bookCoverKicker: "book in progress",
    bookCoverSmall: "wages -> optionality",
    bookBackCopy: "Beyond wages is not beyond work. It is beyond a single path.",
    bookPrevAria: "Previous page",
    bookNextAria: "Next page",
    thesisEyebrow: "Thesis",
    thesisTitle: "The goal is not to escape work. It is to stop remaining only at the layer of selling time.",
    thesisCopy:
      "This book starts from the reality of ordinary workers: wages provide safety and reveal a boundary; modern work consumes more than time; what must be reclaimed is not only time, but attention, judgment, the body, learning capacity, and future optionality.",
    coreSentenceLabel: "Core sentence",
    ledgerWages: "Wages",
    ledgerSavings: "Savings",
    ledgerInvesting: "Investing",
    ledgerSkills: "Skills",
    ledgerContent: "Content",
    ledgerSystem: "System",
    ledgerOptionality: "Optionality",
    authorEyebrow: "Author's note",
    authorTitle: "I am not writing this book from beyond wages.",
    authorCopy:
      "My name is Qiaomai Liu. I am still inside the work system as a commercial-vehicle thermal management engineer. Thermal management, engineering projects, and wage cash flow are where I first understand Core; AI, writing, and public expression are where I observe Growth and Distribution.",
    authorCopyTwo:
      "I am writing Beyond Wages not to prove a success story, but to record how an ordinary worker can still preserve part of today's labor for the future under projects, performance pressure, family responsibility, and limited time.",
    authorWebsite: "Personal site ↗",
    authorEmail: "Email me",
    authorLinksAria: "Author contact links",
    authorFactOneLabel: "Identity",
    authorFactOneValue: "Commercial-vehicle thermal management engineer",
    authorFactTwoLabel: "Field",
    authorFactTwoValue: "Wages, projects, KPI, long-term learning",
    authorFactThreeLabel: "Question",
    authorFactThreeValue: "How labor becomes future optionality",
    frameworkEyebrow: "Visual framework",
    frameworkTitle: "Draw the shift from Worker to Investor as an asset-flow system.",
    frameworkCopy:
      "Readers can use this map to understand the book's main line: wages first provide cash flow, then cash flow is allocated into assets, capabilities, content, judgment, and future time.",
    levelOneLabel: "Level 1 / Exchange",
    levelOneTitle: "See the wage cash flow clearly",
    levelOneCopy:
      "First acknowledge the importance of wages, then track how much goes into spending, savings, investing, and learning.",
    levelTwoLabel: "Level 2 / Allocation",
    levelTwoTitle: "Design the Human Capital ETF",
    levelTwoCopy:
      "Health, cash flow, career ability, AI, writing, and review systems belong on the same personal balance sheet.",
    levelThreeLabel: "Level 3 / Ownership",
    levelThreeTitle: "Let part of the output work beyond hours",
    levelThreeCopy:
      "When content, skills, capital, and reputation start creating feedback, work is no longer the only place where the future is built.",
    mapKicker: "Worker -> Investor map",
    mapTitle: "From cash flow to optionality",
    flowIncomeLabel: "Earned income",
    flowIncomeTitle: "Wages",
    flowAllocationLabel: "Allocation",
    flowAllocationTitle: "Allocate",
    flowAssetsLabel: "Assets",
    flowAssetsTitle: "Assets",
    flowOptionalityLabel: "Optionality",
    flowOptionalityTitle: "Future time",
    frictionLabel: "Friction",
    frictionTitle: "Spending / Tax / Attention",
    coreMapTitle: "Health + career ability",
    growthMapTitle: "AI + reading + writing",
    distributionMapTitle: "Articles + public expression",
    metaMapTitle: "Review + rebalance",
    principlesEyebrow: "Worker Investor principles",
    principlesTitle: "Six principles set the boundary for this book.",
    principleOneTitle: "Wages are the entrance, not the destination.",
    principleOneCopy:
      "Wages keep a person alive first. Then they can become principal, skills, content, and systems.",
    principleTwoTitle: "Exchange is necessary, but bounded.",
    principleTwoCopy: "Trading time for wages is a starting point. The question is whether the future can be built beyond that trade.",
    principleThreeTitle: "Ownership is a second identity.",
    principleThreeCopy: "An investor is not merely someone who trades stocks. It is someone who turns resources into future assets.",
    principleFourTitle: "Human capital also needs allocation.",
    principleFourCopy: "Health, career line, AI, writing, and review systems all belong on the human balance sheet.",
    principleFiveTitle: "Content is distributable experience.",
    principleFiveCopy: "An article, a public point of view, or a reusable method can keep working after today's thinking is done.",
    principleSixTitle: "Optionality matters more than a wealth number.",
    principleSixCopy: "The point is not to stop working. It is to make sure the future is not arranged through only one path.",
    tocEyebrow: "Contents as a path",
    tocTitle: "See the path first, then enter the excerpt.",
    tocCopy:
      "The contents reflect the latest writing progress, so readers can see what is drafted, what is being written, and what is still planned. The complete manuscript will be published when it is mature.",
    tocSnapshot: "Progress snapshot · 2026-07-05 · drafted manuscript: about 28,600 Chinese characters",
    tocStatusDraftedPreface: "Drafted / Done · about 4,600 Chinese characters",
    tocStatusWriting: "Writing / In progress",
    tocStatusDraftedCh01: "Drafted / Done · about 15,000 Chinese characters",
    tocStatusPlanned: "Planned / Not started",
    tocStatusWritingMusk: "Writing / In progress · about 9,000 Chinese characters",
    tocPrefaceTitle: "Preface",
    tocPrefaceItem: "Preface",
    tocPartOneTitle: "Part I · Starting from the worker's reality",
    tocCh01: "Starting point: why I started thinking about Worker Investor",
    tocCh02: "The safety of wages, and their boundary",
    tocCh03: "The modern worker problem: we sell more than time",
    tocCh04: "From factory bells to calendars, KPI, and AI",
    tocPartTwoTitle: "Part II · Worker Investor Mindset",
    tocCh05: "Cash flow and principal: treating wages as fuel, not identity",
    tocCh06: "Real and fake markets: gold e-trading, casinos, and probability literacy",
    tocCh07: "Ownership and cycles: how stocks are born, and how they go mad",
    tocCh08: "Financial base: ETFs and the long-term odds of the Worker Investor",
    tocPartThreeTitle: "Part III · Human Capital ETF: configuring the self as a long-compounding asset",
    tocCh09: "Investing is not only money: the worker's asset stack",
    tocCh10: "Core: the worker's principal begins with health and a career line",
    tocCh11: "Growth: skills, AI, and future cash flow",
    tocCh12: "Distribution: content assets, expression, and visibility",
    tocCh13: "Meta: review, thinking, and rebalancing",
    tocPartFourTitle: "Part IV · Case Studies: Transformation Paths",
    tocCaseMusk: "Before the trillion-dollar empire: Musk's worker period",
    tocCaseCarnegie: "Working Operator in the Gilded Age: how Carnegie compounded telegraph skills into steel infrastructure",
    tocCaseFranklin: "Benjamin Franklin: an Enlightenment-era sample of beyond wages",
    tocCaseNaval: "Naval Ravikant: from renting time to owning leverage",
    tocConclusionTitle: "Conclusion · Becoming a Worker Investor",
    tocConclusionItem: "Becoming a Worker Investor: increasing future optionality",
    portfolioEyebrow: "Human Capital ETF",
    portfolioTitle: "Human Capital ETF is the method layer, not another slogan.",
    portfolioCopy:
      "Part III turns 'investing in yourself' from a slogan into a reading framework: what assets a worker owns, which assets depreciate, which can compound, and which need regular rebalancing.",
    portfolioCoreTitle: "What assets do I actually own?",
    portfolioCoreCopy:
      "Wages are only cash flow. The deeper inventory includes health, career ability, judgment, learning capacity, and transferable experience.",
    portfolioGrowthTitle: "How should the self be allocated?",
    portfolioGrowthCopy:
      "Core protects the base, Growth expands capability, Distribution makes experience visible, and Meta reviews and rebalances.",
    portfolioDistributionTitle: "How can the portfolio be reviewed?",
    portfolioDistributionCopy:
      "When time, body, and attention are being consumed, a worker needs to check which inputs are becoming future optionality.",
    notesEyebrow: "Reader path",
    notesTitle: "Readers can enter this book through four stages.",
    notesCopy:
      "This section keeps the reading order: first see the worker's reality, then understand wages, markets, and principal, enter Human Capital ETF and the cases, and finally return to one goal: increasing future optionality.",
    insightOneLabel: "Part I",
    insightOneValue: "See the reality",
    insightOneCopy: "The safety of wages, the real cost of modern work, and how systems shape workers.",
    insightTwoLabel: "Part II-III",
    insightTwoValue: "Understand allocation",
    insightTwoCopy: "Cash flow, principal, real and fake markets, ETFs, and Human Capital ETF.",
    insightThreeLabel: "Part IV",
    insightThreeValue: "Enter the cases",
    insightThreeCopy: "Observe how Musk, Carnegie, Franklin, and Naval turn labor experience into leverage.",
    insightFourLabel: "Conclusion",
    insightFourValue: "Increase optionality",
    insightFourCopy:
      "The conclusion loops back to the worker's reality and mindset shift: becoming a Worker Investor means slowly freeing the future from a single path.",
    postOneType: "Current draft",
    postOneStatus: "Drafted",
    postOneTitle: "Start with the Preface and Ch01",
    postOneCopy:
      "Begin with the book's starting point: payday brings safety, but also asks how today's labor can be preserved for the future.",
    postContentsCta: "View contents",
    postTwoType: "Writing now",
    postTwoStatus: "Part I",
    postTwoTitle: "Modern work consumes more than time",
    postTwoCopy:
      "Ch03 is working through a sharper question: work often buys attention, recovery, emotion, and future imagination too.",
    postReadCta: "Read excerpt",
    postThreeType: "Publication",
    postThreeStatus: "Later",
    postThreeTitle: "The full book will be published on GitHub",
    postThreeCopy:
      "For now, readers will find the book introduction, progress, and excerpt here. When the full manuscript is mature, it will be published in a more durable form.",
    postSubscribeCta: "Subscribe",
    readingEyebrow: "Excerpt room",
    readingTitle: "Read a short passage first, then judge the direction.",
    readingCopy:
      "This excerpt is not a complete chapter. It keeps only the core question and voice. The full manuscript will be published in a more durable form when ready.",
    readerTocLabel: "Reading path",
    readerTocOne: "Wages",
    readerTocTwo: "Consumption",
    readerTocThree: "Assets",
    chapterLabel: "Preface / excerpt",
    excerptTitle: "Beyond wages is not beyond work.",
    excerptOne:
      "I am still inside the work system too. Wages give me safety, and also remind me of the boundary: if the future can only come from selling the same block of time, I own very little optionality.",
    excerptQuote:
      "The Worker Investor is not someone who stops working. It is someone who stops treating work as the only place where the future can be built.",
    excerptTwo:
      "Wages are the first cash flow, but modern work consumes more than time. Meetings, KPI, notifications, urgent demands, and AI-driven efficiency inflation all reprice a worker's attention, body, and recovery capacity.",
    excerptThree:
      "If what we sell is more than time, then what we need to reclaim is more than time. The Worker Investor turns wages, skills, experience, writing, judgment, and financial assets into future optionality.",
    subscribeEyebrow: "Waitlist",
    subscribeTitle: "The book is still being written. Leave a quiet seat for now.",
    subscribeCopy: "When the first chapters, public fragments, and writing updates are ready, I will send them to early readers first.",
    subscribeButton: "Join",
    formHelp: "Before the waitlist officially opens, this form will not store email addresses.",
    footerCopy: "A book in progress by Qiaomai Liu.",
    footerWebsite: "Personal site",
    footerEmail: "Email",
    footerHce: "Human Capital ETF",
    footerSitemap: "Sitemap",
    footerLinksAria: "Footer links",
    documentTitle: "The Worker Investor / Beyond Wages",
    documentDescription:
      "The Worker Investor / Beyond Wages is a book in progress about turning wages, skills, time, and judgment into future optionality.",
    bookToggleOpen: "Open book",
    bookToggleClose: "Close book",
    bookAriaPrefix: "The Worker Investor page-turning book preview, current page: ",
    formError: "Please enter a valid email address.",
    formSuccess: "Email format validated. This form is not storing addresses before the waitlist officially opens.",
  },
};

let bookPage = 0;
let bookPointerStart = null;
let ignoreBookClick = false;
let currentLang = "zh";

function translate(key) {
  return translations[currentLang]?.[key] || translations.zh[key] || key;
}

function applyLanguage(lang) {
  currentLang = translations[lang] ? lang : "zh";
  root.dataset.lang = currentLang;
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  localStorage.setItem("workerInvestorLang", currentLang);
  document.title = translate("documentTitle");

  const description = document.querySelector("meta[name='description']");
  if (description) {
    description.setAttribute("content", translate("documentDescription"));
  }

  translatableItems.forEach((item) => {
    const value = translate(item.dataset.i18n);
    if (item.dataset.i18nMode === "html") {
      item.innerHTML = value;
    } else {
      item.textContent = value;
    }
  });

  ariaTranslatableItems.forEach((item) => {
    item.setAttribute("aria-label", translate(item.dataset.i18nAriaLabel));
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === currentLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (bookProgress) {
    setBookPage(bookPage);
  }
}

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("workerInvestorTheme", theme);

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  }
}

const storedTheme = localStorage.getItem("workerInvestorTheme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
setTheme(storedTheme || preferredTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
}

if (langButtons.length) {
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.langSwitch);
    });
  });
}

function updateScrollProgress() {
  if (!scrollProgress) return;

  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
  scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

if (pageNavLinks.length) {
  const pageSections = pageNavLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function updateActiveNav() {
    const current =
      pageSections
        .map((section) => ({ id: section.id, top: section.getBoundingClientRect().top }))
        .filter((section) => section.top <= 150)
        .at(-1) || { id: pageSections[0]?.id };

    pageNavLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${current.id}`);
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  window.addEventListener("resize", updateActiveNav);
  updateActiveNav();
}

function clampBookPage(page) {
  return Math.min(Math.max(page, 0), bookPageLabels[currentLang].length - 1);
}

function setBookPage(page) {
  if (!heroBook) return;

  bookPage = clampBookPage(page);
  const labels = bookPageLabels[currentLang];
  heroBook.dataset.page = String(bookPage);
  heroBook.classList.toggle("is-open", bookPage > 0);
  heroBook.setAttribute("aria-label", `${translate("bookAriaPrefix")}${labels[bookPage]}`);

  if (bookProgress) {
    bookProgress.textContent = labels[bookPage];
  }

  if (bookPrev) {
    bookPrev.disabled = bookPage === 0;
  }

  if (bookNext) {
    bookNext.disabled = bookPage === labels.length - 1;
  }

  if (bookToggle) {
    bookToggle.textContent = bookPage > 0 ? translate("bookToggleClose") : translate("bookToggleOpen");
  }
}

function turnBook(delta) {
  setBookPage(bookPage + delta);
}

function toggleBook() {
  setBookPage(bookPage > 0 ? 0 : 1);
}

function advanceBookOrClose() {
  setBookPage(bookPage === bookPageLabels[currentLang].length - 1 ? 0 : bookPage + 1);
}

const storedLanguage = localStorage.getItem("workerInvestorLang");
applyLanguage(storedLanguage || "zh");

if (heroBook) {
  setBookPage(0);

  const wakeBook = () => {
    heroBook.classList.add("is-hovered");
  };

  const restBook = () => {
    heroBook.classList.remove("is-hovered");
  };

  heroBook.addEventListener("pointerenter", wakeBook);
  heroBook.addEventListener("pointerleave", restBook);
  heroBook.addEventListener("mouseenter", wakeBook);
  heroBook.addEventListener("mouseleave", restBook);
  heroBook.addEventListener("focus", wakeBook);
  heroBook.addEventListener("blur", restBook);

  heroBook.addEventListener("pointerdown", (event) => {
    bookPointerStart = { x: event.clientX, y: event.clientY };
    ignoreBookClick = false;
    heroBook.setPointerCapture?.(event.pointerId);
  });

  heroBook.addEventListener("pointerup", (event) => {
    if (!bookPointerStart) return;

    const deltaX = event.clientX - bookPointerStart.x;
    const deltaY = event.clientY - bookPointerStart.y;
    bookPointerStart = null;

    if (Math.abs(deltaX) < 34 || Math.abs(deltaX) < Math.abs(deltaY) * 1.3) return;

    ignoreBookClick = true;
    if (deltaX < 0) {
      turnBook(1);
    } else {
      turnBook(-1);
    }
  });

  heroBook.addEventListener("pointercancel", () => {
    bookPointerStart = null;
  });

  heroBook.addEventListener("click", () => {
    if (ignoreBookClick) {
      ignoreBookClick = false;
      return;
    }

    advanceBookOrClose();
  });

  heroBook.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      advanceBookOrClose();
    }

    if (event.key === "ArrowRight" || event.key === "PageDown") {
      event.preventDefault();
      turnBook(1);
    }

    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      turnBook(-1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      setBookPage(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      setBookPage(bookPageLabels[currentLang].length - 1);
    }
  });
}

bookPrev?.addEventListener("click", () => {
  turnBook(-1);
  heroBook?.focus({ preventScroll: true });
});

bookNext?.addEventListener("click", () => {
  turnBook(1);
  heroBook?.focus({ preventScroll: true });
});

bookToggle?.addEventListener("click", () => {
  toggleBook();
  heroBook?.focus({ preventScroll: true });
});

if (accordion) {
  accordion.addEventListener("click", (event) => {
    const trigger = event.target.closest(".toc-trigger");
    if (!trigger) return;

    const item = trigger.closest(".toc-item");
    const isOpen = item.classList.contains("is-open");

    accordion.querySelectorAll(".toc-item").forEach((tocItem) => {
      tocItem.classList.remove("is-open");
      tocItem.querySelector(".toc-trigger")?.setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
}

if (readerCard) {
  let readerScale = 0;

  document.querySelectorAll("[data-font]").forEach((button) => {
    button.addEventListener("click", () => {
      readerScale += button.dataset.font === "larger" ? 0.06 : -0.06;
      readerScale = Math.min(0.24, Math.max(-0.18, readerScale));
      readerCard.style.setProperty("--reader-size", `${1.12 + readerScale}rem`);
    });
  });

  document.querySelectorAll("[data-reading-tone]").forEach((button) => {
    button.addEventListener("click", () => {
      readerCard.dataset.tone = button.dataset.readingTone;
    });
  });
}

if (readerTocLinks.length) {
  const readerTargets = readerTocLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const readerObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      readerTocLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-20% 0px -55%", threshold: [0.2, 0.5, 0.8] },
  );

  readerTargets.forEach((target) => readerObserver.observe(target));
}

if (revealItems.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12%", threshold: 0.12 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

if (form && email && help) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = email.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!valid) {
      help.dataset.state = "error";
      help.textContent = translate("formError");
      email.focus();
      return;
    }

    help.dataset.state = "success";
    help.textContent = translate("formSuccess");
  });
}
