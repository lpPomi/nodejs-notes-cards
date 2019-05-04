// to use express server
const express = require ('express');

// Initializations

// create an instance for express
const app = express();

// to define paths e.g. view folder
const path = require('path');

// to use hadlebars html
const exphbs = require('express-handlebars');

// to use the method-override
const methodOverride = require('method-override');

// to use the method-sessions to save the user data through a session
const session = require('express-session');


// Initializations
require('./database');


// Settings for the configurations
app.set('port', process.env.PORT || 3000);

/* define where the view are ... 
   lies under src/ folder
   otherwise default under NOTES-APP
*/

app.set('views', path.join(__dirname, 'views'));

// Server listering
app.listen(app.get('port'), () => {
    console.log('App listening on port: ',app.get('port'));
});

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    
    //usersDir: path.join(app.get('views'), 'users'),
    extname: '.hbs'
  }));

//to use the handlebars hbs engine
app.set('view engine', '.hbs');


/* Middelwware: define functions that are executed before they arrive at
   the backend server or functions that are executed before they arrive at the backend server
*/

// to get data from a formular but only data email, password ... no images or so what
app.use(express.urlencoded({extended: false}));

// we achieved here that the form can send all methods put, delete, get and post
app.use(methodOverride('_method'));

// to authenticate the user in a session
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
  }));


/* routes
   tell the server, that here are the routes
*/ 
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));


/* static files 
   define where is the public folder
   here we can save css files , js files etc.
*/

app.use(express.static(path.join(__dirname, 'public')));