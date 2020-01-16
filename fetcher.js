const fs = require("fs");

// const argv = process.argv.slice(2); //real input
// //const argv = [htttp://www.google.com.....all the rest of the info]

const argv = ["http://www.nba.com", "./text.txt"];

const request = require("request");

request(argv[0], (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received

  const writeFile = function() {
    fs.writeFile(argv[1], body, (err, data) => {
      if (!err) {
        fs.stat(argv[1], function(err, stats) {
          console.log(`Download and saved ${stats.size} bytes to ${argv[1]}`);
        });
      } else console.log("Invalid file path");
    });
  };
  writeFile();
});
