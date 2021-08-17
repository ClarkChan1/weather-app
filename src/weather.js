// this module will handle making api calls to openweathermap and collecting information about the weather based on user input
const apiKey = 'a5b3ededf9619011197f6c79cd9baadf';

async function getWeatherInfo(location) {
  try {
    const info = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`, {
      mode: 'cors'
    });
    const jsonInfo = await info.json();
    const kelvinTemp = jsonInfo.main.temp;
    const kelvinLowest = jsonInfo.main.temp_min;
    const kelvinHighest = jsonInfo.main.temp_max;
    console.log(jsonInfo);
    // build an object with all the necessary weather information and return it
    return {
      locationName: jsonInfo.name,
      celsiusTemp: Math.trunc(kelvinTemp - 273.15).toString().concat('°'),
      fahrenheitTemp: Math.trunc(1.8 * (kelvinTemp - 273.15) + 32).toString().concat('°'),
      celsiusLowest: Math.trunc(kelvinLowest - 273.15).toString().concat('°'),
      fahrenheitLowest: Math.trunc(1.8 * (kelvinLowest - 273.15) + 32).toString().concat('°'),
      celsiusHighest: Math.trunc(kelvinHighest - 273.15).toString().concat('°'),
      fahrenheitHighest: Math.trunc(1.8 * (kelvinHighest - 273.15) + 32).toString().concat('°'),
      description: jsonInfo.weather[0].description,
    };
  } catch (e) {
    return 'error';
  }
}

export default getWeatherInfo;
