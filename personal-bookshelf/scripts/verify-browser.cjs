const { chromium } = require("playwright");

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const baseUrl = "http://localhost:3000";

async function collectPageState(page) {
  return page.evaluate(() => ({
    title: document.querySelector("h1")?.textContent?.trim() ?? "",
    overlay: Boolean(
      document.querySelector(
        "[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay"
      )
    ),
    hasContent: document.body.innerText.trim().length > 0,
    shelfCount: document.querySelectorAll(".shelf-row").length,
    bookCount: document.querySelectorAll(".book-button").length,
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth
  }));
}

async function main() {
  const browser = await chromium.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--disable-gpu", "--no-sandbox"]
  });

  const consoleMessages = [];
  const failedResponses = [];
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type())) {
      consoleMessages.push({ type: message.type(), text: message.text() });
    }
  });
  page.on("pageerror", (error) => {
    consoleMessages.push({ type: "pageerror", text: error.message });
  });
  page.on("response", (response) => {
    if (response.status() >= 400) {
      failedResponses.push({ status: response.status(), url: response.url() });
    }
  });

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.screenshot({ path: "/private/tmp/personal-bookshelf-desktop.png", fullPage: false });
  const desktop = await collectPageState(page);

  await page.keyboard.press("Tab");
  await page.waitForTimeout(320);
  const focusState = await page.evaluate(() => {
    const active = document.activeElement;
    const object = active?.querySelector?.(".book-object");
    return {
      isBookFocused: active?.classList.contains("book-button") ?? false,
      transform: object ? getComputedStyle(object).transform : ""
    };
  });

  await page.locator(".book-button").first().click();
  await page.waitForSelector(".book-drawer");
  const drawer = await page.evaluate(() => ({
    dialog: Boolean(document.querySelector(".book-drawer")),
    title: document.querySelector("#drawer-title")?.textContent?.trim() ?? "",
    link: document.querySelector(".note-link")?.getAttribute("href") ?? "",
    closeFocused: document.activeElement?.classList.contains("drawer-close") ?? false
  }));
  await page.keyboard.press("Escape");
  await page.waitForSelector(".book-drawer", { state: "detached" });

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.locator(".book-button").first().focus();
  const reducedMotion = await page.evaluate(() => {
    const active = document.activeElement;
    const object = active?.querySelector?.(".book-object");
    return {
      objectTransform: object ? getComputedStyle(object).transform : "",
      buttonTransform: active ? getComputedStyle(active).transform : ""
    };
  });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.screenshot({ path: "/private/tmp/personal-bookshelf-mobile.png", fullPage: false });
  const mobile = await page.evaluate(() => {
    const scroller = document.querySelector(".shelf-scroller");
    return {
      pageOverflow: document.documentElement.scrollWidth > window.innerWidth,
      shelfCanScroll: scroller ? scroller.scrollWidth > scroller.clientWidth : false,
      shelfCount: document.querySelectorAll(".shelf-row").length,
      bookCount: document.querySelectorAll(".book-button").length
    };
  });

  await browser.close();

  console.log(
    JSON.stringify(
      {
        desktop,
        focusState,
        drawer,
        reducedMotion,
        mobile,
        consoleMessages,
        failedResponses,
        screenshots: [
          "/private/tmp/personal-bookshelf-desktop.png",
          "/private/tmp/personal-bookshelf-mobile.png"
        ]
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
