const mysql = require('mysql');

const credenciales = {
    host    : 'localhost',
    user    : 'root',
    password: '123456',
    database: 'Moneda'
}

const connection = mysql.createConnection(credenciales);

connection.connect((error)=>{
    if(error){
        console.log('El error de conexion es: '+ error)
        return;
    }
    console.log('Conectado a la base de datos')
})

module.exports = connection;