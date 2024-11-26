var pool = require('./bd')

async function getProducts(){
    var query = 'select * from productos'
    var rows = await pool.query(query)
    return rows
}

module.exports = {getProducts};



