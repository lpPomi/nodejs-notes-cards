  /*
  
  Attention: the routing to the files signin.hbs and / or 
  signout.hbs take place through the path 

  /users/signin

  in the command 

  res.render('/users/signin');
  
  */
 
// method Router to create the routes
// so
//const router = require('express').Router();
//or so
const express = require ('express');
const router = express.Router();

// define the routes
router.get('/users/signin', (req, res) => {
  //  res.send('Ingresando a la app');
    res.render('users/signin');
  });


router.get('/users/signup', (req, res) => {
    // res.send('Formulario de autenticacion');
    res.render('users/signup');
  });

// export the router
module.exports = router;