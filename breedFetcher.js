const request = require('request');

// breed ID is first 4 letters of breed
//const breedName = process.argv.slice(2).join('').substring(0,4);

const fetchBreedDescription = function(breedName, callback) {
  const breedURL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  
  request(breedURL, (error, response, body) => {
    if (error) return console.log('Request Failed: ', error);
    
    const data = JSON.parse(body);
    if (data.length === 0) return callback(error, null);
    // return console.log('Error: Breed not found.');
    // // console.log(data[0].breeds[0].description);

    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };

