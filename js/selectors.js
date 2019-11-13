// declare your functions here...
function paragraphSelector() {
  let p = $('p');
  return p;
}

function lastImageSelector() {
  let lastImage = $('body div.pics ul#pic-list li img:last-child');
  return lastImage;
}