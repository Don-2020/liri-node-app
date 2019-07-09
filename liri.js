// Read and set environment variables
require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");


var spotify = new Spotify(keys.spotify);

var firstCommand = process.argv[2];
var secondCommand = process.argv[3];

switch (firstCommand) {
    case ('spotify-this-song'):
        if (secondCommand) {
            spotifyThisSong(secondCommand)
        }
        else {
            spotifyThisSong("The Sign");
        }
    break;
}

function spotifyThisSong(){
    
}