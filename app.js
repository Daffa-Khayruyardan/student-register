// import some npm packages
const express = require('express');
const path = require('path');
const ejsLayout = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const UserRoutes = require('./routes/UserRoute');
const fs = require('fs');

// initiate some variable
const app = express();
const PORT = 3000;

// setup some middleware here
app.use(express.static(path.join(__dirname, '/public')));
app.use(ejsLayout);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

// set view engine and views folder
app.set('view engine', 'ejs');

// import user routes
app.use('/', UserRoutes);
app.use('/ans', UserRoutes);

// run the web server in port 3000
app.listen(3000, () => {
    console.log('server running at http://localhost:3000/home');
});
