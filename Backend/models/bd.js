var mysql = require('mysql')
var util = require('util')

var pool = mysql.createPool({
    connectionLimit: 10,
    host:process.env.MYSQL2_HOST,
    user:process.env.MYSQL2_USER,
    password:process.env.MYSQL2_PASSWORD,
    database:process.env.MYSQL2_DB_NAME
})

pool.query = util.promisify(pool.query)
module.exports = pool;