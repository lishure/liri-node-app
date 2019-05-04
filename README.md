# liri-node-app

LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies. 

LIRI takes in the following 4 commands:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

The user is able to use these commands along with specific parameters to retrieve data.

This is what each command should do:

1) "concert-this"

This is what you would put in your terminal:
node liri.js concert-this <artist/band name here>

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

*Name of the venue
*Venue location
*Date of the Event (use moment to format this as "MM/DD/YYYY")

Here is an example of what this would look like:
(https://github.com/lishure/liri-node-app/blob/master/Screenshots/concert-this.png)

2) "spotify-this-song"

This is what you would put in your terminal:
node liri.js spotify-this-song '<song name here>'

This will show the following information about the song in your terminal/bash window:
*Artist(s)
*The song's name
*A preview link of the song from Spotify
*The album that the song is from

Here is an example of what this would look like:
********Insert spotify-this-song SS here*******

If no song is provided then your program will default to "The Sign" by Ace of Base.
********Insert spotify-default SS here*******

3) "movie-this"

This is what you would put in your terminal:
node liri.js movie-this '<movie name here>'

This will output the following information to your terminal/bash window:
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.

Here is an example of what this would look like:
********Insert movie-this SS here*******

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
********Insert movie-default SS here*******

4) "do-what-it-says"

This is what you would put in your terminal:
node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

Here is an example of what this would look like:
********Insert do-what-it-says SS here*******

Edit the text in random.txt to test out the feature for movie-this and concert-this.
