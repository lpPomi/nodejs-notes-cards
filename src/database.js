// to access the mongoDB
const mongoose = require('mongoose');

// mongoose.set('useFindAndModify', false);


mongoose.connect('mongodb://localhost/notes-db-app', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));