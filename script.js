
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Abrir y cerrar el menú en dispositivos móviles
menuToggle.addEventListener("click", () => {
  const abierto = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(abierto));
  menuToggle.setAttribute(
    "aria-label",
    abierto ? "Cerrar menú" : "Abrir menú"
  );

  menuToggle.textContent = abierto ? "✕" : "☰";
});

// Cerrar el menú al seleccionar una sección
navLinks.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  });
});

// Actualizar automáticamente el año
document.getElementById("year").textContent =
  new Date().getFullYear();
