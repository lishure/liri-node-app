//Read and set environment variables
require("dotenv").config();

//Create variables
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

//Capture User Inputs
var commandLine = process.argv[2];
var titleInput = process.argv[3];
//Create function for node commands
UserInputs(commandLine, titleInput);

function UserInputs(commandLine, titleInput) {
    switch (titleInput) {
        case 'concert-this':
            //Show Concert Info
            break;
        case 'spotify-this-song':
            //Show Spotify Info
            break;
        case 'movie-this':
            //Show Movie Info
            break;
        case 'do-what-it-says':
            //Show what it says
            break;
        default:
            console.log("Not a recognized command")
    }
}


//Create function for Spotify

//Need queryURL + apikey

//Create function for Bands In Town
//Requested API, waiting to hear back from them.
//Need queryURL+apikey

//Create function for OMDB

//Need queryURL+ api key
queryURL = `http://www.omdbapi.com/?i=${titleInput}&apikey=trilogy`
//OMDB key: d1f46cbe
