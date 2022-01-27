const express = require('express');
const fs = require('fs')

const Contenedor = require('./class.js');
const contenedor = new Contenedor('productos.json');

const server = express();
const PORT = 8080


server.get('/',  (req, res, ) =>{
    res.send('Bienvenido a mi primer server con express!!')
})

server.get('/productos',  (req, res, ) =>{
    const productos =  contenedor.getAll();
   res.send(productos)
})

server.get('/productoRandom',  (req, res, ) =>{
    const productos = contenedor.getById(Math.floor(Math.random() * (contenedor.getAll().length + 1)));
    res.send(productos)
    
})

server.listen(PORT, () =>{
    console.log(`http//localhost: ${PORT}`)
})

server.on('error', error => console.log('Error en servidor: ', error))