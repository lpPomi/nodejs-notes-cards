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

/* requiere is the file Note.js
   so we can use the CRUD methods on this Note constant
   to save the data into mongoDB
   when we create a schema .. we create a class...
   this class mus be intantiated ....

*/
const Note = require('../models/Note');


// define the routes to add a note
router.get('/notes/add', (req, res) => {
  res.render('notes/new-note');
});


/* define the routes to get data e.g. from a form
   and the send this form data to: 
   /notes/new-note 

   and because the process is asynchron ...  we add the word 
   async 
*/
router.post('/notes/new-note' , async (req, res) => {
  // console.log(req.body); 
   
  // get from body the tiitle and the description and store this values in constant  

  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({text: 'Please Write a Title.'});
  }
  if (!description) {
    errors.push({text: 'Please Write a Description'});
  }

  /* if errors exist
     then send the errors to the user in the sdame form
     that means the form new-note will be renderized again 
  */
  if (errors.length > 0) {
    res.render('notes/new-note', {
      errors,
      title,
      description
    });
  } else {
    /* if no errors, then save the data from the form in the mongoDB database
       for this case we need models....
       in the folder src/models create the model file Notes.js
    */

    //res.send('ok');

    // create an instance from class Note (schema)
    const newNote = new Note({title, description});

    //console.log(newNote);

    // await because the asynchron process to store data into mongoDB
    await newNote.save();
    //res.send('ok');

    // redirect the browser to the view notes after save data into mongoDB
    res.redirect('/notes');

  }

});


// define the route notes ....

router.get('/notes', (req, res) => {
    res.send('Notes from database');
  });


// export the router
module.exports = router;