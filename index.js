const request = require('postman-request');
const forecast = require('./services/forecast');
const geocode = require('./services/geocode');

const lati = '-7.2053646', long = "-39.3091651";

forecast(lati, long, (error, response) => {
  if (error) {
    return console.log(error);
  }

  const { temperature, feelslike, weather } = response;

  console.log(`Actually is ${weather}, ${temperature} degrees and feels like ${feelslike}`);
})

geocode("FJN", (err, response) => {
  if (err) return console.log(err);
  console.log(response)
})