const Juegos = require('../models/juegosModel');


class juegosController {
  index(req, res) {
    Juegos.obtenerTodos((err, resultados) => {
      if (err) throw err;
      res.render('juegos/index', { juegos: resultados });
    });
  }

  crear(req, res) {
    Juegos.obtenermARCA((err, marca) => {
      if (err) throw err;
      res.render('juegos/crear', { marca });
    });
  }

  guardar(req, res) {
    const datos = req.body;
    Juegos.insertar(datos, (err) => {
      if (err) throw err;
      res.redirect('/juegos');
    });
  }

 

  
}

module.exports = new juegosController();
