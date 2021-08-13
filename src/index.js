// api keys
// openweathermap: a5b3ededf9619011197f6c79cd9baadf
// unsplash: R9Qq7VsFNCTwQPuwia-NxaRJick-JSIXAcEucmmaWL4

import './style.css';
import getWeatherInfo from './weather.js';
import getBackgroundImg from './background.js';

let wrapper;
let searchBox;

function createUI() {
  wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  // make the search bar
  const searchContainer = document.createElement('form');
  searchContainer.action = "#";
  searchContainer.classList.add('search-container');
  // create the textbox
  searchBox = document.createElement('input');
  searchBox.type = "text";
  searchBox.placeholder = "enter a location";
  searchBox.classList.add('search-box');
  // create the search button
  const searchButton = document.createElement('button');
  searchButton.classList.add('search-button');
  searchButton.type = "submit";
  const buttonIcon = document.createElement('i');
  buttonIcon.classList.add('fa');
  buttonIcon.classList.add('fa-search');
  buttonIcon.classList.add('button-icon');
  searchButton.appendChild(buttonIcon);
  searchContainer.appendChild(searchBox);
  searchContainer.appendChild(searchButton);

  // add the search bar and the info container tot the wrapper
  wrapper.appendChild(searchContainer);
  // add the wrapper to the body
  document.body.appendChild(wrapper);

  // add eventlistener to the searchbox
  searchContainer.addEventListener('submit', handleSearch);
}

async function handleSearch() {
  // collect user input and change spaces to '+' because the openweathermap api separates search terms with a '+'
  let userInput = searchBox.value.replace(' ', '+');
  // clear the searchBox
  searchBox.value = "";
  let weatherInfo = await getWeatherInfo(userInput);
  // make the container that will display all the weather information
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');
  // make the contents of the info container
  let locationName = document.createElement('p');
  locationName.classList.add('location-name');
  locationName.appendChild(document.createTextNode(weatherInfo.locationName));

  // append all the info to infoContainer
  infoContainer.appendChild(locationName);
  // remove previous info container if it exists
  if (wrapper.querySelector('.info-container') != null) {
    wrapper.removeChild(wrapper.querySelector('.info-container'));
  }
  // append the new information container to the wrapper
  wrapper.appendChild(infoContainer);
  // change spaces to '-' because the unsplash api separates search terms with a '-'
  userInput = userInput.replace('+', '-');
  // call background.js function to make api call to get the weather at that location
  await getBackgroundImg(userInput);
}

createUI();
