  /*
  
  Attention: the routing to the files index.hbs and / or 
  about.hbs only work through the layout hbs file 
  ../src/views/layouts/main.hbs

  main.hbs is the start point to show hbs files

  define in the main index.js
  layoutsDir: path.join(app.get('views'), 'layouts'),
  */

/* method Router to create the routes
   so: const router = require('express').Router();
   or so: 
*/

const express = require ('express');
const router = express.Router();

// define the routes to add a note
router.get('/notes/add', (req, res) => {
  res.render('notes/new-note');
});


/* define the routes to get data e.g. from a form
   and the send this form data to: 
   /notes/new-note 
*/
router.post('/notes/new-note' , (req, res) => {
  console.log(req.body);
  res.send('ok');
});



// test define the route notes
/*
router.get('/notes', (req, res) => {
    res.send('Notas de la database');
  });

*/


// export the router
module.exports = router;