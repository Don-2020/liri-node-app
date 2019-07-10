// Read and set environment variables
require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("../liri-node-app/key");
var request = require('request');
var fs = require('fs');

var spotify = new Spotify(keys.spotify);
var omdbKey = keys.omdb.api_key;

var firstCommand = process.argv[2];
var secondCommand = process.argv[3].split().join(" ");

switch (firstCommand) {
    case ('concert-this'):
        if (secondCommand) {
            concertThis(secondCommand)
        }
    case ('spotify-this-song'):
        if (secondCommand) {
            spotifyThisSong(secondCommand)
        }
        else {
            spotifyThisSong("The Sign");
        }
        break;

    case ('movie-this'):
        if (secondCommand) {
            findMovie(secondCommand)
        }
        else {
            findMovie('Mr.Nobody')
        }
    case ('do-what-it-says'):
        doWhatItSay()
}

function spotifyThisSong(song) {

    spotify.search({ type: 'track', query: song, limit: 5 }, function (err, data) {
        if (!err) {
            for (var i = 0; i < data.tracks.items.length; i++) {
                var songData = data.tracks.items[i];
                console.log("Artist: " + songData.artists.name);
                console.log("Song: " + songData.name)
                console.log("Preview URL: " + songData.external_urls)
                console.log("Album: " + songData.album.name)
                console.log("-------------------------------------")
            }
        }
        else {
            console.log('Error occurred: ' + err);
            return;
        }


    });
}


function findMovie(movie) {
    var omdb
}