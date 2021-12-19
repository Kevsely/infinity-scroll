const access_key = "YKa-kPc9HlrvdDdbWlt_pdwPtsfNeU1-vo26o4Q_LpQ";
const requestedImageCount = 20;
const unsplashApi = `https://api.unsplash.com/photos/random/?client_id=${access_key}&count=${requestedImageCount}`;

let apiPhotos = [];

//DOM Elements
const image_container = document.getElementById("image_container");

//Fetching API to get the photos
async function getPhotos() {
    const response = await fetch(unsplashApi);
    apiPhotos = await response.json();
    displayPhotos();
}

//Helper func. to set image attributes
function setAttributes(tag, attributes) {
    let element = document.createElement(tag);
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}

//Display images got from API
function displayPhotos() {
    apiPhotos.forEach((photo) => {
        //Creating anchor element
        const anchor = setAttributes('a', {
            href: photo.links.html,
            target: "_blank",
            title: photo.location.title
        });

        //Creating image element
        const img = setAttributes('img', {
            src: photo.urls.full,
            alt: photo.location.title
        });

        anchor.appendChild(img);
        image_container.appendChild(anchor);
    })
}

//Re.fetching when the user is about to completely scroll down
function automaticNewImagesLoad() {
    if(window.pageYOffset >= document.documentElement.offsetHeight-20000)
        console.log("Time to load more images")
}

//Event listener
window.addEventListener("scroll", automaticNewImagesLoad);

getPhotos();