// this module will handle making api calls to unsplash and changing the background image of body

const img = document.querySelector('img');

// function to get images based on the location that the user searched
async function getBackgroundImg(location) {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=7y4yiiJm442FL6waTlScgnJmHWLL7msF&s=${location}`, {
    mode: 'cors'
  });
  const jsonResponse = await response.json();
  img.src = jsonResponse.data.images.original.url;
}

export default getBackgroundImg;
