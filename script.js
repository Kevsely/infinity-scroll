const access_key = "YKa-kPc9HlrvdDdbWlt_pdwPtsfNeU1-vo26o4Q_LpQ";
const requestedImageCount = 1;
const unsplashApi = `https://api.unsplash.com/photos/random/?client_id=${access_key}&count=${requestedImageCount}`;

async function getPhoto() {
    const response = await fetch(unsplashApi);
    const data = await response.json();
    console.log(data);
}

getPhoto();