// method Router to create the routes
// so
//const router = require('express').Router();
//or so
const express = require ('express');
const router = express.Router();

// define the routes
router.get('/users/signin', (req, res) => {
    res.send('Ingresando a la app');
  });


router.get('/users/signup', (req, res) => {
    res.send('Formulario de autenticacion');
  });


// export the router
module.exports = router;