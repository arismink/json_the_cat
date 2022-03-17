const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const breedURL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  
  request(breedURL, (error, response, body) => {
    if (error) return error;
    
    const data = JSON.parse(body);
    
    if (data.length === 0) return callback(error, null);

    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };

