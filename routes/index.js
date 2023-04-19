var express = require('express');
var router = express.Router();

const connectionString = process.env.CONNECTION_STRING;


router.get('/movies', (req, res) => {
    fetch(connectionString)
    .then(response => response.json())
    .then(movieData => {
      console.log(movieData);
      res.json({movieData})
    })
})    
// router.get('/config', (req, res) => {
//     const config = {
//       api_key: process.env.CONNECTION_STRING
//     };
//     res.json(config);
//   });
module.exports = router;
