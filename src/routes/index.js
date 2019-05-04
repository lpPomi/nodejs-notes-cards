// method Router to create the routes
// so
//const router = require('express').Router();
//or so
const express = require ('express');
const router = express.Router();

// define the routes
router.get('/', (req, res) => {
  /*
  
  Attention: the routing to the files index.hbs and / or 
  about.hbs only work through the layout hbs file 
  ../src/views/layouts/main.hbs

  main.hbs is the start point to show hbs files

  define in the main index.js
  layoutsDir: path.join(app.get('views'), 'layouts'),

  */
  
    // send a string in the path "/" 
   // res.send('Index');

   // route to a hbs file. 
   // location ../views/index.hbs
   //res.render('users/signin');
   res.render('index');
  });

  
router.get('/about', (req, res) => {

    // send a string in the path "/about" 
    //res.send('about');

   // route to a hbs file. 
   // location ../views/about.hbs
   res.render('about');
  });


// export the router
module.exports = router;