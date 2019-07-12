// Read and set environment variables
require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("../liri-node-app/key");
var axios = require("axios");
var moment = require("moment")

var fs = require('fs');

var spotify = new Spotify(keys.spotify);
var omdbKey = keys.omdb.api_key;

var firstCommand = process.argv[2];
var secondCommand = process.argv.slice(3).join(" ");

switch (firstCommand) {
    case ('concert-this'):
        getBands(secondCommand)
        break;
    case ('spotify-this-song'):
        if (secondCommand) {
            spotifyThisSong(secondCommand)
        }
        else if (secondCommand === "") {
            spotifyThisSong("The Sign");
        }
        break;

    case ('movie-this'):
        if (secondCommand) {
            findMovie(secondCommand)
        }
        else {
            console.log("------------------")
            console.log("If you haven't watched 'Mr.Nobody,' then you should: http://www.imdb.com/title/tt0485947/ ")
            console.log("It's on Netflix!")
        }
        break;
    case ('do-what-it-says'):
        justDoIt()
}

function getBands(artist) {
    var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(bandURL).then(function (response) {
        //  console.log(response);

        console.log('\n------------------\n')
        console.log("Name of the venue: " + response.data[0].venue.name)
        console.log("Venue location: " + response.data[0].venue.city + ", " + response.data[0].venue.region)
        var eventDate = moment(response.data[0].datetime).format('MM/DD/YYYY')
        console.log("Date of the EventL " + eventDate)

        console.log('\n------------------\n')
        console.log("Name of the venue: " + response.data[1].venue.name)
        console.log("Venue location: " + response.data[1].venue.city + ", " + response.data[1].venue.region)
        var eventDate = moment(response.data[1].datetime).format('MM/DD/YYYY')
        console.log("Date of the EventL " + eventDate)

        console.log('\n------------------\n')
        console.log("Name of the venue: " + response.data[2].venue.name)
        console.log("Venue location: " + response.data[2].venue.city + ", " + response.data[2].venue.region)
        var eventDate = moment(response.data[2].datetime).format('MM/DD/YYYY')
        console.log("Date of the EventL " + eventDate)

    })
        .catch(function (error) {
            console.log(error);
        })
}

function spotifyThisSong(song) {

    spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {
        if (!err) {

            // console.log('\n------------------\n\n\n', data.tracks.items[0].album.artists[0].name, "\n\nn "+data.tracks.items[0].album.name)
            // // console.log('\n------------------\n\n\n', data.tracks.items[0].album.name)
            // console.log('\n------------------\n\n\n', data.tracks.items[0].preview_url)
            // console.log('\n------------------\n\n\n', data.tracks.items[0].name)

            for (var i = 0; i < data.tracks.items.length; i++) {
                var songData = data.tracks.items[i];
                // console.log("\n--------------------------------\n\n\n")
                console.log("\nArtist: " + songData.album.artists[0].name);
                console.log("Song: " + songData.name)
                console.log("Preview URL: " + songData.preview_url)
                console.log("Album: " + songData.album.name)
                console.log("\n--------------------------\n\n")
            }
        }
        else {
            console.log('Error occurred: ' + err);
            return;
        }
    });
}


function findMovie(movie) {
    var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&apikey=' + omdbKey + '&plot=short&tomatoes=true';


    axios.get(omdbURL).then(function (response) {
        // console.log(response);
        console.log("------------------")
        console.log("Title: " + response.data.Title);
        console.log("Released Year: " + response.data.Released);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Langauge);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
        console.log("Rotten Tomatoes URL: " + response.data.tomatoURL)
    })
        .catch(function (error) {
            console.log(error);
        });
    
}

function justDoIt() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if(err){
            console.log(err)
        }
        // console.log(data)
        var randomArray = data.split(',')
        var firstCommand = randomArray[0]
        var secondCommand =randomArray[1]
        // console.log(secondCommand)

        // var value = data[1].split(',')
        // // getSongs(value)
        // spotifyThisSong(secondCommand)

        switch (firstCommand) {
            case ('concert-this'):
                getBands(secondCommand)
                break;
            case ('spotify-this-song'):
                spotifyThisSong(secondCommand)
                break;
    
            case ('movie-this'):
                findMovie(secondCommand)
                break;
        }
    });
}