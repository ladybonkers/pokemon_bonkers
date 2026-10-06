/* =========================================================
   script.js — menu mobile + details
============================================================ */

// ---- Menu mobile ----
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    nav.classList.toggle("open");
  });

  // Open and close menu when clicking on a link
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("open");
      nav.classList.remove("open");
    });
  });
}

// ---- Smooth scroll ----
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    if (id === "#") return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ---- Log  ----
console.log(
  "%c⚡ Bonkers Pokédex %c loaded",
  "background: #ee1515; color: #fff; padding: 4px 8px; border-radius: 4px; font-weight: bold;",
  "color: #ffcb05; font-weight: bold;"
);