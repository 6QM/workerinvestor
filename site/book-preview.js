const stage = document.querySelector("#book-stage");
const toggle = document.querySelector(".book-toggle");

function setBookOpen(open) {
  if (!stage || !toggle) return;

  stage.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "合上书本" : "打开章节";
}

if (stage && toggle) {
  toggle.addEventListener("click", () => {
    setBookOpen(!stage.classList.contains("is-open"));
  });

  stage.addEventListener("click", () => {
    setBookOpen(!stage.classList.contains("is-open"));
  });

  stage.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    setBookOpen(!stage.classList.contains("is-open"));
  });
}
