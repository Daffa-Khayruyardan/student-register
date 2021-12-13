// import some npm packages
const express = require('express');
const path = require('path');

// create host port
const PORT = 3000;

// initiate express class 
const app = express();

// use user routes here
const UserRoutes = require('./routes/UserRoute');

// use middleware to post static file
app.use(express.static(path.join(__dirname, '/public')));

// set view engine and views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// import and use user routes
app.use('/', UserRoutes);

// run the web server in port 3000
app.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
