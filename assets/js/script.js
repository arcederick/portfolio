const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Alterna entre as variáveis de tema no modo escuro
document.body.classList.toggle("dark-mode", localStorage.getItem("dark-mode") === "enabled");

themeToggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");
});
