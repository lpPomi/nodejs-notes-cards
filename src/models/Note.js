const mongoose = require('mongoose');

// we need the schema for mongoDB
const { Schema } = mongoose;

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
  
});

/* so we give the schema to the mongoDB database because
   mongoDB no not know which schema have to be use to store the data
*/
module.exports = mongoose.model('Note', NoteSchema);