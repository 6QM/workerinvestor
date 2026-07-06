const root = document.documentElement;
const scrollProgress = document.querySelector("#scroll-progress");
const langButtons = [...document.querySelectorAll("[data-lang-switch]")];
const themeToggle = document.querySelector("#theme-toggle");
const revealItems = [...document.querySelectorAll(".reveal")];
const form = document.querySelector("#subscribe-form");
const email = document.querySelector("#email");
const help = document.querySelector("#form-help");

function setLanguage(lang) {
  const next = lang === "en" ? "en" : "zh";
  root.dataset.lang = next;
  root.lang = next === "zh" ? "zh-CN" : "en";
  localStorage.setItem("workerInvestorLang", next);

  langButtons.forEach((button) => {
    const active = button.dataset.langSwitch === next;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  const description = document.querySelector("meta[name='description']");
  if (description) {
    description.setAttribute("content", description.dataset[`description${next === "zh" ? "Zh" : "En"}`] || description.content);
  }
}

function setTheme(theme) {
  const next = theme === "dark" ? "dark" : "light";
  root.dataset.theme = next;
  localStorage.setItem("workerInvestorTheme", next);
  themeToggle?.setAttribute("aria-pressed", String(next === "dark"));
}

function updateScrollProgress() {
  if (!scrollProgress) return;

  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
  scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

const storedTheme = localStorage.getItem("workerInvestorTheme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
setTheme(storedTheme || preferredTheme);
setLanguage(localStorage.getItem("workerInvestorLang") || "zh");

themeToggle?.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langSwitch));
});

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

document.querySelectorAll(".book-object").forEach((book) => {
  book.addEventListener("click", () => {
    const state = Number(book.dataset.bookState || "0");
    book.dataset.bookState = String(state >= 2 ? 0 : state + 1);
  });

  book.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    book.click();
  });
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
    document.querySelectorAll("[data-post-type]").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.postType !== filter;
    });
  });
});

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
    const lang = root.dataset.lang === "en" ? "en" : "zh";

    if (!valid) {
      help.dataset.state = "error";
      help.textContent = lang === "en" ? "Please enter a valid email address." : "请先输入一个有效的 Email 地址。";
      email.focus();
      return;
    }

    help.dataset.state = "success";
    help.textContent =
      lang === "en"
        ? "Format validated. A newsletter service can be connected later."
        : "已验证格式。后续接入 newsletter 服务后即可收集读者。";
  });
}
