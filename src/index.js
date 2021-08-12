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
  searchContainer.classList.add('search-container');
  // create the textbox
  searchBox = document.createElement('input');
  searchBox.type = "text";
  searchBox.placeholder="enter a location";
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

function handleSearch(){
  // collect user input
  let userInput = searchBox.value.replace(' ', '-');
  let weatherInfo = getWeatherInfo(userInput);
  // make the container that will display all the weather information
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');
  // call background.js function to make api call to get the weather at that location
}

createUI();
