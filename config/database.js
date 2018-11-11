const mysql = require('mysql-model');

module.exports = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'TODO:enterServerPassword',
    database: 'boreholemonitordb'
});