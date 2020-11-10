import axios from 'axios';
import getLocation from './utilities';
const myLocation = () => getLocation()
    .then(async (position) => {
        const crd = await position.coords;
        const location = {
            latitude: crd.latitude,
            longitude: crd.longitude, altitude: crd.altitude,
            altitudeAccuracy: crd.altitudeAccuracy,
            heading: crd.heading,
            speed: crd.speed,
            accuracy: crd.accuracy,
            timestamp: position.timestamp,
        };
        return location;
    })
    .catch((error) => {
        let position = true;
        if (error.message.toLowerCase() === 'user denied geolocation') {
            position = false;
        }
        return {
            error: {
                code: error.code,
                message: error.message,
                position,
            },
        };
    });
const getData = async (location) => {
    const loc = await location;
    const sForecast = process.env.REACT_APP_APIXU_FORECAST_API;
    const sKey = process.env.REACT_APP_APIXU_API_KEY;
    if (loc.latitude === undefined || loc.longitude === undefined) {
        return new Error('Location was not provided');
    }
    return axios.get(`${sForecast}?
key=${sKey}&q=${loc.latitude},${loc.longitude}&days=7&lang=en `)
        .then(response => ({ ...response.data }))
        .catch((error) => {
            const sWord = 'code ';
            const sCode = error.toString().split(sWord).pop();
            let nCode = 0; if (!Number.isNaN(sCode)) {
                nCode = Number(sCode);
            }
            return {
                error: {
                    code: nCode,
                    message: error.message,
                    position: true,
                },
            };
        });
};
export { myLocation, getData };