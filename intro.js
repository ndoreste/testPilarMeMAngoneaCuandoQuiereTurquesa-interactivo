document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.createElement("div");
  overlay.className = "intro-overlay";

  const title = "TESTS INTERACTIVOS";
  const subtitle = "1º ASIR";

  overlay.innerHTML = `
    <div class="intro-content">
      <h1>
        ${title
          .split("")
          .map(
            (letter, i) =>
              `<span style="--i:${i}">${letter === " " ? "&nbsp;" : letter}</span>`,
          )
          .join("")}
      </h1>
      <p>
        ${subtitle
          .split("")
          .map(
            (letter, i) =>
              `<span style="--i:${i + title.length}">${letter === " " ? "&nbsp;" : letter}</span>`,
          )
          .join("")}
      </p>
    </div>
  `;

  // Insertar overlay
  document.body.prepend(overlay);

  // Bloquear scroll
  document.body.classList.add("intro-active");

  // Iniciar desaparición
  setTimeout(() => {
    overlay.classList.add("intro-hide");
    document.body.classList.remove("intro-active");
  }, 2600);

  // Eliminar del DOM
  setTimeout(() => {
    overlay.remove();
  }, 4300);
});
