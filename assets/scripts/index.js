document.addEventListener("DOMContentLoaded", function () {
  const themeSwitcher = document.getElementById("theme-switcher");
  const body = document.body;

  themeSwitcher.addEventListener("click", function () {
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    }
  });

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }
});
