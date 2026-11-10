const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const header = document.querySelector(".site-header");

if (btn && menu) {
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    btn.textContent = open ? "Close" : "Menu";
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "Menu";
    });
  });
}
if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  });
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
