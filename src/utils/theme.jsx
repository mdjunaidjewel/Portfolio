// 🔹 Toggle theme and save in localStorage
export const toggleTheme = () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");

  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
};

// 🔹 Load theme from localStorage on page load
export const loadTheme = () => {
  const savedTheme = localStorage.getItem("theme") || "dark"; // default dark
  document.documentElement.setAttribute("data-theme", savedTheme);
};
