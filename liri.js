//Read and set environment variables
require("dotenv").config();

//Create variables
var moment = require("moment");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
//Capture User Inputs
var commandLine = process.argv[2];
var titleInput = process.argv[3];
//Create function for node commands
UserInputs(commandLine, titleInput);
function UserInputs(commandLine, titleInput) {
    switch (commandLine) {
        case 'concert-this':
            //Show Concert Info
            showConcertInfo(titleInput)
            break;
        case 'spotify-this-song':
            //Show Spotify Info
            showSpotifyInfo(titleInput)
            break;
        case 'movie-this':
            //Show Movie Info
            showMovieInfo(titleInput)
            break;
        case 'do-what-it-says':
            //Show what it says
            showWhatItSays(titleInput)
            break;
        default:
            console.log("Not a recognized command")
    }
}

//Create function for Spotify
function showSpotifyInfo() {
    spotify.search({ type: "track", query: titleInput }, function (err, data) {
        if (err) {
            console.log("Error occured: " + err);
            return;
        }
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log("----------------------------")
            console.log(`Artist(s): ${songs[i].artists[0].name}`)
            console.log(`Name of Song: ${songs[i].name}`)
            console.log(`Preview Link: ${songs[i].preview_url}`)
            console.log(`Album: ${songs[i].album.name}`)
        }
    });

}

//Create function for Bands In Town
//Requested API, waiting to hear back from them. app_id=codingbootcamp
//Need queryURL+apikey

function showConcertInfo(titleInput) {

    axios.get(`https://rest.bandsintown.com/artists/${titleInput}/events?app_id=codingbootcamp`)
        .then(function (response) {
            //create loop to display search results
            for (var i = 0; i < response.data.length; i++) {
                console.log("---------------------------")
                console.log(`Venue Name: ${response.data[i].venue.name}`)
                console.log(`Venue Location: ${response.data[i].venue.city}, ${response.data[i].venue.country}`)
                console.log(`Date of the Event: ${moment(response.data[i].datetime).format("L")}`);

            }

        });
}

//Create function for OMDB
// Include the axios npm package
function showMovieInfo(titleInput) {
    if (titleInput === undefined) {
        titleInput = "Mr. Nobody"
        console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");
    }

    // Then run a request with axios to the OMDB API with the movie specified

    axios.get(`http://www.omdbapi.com/?t=${titleInput}&y=&plot=short&tomatoes=true&apikey=trilogy`)
        .then(function (response) {
            console.log(`Title: ${response.data.Title}`)
            console.log(`Year: ${response.data.Year}`)
            console.log(`IMDB Rating: ${response.data.imdbRating}`)
            console.log(`Country: ${response.data.Country}`)
            console.log(`Language: ${response.data.Title}`)
            console.log(`Title: ${response.data.Language}`)
            console.log(`Plot: ${response.data.Plot}`)
            console.log(`Actors: ${response.data.Actors}`)
            console.log(`Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}`);
        });

}


