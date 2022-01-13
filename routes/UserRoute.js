// import some packages for express
const express = require('express');

// init router function 
const router = express.Router();

// make homepage route here
router.get('/home', (req,res) => {
    res.render('home', {
        layout: 'layouts/index'
    });
});

// make login route here
router.get('/login', (req,res) => {
    res.render('login', {
        layout: 'layouts/index'
    })
})

// make list route here
router.get('/list', (req,res) => {
    res.render('list', {
        layout: 'layouts/index'
    })
});

// make about route here
router.get('/about', (req,res) => {
    res.render('about', {
        layout: 'layouts/index'
    })
});

// export this module 
module.exports = router;