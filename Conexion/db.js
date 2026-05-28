
const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'NuevoSistema'
});

conexion.connect((err) => {
  if (err) throw err;
  console.log('Conexión a la base de datos exitosa');
});

module.exports = conexion;
