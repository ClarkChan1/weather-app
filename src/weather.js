// this module will handle making api calls to openweathermap and collecting information about the weather based on user input
// openweathermap: a5b3ededf9619011197f6c79cd9baadf
const apiKey = 'a5b3ededf9619011197f6c79cd9baadf';
async function getWeatherInfo(location) {
  const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`, {
    mode: 'cors'
  });
  console.log(response);
  // const jsonResponse = await response.json();
  // img.src = jsonResponse.data.images.original.url;
}

export default getWeatherInfo;
