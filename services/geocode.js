const { GEOCODE_BASE_URL, GEOCODE_ACCESS_KEY } = require("../config");

const url = `${GEOCODE_BASE_URL}/${LOCATION}.json?access_token=${GEOCODE_ACCESS_KEY}`