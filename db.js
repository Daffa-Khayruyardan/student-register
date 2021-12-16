const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    use: 'root',
    password: '',
});

async function connectDB() {
    let getPool;

    try {
        console.log('running');
        getPool = await pool.getConnection();

        const show = await getPool.query('show databases');
        console.log(show);
        
    }catch(err) {
        console.log(err);
    }finally {
        console.log('Process run sucessfully');
    }
}

connectDB()