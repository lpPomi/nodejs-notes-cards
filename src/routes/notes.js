  /*
  
  Attention: the routing to the files index.hbs and / or 
  about.hbs only work through the layout hbs file 
  ../src/views/layouts/main.hbs

  main.hbs is the start point to show hbs files

  define in the main index.js
  layoutsDir: path.join(app.get('views'), 'layouts'),
  */

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