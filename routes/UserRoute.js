// import database here
const db = require('../db');

// import some packages for express
const express = require('express');

// init router function 
const router = express.Router();

// make id increment
let id_increment = 0;

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
        title: 'Login',
        head: 'Login',
        data: res
    })
})

router.post('/add', (req,res) => {
    id_increment += 1;
    let data = {id: id_increment, name: req.body.name, email: req.body.email, age: req.body.age, country: req.body.country};
    let query = db.query("INSERT INTO biodata SET ?", data, (err,result) => {
        if(err) throw err;
        res.redirect('/list');
    });
});


// make edit route here
router.get('/edit/:id_user', (req,res) => {
    const id_user = req.params.id_user;
    let query = db.query(`SELECT * FROM biodata where id = ${id_user}`, (err,result) => {
        if(err) throw err;
        res.render('edit', {
            layout: 'layouts/index',
            title: 'edit',
            data: result[0]
        });
    });
});

// make update route here
router.post('/update', (req,res) => {
    let data_user = {};
    let query = db.query("UPDATE biodata SET name'"+req.body.name+"', name'"+req.body.email+"', name'"+req.body.age+"' , name'"+req.body.country+"' WHERE id ='"+id, data, (err,result) => {
        if(err) throw err;
        res.redirect('/list');
    });
});

router.get('/delete/:id_user', (req,res) => {
    const id_user = req.params.id_user;
    let query = db.query(`DELETE from biodata where id = ${id_user}`, (err,result) => {
        if(err) throw err;
        res.redirect('/list');
    });
    id_increment -= 1;
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