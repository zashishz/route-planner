import GoogleMapsLoader from 'google-maps';

function initializeMap() {
    GoogleMapsLoader.KEY = process.env.REACT_APP_GOOGLE_API_KEY;
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
// returns maps instance as an export
const maps = async () => {
    const google = await getMap();
    return google.maps;
}

export default maps;