
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