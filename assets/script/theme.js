var theme;
$(function () {
  initializeTheme();
});
function initializeTheme() {
  theme = localStorage.getItem("theme");
  setTheme();
}
function toggleTheme() {
  theme = theme === "dark" ? "light" : "dark";
  setTheme();
}
function setTheme() {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}
