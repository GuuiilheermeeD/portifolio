const tabs = document.querySelectorAll(".tab-btn");
const highlight = document.querySelector(".highlight");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Remove a classe ativa de todos os botões
    tabs.forEach((t) => t.classList.remove("active"));
    // Adiciona a classe ativa ao botão clicado
    tab.classList.add("active");
    // Move o destaque
    highlight.style.transform = `translateX(${index * 100}%)`;
  });
});
