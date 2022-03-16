const request = require("postman-request");
const { GEOCODE_BASE_URL, GEOCODE_ACCESS_KEY } = require("../config");

// const location = 'FJN';

// const url = `${GEOCODE_BASE_URL}/${location}.json?access_token=${GEOCODE_ACCESS_KEY}`

// request(url, (error, _, body) => {

//   if (error) {
//     return console.log("We cannot connect to the server!");
//   }

//   const { features, message } = JSON.parse(body);

//   if (message) {
//     return console.log(message);
//   }

//   if (features.length === 0) {
//     return console.log("Location not found!");
//   }

//   const { text, place_name, center } = features[0]

//   const [longitude, latitude] = center

//   const responseData = {
//     latitude,
//     longitude,
//     name: text,
//     address: place_name,
//   }

// })


const geocode = (searchTerm, callback) => {

  const url = `${GEOCODE_BASE_URL}/${searchTerm
    }.json?access_token=${GEOCODE_ACCESS_KEY}`

  request(url, (error, _, body) => {

    if (error) {
      return callback(
        "We cannot connect to the server!",
        undefined
      )
    }

    const { features, message } = JSON.parse(body);

    if (message) {
      return callback(message, undefined);
    }

    if (features.length === 0) {
      return callback("Location not found!", undefined);
    }

    const { text, place_name, center } = features[0];

    const [longitude, latitude] = center

    const responseData = {
      latitude,
      longitude,
      name: text,
      address: place_name,
    }

    callback(undefined, responseData);

  })
}


module.exports = geocode