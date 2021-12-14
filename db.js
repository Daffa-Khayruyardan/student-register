const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    use: 'root',
    passwor: 'daffa123',
    connectionLimit: 2
});

