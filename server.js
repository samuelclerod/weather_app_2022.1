require('dotenv').config();
const app = require("./src/app");

const port = process.env.PORT || 8000

app.listen(port, () => console.log("The server is running 🚀"))

// const forecast = require('./services/forecast');
// const geocode = require('./services/geocode');


// geocode("FJN", (geocodeErr, geocodeResponse) => {
//   if (geocodeErr) return console.log(geocodeErr);

//   const { latitude, longitude, name, address } = geocodeResponse;

//   forecast(latitude, longitude, (forecastError, forecastResponse) => {
//     if (forecastError) return console.log(forecastError);

//     const { temperature, feelslike, weather } = forecastResponse;

//     console.log(`Actually ${address} is ${weather}, ${temperature} degrees and feels like ${feelslike}.`);
//   })

// })