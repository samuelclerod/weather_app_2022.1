const request = require('postman-request');
const {
  FORECAST_ACCESS_KEY,
  FORECAST_BASE_URL,
} = require('../config');

const forecast = (lati, long, callback) => {

  const URL = `${FORECAST_BASE_URL}?access_key=${FORECAST_ACCESS_KEY}&query=${lati},${long}`

  request(URL, (error, _, body) => {

    if (error) {
      callback("Unavailable server", undefined);
    }

    const data = JSON.parse(body);
    const { current, error: apiError } = data;

    if (apiError) {
      callback(
        `We can't proceed your request. Error type ${apiError.type}`,
        undefined
      );
    }

    const { temperature, feelslike, weather_descriptions } = current;

    const dataResponse = {
      temperature,
      feelslike,
      weather: weather_descriptions[0],
    }
    callback(undefined, dataResponse)

  })
}

module.exports = forecast