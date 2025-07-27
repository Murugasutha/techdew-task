/**
 * Theme Switching Functionality
 * Controls the light/dark mode theme switching
 */

// Pure function to set the theme
function setTheme(themeName) {
  document.querySelector("html").setAttribute("data-theme", themeName);
  localStorage.setItem("theme", themeName); 
}

// Function to initialize theme based on system preference
function setInitialTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    setTheme(storedTheme);
    themeToggle.checked = storedTheme === "dark";
  } else {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDarkMode) {
      themeToggle.checked = true;
      setTheme("dark");
    } else {
      themeToggle.checked = false;
      setTheme("light");
    }
  }
}

// Function to handle the toggle event
function toggleTheme(event) {
  if (event.target.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

export default function themeSwitcher() {
  setInitialTheme();

  const themeToggle = document.getElementById("theme-toggle");

  themeToggle.addEventListener("change", toggleTheme);
}
