// this module will handle making api calls to unsplash and changing the background image of body
const apiKey = 'R9Qq7VsFNCTwQPuwia-NxaRJick-JSIXAcEucmmaWL4';

async function getBackgroundImg(searchTerm) {
  const img = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=20&client_id=${apiKey}`, {
    mode: 'cors'
  });
  console.log(img);
  if (img.status != 200) {
    // this is if there is any kind of error like a 404 where it can't find the image or 403 where I've run out of api call requests
    // change background iamge to nothing and return
    document.body.style['background-image']=`url('')`;
  } else {
    let imgArray = await img.json();
    imgArray = imgArray.results;
    // select a random image from the array
    const randomIndex = Math.floor(Math.random() * imgArray.length);
    // change the background image of document.body
    document.body.style.backgroundImage = `url(${imgArray[randomIndex].urls.regular})`;
    // also make the background image take up the whole screen now
    document.body.style.backgroundSize = 'cover';
  }
  return img.status;
}

export default getBackgroundImg;
