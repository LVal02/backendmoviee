var express = require('express');
var router = express.Router();

const connectionString = process.env.CONNECTION_STRING;


router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${connectionString}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    .then(response => response.json())
    .then(movieData => {
      console.log(movieData);
      res.json({movies : movieData.results})
    })
})    
// router.get('/config', (req, res) => {
//     const config = {
//       api_key: process.env.CONNECTION_STRING
//     };
//     res.json(config);
//   });
module.exports = router;

