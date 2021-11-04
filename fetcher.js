// Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)
// Use Node's fs (file system) module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning above)

const request = require('request');
const fs = require('fs');

const content = process.argv.slice(2);


if (content.length !== 2) {
  console.log("Please pass 2 arguments: url and file name");
  process.exit();
}

const url = content[0];
const path = content[1];


request(url, function (error, response, body) {
  
  if (error) {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    return
  }
  
  fs.writeFile(path, body, error => {
    if (error) {
      console.error(error);
      return
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`)
  })}
);