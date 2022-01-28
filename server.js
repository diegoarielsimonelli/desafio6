const express = require('express');
const fs = require('fs')

const Contenedor = require('./class.js');
const contenedor = new Contenedor('./productos.json');

const server = express();
const PORT = 8080


server.get('/',  (req, res, ) =>{
    res.send('Bienvenido a mi primer server con express!!')
})



server.get('/productos', async (req, res) =>{
    const productos = await contenedor.getAll()
    res.send(productos)
})

server.get('/productoRandom', async (req, res) =>{
    const productos = await contenedor.getAll()
    let numeroRandom = Math.round(Math.random() * productos.length)
    res.send(productos[numeroRandom])
})

server.listen(PORT, () =>{
    console.log(`http//localhost: ${PORT}`)
})

server.on('error', error => console.log('Error en servidor: ', error))