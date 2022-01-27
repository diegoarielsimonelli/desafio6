const Contenedor = require('./class');
const fs = require('fs');
const miContenedor = new Contenedor('./productos.json');

miContenedor.save({nombre:"Empanada de Carne", precio:120, thumbnail:"http://.jpg"})
miContenedor.save({nombre:"Empanada de Pollo", precio:110, thumbnail:"http://.jpg"})
miContenedor.save({nombre:"Empanada de Capresse", precio:105, thumbnail:"http://.jpg"})


miContenedor.getAll()
// miContenedor.deleteById(2)
// miContenedor.getById(1)

