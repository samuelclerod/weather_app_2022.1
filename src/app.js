const express = require("express");
const res = require("express/lib/response");
const hbs = require("hbs");
const path = require("path");
const app = express();

const geocode = require('./services/geocode');
const forecast = require('./services/forecast');
const { pathToFileURL } = require("url");

//static folder
const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));
//template engine
app.set('view engine', 'hbs');
const viewsDir = path.join(__dirname, './templates/views');
app.set('views', viewsDir);
const partialsDir = path.join(__dirname, './templates/partials');
hbs.registerPartials(partialsDir);

app.get('/', (request, response) => {
  const data = {
    title: '⛅Weather App⛈️',
    name: 'Samuel Rodrigues',
  }
  response.render('index', data)
});

app.get('/about', (request, response) => {
  const aboutMe = {
    name: 'Samuel Rodrigues',
    role: 'Developer & Teacher',
    employer: "Ambevtech & Unijuazeiro",
    email: 'samuelclerod@gmail.com',
    photoUrl: 'https://vignette.wikia.nocookie.net/heroes-and-villain/images/2/2d/Grievous.png/revision/latest?cb=20191222041944',
  }

  const title = "🤖 About Creator 🤖"

  response.render('about', { ...aboutMe, title });

})

app.get('/help', (request, response) => {
  const data = {
    title: '🙏Ajuda',
    helpText: "Informe o nome do lugar."
  }
  response.render('help', data);
});

app.get('/weather', (request, response) => {
  const { location } = request.query
  if (!location || location.trim().length === 0) {
    return response.status(400).json({ error: 'Empty location' })
  }

  geocode(location, (geocodeErr, geocodeResponse) => {
    if (geocodeErr) {
      return response.status(geocodeErr.status).json({ error: geocodeErr.message });
    }
    const { latitude, longitude, address } = geocodeResponse;

    forecast(latitude, longitude, (forecastError, forecastResponse) => {
      if (forecastError) {
        return response.status(forecastError.status).json({ error: forecastError.message });
      }

      return response.json({
        ...forecastResponse, address
      })
    })
  })
})

app.get('*', (request, response) => {
  response.render('404', { title: '🔍404' })
})

module.exports = app