// method Router to create the routes
// so
//const router = require('express').Router();
//or so
const express = require ('express');
const router = express.Router();

// define the routes
router.get('/notes', (req, res) => {
    res.send('Notas de la database');
  });

// export the router
module.exports = router;