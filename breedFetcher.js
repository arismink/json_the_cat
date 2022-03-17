const request = require('request');

// breed ID is first 4 letters of breed name
const breed = process.argv.slice(2).join('').substring(0,4);
const breedURL = 'https://api.thecatapi.com/v1/images/search?breed_ids=' + breed;


request(breedURL, (error, response, body) => {
  if (error) return console.log('Request Failed: ', error);
  
  const data = JSON.parse(body);
  if (data.length === 0) return console.log('Error: Breed not found.');
  console.log(data[0].breeds[0].description);
});