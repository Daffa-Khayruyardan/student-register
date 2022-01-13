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

// make list route here
router.get('/list', (req,res) => {
    res.render('list', {
        layout: 'layouts/index',
        title: 'List'
    })
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