const express = require("express");
const path = require("path");
const app = express();

//configure static place
const publicDir = path.join(__dirname, "../public");
app.use(express.static(publicDir));

// app.get('/', (request, response) => {
//   response.send("<h1>Home 🏡</h1>");
// });


module.exports = app