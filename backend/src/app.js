const cors = require('cors')
const express = require('express');
const server = express();

server.set('port',8080);
server.set('host','localhost');
//Middlewares
server.use(cors())

server.use(express.json());
server.use('/tiendas', require('./routes/stores.js'));


server.get('*', (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h2>Página no encontrada</h2>")
}) 
module.exports = server;
