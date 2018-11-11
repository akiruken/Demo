const mysql = require('mysql');

var db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'TODO:enterServerPassword',
    database: 'boreholemonitordb',
    port:3306,
    insecureAuth: true
});

function connect(){
    db.connect((err)=>{
        if(err){
            console.error('Failed to Connect to DB: ' + err.stack);
            return;
        }
    
        console.log('Succesfully connected to DB as ' + db.threadId);
    });
}

function disconnect(){
    db.end((err)=>{
        console.log('Succesfully closed db connection');
    });
}

module.exports = {
    database: db,
    connect: connect,
    disconnect: disconnect
}


