// this module will handle making api calls to openweathermap and collecting information about the weather based on user input
const apiKey = 'a5b3ededf9619011197f6c79cd9baadf';
async function getWeatherInfo(location) {
  const info = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`, {
    mode: 'cors'
  });
  const jsonInfo = await info.json();
  const kelvinTemp = jsonInfo.main.temp;
  // build an object with all the necessary weather information and return it
  return {
    locationName: jsonInfo.name,
    celsiusTemp: kelvinTemp - 273.15,
    fahrenheitTemp: 1.8 * (kelvinTemp - 273.15) + 32,
  };
}

export default getWeatherInfo;
