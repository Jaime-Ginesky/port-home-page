

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

 // Function to create a card for project menu
 function createCard(title, description, link) {
  const card = document.createElement('article');
  card.classList.add('container','imgCard','contentC', 'content', 'card:hover','dark-mode-theme');
  // Add your desired card class here
  
  const contentElement = document.createElement('content');
  contentElement.classList.add('contentC::before','card:hover','content');

  const titleElement = document.createElement('h6');
  titleElement.textContent = title;
  // titleElement.classList.add('h6');
  titleElement.classList.add('h6','contentC','imgC');
  
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;
  descriptionElement.classList.add('p')
  // descriptionElement.classList.add('imgCard','content','contentC');

  const linkElement = document.createElement('a');
  linkElement.href = link;
  linkElement.classList.add('button', 'glow-button');
  linkElement.target = '_blank';
  linkElement.textContent = 'GO';

  contentElement.appendChild(descriptionElement);
  contentElement.appendChild(linkElement);

  
  card.appendChild(titleElement);
  card.appendChild(contentElement);

  return card;
}

// Populate the cards with specific information
const weatherCard = createCard(
  'Weather App',
  'Find current weather in your current location or search any city. Search also includes weather conditions and forecast. Built with Javascript.',
  'https://goofy-goldstine-7355dd.netlify.app/'
);
document.getElementById('weather-card').appendChild(weatherCard);

const robofriendsCard = createCard(
  'RoboFriends',
  'For each name entered into search, a new RoboFriend avatar is created and attached to that person. Built with React.',
  'https://upbeat-bohr-d8d654.netlify.app/'
);
document.getElementById('robofriends-card').appendChild(robofriendsCard);

const dictionaryCard = createCard(
  'Dictionary App',
  'Find definitions, synonyms, pronunciation, with sentence examples, audio and images. Built with React.',
  'https://magical-sunshine-e3e2c8.netlify.app/'
);
document.getElementById('dictionary-card').appendChild(dictionaryCard);

const ecommCard = createCard(
  'E-Commerce',
  'Functional e-commerce website with signup/log-in page for customer purchasing accounts. Built with React.',
  'https://nositeyet.netlify.app/'
); 
document.getElementById('e-comm-card').appendChild(ecommCard);


