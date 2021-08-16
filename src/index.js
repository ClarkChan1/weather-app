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

function makeBody(weatherInfo) {
  // make the container that will display all the weather information
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');
  // make the contents of the info container
  let nameAndTempContainer = document.createElement('div');
  nameAndTempContainer.classList.add('name-and-temp-container');
  let locationName = document.createElement('p');
  locationName.classList.add('location-name');
  locationName.appendChild(document.createTextNode(weatherInfo.locationName));
  let separator = document.createElement('p');
  separator.appendChild(document.createTextNode('|'));
  separator.classList.add('separator');
  let tempContainer = document.createElement('div');
  tempContainer.classList.add('temp-container');
  let currentTemp = document.createElement('p');
  currentTemp.appendChild(document.createTextNode(weatherInfo.fahrenheitTemp));
  currentTemp.classList.add('current-temp');
  let lowestTemp = document.createElement('p');
  lowestTemp.appendChild(document.createTextNode(weatherInfo.fahrenheitLowest));
  lowestTemp.classList.add('other-temps');
  let highestTemp = document.createElement('p');
  highestTemp.appendChild(document.createTextNode(weatherInfo.fahrenheitHighest));
  highestTemp.classList.add('other-temps');
  tempContainer.appendChild(lowestTemp);
  tempContainer.appendChild(currentTemp);
  tempContainer.appendChild(highestTemp);
  nameAndTempContainer.appendChild(locationName);
  nameAndTempContainer.appendChild(separator);
  nameAndTempContainer.appendChild(tempContainer);

  let lineBreak = document.createElement('hr');
  lineBreak.style.width = '100%';

  let description = document.createElement('p');
  description.appendChild(document.createTextNode(weatherInfo.description));
  description.classList.add('description');
  // append all the info to infoContainer
  infoContainer.appendChild(nameAndTempContainer);
  infoContainer.appendChild(lineBreak);
  infoContainer.appendChild(description);
  // remove previous info container if it exists
  if (wrapper.querySelector('.info-container') != null) {
    wrapper.removeChild(wrapper.querySelector('.info-container'));
  }
  // append the new information container to the wrapper
  wrapper.appendChild(infoContainer);
}

async function handleSearch(e) {
  e.preventDefault();

  // collect user input and change spaces to '+' because the openweathermap api separates search terms with a '+'
  let userInput = searchBox.value.replace(' ', '+');
  // clear the searchBox
  searchBox.value = "";
  let weatherInfo = await getWeatherInfo(userInput);

  // make the body that will hold all the weather information and append it to the body so it displays on screen
  makeBody(weatherInfo);

  // change spaces to '-' because the unsplash api separates search terms with a '-'
  userInput = userInput.replace('+', '-');
  // call background.js function to make api call to get the weather at that location
  await getBackgroundImg(userInput);
}

createUI();
