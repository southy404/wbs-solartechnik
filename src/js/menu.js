document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuButton");
  const menu = document.getElementById("mobileMenu");
  const lines = btn?.querySelectorAll(".menu-line");

  if (!btn || !menu || !lines) return;

  btn.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");

    menu.classList.toggle("hidden");

    // ☰ ↔ X Animation
    lines[0].style.transform = isOpen
      ? "translateY(-6px) rotate(0deg)"
      : "translateY(0) rotate(45deg)";

    lines[1].style.opacity = isOpen ? "1" : "0";

    lines[2].style.transform = isOpen
      ? "translateY(6px) rotate(0deg)"
      : "translateY(0) rotate(-45deg)";
  });

  menu.addEventListener("click", (e) => {
    if (e.target === menu) {
      menu.classList.add("hidden");

      lines[0].style.transform = "translateY(-6px) rotate(0deg)";
      lines[1].style.opacity = "1";
      lines[2].style.transform = "translateY(6px) rotate(0deg)";
    }
  });
});
