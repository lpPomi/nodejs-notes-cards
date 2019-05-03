
// to use express server
const express = require ('express');

// Initializations
// create an instance for express
const app = express();


// Settings for the configurations
app.set('port', process.env.PORT || 3000);

// Server listering
app.listen(app.get('port'), () => {
    console.log('App listening on port: ',app.get('port'));
});


// to define paths e.g. view folder
const path = require('path');

// to use hadlebars html
const exphbs = require('express-handlebars');

// to use the method-override
const methodOverride = require('method-override');