const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://samples.openweathermap.org/data/2.5/find?';
const USER_ID = '0cdcf9fed040b014d069b21db6935c9c';

module.exports = {
    getTemp: function (location) {
        const encodedLocation = encodeURIComponent(location);
        const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&appid=${USER_ID}&units=metric`;

        return axios.get(requestUrl)
            .then(function (res) {
                if (res.data.cod && res.data.message) {
                    throw new Error(res.data.message);
                } else {
                    return res.data.main.temp;
                }
            }, function (res) {
                throw new Error(res.data.message);
            })
            .catch(err => {
                throw err;
            });
    }
};