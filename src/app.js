const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

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

app.get('/help', (request, response) => {
  const data = {
    title: '🙏Ajuda',
    helpText: "Informe o nome do lugar."
  }
  response.render('help', data);
});


module.exports = app