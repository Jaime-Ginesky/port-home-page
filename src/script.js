

var circle = document.querySelector('.material-btn');
var link = document.querySelector('.material-content').querySelectorAll('li');
var ham = document.querySelector('.material-hamburger');
var main = document.querySelector('section');
var content = document.querySelector('.material-content');
var win = window;

function openMenu(event) {
 
  circle.classList.toggle('active');
  ham.classList.toggle('material-close');
  main.classList.toggle('active');
  for (var i = 0; i < link.length; i++) {
    link[i].classList.toggle('active');
  }
  content.classList.toggle('active');
  event.preventDefault();
  event.stopImmediatePropagation();
}

function closeMenu() {
  if (circle.classList.contains('active')) {
    circle.classList.remove('active');
    for (var i = 0; i < link.length; i++) {
      link[i].classList.toggle('active');
    }
    ham.classList.remove('material-close');
    main.classList.remove('active');
    content.classList.toggle('active');
  }
}

circle.addEventListener('click', openMenu, false);

win.addEventListener('click', closeMenu, false);

const toggleBtn = document.getElementById("toggle-btn");
const theme = document.getElementById("theme");
let darkMode = localStorage.getItem("dark-mode");



// Function to create Dark/Light Mode button
const enableDarkMode = () => {
    theme.classList.add("dark-mode-theme");
    toggleBtn.classList.remove("dark-mode-toggle");
    localStorage.setItem("dark-mode", "enabled");
    toggleBtn.innerHTML = `Light Mode`;
}
const disableDarkMode = () => {
    theme.classList.remove("dark-mode-theme");
    toggleBtn.classList.add("dark-mode-toggle");
    localStorage.setItem("dark-mode", "disabled");
    toggleBtn.innerHTML = `Dark Mode`;
}

if (darkMode === "enabled") {
    enableDarkMode();
}

toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});



