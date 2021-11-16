const request = require("request");
const fs = require("fs");

request.get(
  "http://www.script-o-rama.com/movie_scripts/a1/bee-movie-script-transcript-seinfeld.html",
  function (error, response, body) {
    if (error) {
      return console.log(error);
    } else {
      console.log(response);
      fs.writeFile("data/result.txt", body, (fileError) => {
        console.log(fileError);
      });
    }

    console.log(`written to file: result.txt`);
  }
);
