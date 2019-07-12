# Liri Bot
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

# How to run Liri Bot 
* Step One: node liri.js concert-this `<artist/band name here>` This command will find three events/concert that inputed artist/bands will be apart of. Then display the following information inside the terminal/bash
       * Name of the venue
        * Venue location
        * Date of the Event (use moment to format this as "MM/DD/YYYY")
        
* Step 2: node liri.js spotify-this-song `<song name here>`
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    
* Step Three: `node liri.js movie-this '<movie name here>'` 
       * This will output the following information to your terminal/bash window:
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.

* Step Four:`node liri.js do-what-it-says`

    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
    * Edit the text in random.txt to test out the feature for movie-this and concert-this.


# Technology Used
* Node.js
* Javascript.js
# npm package
* [Spotify: ](https://www.npmjs.com/package/node-spotify-api) A simple to use API library for the Spotify REST API.
* [dotenv: ](https://www.npmjs.com/package/dotenv) Is a zero-dependency module that loads environment variables from a .env file into process.env. 
* [omdb:](https://www.npmjs.com/package/omdb) A simple Node.JS module to access and normalize data from the OMDb API
* [moment](https://www.npmjs.com/package/moment)
* [axios](https://www.npmjs.com/package/axios)
#


