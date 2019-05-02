//Read and set environment variables
require("dotenv").config();

//Create variables
//var keys = require("./keys.js");
//var fs = require("fs");
//var spotify = new Spotify(keys.spotify);
var axios = require("axios");
//Capture User Inputs
var commandLine = process.argv[2];
var titleInput = process.argv[3];
//Create function for node commands
//UserInputs(commandLine, titleInput);

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
//Requested API, waiting to hear back from them. app_id=codingbootcamp
//Need queryURL+apikey

//Create function for OMDB
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)


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
  })
   

    
  
