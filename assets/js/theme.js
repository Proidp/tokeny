const toggleBtn = document.getElementById("toggle-btn");
const modIcon = document.getElementById("mod-icon");
const theme = document.getElementsByTagName( 'html' )[0];
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  theme.classList.add("dark-mode");
  toggleBtn.classList.remove("dark-mode-toggle");
  modIcon.classList.remove("fa-moon");
  modIcon.classList.add("fa-sun");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  theme.classList.remove("dark-mode");
  toggleBtn.classList.remove("dark-mode-toggle");
  modIcon.classList.remove("fa-sun");
  modIcon.classList.add("fa-moon");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}else {
disableDarkMode();
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

