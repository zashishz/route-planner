import GoogleMapsLoader from 'google-maps';

function initializeMap() {
    GoogleMapsLoader.KEY = 'AIzaSyBG0SybP0EKWH3Jvwki7IR5AMyO_cUeeQc';
    GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];
}

//Initialize google map with configurations
initializeMap();

// create a new instance of map or reuse the same if already present
let googleMap;
const getMap = () => {
    return new Promise((res, rej) => {
        if(googleMap) {
            res(googleMap);
        } else {
            GoogleMapsLoader.load((google) => {
                googleMap = google;
                res(googleMap);
            })
        }
    })
}

const maps = async () => {
    const google = await getMap();
    return google.maps;
}

export default maps;