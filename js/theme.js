// Theme
const iconDarkMode = document.getElementById("dark-mode");
const iconLightMode = document.getElementById("light-mode");
const currentTheme = document.getElementById("current_theme");
const linkCSS = document.querySelector('link[href="./css/style_light_mode.css"]');

// Event listener for dark mode icon click
iconDarkMode.addEventListener("click", () => {
  localStorage.setItem("mode", "dark");
  checkModeTheme();
})

// Event listener for light mode icon click
iconLightMode.addEventListener("click", () => {
  localStorage.setItem("mode", "light");
  checkModeTheme();
})

// Function to check the current mode theme and update styles accordingly
function checkModeTheme() {
  if (localStorage.getItem("mode") === "light") {
    linkCSS.setAttribute('href', './css/style_light_mode.css');
    iconDarkMode.style.display = "flex";
    iconLightMode.style.display = "none";
  } else {
    linkCSS.setAttribute('href', './css/style_dark_mode.css');
    iconDarkMode.style.display = "none";
    iconLightMode.style.display = "flex";
  }
}

// Check the mode theme on page load
checkModeTheme();