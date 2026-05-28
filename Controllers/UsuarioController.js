
const Usuario = require('../models/UsuarioModel');

class UsuarioController {
  index(req, res) {
    Usuario.obtenerTodos((err, resultados) => {
      if (err) throw err;
      res.render('usuarios/index', { usuarios: resultados });
    });
  }

  crear(req, res) {
    Usuario.obtenerRoles((err, roles) => {
      if (err) throw err;
      res.render('usuarios/crear', { roles });
    });
  }

  guardar(req, res) {
    const datos = req.body;
    Usuario.insertar(datos, (err) => {
      if (err) throw err;
      res.redirect('/usuarios');
    });
  }

 

  
}

module.exports = new UsuarioController();
