const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    use: 'root',
    password: 'justapp',
    database: 'student'
});

async function connectDB() {
    let getPool;

    try {
        console.log('running');
        getPool = await pool.getConnection();
        
    }catch(err) {
        console.log(err);
    }finally {
        console.log('Process run sucessfully');
    }
}

connectDB()