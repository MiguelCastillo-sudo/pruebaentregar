
const db = require('../db/Conexion');

class juegosModel {
  obtenerTodos(callback) {
    const sql = `
      SELECT j.ID, j.Nombre, j.marca
      FROM juegos j`;

    db.query(sql, callback);
  }

  insertar(datos, callback) {
    db.query('INSERT INTO juegos SET ?', datos, callback);
  }

  obtenerPorID(ID, callback) {
    db.query('SELECT * FROM juegos WHERE ID = ?', [ID], callback);
  }

  obtenermARCA(callback) {
    db.query('SELECT * FROM juegos', callback);
  }
}

module.exports = new juegosModel();
