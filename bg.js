

const body = document.querySelector("body");

function loadBackground(){
  const image = new Image();
  image.src = "https://source.unsplash.com/category/nature/weekly";
  image.classList.add("bgImage");
  body.prepend(image);
}

function initApp(){
  loadBackground();
}


initApp();