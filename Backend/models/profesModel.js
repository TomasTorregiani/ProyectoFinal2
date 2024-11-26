var pool = require('./bd')

async function getProfes() {
    var query = 'select * from profes'
    var rows = await pool.query(query)
    return rows 
} 

async function addStaff(obj) {
    try{
        var query = 'insert into profes set ?'
        var rows = await pool.query(query, [obj])
        return rows

    } catch(error){
        console.log(error);
        throw error
    }
}

async function deleteProfe(id){
    var query = 'delete from profes where id = ?'
    var rows = await pool.query(query, [id])
}

module.exports = {getProfes, addStaff, deleteProfe}
