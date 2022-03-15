const request = require('postman-request');

const ACCESS_KEY = '';
const BASE_URL = 'http://api.weatherstack.com/current'
const lati = '-7.2053646', long = "-39.3091651"
const URL = `${BASE_URL}?access_key=${ACCESS_KEY}&query=${lati},${long}`

request(URL, (error, response, body) => {
  if (error) {
    return console.log({ error: 'unavailable server' });
  }
  const data = JSON.parse(body);
  const { current } = data;

  if (!current) {
    return console.log(`We can't proceed your request.`);
  }
  const { temperature, feelslike } = current;
  const { name } = data.location;
  console.log(`${name} is currently ${temperature} degrees out, and fellslike ${feelslike}.`)
  // console.log(body)
})