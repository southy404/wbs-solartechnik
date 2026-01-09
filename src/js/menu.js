document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuButton");
  const menu = document.getElementById("mobileMenu");
  const lines = btn?.querySelectorAll(".menu-line");

  if (!btn || !menu || !lines) return;

  const openMenu = () => {
    menu.classList.remove("hidden");
    lines[0].style.transform = "translateY(0) rotate(45deg)";
    lines[1].style.opacity = "0";
    lines[2].style.transform = "translateY(0) rotate(-45deg)";
  };

  const closeMenu = () => {
    menu.classList.add("hidden");
    lines[0].style.transform = "translateY(-6px)";
    lines[1].style.opacity = "1";
    lines[2].style.transform = "translateY(6px)";
  };

  btn.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    isOpen ? closeMenu() : openMenu();
  });

  menu.addEventListener("click", (e) => {
    if (e.target === menu) closeMenu();
  });
});
