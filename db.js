const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'daffa',
    password: 'daffa123',
    database: 'student'
});

connection.connect(err => {
    if(err) {
        console.log(`ERROR: ${err}`);
    }else {
        console.log(`Connected to database`);
    }
});

module.exports = connection;