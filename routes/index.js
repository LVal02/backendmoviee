var express = require('express');
var router = express.Router();



router.get('/movies', (req, res) => {
  fetch('https://api.themoviedb.org/3/discover/movie?api_key=cb0f21b8dd90556e085481a2ed9bab62&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
  .then(response => response.json())
  .then(movieData => {
    console.log(movieData);
    res.json({movies : movieData.results})
  })
})    

module.exports = router;

