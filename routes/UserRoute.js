// import database here
const db = require('../db');

// import some packages for express
const express = require('express');

// init router function 
const router = express.Router();

// make homepage route here
router.get('/home', (req,res) => {
    res.render('home', {
        layout: 'layouts/index',
        title: 'Homepage'
    });
});

// make login route here
router.get('/login', (req,res) => {
    res.render('login', {
        layout: 'layouts/index',
        title: 'Login'
    })
})

router.post('/add', (req,res) => {
    let data = {id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age, country: req.body.country};
    let query = db.query("INSERT INTO biodata SET ?", data, (err,result) => {
        if(err) throw err;
        res.redirect('/');
    });
});

// make list route here
router.get('/list', (req,res) => {
    let query = db.query("SELECT * FROM biodata;", (err,rows) => {
        if(err) throw err;

        res.render('list', {
            layout: 'layouts/index',
            title: 'List',
            data: rows
        })
    });
});

// make about route here
router.get('/about', (req,res) => {
    res.render('about', {
        layout: 'layouts/index',
        title: 'About'
    })
});

// export this module 
module.exports = router;