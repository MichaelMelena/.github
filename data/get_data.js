const request = require('request');
const fs = require('fs');

request('http://www.script-o-rama.com/movie_scripts/a1/bee-movie-script-transcript-seinfeld.html', function (error, response, body) {
    fs.writeFile("./result.txt", body);
    console.log(`written to file: result.txt`)
});