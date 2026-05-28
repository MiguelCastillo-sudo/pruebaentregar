const Juegos = require('../models/JuegosController');


class juegosController {
  index(req, res) {
    Juegos.obtenerTodos((err, resultados) => {
      if (err) throw err;
      res.render('usuarios/index', { Juegos: resultados });
    });
  }

  crear(req, res) {
    Juegos.obtenermARCA((err, marca) => {
      if (err) throw err;
      res.render('usuarios/crear', { marca });
    });
  }

  guardar(req, res) {
    const datos = req.body;
    Juegos.insertar(datos, (err) => {
      if (err) throw err;
      res.redirect('/usuarios');
    });
  }

 

  
}

module.exports = new juegosController();
