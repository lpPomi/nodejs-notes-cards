// method Router to create the routes
// so
//const router = require('express').Router();
//or so
const express = require ('express');
const router = express.Router();

// define the routes
router.get('/', (req, res) => {
    res.send('Index');
  });

  
  router.get('/about', (req, res) => {
    res.send('About');
  });



// export the router
module.exports = router;