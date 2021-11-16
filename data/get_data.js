const request = require("request");
const fs = require("fs");

request(
  "http://www.script-o-rama.com/movie_scripts/a1/bee-movie-script-transcript-seinfeld.html",
  function (error, response, body) {
    if (err) {
      return console.log(err);
    } else {
      console.log(body);
      fs.writeFile("data/result.txt", body, (fileError) => {
        console.log(fileError);
      });
    }

    console.log(`written to file: result.txt`);
  }
);
