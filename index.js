const forecast = require('./services/forecast');
const geocode = require('./services/geocode');


geocode("FJN", (geocodeErr, geocodeResponse) => {
  if (geocodeErr) return console.log(geocodeErr);

  const { latitude, longitude, name, address } = geocodeResponse;

  forecast(latitude, longitude, (forecastError, forecastResponse) => {
    if (forecastError) return console.log(forecastError);

    const { temperature, feelslike, weather } = forecastResponse;

    console.log(`Actually ${address} is ${weather}, ${temperature} degrees and feels like ${feelslike}.`);
  })

})