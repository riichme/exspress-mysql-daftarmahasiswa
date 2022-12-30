const mysql = require('mysql')

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    databases : 'mahasiswa'
})

module.exports = db