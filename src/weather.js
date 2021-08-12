// this module will handle making api calls to openweathermap and collecting information about the weather based on user input

async function getWeatherInfo(location) {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=7y4yiiJm442FL6waTlScgnJmHWLL7msF&s=${location}`, {
    mode: 'cors'
  });
  const jsonResponse = await response.json();
  img.src = jsonResponse.data.images.original.url;
}

export default getWeatherInfo;
