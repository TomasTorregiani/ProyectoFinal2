var pool = require('./bd')

async function getActividades() {
    var query = 'select * from actividades'
    var rows = await pool.query(query)
    return rows
}

module.exports = {getActividades}