// import some packages for express
const express = require('express');

// init router function 
const router = express.Router();

// make some router here
router.get('/', (req,res) => {
    res.render('home', {
        layout: 'layouts/index'
    });
});

router.post('/ans', (req,res) => {
    console.log(req.body);
});

// export this module 
module.exports = router;